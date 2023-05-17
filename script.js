const showPicContaioner = document.querySelector("#image-con img");
const showName = document.getElementById("show-name");
const runtime = document.getElementById("runtime");
const genre = document.getElementById("genre");
const network = document.getElementById("network");
const premier = document.getElementById("premier");
const ended = document.getElementById("ended");
const summary = document.getElementById("summary");
const rating = document.getElementById("rating");

fetch("https://api.tvmaze.com/shows/80")
    .then((res) => res.json())
    .then((json) => {
        const tvShow = json;
        console.log(tvShow);
        const showPic = json.image.original;
        showPicContaioner.setAttribute("src", showPic);
        showName.innerText = tvShow.name;
        runtime.innerText = "Runtime: " + tvShow.averageRuntime;
        genre.innerText = "Genre: " + tvShow.genres;
        network.innerText = "Network: " + tvShow.network.name;
        premier.innerText = "Premiered: " + tvShow.premiered;
        ended.innerText = "Ended: " + tvShow.ended;
        summary.innerHTML = "Summary: " + tvShow.summary;
        rating.innerText = "Rating: " + tvShow.rating.average;
    })
    .catch((err) => console.log(err));
