import { elementHTML } from "./utilities.js";
import { getTvShowData } from "./tv-show-data.js";
import { getSeasonsData } from "./seasons-data.js";


const showPicContaioner = document.querySelector("#image-con img");
const showName = document.getElementById("show-name");
const runtime = document.getElementById("runtime");
const genre = document.getElementById("genre");
const seasons = document.getElementById("seasons");
const network = document.getElementById("network");
const summary = document.getElementById("summary");
const rating = document.getElementById("rating");
const pickShowButton = document.getElementById("pick-show-button");


function populateShowInfo(tvShow, season){
    elementHTML(showName, tvShow.name);
    elementHTML(runtime, `<b>Runtime:</b> ${tvShow.averageRuntime} minutes`);
    elementHTML(genre, `<b>Genre:</b> ${tvShow.genres.join(", ")}`);
    elementHTML(seasons, `<b>Seasons:</b> ${season}`)
    elementHTML(network, `<b>Network:</b> ${tvShow.network.name}`);
    elementHTML(rating, `<b>Rating:</b> ${tvShow.rating.average}`);
    elementHTML(summary, tvShow.summary);
}

function createShowDescription(tvShow, season){
    const showPic = tvShow.image.original;
    showPicContaioner.setAttribute("src", showPic);
    populateShowInfo(tvShow, season);
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
