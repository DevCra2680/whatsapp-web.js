const client = require('./utils/auth');
const accionar = require('./accionar'); // importamos la libreria // \r\n
var {
    storeChatIdValue,
    chatIdInfo,
    lastAnswerBot,
    lastAnswerUser,
    messageIncoming,
    initialWordsConversationData,
    
} = require('./data/allVariablesFile');

const questions = require('./data/Questions');

client.initialize();

client.on('message', async (msg) => {
    messageIncoming = await msg;
    storeChatIdValue = await accionar.sanitizeNumber(messageIncoming);
    chatIdInfo = await client.getChatById(storeChatIdValue);
    lastAnswerBot = await accionar.getLastMessageFromBot(chatIdInfo);
    lastAnswerUser = await accionar.getLastMessageFromUser(chatIdInfo);
    //chatIdInfo.clearMessages();

    const valuesGreetings = initialWordsConversationData;
    const valuesGreetingsObject = Object.values(valuesGreetings);
    var hasMatchgreetings = valuesGreetingsObject.some((value) =>
        value.greetings.includes(messageIncoming.body)
    );

    const callQuestion = function () {
        questions(
            messageIncoming,
            lastAnswerBot,
            lastAnswerUser,
            hasMatchgreetings,
            chatIdInfo,
            
            
        );
    };
    callQuestion();
});
