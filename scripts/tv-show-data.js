async function getTvShowData(randomTvShow){
    try{
        const result = await fetch(`https://api.tvmaze.com/shows/${randomTvShow}`);
        const json = await result.json();
        return json;
    }catch(err){
        console.log(err);
    }
}

export { getTvShowData };