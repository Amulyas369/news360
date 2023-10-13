const API_KEY = "c1f523664d3b4e0e9c0761554676ace3";
const url = "https://newsapi.org/v2/everything?q=";

const menubar=document.querySelector(".menubar")
const responsive_nav=document.querySelector(".responsive-nav")
const stick1=document.querySelector("#stick1")
const stick2=document.querySelector("#stick2")
const stick3=document.querySelector("#stick3")

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.map((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");

    responsive_nav.style.transform = "translateX(-100%)"
    contactPage.style.transform = "translateY(-100%)";
    aboutPage.style.transform = "translateY(-100%)";
    servicePage.style.transform = "translateY(-100%)";
    responsive_nav.style.transform = "translateX(-100%)";
        stick1.classList.remove("stick1");
        stick2.classList.remove("stick2");
        menubar.style.gap="6px";
        stick3.style.display="block";
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});











menubar. addEventListener("click",()=>{
    if(responsive_nav.style.transform === "translateX(-100%)"){
        responsive_nav.style.transform = "translateX(0%)";
        stick1.classList.add("stick1");
        stick2.classList.add("stick2");
        menubar.style.gap="0px";
        stick3.style.display="none";
    }else{
        responsive_nav.style.transform = "translateX(-100%)"
        stick1.classList.remove("stick1");
        stick2.classList.remove("stick2");
        menubar.style.gap="6px";
        stick3.style.display="block";
    }
   
})


// for contact

const contact_click=document.querySelector(".contact_click")
const home_click=document.querySelector(".home_click")
const about_click=document.querySelector(".about_click")
const service_click=document.querySelector(".service_click")
const about_res=document.querySelector(".about_res")
const home_res=document.querySelector(".home_res")
const service_res=document.querySelector(".service_res")
const contact_res=document.querySelector(".contact_res")
const contactPage=document.querySelector(".contact")
const aboutPage=document.querySelector(".about")
const servicePage=document.querySelector(".service")
contact_click. addEventListener("click",()=>{
        contactPage.style.transform = "translateY(0%)";
        aboutPage.style.transform = "translateY(-100%)";
        servicePage.style.transform = "translateY(-100%)";
   
})
home_click. addEventListener("click",()=>{
    contactPage.style.transform = "translateY(-100%)";
    aboutPage.style.transform = "translateY(-100%)";
    servicePage.style.transform = "translateY(-100%)";
    window.location.reload(true)

})
about_click. addEventListener("click",()=>{
    aboutPage.style.transform = "translateY(0%)";
    contactPage.style.transform = "translateY(-100%)";
    servicePage.style.transform = "translateY(-100%)";

})
service_click. addEventListener("click",()=>{
    servicePage.style.transform = "translateY(0%)";
    contactPage.style.transform = "translateY(-100%)";
    aboutPage.style.transform = "translateY(-100%)";

})
about_res. addEventListener("click",()=>{
    aboutPage.style.transform = "translateY(0%)";
    contactPage.style.transform = "translateY(-100%)";
    servicePage.style.transform = "translateY(-100%)";
    responsive_nav.style.transform = "translateX(-100%)";
    stick1.classList.remove("stick1");
        stick2.classList.remove("stick2");
        menubar.style.gap="6px";
        stick3.style.display="block";

})
home_res. addEventListener("click",()=>{
    contactPage.style.transform = "translateY(-100%)";
    aboutPage.style.transform = "translateY(-100%)";
    servicePage.style.transform = "translateY(-100%)";
    responsive_nav.style.transform = "translateX(-100%)";
    stick1.classList.remove("stick1");
        stick2.classList.remove("stick2");
        menubar.style.gap="6px";
        stick3.style.display="block";
        window.location.reload(true)
})
service_res. addEventListener("click",()=>{
    servicePage.style.transform = "translateY(0%)";
    contactPage.style.transform = "translateY(-100%)";
    aboutPage.style.transform = "translateY(-100%)";
    responsive_nav.style.transform = "translateX(-100%)";
    stick1.classList.remove("stick1");
        stick2.classList.remove("stick2");
        menubar.style.gap="6px";
        stick3.style.display="block";

})
contact_res. addEventListener("click",()=>{
    contactPage.style.transform = "translateY(0%)";
    aboutPage.style.transform = "translateY(-100%)";
    servicePage.style.transform = "translateY(-100%)";
    responsive_nav.style.transform = "translateX(-100%)";
    stick1.classList.remove("stick1");
        stick2.classList.remove("stick2");
        menubar.style.gap="6px";
        stick3.style.display="block";
})

//   for Contact


// Declare variables outside the function
let name, email, phone, message;

function sendMassage(event) {
    event.preventDefault();

    // Fetch values from the form
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    message = document.getElementById("message").value;

    var templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    emailjs.send('service_gh9nwbm', 'template_dpdrs7b', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email sent successfully To DailyTrends360!")
        }, function(error) {
            console.log('FAILED...', error);
        });

    }

