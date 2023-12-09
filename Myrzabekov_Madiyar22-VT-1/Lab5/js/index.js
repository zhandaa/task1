
let form = document.querySelector('.form_diva')
let toRandbutt = document.getElementById('randWS')
let toForm = document.getElementById('toForm')
toForm.onclick = () =>{
    window.scrollTo(0, form.scrollHeight+100)
}
function randInt(){
    n = Math.floor(Math.random() * 10)
    return n
}
websites = [
    "https://220vk.com/6hands",
    "https://2kindsofpeople.tumblr.com/",
    "http://ww7.14-pi.net/?usid=23&utid=5106548403",
    "https://5secondfilms.com/",
    "https://8biticon.com/",
    "https://www.oshimaland.com/",
    "https://www.midomi.com/",
    "https://www.numbeo.com/cost-of-living/gmaps.jsp",
    "https://www.abbeyroad.com/crossing",
    "https://abw.blue/index_en.php?e=1"

]

toRandbutt.onclick = function (){
    toRandbutt.href = websites[randInt()]
}


