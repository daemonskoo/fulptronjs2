module.exports = {
    name: "roles",
    description: "Shows a list of all the roles on the server",
	guildOnly: true,
	args: false,
    execute(message, args) {
		let roleList = message.guild.roles.cache.map(r => {
			if (["Admin", 'Mod', "@everyone", 'BrenBot', 'Mr. Fulp', 'Contributor', 'Nitro Booster', 'Advent Calendar'].indexOf(r.name) > -1 || r.name.endsWith('Collab')) // TODO There's definitely a better way to do this. -Daemon
				return "";
			else
				return r.name;
		}).join("--");
		message.channel.send("Roles on " + message.guild.name + "\n " + roleList)
    }
}
