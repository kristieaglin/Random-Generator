async function getSeasonsData(randomTvShow){
    try{
        const result = await fetch(`https://api.tvmaze.com/shows/${randomTvShow}/seasons`);
        const json = await result.json();
        return json;
    }catch(err){
        console.log(err);
    }
}

export { getSeasonsData };