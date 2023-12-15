
import anime from "./anime.js";


// "введение в программирование" и "основы программирования" пройдены тоже


const LI = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc orci, rutrum at eros ut, consectetur rutrum turpis. Aenean nec eleifend orci. Pellentesque sapien justo, interdum id neque vitae, congue commodo justo. Sed ornare augue ut quam tempor, a vulputate massa dignissim. Nullam scelerisque varius ultricies. Praesent finibus, nisi et maximus tincidunt, metus sapien viverra risus, eu cursus nunc dolor sed augue. Aliquam interdum purus nibh, ac fermentum elit ullamcorper a. Pellentesque nec mi a ipsum pretium gravida in eget nisl. Curabitur cursus vehicula pellentesque. Etiam est massa, pharetra eu imperdiet vel, rutrum eu neque. Nulla viverra condimentum turpis, eu gravida enim placerat eget. Mauris a dolor quam. Phasellus vitae pellentesque lacus, id accumsan lacus. Nulla magna elit, tincidunt vitae ullamcorper at, vestibulum et tortor. Maecenas imperdiet sapien in arcu pulvinar, sed lacinia nunc euismod. Cras ac condimentum libero. Quisque finibus elementum sapien, sed quis. ";
function updateForm() {
    let len = document.getElementById("len").value;
    let uc =  document.getElementById("uppercase").checked;
    let ta = document.getElementById("li");
    ta.textContent = uc ? LI.toUpperCase().substring(0, len) : LI.substring(0,len);
    ta.style.height = "1px";
    ta.style.height = (25+ta.scrollHeight)+"px";
}

async function infograb(el) {
    const name = document.getElementById("uname").value;
    const surname = document.getElementById("usurname").value;
    const email = document.getElementById("email").value;

    const resp = await fetch("../ajax.php", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name + " " + surname,
            email: email
        })});
    if (resp.ok) {
        document.getElementById('last').innerHTML = '' +
            '<div class="my-5 text-center"> <h3>Your data has been sent successfully</h3> </div>'
    }
}

function getdata() {
    const space = document.getElementById("lastForSure");
    fetch("../data.php").then((resp) => {
        if (resp.ok) return resp.json();
        throw new Error("error with getting data");
    }).then((data) => {
        let toadd = '<div class="container px-0 px-lg-2 m-auto"><div class="row flex-nowrap overflow-auto">';
        for (const entry of data) {
            const city = entry["city"];
            const name = entry["name"];
            const age = entry["age"];
            toadd += '<div class="card mx-md-2" style="width: 16rem;" >' +
                '<img src="..." alt="' + city + '" class="card-img-top" >' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + name + '</h5> ' +
                    '<p class="card-text">age: ' + age + '</p> ' +
                '</div></div>';
        }
        toadd += '</div></div>';
        space.innerHTML = toadd;
    })
}

let mutexes = [true, true, true,true,true];
window.addEventListener("load", () => {
    document.getElementById("len").addEventListener('change', updateForm);
    document.getElementById("uppercase").addEventListener('change', updateForm);
    document.getElementById("ig_btn").onclick = infograb;
    document.getElementById("getdata").onclick = getdata;

    const listItems = [...Array(5).keys()].map(i => document.getElementById("l"+i));
    const anims = [[-100, 0], [-100, -100], [0,-100], [100,-100], [100, 0]]
    for (let i = 0; i < 5; i++) {
        listItems[i].addEventListener("mouseover", event => {
            if (mutexes[i])
                anime({
                    targets: listItems[i],
                    translateX: anims[i][0],
                    translateY: anims[i][1],
                    direction: "alternate",
                    easing: "easeInOutSine",
                    begin: () => { mutexes[i] = false },
                    complete: () => { mutexes[i] = true }
                });
        });
    }
    const btn = document.getElementById("btn");
    btn.onclick = () => {
        alert('nope');
        anime({
            targets: document.getElementById("btn"),
            translateX: 1000,
            rotate: 90,
            complete: () => btn.remove()
        });
    }
})
