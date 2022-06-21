const { player } = require("../");

module.exports = async () => {
  player.on("trackStart", async(queue, track) => {
    queue.metadata.channel.send(`Music tocando \`${track.title}\``)
  });
  player.on("trackAdd", async(queue, track) => {
    queue.metadata.channel.send(`Adicionando Musica a playlist\`${track.title}\``)
  });
};