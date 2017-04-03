'use strict';

function changeSiteMapImage(){
  let target = document.getElementById('site_map_image');

  if (target.style.color == 'black'){
    document.getElementById("site_map_image").style.backgroundImage = "url('https://source.unsplash.com/PO7CGnoDFUI')";
    target.style.color = 'blue';
  }else {
    document.getElementById("site_map_image").style.backgroundImage = "url('https://source.unsplash.com/jpMyAqHat7g')";
    target.style.color = 'black';
  }
};
