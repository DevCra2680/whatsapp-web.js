const projectsJson = require('./projects.json');
const jsonFicha = require('./vehiclelist.json');
const { List } = require('../index'); // importamos la libreria // \r\n


var ProjectListSection = [
    {
        title: 'Listado de fichas',
        rows: projectsJson,
    },
];

var ListProject = {
    body: 'Seleccione un proyecto.',
    buttonText: 'Ver todos los proyectos',
    sections: ProjectListSection,
    title: 'Lista de proyectos',
    footer: 'Por favor seleccione un proyecto',
};


var vehicleListJson = [
    {
        title: 'Listado de fichas',
        rows: jsonFicha,
    },
];

var vehicleListMenu1 = new List(
    'Lista de vehiculos livianos',
    'Ver todas las fichas',
    vehicleListJson,
    'Por favor seleccione una ficha'
);

var vehicleListMenu2 = new List(
    'Listado de vehiculos livianos',
    'Ver todas las fichas',
    vehicleListJson,
    'Por favor seleccione una ficha'
);

module.exports = {
    ListProject,
    vehicleListMenu1,
    vehicleListMenu2
};
