const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ


Best regards, Riintan.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️Me Riintan Bot
Berikut adalah beberapa fitur yang ada pada bot ini!✨

Creator:
â” â¥ *${prefix}sticker*
â” â¥ *${prefix}stickergif*
â” â¥ *${prefix}stickergiphy*
â” â¥ *${prefix}meme*
â” â¥ *${prefix}quotemaker*
â” â¥ *${prefix}nulis*

Islam:
â” â¥ *${prefix}infosurah*
â” â¥ *${prefix}surah*
â” â¥ *${prefix}tafsir*
â” â¥ *${prefix}ALaudio*
â” â¥ *${prefix}jsolat*

18+:
â” â¥ *${prefix}nekopoi*

Download:
â” â¥ *${prefix}instagram*
â” â¥ *${prefix}ytmp3*
â” â¥ *${prefix}ytmp4*

Primbon:
â” â¥ *${prefix}artinama*
â” â¥ *${prefix}cekjodoh*

Search Any:
â” â¥ *${prefix}images*
â” â¥ *${prefix}sreddit*
â” â¥ *${prefix}resep*
â” â¥ *${prefix}stalkig*
â” â¥ *${prefix}wiki*
â” â¥ *${prefix}cuaca*
â” â¥ *${prefix}chord*
â” â¥ *${prefix}lirik*
â” â¥ *${prefix}ss*
â” â¥ *${prefix}play*
â” â¥ *${prefix}whatanime*

Random Teks:
â” â¥ *${prefix}fakta*
â” â¥ *${prefix}pantun*
â” â¥ *${prefix}katabijak*
â” â¥ *${prefix}quote*

Random Images:
â” â¥ *${prefix}anime*
â” â¥ *${prefix}kpop*
â” â¥ *${prefix}memes*

Lain-lain:
â” â¥ *${prefix}tts*
â” â¥ *${prefix}translate*
â” â¥ *${prefix}resi*
â” â¥ *${prefix}covidindo*
â” â¥ *${prefix}ceklokasi*
â” â¥ *${prefix}shortlink*
â” â¥ *${prefix}bapakfont*

Fun Menu:
â” â¥ *${prefix}simisimi*

Tentang Bot:
â” â¥ *${prefix}tnc*
â” â¥ *${prefix}donasi*
â” â¥ *${prefix}botstat*
â” â¥ *${prefix}ownerbot*
â” â¥ *${prefix}join*
â” â¥ *${prefix}speed*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
â” â¥ *${prefix}ban* - banned
â” â¥ *${prefix}bc* - promosi
â” â¥ *${prefix}leaveall* - keluar semua grup
â” â¥ *${prefix}clearall* - hapus semua chat

Serah lu pada Riintan gak capek Kok :D`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
. *${prefix}kickall*
-owner adalah pembuat grup.

⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

â” â¥ *${prefix}add*
â” â¥ *${prefix}kick* @tag
â” â¥ *${prefix}promote* @tag
â” â¥ *${prefix}demote* @tag
â” â¥ *${prefix}tagall*
â” â¥ *${prefix}del*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

https://saweria.co/donate/riintan

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
