const aboutPageModule = () => {
//    const cont = document.querySelector("#content");
//    aboutPage.classList.add('page-content');
//    const aboutPage = document.createElement("div");
//    const title = document.createElement('h1');
//    const newsPara = document.createElement('p');
  

//   title.innerHTML = "About Page";
//   title.style.alignContent = "center";
//    newsPara.innerHTML = "Here is a sample about page";

//    para.style.alignSelf = "center";
//  aboutPage.appendChild(newsPara);
//  aboutPage.appendChild(title);


//  cont.appendChild(aboutPage);
const cont = document.querySelector("#content");
const contentPage = document.createElement("div");
contentPage.classList.add('page-content');
const pic = document.createElement('img');
const title = document.createElement('h1');
const para = document.createElement('p');

title.innerHTML = "Welcome to the About Page";
title.style.alignContent = "center";
para.innerHTML = "Here is a picture of myself";
pic.src = "about.jpg";

para.style.alignSelf = "center";
contentPage.appendChild(pic);
contentPage.appendChild(title);
contentPage.appendChild(para);

cont.appendChild(contentPage);

 }
 export default aboutPageModule;