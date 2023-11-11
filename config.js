const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94728103228")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Sahan:Sahan123456@cluster0.2s8k9t2.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'botmd999@gmail.com'
global.github = 'https://github.com/botmd999/Lottasoma-MD'
global.location = 'SriLank LK'
global.gurl = 'https://instagram.com/' // add your username
global.devs = '94787313721';
global.website = 'https://chat.whatsapp.com/FYFRc72yK149LGsWKWg48t' //wa.me/+94762280384
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/H062oEI.jpeg'
module.exports = {
  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',
  botname: process.env.BOT_NAME || '𝙻𝙾𝚃𝚃𝙰𝚂𝙾𝙼𝙰 ᵏᵘᵐᵃʳᵃʸᵃ',
  dl_limit: process.env.DL_SIZE || '300',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || '94787313721',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY Lottasoma* 🎊',
  ownername:process.env.OWNER_NAME || '𝙻𝙾𝚃𝚃𝙰𝚂𝙾𝙼𝙰 ᵏᵘᵐᵃʳᵃʸᵃ',
  sessionName: process.env.SESSION_ID || 'gq12TZiL#rQ2iAv2CBHHat61KoAJxMMqE8SwQhioeSneMCaJ-nEM',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname: process.env.PACK_INFO.split(";")[1] || '𝙻𝙾𝚃𝚃𝙰𝚂𝙾𝙼𝙰 ᵏᵘᵐᵃʳᵃʸᵃ',
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '212',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink: process.env.ANTILINK_VALUES || 'tsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'botmd011',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '67bbd085-dad4-40d4-aca1-d4d6bd435752',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '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',
  VERSION: process.env.VERSION === undefined ? 'v.5.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'PRABATH-MD',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
