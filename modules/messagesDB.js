const messages = [
    {
        id:1,
        text: "Hi there!",
        user: "Amando",
        added: new Date().toLocaleString('en-US', {
            weekday: 'short', 
            month: 'short', 
            day: '2-digit', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false})
    },
    {
        id:2,
        text: "Hello World!",
        user: "Charles",
        added: new Date().toLocaleString('en-US', {
            weekday: 'short', 
            month: 'short', 
            day: '2-digit', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false})
    }
];

function messageById(messageID){
    return messages.find(message => message.id === messageID);
}
module.exports = {messageById , messages};
