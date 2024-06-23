const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { // Hj
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - Kết nối thành công đến Account`);

  const r = new Discord.RichPresence()
    .setApplicationId('1150928778965565500')
    .setType('LISTENING')
    .setURL('https://youtube.com') //Must be a youtube video link 
    .setState('Klee')
    .setName('Rin')
    .setDetails(`Rin`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1002089709390024764/1254435844731830282/shelter3.png?ex=66797beb&is=66782a6b&hm=11086d6ff03a3bd0a749f923ea1ea8d357eab12efc3dfac58babc1d786561d96&') //Bạn có thể đặt liên kết ở dạng tenor hoặc discord, v.v.
    .setAssetsLargeText('Lyra') //Văn bản khi bạn di chuột vào Hình ảnh lớn
    //.setAssetsSmallImage('https://media.discordapp.net/attachments/1204070941836054539/1250521568824655892/bun1.jpg?ex=666be737&is=666a95b7&hm=a7bcc94bc33a94c4a290a2dd7b8dc4cecf7b059d6704423910f411624761c014&=&format=webp&width=492&height=655') //Bạn có thể đặt liên kết ở dạng tenor hoặc discord, v.v.
    .setAssetsSmallText('Meow Meow') //Văn bản khi bạn di chuột vào Hình ảnh nhỏ
    .addButton('Facebook', 'https://www.facebook.com/do.quang.927980')
    .addButton('Discord', 'https://discord.gg/muffinie');
   

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Rin`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});


client.login(process.env.TOKEN)
