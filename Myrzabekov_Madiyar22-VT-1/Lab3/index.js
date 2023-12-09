let toRandbutt = document.getElementById('randWS')

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
console.log(randInt())
toRandbutt.onclick = function (){
    toRandbutt.href = websites[randInt()]
}
//toRandbutt.href =



let toForm = document.querySelector('.textme')
toForm.onclick = function () {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        left: 0,
        behavior: "smooth"
    })
}
