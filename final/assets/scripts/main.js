'use strict';

//The below Javascript will apply to all files

//This function will allow the user to go back to their previous page.
function goBack() {
    window.history.back();
}

//Index Page code 
//This function will change the image at the bottom of the Index page / Site Map section
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

//This function will change the text on when the user scrolls over it. 
function changeText() {

  let target = document.getElementById('change_text');

  if (target.style.color == 'black'){
    document.getElementById("change_text").innerHTML = "Understand History";
    target.style.color = 'blue';
  }else {
    document.getElementById("change_text").innerHTML = "Learn History";
    target.style.color = 'black';
  }  
}

//This function will again change text on the index page. 
function changeTextTwo() {

  let target = document.getElementById('change_text_two');

  if (target.style.color == 'black'){
    document.getElementById("change_text_two").innerHTML = "Learn";
    target.style.color = 'blue';
  }else {
    document.getElementById("change_text_two").innerHTML = "Understand";
    target.style.color = 'black';
  }  
}

