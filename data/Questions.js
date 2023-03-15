const client = require('../utils/auth');
const {
    ListProject,
    vehicleListMenu1,
    vehicleListMenu2,
} = require('../data/Lists');
const posdata = require('../utils/postData'); // importamos la libreria // \r\n
const { ListFactory } = require('../utils/createList');
var regFicha;
var {
    askfichaMessage,
    askCounterOdometer,
    regficha,
    regOdometro,
    messageRegDataConfirm,
    fixValidatorFicha,
    fixValidatorOdometer,
    urlPowerautomate,
    menu1,
    menu2,
    fichaData,
    projectData,
    engineOilLeveData,
    oilTransmisionLevelData,
    oilCoolantLevelData,
    strapsPhysicalStateData,
    tiresStateData,
    spareRubberStateData,
    VehicleSwitchAndGaugesData,
    securityBellStateData,
    hornStateData,
    fireExtinguisherStateData,
    hseFirstAidKitData,
    hseTriangleData,
    hseBallLightningData,
    hseReverseWhistleData,
    docEnrolmentData,
    docInsuranceData,
    docLicenseData,
    OilorGreaseLeakData,
    jackAndWheelWrenchData,
    tightRubberNutsData,
    serviceBreakOperatingData,
    emergencyBreakOperatingData,
    commentData,
    urlVehiculosLivianos,
    phoneNumberData,
    nameData,
    fixValidatorOdometerMenu2,
    askCounterOdometerMenu2,
} = require('../data/allVariablesFile');

const { getNameFromMessage } = require('../data/allVariablesFile');

const {
    engineOilLevel,
    oilTransmisionLevel,
    oilCoolantLevel,
    strapsPhysicalState,
    tiresState,
    spareRubberState,
    VehicleSwitchAndGauges,
    securityBellState,
    hornState,
    fireExtinguisherState,
    hseFirstAidKit,
    hseTriangle,
    hseBallLightning,
    hseReverseWhistle,
    docEnrolment,
    docInsurance,
    docLicense,
    OilorGreaseLeak,
    jackAndWheelWrench,
    tightRubberNuts,
    serviceBreakOperating,
    emergencyBreakOperating,
    comment,
} = require('./ButtonsList');
const { buttonsFactory } = require('../utils/createButtons');

