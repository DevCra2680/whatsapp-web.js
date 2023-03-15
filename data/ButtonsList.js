const engineOilLevel = {
    body: 'Nivel de Aceite de Motor',
    buttons: [
        { body: 'Alto', id: '0' },
        { body: 'Bien', id: '1' },
        { body: 'Medio', id: '2' },
        { body: 'Bajo', id: '3' },
    ],
    title: 'Nivel de aceite de motor',
    footer: 'footer',
};

var oilTransmisionLevel = {
    body: '¿Cual es el nivel de aceite del Transmision?',
    buttons: [
        { body: 'Alto', id: '0' },
        { body: 'Bien', id: '1' },
        { body: 'Medio', id: '2' },
        { body: 'Bajo', id: '3' },
    ],
    title: 'Seleccione una opción',
    footer: 'Seleccione una opción',
};

var oilCoolantLevel = {
    body: '¿Cual es el nivel de coolant?',
    buttons: [
        { body: 'Alto', id: '0' },
        { body: 'Bien', id: '1' },
        { body: 'Medio', id: '2' },
        { body: 'Bajo', id: '3' },
    ],
    title: 'Seleccione una opción',
};

var strapsPhysicalState = {
    body: '¿Cual es el Estado de las correas?',
    buttons: [
        { body: 'Buen Estado', id: '0' },
        { body: 'Desgastadas', id: '1' },
        { body: 'Rotas', id: '2' },
    ],
    title: 'Seleccione una opción',
};
var tiresState = {
    body: '¿Cual es el Estado de las gomas?',
    buttons: [
        { body: 'Buen Estado', id: '0' },
        { body: 'Desgastadas', id: '1' },
        { body: 'Rotas', id: '2' },
    ],
    title: 'Seleccione una opción',
};

var spareRubberState = {
    body: '¿Cual es el Estado de la goma de repuesto?',
    buttons: [
        { body: 'Buen Estado', id: '0' },
        { body: 'Desgastadas', id: '1' },
        { body: 'Rota', id: '2' },
        { body: 'No tiene', id: '3' },
    ],
    title: 'Seleccione una opción',
};

var VehicleSwitchAndGauges = {
    body: '¿Esta funcionando correctamente todos interruptores y medidores del vehiculo (Luces, velocimetro, tacometro, etc.)?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};

var securityBellState = {
    body: '¿Cual es el Estado de los Cintures de seguridad?',
    buttons: [
        { body: 'Buen Estado', id: '0' },
        { body: 'Desgastado', id: '1' },
        { body: 'Rota', id: '2' },
        { body: 'No tiene', id: '3' },
    ],
    title: 'Seleccione una opción',
};
var hornState = {
    body: '¿Esta funcionando correctamente la bocina?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};
var fireExtinguisherState = {
    body: '¿Esta funcionando correctamente el extinguidor y esta Sujetado?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};
var hseFirstAidKit = {
    body: '¿Tiene Botiquin ?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};

var hseTriangle = {
    body: '¿Tiene triangulo ?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};

var hseBallLightning = {
    body: '¿Tiene Centella ?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
        { body: 'N/A', id: '2' },
    ],
    title: 'Seleccione una opción',
};

var hseReverseWhistle = {
    body: '¿Tiene Pito de Reversa ?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};
var docEnrolment = {
    body: '¿Tiene Matricula ?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};

var docInsurance = {
    body: '¿Tiene Seguro de vehiculo ?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};

var docLicense = {
    body: '¿Tiene Licencia de conducir ?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};
var OilorGreaseLeak = {
    body: '¿Tiene Fuga de aceite o de grasa ?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};

var jackAndWheelWrench = {
    body: '¿Tiene Gato y llave de rueda?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};

var tightRubberNuts = {
    body: '¿Tiene la Tuercas de gomas apretadas ?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};

var serviceBreakOperating = {
    body: '¿Tiene el freno de servicio/Pedal operando  ?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};

var emergencyBreakOperating = {
    body: '¿Tiene el Freno de emergencia operando?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};

var comment = {
    body: '¿Tienes algun comentario?',
    buttons: [
        { body: 'Si', id: '0' },
        { body: 'No', id: '1' },
    ],
    title: 'Seleccione una opción',
};

module.exports = {
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
};
