import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*الامر ده عشان تعمل صور بص كدا واتعلم*\n\n*مثال*\n*${usedPrefix + command} عربية مرسيدس مع عربية فيراري*`;

  try {
    m.reply('*استنى يسطا هخلص الي في ايدي واعملهوله*');

    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);

    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*فشل إنشاء الصورة*';
    }
  } catch {
    throw '*حصل مشكلة يازميلي جرب الامر تاني*';
  }
};

handler.help = ['dalle'];
handler.tags = ['drawing'];
handler.command = ['توليد'];
export default handler;