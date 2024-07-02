//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/f8e57afecb5ffedb78dac.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `test`.trim() },
            footer: { text: `*𝑮𝑶𝑲𝑼-𝑩𝑶𝑻*`.trim() },  
            header: {
                title: `*⎔⋅• ┏╼╃✦⊰⟦ ﷽ ⟧⊱✦╄╾┓ •⋅⎔*\n*⌝اهــلاً ╎ بــك فـي بـوت غــوكــو╎⌞*\n*━─╾╃⊱✦⊰🤖⊱✦⊰╄╼─━*\n> *🐉✬⃝╿↵ مرحــبـا ⌊@${mentionId.split('@')[0]}⌉*\n*── • ◈ • ──*\n\n> *🐉✬⃝╿الـبــوت لـجــروبـات بـس*\n*· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ •*\n*⌝ ╎مـعـلـومـات الـبـوت╎⌞*\n*━─╾╃⊱✦⊰📋⊱✦⊰╄╼─━*\n*⧉【✨┋أسـم الـبـوت: 𝑮𝒐𝒌𝒖⚡】*\n*⧉【💻┋الـمـنـصـة:𝑯𝑬𝑹𝑶𝑲𝑼】*\n*⧉【⏰┋وقـت الـتـشـغـيـل:${uptime}】*\n*⧉【👥┋إجـمـالـي الـمـسـتخـدمـيـن:${rtotal}】*\n*· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*\n> *⧉【📢┋.ابلاغ】*\n> *هاذا الامر اذا حدث شيء للبوت.*\n\n*اختار من الازرار أسفل 👇*\n\n> *𝑮𝑶𝑲𝑼 𝑩𝑶𝑻.*\n> *BY:𝜜𝑴𝑹𝑶 𝑲𝑯𝜜𝑳𝑰𝑫🇾🇪🫀🇵🇸*`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
                                                  buttons: [
                                                          {
                                                                  name: 'single_select',
                                                            buttonParamsJson: JSON.stringify({
                                                                    title: '⌝قـائـمـه الاوامـر⌞',
                                                                    sections: [
                                                                            {
                                                                                    title: 'List',
                                                                        highlight_label: '',
                                                                        rows: [
                                                                                {
                                                                                        header: '⧉【قــســـم الــجـروب🔕】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر الجروب',
                                                                                        id: '.الجروب'
                                                                                }
                                                                        ]
                                                                            },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الاعــضـاء👥】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر الاعضاء',
                                                                                        id: '.الاعضاء'
                                                                                }
                                                                                    ]
                                                                  },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الانــمــي🔮】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر الانمي',
                                                                                        id: '.الانمي'
                                                                                }
                                                                                    ]
                                    },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الــتـرفـيـة🎮】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر الالعاب',
                                                                                        id: '.الترفيه'
                                                                                }
                                                                                    ]
                                        },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الايـديــت 🎞】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر الايديات',
                                                                                        id: '.الايديت'
                                                                                }
                                                                                    ]
                                        },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســـم الـتـحـويلات♻️】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر التحويلات',
                                                                                        id: '.التحويلات'
                                                                                }
                                                                                    ]
                                        },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الادوات ⚙️】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر الادوات',
                                                                                        id: '.الادوات'
                                                                                }
                                                                                    ]
                                        },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الــديــن🕋】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر الدين',
                                                                                        id: '.الدين'
                                                                                }
                                                                                    ]
                                        },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الذكـاء الاصطناعيّ🤖】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر البوت',
                                                                                        id: '.ذكاءاصطناعي'
                                                                                }
                                                                                    ]
                                        },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الـتـحـمـيـلات📥】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر التحميل و البحث',
                                                                                        id: '.التحميلات'
                                                                                }
                                                                                    ] 
                                        },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الــبـنـك🏦】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر البنك',
                                                                                        id: '.البنك'
                                                                                }
                                                                                    ] 
                                        },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الـمــطـور👑】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر المطور',
                                                                                        id: '.قائمتي'
                                                                                }
                                                                                    ] 
                                        },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الـريـاكـشـنـات🪩】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر الرياكشنات',
                                                                                        id: '.رياكشنات'
                                                                                }
                                                                                    ] 
                                        },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الاصــوات🔊】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر الاصوات',
                                                                                        id: '.الاصوات'
                                                                                }
                                                                                    ] 
                                        },
                                                                            {
                                                                                    highlight_label: '',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الـتـصـامـيـم⚡】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك اوامر التصاميم',
                                                                                        id: '.تصاميم'
                                                                                }
                                                                                    ] 
                                        },
                                                                            {
                                                                                    highlight_label: 'VIP',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الــشــرح📜】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك الاوامر مع الشرح',
                                                                                        id: '.الشرح'
                                                                                }
                                                                                    ] 
                                        },
                                                                            {
                                                                                    highlight_label: 'VIP',
                                                                                    rows: [
                                                                                            {
                                                                                        header: '⧉【قــســم الــمــهــام📜】',
                                                                                        title: '𝑮𝑶𝑲𝑼-𝑩𝑶𝑻',
                                                                                        description: 'بيجيب لك الاوامر كامل',
                                                                                        id: '.المهام'
                                                                                }
                                                                                    ]
                                                                            }
                                                                    ]
                                                            })
                                                          },
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '⧉【💫الـــاشــتـراك بـالـبـوت💫】',
                                      id: `.اشتراك`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '⧉【🔰قـنـات دعــم الـبـوت🔰】',
                                      url: 'https://whatsapp.com/channel/0029Vai5lsFCRs1tg6jJ152f',
                                      merchant_url: ''
                                  })
                              },
                              {
                                  name: 'cta_call',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '⧉【⚡الـــمــطور⚡】',
                                      id: '.المطور'
                                  })
                              },

                                            ],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(اوامر|الاوامر|أوامر|الأوامر|menu)$/i;
export default handler;