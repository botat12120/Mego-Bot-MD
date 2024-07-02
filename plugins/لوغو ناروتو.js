let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `[❗] اعمل لوجو ناروتو\n\n *مـثــال* :\n*${usedPrefix + command}* GOKU BOT`

  if (!text) throw too
  let lr = (`https://shizoapi.onrender.com/api/photooxy/naruto?text=${encodeURIComponent(text)}&apikey=shizo`)
  conn.sendFile(m.chat, lr, 'Zoro.png', `تم بواسطه ✅
  بوت غــوكـــو⚡عمك`, m)
}
handler.help = ['Goku']
handler.tags = ['Goku']
handler.command = ['نارو','لوجو-ناروتو']

export default handler