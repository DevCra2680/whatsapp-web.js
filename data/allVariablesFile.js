// 👷‍♀️👷‍♂️ Hola *${messageIncoming._data.notifyName}*,
// 👷‍♀️👷‍♂️ Hola *${messageIncoming._data.notifyName}*,
const { List } = require('../index');
const enviroment = require('../utils/environment');
var messageIncoming;
const getNameFromMessage = {
    notifyName: 'user',
};
const initialWordsConversationData = require('./initialWordsConversation.json');
var lastAnswerUser;
var lastAnswerBot;
var menu1 = `
        👷‍♀️👷‍♂️ Hola *${getNameFromMessage.notifyName}*
        *Lea atentamente lo que se le pide en cada opción y responda adecuadamente.*

        Indique la opción a realizar:

        1️⃣ - *Registro de Horometro/Odometro.* 🚘/🚜

        2️⃣ - *Registro de CheckList.* 📝/🚜

        3️⃣ - En Desarrollo.🔧...

        `;

var menu2 = `
        👷‍♀️👷‍♂️ Hola *${getNameFromMessage.notifyName}*
        *Lea atentamente lo que se le pide en cada opción y responda adecuadamente.*

        Indique la opción a realizar:

        1️⃣ - *Formulario de vehiculo Liviano.* 🚘/🚜

        2️⃣ - *En Desarrollo.* 📝/🚜

        3️⃣ - En Desarrollo.🔧...

        `;

var vehicleList = [
    {
        title: 'Section title',
        rows: [
            { title: 'ListItem1', description: 'desc' },
            { title: 'Try clicking me (id: test)', id: 'test' },
        ],
    },
];
let vehicleListSection = new List(
    'List body',
    'btnText',
    vehicleList,
    'Custom title',
    'custom footer, google.com'
);

var askfichaMessage = `Favor de indicar la Ficha Con Guiones.
             Como por ejemplo: 
             *VL-M45*`;
var askCounterOdometer = `Favor de indicar 
               *Horometro/Odometro.*`;
var askCounterOdometerMenu2 = `Favor de indicar 
               *Horometro/Odometro..*`;
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

var fixValidatorOdometerMenu2 = `
            *👀Lea atentamente lo que se le pide en cada opción y responda adecuadamente.👀*

            ❌Favor verificar su Odometro nuevamente, asegurese de que su Odometro cumpla con lo siguiente:  
            - Solo debe contener números.
            - Los unidad de miles puede separarse con coma.
            - El separador de decimal es el "." (Punto).
            - No enviar mensajes en blanco.
            - Que no tenga espacios delante ni detras.
            - No debe colocar ni enviar emojis.
            - No especifique la unidad si es Kilometraje o Milla.-
            ❌`;

var urlPowerautomate = enviroment.default.URL_POWERAUTOMATE;
var urlVehiculosLivianos = enviroment.default.URL_VEHICULOS_LIVIANOS;
var storeChatIdValue;
var chatIdInfo;
var commentsDailyInspectionReport;
var fichaData;
var projectData;
var engineOilLeveData;
var oilTransmisionLevelData;
var oilCoolantLevelData;
var strapsPhysicalStateData;
var tiresStateData;
var spareRubberStateData;
var VehicleSwitchAndGaugesData;
var securityBellStateData;
var hornStateData;
var fireExtinguisherStateData;
var hseFirstAidKitData;
var hseTriangleData;
var hseBallLightningData;
var hseReverseWhistleData;
var docEnrolmentData;
var docInsuranceData;
var docLicenseData;
var OilorGreaseLeakData;
var jackAndWheelWrenchData;
var tightRubberNutsData;
var serviceBreakOperatingData;
var emergencyBreakOperatingData;
var commentData;
var phoneNumberData;
var nameData;

module.exports = {
    vehicleList,
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
    messageIncoming,
    storeChatIdValue,
    chatIdInfo,
    lastAnswerUser,
    lastAnswerBot,
    initialWordsConversationData,
    getNameFromMessage,
    vehicleListSection,
    commentsDailyInspectionReport,
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
    nameData,
    phoneNumberData,
    fixValidatorOdometerMenu2,
    askCounterOdometerMenu2,
};
