const {messages } = require('../modules/messagesDB');
//show the index get requiest
const DB = require('../modules/messagesDB')

exports.showIndex = async (req,res)=>{
    res.render('index' , {messages});
}

//show the create message page get requiest

exports.showCreateMessage = async (req,res)=>{
    res.render('message');
}

//post requiest for the create message
let id =2
exports.postCreateMessage = async (req,res)=>{
    console.log("🔵 Received POST request!");
    console.log("🔵 Request body:", req.body); 
    id++;
    const {user , text} = req.body
    const date = new Date().toLocaleString('en-US', {
        weekday: 'short', 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false})
    messages.push({ id , text , user , added: date});
    res.redirect("/");
    console.log(messages);
}

exports.showDetails = (req,res)=>{
    const messageId = parseInt(req.params.messageID,10);
    const message = DB.messageById(messageId);
    res.render('details', {message});
}

exports.showWrongRoute = async (req,res)=>{
    res.status(404).render('404');
}