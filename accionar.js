/* eslint-disable linebreak-style */
const {   Chat } = require('./index');


async function getLastMessageFromBot(chatId) {
    try {
        let asociar = [];
        let privatechatFromBot;
        privatechatFromBot = new Chat();
        const searchOptions = {
            limit: 2,
            fromMe: true,
        };
        privatechatFromBot = chatId;
        const conversationMsgsFromBot = await privatechatFromBot.fetchMessages(searchOptions);
        asociar = conversationMsgsFromBot;
        let LastTimeStampMessageNumber = Math.max.apply(Math, asociar.map(function (o) { return o.timestamp; }));
        let lastMessagefromTimestamp = asociar.filter((x) => x.timestamp == LastTimeStampMessageNumber);
             
   
        return  lastMessagefromTimestamp;
    } catch (e) {
        return console.error(e);
    }
}
async function getLastMessageFromUser(chatId) {
    try {
        let asociar = [];
        let privatechatFromUser = new Chat();
        const searchOptions = {
            fromMe: false,
            limit: 2,
        };
        privatechatFromUser = chatId;
        const conversationMsgsFromUser = await privatechatFromUser.fetchMessages(searchOptions);
        asociar = conversationMsgsFromUser;
        return  asociar;

    } catch (e) {
        return console.error(e);
    }
}
async function deliveryMessageStatus(msg) {
    let estadoMensaje = await msg.getInfo();
    while (estadoMensaje.deliveryRemaining != '0') {
        estadoMensaje = await msg.getInfo();
        console.log('Mensaje no entregado');
    }
    return true;
}
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}
async function sanitizeNumber(msg) {
    let chatId = msg.from;
    let sanitized_number = chatId.toString().replace(/[- )(]/g, ''); // remove unnecessary chars from the number
    let number = sanitized_number;
    return number;
}

function timerDelay(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
module.exports = {
    getLastMessageFromUser: getLastMessageFromUser,
    getLastMessageFromBot: getLastMessageFromBot,
    deliveryMessageStatus: deliveryMessageStatus,
    isEmptyObject: isEmptyObject,
    sanitizeNumber: sanitizeNumber,
    timerDelay: timerDelay,
};
