const discord = require("discord.js"); 
const botConfig = require("./botconfig.json");

const { Client, Intents } = require('discord.js');
const client = new discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("ready", async () =>{
 
    console.log(`${client.user.username} is online.`);
   
    client.user.setActivity("BETA | Probeer =help", { type: "PLAYING" });
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
        var berichtje = "**Lijst met commands:**\n\n=1234 **-** telt verder (56...)\n=hallo **-** Reageert (groet terug)\n=geheim **-** Lijst met geheime commands\n=ship **-** Een random naam uit onze klas H1A (behalve Jente, Sofia, Jochem, Noa, Sascha, Angelina, Levi en Mat-Hijs)\n=uitleg/ship **-** Uitleg over ship functie van de bot";

        if (args[0] === `commands`)  { berichtje = "typ gewoon =help"; }
        else if (args[0] === `truc`) { berichtje = "typ gewoon =help"; } 

        return message.channel.send(berichtje);
    }

    else if (command === `1234`) {
        return message.channel.send("56789");
    }

    else if (command === `geheim`) {
        return message.channel.send("Dat weten alleen Mat-Hijs en Levi :yum:");
    }

    else if (command === `uitleg/ship`) {
        return message.channel.send("Stuur een keer =ship. Je krijgt dan een naam uit onze klas. Als je daarna nog een keer =ship doet gebeurt er het zelfde. Deze twee kinderen zijn dan saampies geshipt!");
    }

    else if (command === `ship`) {
        const namen = ["Tjalling", "Chemaine", "Kiara", "Juul", "Jelle", "Mees", "Fleur", "Thomas", "Izzy", "Timon", "Lynn", "Dani", "Stan", "Myrthe", "Nigel", "Bruun", "Ayden"];
        let aantalNamen = namen.length;
        let randomNr = Math.floor(Math.random()*aantalNamen);
        let gekozenNaam = namen[randomNr];
        let berichtje = "De gekozen naam is: " + gekozenNaam;

        return message.channel.send(berichtje);
    }
});

client.login(process.env.token);