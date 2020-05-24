const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('ready', () =>{
    console.log('Så er Xenos oppe at køre!')
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "┏│welcome");
    if(!channel) return;

    channel.send(`Nice to see you ${member}, we hope you will enjoy your stay at **"「Xenon」Mod Menu"**!`)
})

bot.on('message', msg=>{
    if (msg.content === "!trust") {
        msg.reply('Currrently we have no registered bans')
    }
})

bot.on("message", msg => {
    //console.log(msg.content);
    let wordArray = msg.content.split(" ")
    console.log(wordArray);

    let filterWords = ["darn", "shucks", "frak", "shite", "lort", "ass", "fuck", "nigga", "nigger", "asshole", "dick", "penis", "dildo", "sex", "xnxx", "pornhub", "xvideos", "bbc", "gilf", "milf", "n1gga", "impulse", "sylent", "titan", "guidehacking", "gh", "brutan", "tagio42", "lynx", "gay", "lesbian", "shithole", "asscrack", "fuk", "stfu", "pis", "luder", "pis", "porno", "porn", "fisse", "boobs", "vagina", "shit", "poop", "mongol", "retarded", "grimme", "PlankeCK", "cocaine", "meth", "rape", "voldtag", "crap", "fucking", "fucked", "stupid", "dumb", "hoe", "raping", "spadser", "fisse", "tissekone", "carding",]

    for(var i = 0; i < filterWords.length; i++) {
        if(wordArray.includes(filterWords[i])) {
            msg.delete()
            msg.channel.send(`sorry ${msg.author.username} but this word is blacklisted!`
            );
            break;
        }
        
    }

});
bot.login(process.env.token);