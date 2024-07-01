const handler = async (m, { conn, text }) => {
    const options = ['صوره', 'كتابة'];
    const userChoice = text.trim().toLowerCase();

    if (!options.includes(userChoice)) {
        return await conn.reply(m.chat, 'الرجاء استخدام أحد الخيارات التالية:\n- 👑 صوره\n- 📝 كتابة', m);
    }

    // اختيار فهرس عشوائي داخل مصفوفة الخيارات
    const botChoiceIndex = Math.floor(Math.random() * options.length);
    const botChoice = options[botChoiceIndex];
    let result;

    if (userChoice === botChoice) {
        result = 'إنها تعادل! 🤝';
    } else {
        result = `لقد اخترت ${userChoice}، والبوت اختار ${botChoice}.\n${botChoice === 'صوره' ? 'البوت فاز! 🏆' : 'أنت فزت! 🎉'}`;
    }

    await conn.reply(m.chat, `لقد اخترت: ${userChoice}\nالبوت اختار: ${botChoice}\n${result}`, m);
};

handler.help = ['ريال (صوره|كتابة)'];
handler.tags = ['game'];
handler.command = /^(ريال|صورة|كتابة)$/i;

export default handler;
