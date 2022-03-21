// Introduçao aos mecanismos

// const myPromise = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//         resolve('Resolvida');
//     }, 2000);
// });

// await myPromise
//     .then((result) => result + 'passando pelo then')
//     .then((result) => result + 'e agora acobou!')
//     .catch((err) => console.log(err.message));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.>>>>

// projeto do catcast 


const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');


const getCats = async () => {
    try {
        const data = fetch(BASE_URL);
        const json = await (await data).json();
        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
}

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();