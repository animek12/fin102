let handler = async (m, { conn, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendButton(m.chat, `Cih Dasar Sangean`, wm, pickRandom(cuckold), [['\nJadi Sange :v', `huuu`]],m)
}
handler.help = ['cuckold']
handler.tags = ['nsfw']
handler.command = /^(cuckold)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const cuckold = [

"https://external-preview.redd.it/u5s6LYlHNzp1vGMkBpp_lpF31vn74g1aLd0cT3n69nk.jpg?width=640&height=905&crop=smart&auto=webp&s=330c2b07c7d20e0d29c8d633bd448df84372ef12",
    "https://i.redd.it/svlfk6pjpoa51.jpg",
    "https://preview.redd.it/px4ags2vura51.jpg?width=640&crop=smart&auto=webp&s=a7f572e4381d42825eb8982af147e36b32086a20",
    "https://preview.redd.it/eqisu83qxja51.jpg?width=640&crop=smart&auto=webp&s=54bbd433d0f3206555845a13ad7aa8a29d6eb31a",
    "https://external-preview.redd.it/8DyA_Dx4zSEL6V-7RQYO4OhjbQtvY3Ag4rlXysx_H1E.jpg?width=640&crop=smart&auto=webp&s=b15c632b0cdd50788a99c1a5fc645ce102739a9a",
    "https://preview.redd.it/oic475rmc5a51.jpg?width=640&crop=smart&auto=webp&s=bbec12eccfdd7b6733e87044b228f4ddcf8fa745",
    "https://preview.redd.it/lylstsbca0a51.jpg?width=640&crop=smart&auto=webp&s=476314691a2e8ad0d617864478ef3f391e03db4c",
    "https://preview.redd.it/hfzd4v5w90a51.jpg?width=640&crop=smart&auto=webp&s=ccbc7ccb7843d860a3e263564da4e0099418475b",
    "https://preview.redd.it/gxa5cgl2a0a51.jpg?width=640&crop=smart&auto=webp&s=d78c2096228f5fdca2ca8ee2bbfc5a43a8b7673e",
    "https://preview.redd.it/9fz5s4txe0a51.jpg?width=640&crop=smart&auto=webp&s=23e34c4b45ab6e010b45a710bb341cd7803756d5",
    "https://preview.redd.it/6verfsj2h0a51.jpg?width=640&crop=smart&auto=webp&s=e8dde94d1609b874ecb7b934342f9221f4240a7b",
    "https://preview.redd.it/qspm0fj1b0a51.jpg?width=640&crop=smart&auto=webp&s=2517d1a807c43b4e977f62dc1fbe84fa5582b378",
    "https://preview.redd.it/p7eh0n7ab0a51.jpg?width=640&crop=smart&auto=webp&s=aa441c66c7f581dce98dd74f8edc2a3f47e192ae",
    "https://preview.redd.it/qspu4gtte0a51.jpg?width=640&crop=smart&auto=webp&s=9a1e9fa1eabb8de0f7a7ca3c45e523dfc1015306",
    "https://preview.redd.it/r4brq4hgb0a51.jpg?width=640&crop=smart&auto=webp&s=49aef26c9c3cac03dbd409a33bb24f0493a67e49",
    "https://preview.redd.it/vhuh8ecqis951.jpg?width=640&crop=smart&auto=webp&s=037f5b6f2103c7addb9e7d2025800425cdd65eb0",
    "https://preview.redd.it/lq60bcd84r951.jpg?width=640&crop=smart&auto=webp&s=3c5927bcc794cd9b5c27aa06eb1bbab684e534f1",
    "https://preview.redd.it/9rfpyf8lpi951.jpg?width=640&crop=smart&auto=webp&s=a45ebf4afa922b805cf07ff277750a682ba06cc3",
    "https://i.imgur.com/jpUzn2Sl.jpg",
    "https://external-preview.redd.it/zzqHXDvEB1wxlcw_DLCYHv5t1cyy2vpPbPLGKVLL2IA.png?width=640&crop=smart&auto=webp&s=8a0189ab1532711f83fcddda72c38ab482d11574",
    "https://preview.redd.it/5ngzle9v27951.jpg?width=640&crop=smart&auto=webp&s=06aad00ee95e08a7d2f42741a23738283df2a6bf",
    "https://preview.redd.it/q2w7pdc5g2951.jpg?width=640&crop=smart&auto=webp&s=d007ad44577522f0a9a8a6b6f8e68e4d1c3d04a9",
    "https://preview.redd.it/u7ih65blu4951.jpg?width=640&crop=smart&auto=webp&s=fd8635757a72267ee7b1f43ad583c8c4f20aa881",
    "https://preview.redd.it/a09x6t5yau851.jpg?width=640&crop=smart&auto=webp&s=b4a936c682a95b3d1167d6f081f2e413fbbeeced",
    "https://preview.redd.it/0zbwmjgbos851.png?width=640&crop=smart&auto=webp&s=843927c6c0f025979b47e2a5b80c3dc3a8277df3",
    "https://external-preview.redd.it/_SBnRvsn9RsgCLA4q73UEVEIYsiU0XWMY9Wj-_gyLcQ.jpg?width=640&crop=smart&auto=webp&s=1150a801109486e3833e1f638b089b147bbee0c6",
    "https://external-preview.redd.it/TwzyTcr-UF2G7fEztN4wuyLxP9uWWcuPplg2f3MoaIQ.jpg?auto=webp&s=762b5a72e78a48c45dc1656ab380e900d8c4d8ce",
    "https://external-preview.redd.it/jLACDnpzKi2QlnP6YfJVmCgF_Q3q0RQeSzwtzHvt-x4.jpg?auto=webp&s=01b972577454e0badd9751d158c923c26faff538",
    "https://external-preview.redd.it/5IBtfs4HZFIyb6j2W4f43ECE7Qy3SC7-NxAMHqrTb2A.jpg?width=640&crop=smart&auto=webp&s=08d46297adfb28307fe67e95d42b074769caf1bc",
    "https://external-preview.redd.it/W62_5OFBWxqMTsFCSVWtFF95fzSPCQAAyvUglnP0wlU.jpg?width=640&crop=smart&auto=webp&s=bb3bb7fc8524c2a3104ebdc453e9c887b2884fad",
    "https://i.imgur.com/e1pkoFbl.jpg",
    "https://media.discordapp.net/attachments/683356351090786329/754001647390425199/xj96381n0tl51.png",
    "https://preview.redd.it/m05giq0gexk51.jpg?width=640&crop=smart&auto=webp&s=f99d6724880a60b6ca501c7bbab976fa60e00f79",
    "https://preview.redd.it/lis0v6iinek51.jpg?width=640&crop=smart&auto=webp&s=44c024e27567e76225933b233f2dee50531b63d2",
    "https://preview.redd.it/9ha5i3pvh4k51.jpg?width=640&crop=smart&auto=webp&s=8f7d8185e9dd210b28827ae7842de95231fcf612",
    "https://preview.redd.it/j5zwdq59k4k51.jpg?width=960&crop=smart&auto=webp&s=4b4d92bf5e8012c78e6f8ce898fd2fc0ed339729",
    "https://preview.redd.it/id5t6c19wuj51.jpg?width=640&crop=smart&auto=webp&s=3cff2a823fd2879ce27cf89aa8873228c8808fb2",
    "https://preview.redd.it/zf4z5nwl7gj51.jpg?width=640&crop=smart&auto=webp&s=80b6cdef314e06025ba3940c917eb15121e8b35d",
    "https://preview.redd.it/7pusux01edj51.jpg?width=640&crop=smart&auto=webp&s=cba0bb7c7e0fdb41bc3ff0d900b4480df5d625c1",
    "https://preview.redd.it/5swx9a64c9j51.jpg?width=640&crop=smart&auto=webp&s=7880a1b6fe3c728e456418f88d33c652c48b75ee",
    "https://preview.redd.it/zglkxq4fd0j51.jpg?width=640&crop=smart&auto=webp&s=32a2e988c45831642c9378a3cc2fa4bd3a876d95",
    "https://preview.redd.it/a8d135n7fsi51.jpg?width=640&crop=smart&auto=webp&s=be8cd33df8be54b3c8480c674d4ccfbfe18810c1",
    "https://preview.redd.it/qz368x2wcoi51.jpg?width=640&crop=smart&auto=webp&s=f8af6cada5dcc398ba2fa9b75dd73e5eb9865025",
    "https://img2.gelbooru.com/samples/bf/ad/sample_bfaddd4539b94f78aca053caa49a9e62.jpg",
    "https://konachan.com/sample/e6970436ee2b650d3fcde3cb4210e6f2/Konachan.com%20-%20317290%20sample.jpg",
    "https://konachan.com/sample/2009598d749a5a111e61d5c65e3c757c/Konachan.com%20-%20317279%20sample.jpg",
    "https://konachan.com/sample/747b76bfb23f7903019da58fb09bea9b/Konachan.com%20-%20316633%20sample.jpg"
]