const question = async function (
    messageIncoming,
    lastAnswerBot,
    lastAnswerUser,
    hasMatchgreetings,
    chatIdInfo
) {
    getNameFromMessage.notifyName = messageIncoming._data.notifyName;

    if (messageIncoming.fromMe) {
        // Determinar de remitente de mensaje del usuario
        if (lastAnswerBot.length === 0) {
            return client.sendMessage(messageIncoming.from, menu1);
        }
    } else {
        if (lastAnswerBot.length === 0) {
            return client.sendMessage(messageIncoming.from, menu1);
        }
        if (hasMatchgreetings) {
            return client.sendMessage(messageIncoming.from, menu1);
        }

        if (messageIncoming.body == '1' && lastAnswerBot[0].body == menu1) {
            // Selección en el menu
            return client.sendMessage(messageIncoming.from, vehicleListMenu1);
        }
        if (messageIncoming.body == '2' && lastAnswerBot[0].body == menu1) {
            // Selección en el menu

            return client.sendMessage(messageIncoming.from, menu2);
        }
        // eslint-disable-next-line no-undef
        if (messageIncoming.body == '2' && lastAnswerBot[0].body == menu1) {
            // Selección en el menu

            return client.sendMessage(messageIncoming.from, menu2);
        }
        if (messageIncoming.body == '1' && lastAnswerBot[0].body == menu2) {
            return client.sendMessage(messageIncoming.from, vehicleListMenu2);

            // Ask for questionary answer
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'list_response' &&
            lastAnswerBot[0].type == 'list' &&
            lastAnswerBot[0].body == 'Listado de vehiculos livianos'
        ) {
            fichaData = messageIncoming.body;
            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                ListFactory(ListProject)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'list_response' &&
            lastAnswerBot[0].type == 'list' &&
            lastAnswerBot[0].body == 'Seleccione un proyecto.'
        ) {
            projectData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                askCounterOdometerMenu2
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            lastAnswerBot[0].body == askCounterOdometerMenu2
        ) {
            /// Captura de respuesta de Odometro/Horometro de usuario.
            regOdometro = messageIncoming.body;
            if (/[a-zA-Z]/.test(regOdometro)) {
                return client.sendMessage(
                    messageIncoming.from,
                    fixValidatorOdometerMenu2
                );
            }
            regOdometro = regOdometro.replace(/[^0-9.]+/g, ''); //Allow number incluid floating number
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(engineOilLevel)
            );
        }
        if (
            lastAnswerBot.length != 0 &&
            lastAnswerBot[0].body == fixValidatorOdometerMenu2
        ) {
            /// Captura de respuesta de Odometro/Horometro de usuario.
            regOdometro = messageIncoming.body;
            if (/[a-zA-Z]/.test(regOdometro)) {
                return client.sendMessage(
                    messageIncoming.from,
                    fixValidatorOdometerMenu2
                );
            }
            regOdometro = regOdometro.replace(/[^0-9.]+/g, ''); //Allow number incluid floating number
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(engineOilLevel)
            );
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].body == engineOilLevel.body
        ) {
            engineOilLeveData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(oilTransmisionLevel)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].body == oilTransmisionLevel.body
        ) {
            oilTransmisionLevelData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(oilCoolantLevel)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].body == oilCoolantLevel.body
        ) {
            oilCoolantLevelData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(strapsPhysicalState)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].body == strapsPhysicalState.body
        ) {
            strapsPhysicalStateData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(tiresState)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].body == tiresState.body
        ) {
            tiresStateData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(spareRubberState)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].body == spareRubberState.body
        ) {
            spareRubberStateData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(VehicleSwitchAndGauges)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].body == VehicleSwitchAndGauges.body
        ) {
            VehicleSwitchAndGaugesData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(securityBellState)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == securityBellState.body
        ) {
            securityBellStateData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(hornState)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == hornState.body
        ) {
            hornStateData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(fireExtinguisherState)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == fireExtinguisherState.body
        ) {
            fireExtinguisherStateData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(hseFirstAidKit)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == hseFirstAidKit.body
        ) {
            hseFirstAidKitData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(hseTriangle)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == hseTriangle.body
        ) {
            hseTriangleData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(hseBallLightning)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == hseBallLightning.body
        ) {
            hseBallLightningData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(hseReverseWhistle)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == hseReverseWhistle.body
        ) {
            hseReverseWhistleData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(docEnrolment)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == docEnrolment.body
        ) {
            docEnrolmentData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(docInsurance)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == docInsurance.body
        ) {
            docInsuranceData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(docLicense)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == docLicense.body
        ) {
            docLicenseData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(OilorGreaseLeak)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == OilorGreaseLeak.body
        ) {
            OilorGreaseLeakData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(jackAndWheelWrench)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == jackAndWheelWrench.body
        ) {
            jackAndWheelWrenchData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(tightRubberNuts)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == tightRubberNuts.body
        ) {
            tightRubberNutsData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(serviceBreakOperating)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == serviceBreakOperating.body
        ) {
            serviceBreakOperatingData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(emergencyBreakOperating)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }
        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == emergencyBreakOperating.body
        ) {
            emergencyBreakOperatingData = messageIncoming.body;

            // Selección en el menu
            return client.sendMessage(
                messageIncoming.from,
                buttonsFactory(comment)
            );
            // return client.sendMessage(`You've selected ${regFicha}`);
        }

        if (
            lastAnswerBot.length != 0 &&
            messageIncoming.type == 'buttons_response' &&
            lastAnswerBot[0].type == 'chat' &&
            lastAnswerBot[0].body == comment.body
        ) {
   
            if (messageIncoming.type == 'buttons_response' && messageIncoming.body == 'No' || messageIncoming.body == 'no' ) 
            {
                client.sendMessage(
                    messageIncoming.from,
                    'Se procedera a enviar la información'
                );

                let data = {
                    fichaData: fichaData,
                    projectData: projectData,
                    regOdometro: regOdometro,
                    engineOilLeveData: engineOilLeveData,
                    oilTransmisionLevelData: oilTransmisionLevelData,
                    oilCoolantLevelData: oilCoolantLevelData,
                    strapsPhysicalStateData: strapsPhysicalStateData,
                    tiresStateData: tiresStateData,
                    spareRubberStateData: spareRubberStateData,
                    VehicleSwitchAndGaugesData: VehicleSwitchAndGaugesData,
                    securityBellStateData: securityBellStateData,
                    hornStateData: hornStateData,
                    fireExtinguisherStateData: fireExtinguisherStateData,
                    hseFirstAidKitData: hseFirstAidKitData,
                    hseTriangleData: hseTriangleData,
                    hseBallLightningData: hseBallLightningData,
                    hseReverseWhistleData: hseReverseWhistleData,
                    docEnrolmentData: docEnrolmentData,
                    docInsuranceData: docInsuranceData,
                    docLicenseData: docLicenseData,
                    OilorGreaseLeakData: OilorGreaseLeakData,
                    jackAndWheelWrenchData: jackAndWheelWrenchData,
                    tightRubberNutsData: tightRubberNutsData,
                    serviceBreakOperatingData: serviceBreakOperatingData,
                    emergencyBreakOperatingData: emergencyBreakOperatingData,
                    commentData: 'No hay comentarios',
                    phoneNumberData: await messageIncoming.from,
                    nameData: await messageIncoming._data.notifyName,
                };

                console.log(data);
                posdata.postData(urlVehiculosLivianos, data).then((data) => {
                    if (data.ok) {
                        // Send message en clear chat
                        client.sendMessage(
                            messageIncoming.from,
                            '✅ Datos Enviados correctamente a la base de datos.'
                        );
                        client.sendMessage(
                            messageIncoming.from,
                            `👍 *${messageIncoming._data.notifyName}* Se enviaron los datos:
                            Ficha:
                             *${fichaData}*
                            Proyecto:
                             *${projectData}*
                            Odometro/Kilometraje:
                             *${regOdometro}*
                            Nivel de aceite de motor:
                             *${engineOilLeveData}*
                            nivel de aceite de transmision:
                             *${oilTransmisionLevelData}*
                            Nivel de collant:
                             *${oilCoolantLevelData}*
                            Estado de correas:
                             *${strapsPhysicalStateData}*
                            Estado de gomas:
                             *${tiresStateData}*
                            Estado de gome de respuesto:
                             *${spareRubberStateData}*
                            Estado de Switch y Gauges:
                             *${VehicleSwitchAndGaugesData}*
                            Estado de contiron de seguridad:
                             *${securityBellStateData}*
                            Estado de Bocina:
                             *${hornStateData}*
                            Estado de extinguidor:
                             *${fireExtinguisherStateData}*
                            Tiene  kit de emercgencia:
                             *${hseFirstAidKitData}*
                            Tiene Triangulo:
                             *${hseTriangleData}*
                            Tiene centella:
                             *${hseBallLightningData}*
                            Pite de Reversa:
                             *${hseReverseWhistleData}*
                            Matricula:
                             *${docEnrolmentData}*
                            Seguro:
                             *${docInsuranceData}*
                            Licencia de conducir:
                             *${docLicenseData}*
                            Fugas de aceite o grasa:
                             *${OilorGreaseLeakData}*
                            Llave de gato y rueda:
                             *${jackAndWheelWrenchData}*
                            LLave de tuerca de gomas:
                             *${tightRubberNutsData}*
                            Freno de Pedal:
                             *${serviceBreakOperatingData}*
                            Freno de Emergencia:
                             *${emergencyBreakOperatingData}*
                            Comentario:
                             *${data.commentData}*
                             Nombre:
                             *${messageIncoming._data.notifyName}*,
                            Numero:
                             *${messageIncoming.from}*,
                            
                            `
                        );
                        return client
                            .sendMessage(
                                messageIncoming.from,
                                `🛠 Cualquier inconveniente favor de enviarnos un ticket a *soporte@constructorarizek.com* o llamarnos al *_809-372-2680_* EXT: *_231_*.
                            ✏ Escribe *Hola* para iniciar el *Bot*`
                            )
                            .then(chatIdInfo.delete());
                    }
                });

            }


            return client.sendMessage(
                messageIncoming.from,
                'Por favor indique su comentario'
            );
             
            
        }
            
    }
            

    if (
        lastAnswerBot.length != 0 &&
                lastAnswerBot[0].body == 'Por favor indique su comentario')
    {
        commentData = messageIncoming.body;

        let data = {
            fichaData: fichaData,
            projectData: projectData,
            regOdometro: regOdometro,
            engineOilLeveData: engineOilLeveData,
            oilTransmisionLevelData: oilTransmisionLevelData,
            oilCoolantLevelData: oilCoolantLevelData,
            strapsPhysicalStateData: strapsPhysicalStateData,
            tiresStateData: tiresStateData,
            spareRubberStateData: spareRubberStateData,
            VehicleSwitchAndGaugesData: VehicleSwitchAndGaugesData,
            securityBellStateData: securityBellStateData,
            hornStateData: hornStateData,
            fireExtinguisherStateData: fireExtinguisherStateData,
            hseFirstAidKitData: hseFirstAidKitData,
            hseTriangleData: hseTriangleData,
            hseBallLightningData: hseBallLightningData,
            hseReverseWhistleData: hseReverseWhistleData,
            docEnrolmentData: docEnrolmentData,
            docInsuranceData: docInsuranceData,
            docLicenseData: docLicenseData,
            OilorGreaseLeakData: OilorGreaseLeakData,
            jackAndWheelWrenchData: jackAndWheelWrenchData,
            tightRubberNutsData: tightRubberNutsData,
            serviceBreakOperatingData: serviceBreakOperatingData,
            emergencyBreakOperatingData: emergencyBreakOperatingData,
            commentData: commentData,
            phoneNumberData: await messageIncoming.from,
            nameData: await messageIncoming._data.notifyName,
        };
        posdata.postData(urlVehiculosLivianos, data).then((data) => {
            console.log(data);
            if (data.ok) {
                // Send message en clear chat
                client.sendMessage(
                    messageIncoming.from,
                    '✅ Datos Enviados correctamente a la base de datos.'
                );
                client.sendMessage(
                    messageIncoming.from,
                    `👍 *${messageIncoming._data.notifyName}* Se enviaron los datos:
                            Ficha:
                             *${fichaData}*
                            Proyecto:
                             *${projectData}*
                             Odometro/Kilometraje:
                             *${regOdometro}*
                            Nivel de aceite de motor:
                             *${engineOilLeveData}*
                            nivel de aceite de transmision:
                             *${oilTransmisionLevelData}*
                            Nivel de collant:
                             *${oilCoolantLevelData}*
                            Estado de correas:
                             *${strapsPhysicalStateData}*
                            Estado de gomas:
                             *${tiresStateData}*
                            Estado de gome de respuesto:
                             *${spareRubberStateData}*
                            Estado de Switch y Gauges:
                             *${VehicleSwitchAndGaugesData}*
                            Estado de contiron de seguridad:
                             *${securityBellStateData}*
                            Estado de Bocina:
                             *${hornStateData}*
                            Estado de extinguidor:
                             *${fireExtinguisherStateData}*
                            Tiene  kit de emercgencia:
                             *${hseFirstAidKitData}*
                            Tiene Triangulo:
                             *${hseTriangleData}*
                            Tiene Centella:
                             *${hseBallLightningData}*
                            Pite de Reversa:
                             *${hseReverseWhistleData}*
                            Matricula:
                             *${docEnrolmentData}*
                            Seguro:
                             *${docInsuranceData}*
                            Licencia de conducir:
                             *${docLicenseData}*
                            Fugas de aceite o grasa:
                             *${OilorGreaseLeakData}*
                            Llave de gato y rueda:
                             *${jackAndWheelWrenchData}*
                            LLave de tuerca de gomas:
                             *${tightRubberNutsData}*
                            Freno de Pedal:
                             *${serviceBreakOperatingData}*
                            Freno de Emergencia:
                             *${emergencyBreakOperatingData}*
                            Comentario:
                             *${commentData}*
                            Nombre:
                             *${messageIncoming._data.notifyName}*,
                            Numero:
                             *${messageIncoming.from}*,
                            `
                );
                return client
                    .sendMessage(
                        messageIncoming.from,
                        `🛠 Cualquier inconveniente favor de enviarnos un ticket a *soporte@constructorarizek.com* o llamarnos al *_809-372-2680_* EXT: *_231_*.
                                    ✏ Escribe *Hola* para iniciar el *Bot*`
                    )
                    .then(chatIdInfo.delete());
            }
        });

        console.log(data);

        return client.sendMessage(
            messageIncoming.from,
            'Gracias por su comentarios, su reporte ha sido enviado'
        );
    }
    if (
        messageIncoming.body == 'No' ||
                (messageIncoming.body == 'no' &&
                    lastAnswerBot.length != 0 &&
                    lastAnswerBot[0].type == 'chat' &&
                    lastAnswerBot[0].body == 'Por favor indique su comentario')
    ) {
        return client.sendMessage(
            messageIncoming.from,
            'Su reporte ha sido enviado'
        );
    }

    if (
        lastAnswerBot.length != 0 &&
                messageIncoming.type == 'list_response' &&
                lastAnswerBot[0].type == 'list' &&
                lastAnswerBot[0].body == 'Lista de vehiculos livianos'
    ) {
        // Captura respuesta de la  ficha  usuario
        regficha = messageIncoming.body;

        return client.sendMessage(messageIncoming.from, askCounterOdometer);
    }

    if (
        lastAnswerBot[0].body == askCounterOdometer ||
                lastAnswerBot[0].body == fixValidatorOdometer
    ) {
        /// Captura de respuesta de Datos de usuario.
        regOdometro = messageIncoming.body;
        if (/[a-zA-Z]/.test(regOdometro)) {
            return client.sendMessage(
                messageIncoming.from,
                fixValidatorOdometer
            );
        }
        regOdometro = regOdometro.replace(/[^0-9.]+/g, ''); //Allow number incluid floating number
        client.sendMessage(messageIncoming.from, messageRegDataConfirm);

        let data = {
            name: messageIncoming._data.notifyName,
            Ficha: regficha,
            Numero: messageIncoming.numberFrom,
            Horometro: regOdometro,
        };

        posdata.postData(urlPowerautomate, data).then((data) => {
            console.log(data);
            if (data.ok) {
                // Send message en clear chat
                client.sendMessage(
                    messageIncoming.from,
                    '✅ Datos Enviados correctamente a la base de datos.'
                );
                client.sendMessage(
                    messageIncoming.from,
                    `👍 *${messageIncoming._data.notifyName}* Se envió la Ficha: *${regficha}* y el Datos: *${regOdometro}*`
                );
                return client
                    .sendMessage(
                        messageIncoming.from,
                        `🛠 Cualquier inconveniente favor de enviarnos un ticket a *soporte@constructorarizek.com* o llamarnos al *_809-372-2680_* EXT: *_231_*.
                                    ✏ Escribe *Hola* para iniciar el *Bot*`
                    )
                    .then(chatIdInfo.delete());
            }
        });
    }
};



module.exports = question;
