module.exports.config = {
    name: "fork",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHAHADAT SAHU",
    description: "Send YouTube channel and GitHub fork link with intro text",
    commandCategory: "other",
    usages: "fork",
    cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
    const message = 
        "🌟 আসসালামু আলাইকুম সম্মানিত বট ইউজার 🌟\n\n" +
        "আপনি যদি BOT তৈরি করতে চান, তাহলে চলে যেতে পারেন আমার বস ইভান মল্লিক এর ইনবক্সে। " +
        "সেখানে আমার বস ইভান মল্লিক আপাকে FORK LINK দিয়ে দিবে। " +
        "তাহলে আর দেরি না করে এখনি আমার বস ইভান মল্লিক কে নক করেন।\n\n" +
        "➤FACEBOOK ID: https://www.facebook.com/ev4u.mallik\n\n" +
        "🔗 Telegram: t.me/EVAN_490";

    return api.sendMessage(message, event.threadID, event.messageID);
};
