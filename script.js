
// assign variable from html to js
let button = document.querySelector(".speaker");
let screen = document.querySelector(".screen");
let tvscreen = document.querySelector(".tvscreen");
let tvname = document.querySelector(".tvname");
let tvnetwork = document.querySelector(".tvnetwork");
let tvstatus = document.querySelector(".tvstatus");
//when click on tv button
button.addEventListener("click", function(){

  // generate number for page and tv show in the api
  let page = Math.floor(Math.random() * (150 - 0 + 0)) + 0;
  let tvshow = Math.floor(Math.random() * (19 - 0 + 0)) + 0;
  
  let url = "https://www.episodate.com/api/most-popular?page=" + page
   fetch(url)
    .then(function(response){
      return response.json();
      // finds a page with random number
    })
  .then(data => {
    // goes through api to the name and thumbnail and assign it to variable with random number.
    tvImage = data.tv_shows[`${tvshow}`].image_thumbnail_path;
    tvName = data.tv_shows[`${tvshow}`].name;
    tvNetwork = data.tv_shows[`${tvshow}`].network;
    tvStatus = data.tv_shows[`${tvshow}`].status;
    
    console.log(data.tv_shows[`${tvshow}`].name)
    console.log(tvImage)
    
    tvscreen.src = tvImage;
    tvname.innerHTML = tvName;
    tvnetwork.innerHTML = "Network: " + tvNetwork;
    tvstatus.innerHTML = "Status: " + tvStatus;
  })
    
    
});
