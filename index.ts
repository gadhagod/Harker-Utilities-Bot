import  { Client, TextChannel, DMChannel, MessageEmbed, MessageEmbedImage }  from "discord.js";
const api = new (require("harker-api")).HarkerApi()

const client = new Client();

var prefix = "!harker"

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
    client?.user?.setActivity("!harker")
});

client.on("message", msg => {
    if (msg.content.startsWith(prefix)) {
        var command = String(msg).slice(String(msg).indexOf(" ")+1);
        var date = new Date();
        var day = ("0" + date.getDate()).slice(-2);
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var year = date.getFullYear();

        if (msg.content === prefix) {
            msg.channel.send(new MessageEmbed({
                color: "#0f540d",
                title: "Harker HS Utilities",
                description: "A discord bot that A discord bot that shows today's school lunch and schedule.",
                fields: [{name: "Lunch", value: "`!harker lunch`"}, {name: "Schedule", value: "`!harker schedule`"}],
                url: "https://github.com/gadhagod/Harker-Utilities-Bot#readme",
            }).setImage("https://i0.wp.com/news.harker.org/wp-content/uploads/2016/08/harker-logo-default.png?ssl=1"));
        } else if (command === "lunch") { api.getLunch(day, month, year, msg.channel.send) } 
        else if (command === "schedule") { api.getSchedule(day, month, year, msg.channel.send) }
    }
});