console.log('hi');

let button = document.querySelector(".speaker");
let screen = document.querySelector(".screen");
let tvscreen = document.querySelector(".tvscreen");
let tvname = document.querySelector(".tvname");


button.addEventListener("click", function(){

  let page = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  let tvshow = Math.floor(Math.random() * (19 - 0 + 0)) + 0;
  
  let url = "https://www.episodate.com/api/most-popular?page=" + page
   fetch(url)
    .then(function(response){
      console.log(response)
      return response.json();
    })
  .then(data => {
    tvImage = data.tv_shows[`${tvshow}`].image_thumbnail_path;
    tvName = data.tv_shows[`${tvshow}`].name;
    console.log(data.tv_shows[`${tvshow}`].name)
    console.log(tvImage)
    
    tvscreen.src = tvImage;
    tvname.innerHTML = tvName
  })
    .catch(error => console.error(error));
    
});
