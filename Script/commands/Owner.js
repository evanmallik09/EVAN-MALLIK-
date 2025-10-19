const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝗡𝗮𝗺𝗲 : 𝐄𝐕𝐀𝐍 𝐌𝐀𝐋𝐋𝐈𝐊🩷🪽
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝗘𝗩𝗨 𝗠𝗔𝗟𝗟𝗜𝗞
║ 🎂 𝗔𝗴𝗲 : 𝟭𝟴+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗝𝗢𝗕 🇸🇦
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗛𝗦𝗖
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝗚𝗮𝘇𝗶𝗽𝘂𝗿
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ https://www.facebook.com/ev4u.mallik
║ 💬 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
║ t.me/EVAN_490
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
║ wa.me/01400465471
║ ✈️ 𝗣𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁 :
║ https://pin.it/4mIEz7a8X
╚═════════════════════ ✿
`;

  const images = [
    "https://imgur.com/a/VRzTXgq.jpeg",
    "https://imgur.com/a/D4wZ4Ad.jpeg",
    "https://imgur.com/a/VRzTXgq.jpeg",
    "https://imgur.com/a/D4wZ4Ad.jpeg"
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};
