var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Вопросы - ЛС",
assets : {
large_image : "pricetag-removebg",
small_image : "diamond",
large_text : "Соблюдаю все правила накрутки & Аккаунты для накрутки свои (авторег)!", // THIS WILL SHOW AS "Playing <Status>" from the outisde
small_text : "Приветывыавыавыавыавыа"
},
buttons : [{label : "10 участников - 15 ру6." , url : "https://lolz.guru"},{label : "Насчёт покупки писать в ЛС",url : "https://lolz.guru"}]
}
})
})
client.login({ clientId : "834769321095856179" }).catch(console.error);