import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `*أعــطيـني رابــــط !*`;
  m.reply(wait);

  let res;
  try {
    res = await fetch(`https://inrl-web.onrender.com/api/insta?url=${text}`);
  } catch (error) {
    throw `*حـدث خــطأ !:* ${error.message}`;
  }

  let api_response = await rar.json();
  if (!api_response || !api_response.result || api_response.result.length === 0) {
    throw `*لــم اجـد الـفيديــو !!*`;
  }

  let cap = `*الـفيديــو تـفضـل*`;

  conn.sendFile(m.chat, api_response.result[0], 'instagram.mp4', cap, m);
}

handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagram2|2انستا2|انستغرام|ig2|instagramdl)$/i

export default handler