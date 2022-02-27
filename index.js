const discord = require("discord.js"); 
const botConfig = require("./botconfig.json");

const { Client, Intents } = require('discord.js');
const client = new discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("ready", async () =>{
 
    console.log(`${client.user.username} is online.`);
   
    client.user.setActivity("klooien | Probeer =help", { type: "PLAYING" });
});

/*******************************
 * 
 * Functie: message afvangen
 * Input:   string
 * Output:  string
 * 
 *******************************/

 client.on("messageCreate", async message => {
    var prefix = botConfig.prefix;

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
  
    // KNIP BERICHT OP IN COMMAND EN ARGUMENTEN
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
 
    if (command === `hallo`) {
        return message.channel.send("Hoi!");
    }
 
    else if (command === `help`) {
        var berichtje = "**Lijst met commands:**\n\n=1234 **-** telt verder (56...)\n=hallo **-** Reageert (groet terug)";

        if (args[0] === `commands`)  { berichtje = "typ gewoon =help"; }
        else if (args[0] === `truc`) { berichtje = "typ gewoon =help"; } 

        return message.channel.send(berichtje);
    }

    else if (command === `1234`) {
        return message.channel.send("56789");
    }

});

client.login(process.env.token);