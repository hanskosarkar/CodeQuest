console.log("js working fine");

let url = "https://kontests.net/api/v1/all";

const menu = document.getElementById("menu");
const subMenu = document.getElementById("submenu");
const cardsContainer = document.getElementById("cards-container");
const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dropdownHover = document.getElementById("dropdownHover");
const dropdownHover1 = document.getElementById("dropdownHover1");

let contestArr=[];
menu.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (menu.classList.contains("fa-bars")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
        subMenu.classList.remove("hidden");
    }
    else {
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
        subMenu.classList.add("hidden");
    }
}

let cardElement;
let filteredSites = [];
let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((contests) => {
    // console.log(contests);
    // contestArr = contests;
    // console.log(typeof(contestArr))

    contests.forEach(contest => {
        contestArr.push(contest);
        filteredSites.push(contest.site);
        cardElement = addCardElement(contest);
       
    });

    cardsContainer.innerHTML = cardElement;

})



// Adding fliter option based on available sites for contests
dropdownHover.innerHTML = ` <li id="filter1" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">All</li>
                            <li id="filter2" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">HackerRank</li>
                            <li id="filter3" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">CodeChef</li>
                            <li id="filter4" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">HackerEarth</li>
                            <li id="filter5" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">AtCoder</li>
                            <li id="filter6" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">LeetCode</li>
                            <li id="filter7" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">CodeForces</li>
                        `;

dropdownHover1.innerHTML = `<li id="filter1xsm" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">All</li>
                            <li id="filter2xsm" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">HackerRank</li>
                            <li id="filter3xsm" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">CodeChef</li>
                            <li id="filter4xsm" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">HackerEarth</li>
                            <li id="filter5xsm" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">AtCoder</li>
                            <li id="filter6xsm" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">LeetCode</li>
                            <li id="filter7xsm" class="filter block px-4 py-2 cursor-pointer hover:bg-gray-100">CodeForces</li>
                            `;



//function to add cards to the container
let card = "";
function addCardElement(contest) {

    let imgNumber = Math.floor(Math.random() * images.length);
    imgNumber = imgNumber === 0 ? 10 : imgNumber;
    // console.log(imgNumber);

    card += `
        <div class="card-item flex flex-col mx-1 rounded-lg border border-gray-300 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <img src="../images/${imgNumber}.jpg" alt="img" class="rounded-t-md">
            <div class="content bg- p-5">
                <h2 class="mb-2 text-lg font-medium leading-tight text-neutral-800">${contest.name}</h2>
                <p class="mb-4 text-base text-neutral-600">
                    <h2>Start time: ${contest.start_time}</h2>
                    <h2>End time: ${contest.end_time}</h2>
                    <h2>Site: ${contest.site}</h2>
                    <h2>Status: ${contest.status}</h2>
                </p>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a target="_blank" href="${contest.url}">Visit Here</a></button>
            </div>
        </div>
    `

    return card;

}


//Filter the data
// const siteFiltered = document.getElementById("site-filtered");
// const smFliterText = document.getElementById("smFliterText");
// const filter1 = document.getElementById("filter1");
// const filter2 = document.getElementById("filter2");
// const filter3 = document.getElementById("filter3");
// const filter4 = document.getElementById("filter4");
// const filter5 = document.getElementById("filter5");
// const filter6 = document.getElementById("filter6");
// const filter7 = document.getElementById("filter7");
// const filter1xsm = document.getElementById("filter1xsm");
// const filter2xsm = document.getElementById("filter2xsm");
// const filter3xsm = document.getElementById("filter3xsm");
// const filter4xsm = document.getElementById("filter4xsm");
// const filter5xsm = document.getElementById("filter5xsm");
// const filter6xsm = document.getElementById("filter6xsm");
// const filter7xsm = document.getElementById("filter7xsm");
// filter1.addEventListener("click", filterResult);
// filter2.addEventListener("click", filterResult);
// filter3.addEventListener("click", filterResult);
// filter4.addEventListener("click", filterResult);
// filter5.addEventListener("click", filterResult);
// filter6.addEventListener("click", filterResult);
// filter7.addEventListener("click", filterResult);
// filter1xsm.addEventListener("click", filterResult);
// filter2xsm.addEventListener("click", filterResult);
// filter3xsm.addEventListener("click", filterResult);
// filter4xsm.addEventListener("click", filterResult);
// filter5xsm.addEventListener("click", filterResult);
// filter6xsm.addEventListener("click", filterResult);
// filter7xsm.addEventListener("click", filterResult);

// function filterResult(event){
//     // console.log(event.target)
//     const text = event.target.innerHTML.toLowerCase();
//     // console.log(text)
//     // console.log(contestArr)
//     siteFiltered.innerHTML = text;
//     smFliterText.innerHTML = text;


//     let contestsByFilter = contestArr.filter( contest => {
//         // console.log(contest.site)
//         // console.log(text === contest.site.toLowerCase());
//         return text === contest.site.toLowerCase();
        
//     })

//     if(text === "all"){
//         contestsByFilter = contestArr;
//     }

//     // console.log(contestsByFilter)
//     cardsContainer.innerHTML = "";
//     cardElement = "";
//     card = "";
//     if(contestsByFilter.length == 0) cardsContainer.innerHTML = `<p class="mb-4 text-base text-neutral-600">Sorry no data found.</p>`
//     else{
//         contestsByFilter.forEach(contest => {
//             cardElement = addCardElement(contest);
//         })
//         cardsContainer.innerHTML = cardElement;
//     }
//     // console.log(cardsContainer)
// }

const siteFiltered = document.getElementById("site-filtered");
const smFliterText = document.getElementById("smFliterText");
const filters = document.querySelectorAll(".filter");

filters.forEach(filter => {
  filter.addEventListener("click", event => {
    const text = event.target.innerHTML.toLowerCase();
    siteFiltered.innerHTML = text;
    smFliterText.innerHTML = text;

    let contestsByFilter = contestArr.filter(contest => contest.site.toLowerCase() === text);
    if(text === "all"){
        contestsByFilter = contestArr;
    }

    cardsContainer.innerHTML = "";
    cardElement = "";
    card = "";

    if (contestsByFilter.length === 0) {
      cardsContainer.innerHTML = `<p class="mb-4 text-base text-neutral-600">Sorry no data found.</p>`;
    } else {
      contestsByFilter.forEach(contest => {
        // cardsContainer.innerHTML += addCardElement(contest);
        cardElement = addCardElement(contest);
      });
      cardsContainer.innerHTML = cardElement;
    }
  });
});