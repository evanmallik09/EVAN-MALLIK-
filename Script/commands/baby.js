const axios = require("axios");
const simsim = "https://simsimi.cyberbot.top";

module.exports.config = {
  name: "baby",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "ULLASH",
  description: "Cute AI Baby Chatbot | Talk, Teach & Chat with Emotion ☢️",
  commandCategory: "simsim",
  usages: "[message/query]",
  cooldowns: 0,
  prefix: false
};

const axios = require("axios");
const simsim = "https://simsimi.cyberbot.top";

const greetings = [
  "বেশি bot Bot করলে leave নিবো কিন্তু😒😒",
  "শুনবো না😼 তুমি Boss Evan কে প্রেম করাই দাও নাই🥺পচা তুমি🥺",
  "আমি আবাল দের সাথে কথা বলি না,ok😒",
  "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈",
  "Bolo Babu, তুমি কি Boss Evan কে ভালোবাসো? 🙈💋",
  "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑",
  "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?",
  "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬",
  "I love you janu🥰",
  "আরে Bolo আমার জান ,কেমন আছো?😚",
  "আজ বট বলে অসম্মান করছি,😰😿",
  "Hop beda😾,Boss বল boss😼",
  "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু",
  "আমাকে না ডেকে মেয়ে হলে Boss Evan এর ইনবক্সে চলে যা 🌚😂 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/ev4u.mallik",
  "আমাকে বট না বলে , Boss Evan কে জানু বল জানু 😘",
  "বার বার Disturb করছিস কোনো😾, তোমার জানুর সাথে ব্যাস্ত আছি😋",
  "আরে বলদ এতো ডাকিস কেন🤬",
  "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘",
  "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒",
  "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘",
  "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস 😉😋🤣",
  "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂",
  "আমাকে ডেকো না,আমি Boss Evan এর সাথে ব্যাস্ত আছি",
  "কি হলো , মিস্টেক করচ্ছিস নাকি🤣",
  "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏",
  "জান মেয়ে হলে Boss Evan এর ইনবক্সে চলে যাও 😍🫣💕 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/ev4u.mallik",
  "কালকে দেখা করিস তো একটু 😈",
  "হা বলো, শুনছি আমি 😏",
  "আর কত বার ডাকবি ,শুনছি তো",
  "হুম বলো কি বলবে😒",
  "বলো কি করতে পারি তোমার জন্য",
  "আমি তো অন্ধ কিছু দেখি না🐸 😎",
  "আরে বোকা বট না জানু বল জানু😌",
  "বলো জানু 🌚",
  "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒",
  "হুম জান তোমার ওই খানে উম্মহ😑😘",
  "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘",
  "jang hanga korba😒😬",
  "হুম জান তোমার অইখানে উম্মমাহ😷😘",
  "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰",
  "ভালোবাসার নামক আবলামি করতে চাইলে Boss Evan এর ইনবক্সে গুতা দিন ~🙊😘🤣 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/ev4u.mallik",
  "আমাকে এতো না ডেকে Boss Evan কে একটা গফ দে 🙄",
  "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈",
  "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻",
  "আমি এখন Boss Evan এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻",
  "আমাকে না ডেকে Boss Evan কে একটা জি এফ দাও-😽🫶🌺",
  "ঝাং থুমালে আইলাপিউ পেপি-💝😽",
  "উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈"
];

module.exports.run = async function({ api, event, args, Users }) {
  try {
    const uid = event.senderID;
    const senderName = await Users.getNameUser(uid);
    const rawQuery = args.join(" ");
    const query = rawQuery.toLowerCase();

    if (!query) {
      const r = greetings[Math.floor(Math.random() * greetings.length)];
      return api.sendMessage(r, event.threadID, event.messageID);
    }

    const res = await axios.get(`${simsim}/simsimi?text=${encodeURIComponent(query)}&senderName=${encodeURIComponent(senderName)}`);
    const responses = Array.isArray(res.data.response) ? res.data.response : [res.data.response];

    for (const reply of responses) {
      await api.sendMessage(reply, event.threadID, event.messageID);
    }
  } catch (err) {
    console.error(err);
    return api.sendMessage(`| Error in baby command: ${err.message}`, event.threadID, event.messageID);
  }
};

 




  
