import { elementHTML } from "./utilities.js";
import { getTvShowData } from "./tv-show-data.js";
import { getSeasonsData } from "./seasons-data.js";
import { displayCatagory } from "./catagory-display.js";


const showPicContainer = document.querySelector("#image-con img");
const showName = document.getElementById("show-name");
const runtime = document.getElementById("runtime");
const genre = document.getElementById("genre");
const seasons = document.getElementById("seasons");
const network = document.getElementById("network");
const rating = document.getElementById("rating");
const summary = document.getElementById("summary");
const watchNowContainer = document.getElementById("watch-now")
const pickShowButton = document.getElementById("pick-show-button");


function populateShowInfo(tvShow, season){
    elementHTML(showName, tvShow.name);
    elementHTML(runtime, `<b>Runtime:</b> <span class="catagory">${tvShow.averageRuntime} minutes</span>`);
    elementHTML(genre, `<b>Genre:</b> <span class="catagory">${tvShow.genres.join(", ")}</span>`);
    elementHTML(seasons, `<b>Seasons:</b> <span class="catagory">${season}</span>`)
    elementHTML(network, `<b>Network:</b> <span class="catagory">${tvShow.network.name}</span>`);
    elementHTML(rating, `<b>Rating:</b> <span class="catagory">${tvShow.rating.average}</span>`);
    elementHTML(summary, `<span class="catagory">${tvShow.summary}</span>`);
}

function createShowDescription(tvShow, season){
    const showPic = tvShow.image.original;
    showPicContainer.setAttribute("src", showPic);
    const watchNow = tvShow.officialSite;
    watchNowContainer.setAttribute("href", watchNow);
    populateShowInfo(tvShow, season);
    displayCatagory();
}

async function getTvShow(){
    const randomTvShow = await Math.floor(Math.random()*249 + 1);
    const tvShowData = await getTvShowData(randomTvShow);
    const seasonsData = await getSeasonsData(randomTvShow);
    const seasonsNumber = await seasonsData.length;
    const showDescription = await createShowDescription(tvShowData, seasonsNumber);
    return showDescription;
}

getTvShow();


pickShowButton.addEventListener("click", function(){
    getTvShow();
});
