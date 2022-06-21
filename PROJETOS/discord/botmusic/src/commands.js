const { player } = require("../");

module.exports = async(client, msg, args, command) => {

  //inserir comando de "recomendação" (aleatorias) e playlist pré prontas por tipo: kpop, rock, etc..

  if(command == "play") {
    const channel =msg.member.voice.channel;
    if(!channel) return msg.channel.send("Você precisa entrar no canal, bakaaa!!")

    const search_music = args.join(" ");
    if(!search_music) return msg.channel.send("Digite o nome ou link da musica");
  
    const queue = player.createQueue(msg.guild.id, {
      metadata: {
        channel: msg.channel,
      },
    });

    try {
      if(!queue.connection) await queue.connect(channel);
      
    } catch (error) {
      queue.destroy();
      return await msg.reply({
        content: "Não foi possivel entrar no server!!",
        ephemeral: true,
      });
      
    }

    const song = await player.search(search_music, {
      requestedBy: msg.author,
    }).then((x) => x.tracks[0])
    client.user.setActivity(song.title, { type: "LISTENING" });
    if(!song) return msg.reply(`Erro ao procurar musica: ${search_music}!!!`);
    queue.play(song);

    msg.channel.send({
      content: `... | Buscando... **${song.title}**!`
    });
  }else if (command === "skip") {
    const queue = player.getQueue(msg.guild.id);
    queue.skip();
    msg.channel.send(`Proxima musica DJ...`);
  }else if (command === "stop") {
    const queue = player.getQueue(msg.guild.id);
    queue.stop();
    msg.channel.send(`Para tudooooo...`);
  }else if (command === "pause") {
    const queue = player.getQueue(msg.guild.id);
    queue.setPaused(true);
    msg.channel.send(`Musica pausada...`);
  }else if (command === "resume") {
    const queue = player.getQueue(msg.guild.id);
    queue.setPaused(false);
    msg.channel.send(`Continuar musica...`);
  }else if (command == "help") {
    const queue = player.getQueue(msg.guild.id);
    queue.help();
    msg.channel.send(` Senpai segue as informações`); //inserir instruções sobre o uso do bot music
  }
};