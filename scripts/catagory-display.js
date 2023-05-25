function displayCatagory(){
    const catagory = document.querySelectorAll(".catagory");
    for (let i = 0; i < catagory.length; i++) {
        if(catagory[i].innerText === "null" || catagory[i].innerText === ""){
            catagory[i].innerText = "N/A"
        }
    }
}

export { displayCatagory };