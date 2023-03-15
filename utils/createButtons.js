const { Buttons } = require('../index');

function buttonsFactory(options) {
    const { body, buttons, title, footer, templateOverride = false } = options;
    return new Buttons(body, buttons, title, footer, templateOverride);
}



module.exports = {
    buttonsFactory,
};

