const showPicContaioner = document.querySelector("#image-con img");
const showName = document.getElementById("show-name");
const runtime = document.getElementById("runtime");
const genre = document.getElementById("genre");
const network = document.getElementById("network");
const premier = document.getElementById("premier");
const ended = document.getElementById("ended");
const summary = document.getElementById("summary");
const rating = document.getElementById("rating");
const pickShowButton = document.getElementById("pick-show-button");

function elementHTML(el, text){
    el.innerHTML = text;
}

function populateShowInfo(tvShow){
    elementHTML(showName, tvShow.name);
    elementHTML(runtime, `<b>Runtime:</b> ${tvShow.averageRuntime} minutes`);
    elementHTML(genre, `<b>Genre:</b> ${tvShow.genres.join(", ")}`);
    elementHTML(network, `<b>Network:</b> ${tvShow.network.name}`);
    elementHTML(premier, `<b>Premiered:</b> ${tvShow.premiered}`);
    elementHTML(ended, `<b>Ended:</b> ${tvShow.ended}`);
    elementHTML(rating, `<b>Rating:</b> ${tvShow.rating.average}`);
    elementHTML(summary, tvShow.summary);
}

function createShowDescription(tvShow){
    const showPic = tvShow.image.original;
    showPicContaioner.setAttribute("src", showPic);
    populateShowInfo(tvShow);
}

function getTvShow(){
    const randomTvShow = Math.floor(Math.random()*249 + 1);
    fetch(`https://api.tvmaze.com/shows/${randomTvShow}`)
        .then((res) => res.json())
        .then((json) => {
            const tvShow = json;
            createShowDescription(tvShow);
        })
        .catch((err) => console.log(err));
}

getTvShow();

pickShowButton.addEventListener("click", function(){
    getTvShow();
});