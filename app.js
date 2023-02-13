/* eslint-disable linebreak-style */
const { Client, LocalAuth } = require('./index'); // \r\n importamos la libreria
const qrcode = require('qrcode-terminal'); // importamos la libreria // \r\n
const accionar = require('./accionar'); // importamos la libreria // \r\n
const posdata = require('./postData'); // importamos la libreria // \r\n
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true,
                 executablePath: '/bin/chromium-browser',
                 args: ['--no-sandbox'],
               },
});

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('QR RECEIVED', `'${qr}'`);
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.on('auth_failure', (msg) => {
    // Fired if session restore was unsuccessful
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

var askfichaMessage = `Favor de indicar la Ficha Con Guiones.
             Como por ejemplo: 
             *VL-M45*`;
var askCounterOdometer = `Favor de indicar 
               *Horometro/Odometro.*`;
var regficha;
var regOdometro;
var messageRegDataConfirm = '🚀Procesando los datos...';
var fixValidatorFicha = `
            *👀Lea atentamente lo que se le pide en cada opción y responda adecuadamente.👀*

            ❌Favor verificar su ficha nuevamente, asegurese de que su ficha cumpla con lo siguiente:  
            - Formato VL-M43.
            - Que contenga guiones.
            - Que contenga 6 caracteres.
            - Que contenga numeros y letras.
            - Que no tenga espacios delante ni detras.
            - No enviar mensajes en blanco.
            - No debe colocar ni enviar emojis.❌`;

var fixValidatorOdometer = `
            *👀Lea atentamente lo que se le pide en cada opción y responda adecuadamente.👀*

            ❌Favor verificar su Odometro nuevamente, asegurese de que su Odometro cumpla con lo siguiente:  
            - Solo debe contener números.
            - Los unidad de miles puede separarse con coma.
            - El separador de decimal es el "." (Punto).
            - No enviar mensajes en blanco.
            - Que no tenga espacios delante ni detras.
            - No debe colocar ni enviar emojis.
            - No especifique la unidad si es Kilometraje o Milla.
            ❌`;


var urlPowerautomate =
  'https://prod-93.westus.logic.azure.com:443/workflows/d9f08a8dc01d48fe994631b08ea80db6/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=r9iB23oBpcLglT1lo6lZCgHnl_OX2nqfHH6tyTr2Cu8';

// On create message

client.initialize();

client.on('message_create', async (msg) => {
    var messageIncoming = await msg;
    var numberFrom = messageIncoming.from;
    var lastAnswerBot = [];
    var lastAnswerUser = [];
    numberFrom = numberFrom.replace(/\D/g, '');
    var storeChatIdValue = await accionar.sanitizeNumber(messageIncoming);
    var chatIdInfo = await client.getChatById(storeChatIdValue);
    lastAnswerBot = await accionar.getLastMessageFromBot(chatIdInfo);
    lastAnswerUser = await accionar.getLastMessageFromUser(chatIdInfo);
    //chatIdInfo.clearMessages();

    var menuOptions = `
👷‍♀️👷‍♂️ Hola *${messageIncoming._data.notifyName}*,
*Lea atentamente lo que se le pide en cada opción y responda adecuadamente.*

Indique la opción a realizar:

 1️⃣ - *Registro de Horometro/Odometro.*🚘/🚜
 2️⃣ - En Desarrollo.🔧...
 3️⃣ - En Desarrollo.🔧...

  `;
    console.log('respuesta usuario', lastAnswerUser.length);
    console.log('respuesta Bot', lastAnswerBot.length);

    if (messageIncoming.fromMe) {
        // Determinar de remitente de mensaje.
        if (
            lastAnswerBot.length === 0
        ) {
            return client.sendMessage(msg.from, menuOptions);
        }

        if (
            lastAnswerBot[0].body == menuOptions
        ) {
            return console.log('El bot envio el menu el usuario debe responder para su captura');
        }
        if (
            lastAnswerBot[0].body == fixValidatorFicha || lastAnswerBot[0].body == askfichaMessage
        ) {
            return console.log('El bot envio la ficha el usuario debe responder para su captura');
        }
        if (
            lastAnswerBot[0].body == fixValidatorOdometer || lastAnswerBot[0].body == askCounterOdometer
        ) {
            return console.log('El bot envio la Horometro/Odometro el usuario debe responder para su captura');
        }
    } else {
        if (
            lastAnswerBot.length === 0
        ) {
            return client.sendMessage(msg.from, menuOptions);
        }
        if (
            messageIncoming.body == 'Hola' ||
            messageIncoming.body == 'hola' ||
            messageIncoming.body == 'klk' ||
            messageIncoming.body == 'hola ' ||
            messageIncoming.body == 'Hola ' ||
            messageIncoming.body == 'Hola' ||
            messageIncoming.body == 'HOLA' ||
            messageIncoming.body == 'HOLA ' ||
            messageIncoming.body == 'klk ' ||
            messageIncoming.body == 'Klk' ||
            messageIncoming.body == 'Klk '
        ) {
            return client.sendMessage(msg.from, menuOptions);
        }

        if (
            messageIncoming.body == '1R' ||
            messageIncoming.body == '1r' ||
            messageIncoming.body == '1' &&
            lastAnswerBot[0].body == menuOptions
        ) {
            // Selección en el menu
            return client.sendMessage(msg.from, askfichaMessage);
        }

        if (lastAnswerBot[0].body == askfichaMessage ||
            lastAnswerBot[0].body == fixValidatorFicha
        ) {
            // Captura respuesta de la  ficha  usuario
            regficha = messageIncoming.body;

            if (
                (/[a-zA-Z]/).test(regficha) == true &&
                (/[0-9]/).test(regficha) == true &&
                 regficha.length == 6 &&
                (/[-]/).test(regficha) == true
            )
            {
                // validar condición de ficha 2
                regficha.toUpperCase();
                regficha.trim();
                
            }
            else
            {
                console.log(messageIncoming.body, 'Valor de body en 0 ');
                return client.sendMessage(msg.from, fixValidatorFicha);
            }

            return client.sendMessage(msg.from, askCounterOdometer);
        }

        if (lastAnswerBot[0].body == askCounterOdometer
            ||
            lastAnswerBot[0].body == fixValidatorOdometer
        )

        {
            /// Captura de respuesta de Odometro/Horometro de usuario.
            regOdometro = messageIncoming.body;
            if ((/[a-zA-Z]/).test(regOdometro)) {
                return client.sendMessage(msg.from, fixValidatorOdometer);
            }
            regOdometro = regOdometro.replace(/[^0-9.]+/g, ''); //Allow number incluid floating number
            client.sendMessage(msg.from, messageRegDataConfirm);

            let data = {
                name: messageIncoming._data.notifyName,
                Ficha: regficha,
                Numero: numberFrom,
                Horometro: regOdometro,
            };

            posdata.postData(urlPowerautomate, data).then((data) => {
                console.log(data);
                if (data.ok) {
                    // Send message en clear chat
                    client.sendMessage(
                        msg.from,
                        '✅ Datos Enviados correctamente a la base de datos.'
                    );
                    client.sendMessage(
                        msg.from,
                        `👍 *${messageIncoming._data.notifyName}* Se envió la Ficha: *${regficha}* y el Odometro/Horometro: *${regOdometro}*`
                    );
                    return client
                        .sendMessage(
                            msg.from,
                            `🛠 Cualquier inconveniente favor de enviarnos un ticket a *soporte@constructorarizek.com* o llamarnos al *_809-372-2680_* EXT: *_231_*.
                                    ✏ Escribe *Hola* para iniciar el *Bot*`
                        )
                        .then(chatIdInfo.delete());
                }
            });
        }

   


    }
});

client.on('change_state', (state) => {
    console.log('CHANGE STATE', state);
});

client.on('disconnected', (reason) => {
    console.log('Client was logged out', reason);
});
