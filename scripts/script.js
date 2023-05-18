const showPicContaioner = document.querySelector("#image-con img");
const showName = document.getElementById("show-name");
const runtime = document.getElementById("runtime");
const genre = document.getElementById("genre");
const network = document.getElementById("network");
const summary = document.getElementById("summary");
const rating = document.getElementById("rating");
const pickShowButton = document.getElementById("pick-show-button");

import { elementHTML } from "./utilities.js";

function populateShowInfo(tvShow){
    elementHTML(showName, tvShow.name);
    elementHTML(runtime, `<b>Runtime:</b> ${tvShow.averageRuntime} minutes`);
    elementHTML(genre, `<b>Genre:</b> ${tvShow.genres.join(", ")}`);
    elementHTML(network, `<b>Network:</b> ${tvShow.network.name}`);
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