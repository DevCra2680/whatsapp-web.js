const { List } = require('../index');


function ListFactory(options) {
    const { body, buttonText, sections, title, footer } = options;
    return new List(body, buttonText, sections, title, footer);
}



module.exports = {
    ListFactory,
};
