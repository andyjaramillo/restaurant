const newsPageModule = () => {
//    const cont = document.querySelector("#content");
//    const newsPage = document.createElement("div");
//    newsPage.classList.add('page-content');
//    const title = document.createElement('h1');
//    const newsPara = document.createElement('p');

//   title.innerHTML = "About Page";
//   title.style.alignContent = "center";
//    newsPara.innerHTML = "Here is a sample about page";

//    para.style.alignSelf = "center";
//  newsPage.appendChild(newsPara);
//  newsPage.appendChild(title);

//  cont.appendChild(newsPage);
const cont = document.querySelector("#content");
const contentPage = document.createElement("div");
contentPage.classList.add('page-content');
const title = document.createElement('h1');
const pic = document.createElement('img');
const para = document.createElement('p');

title.innerHTML = "Welcome to the News Page";
title.style.alignContent = "center";
para.innerHTML = "Welcome to the news page. We will update the news later";
pic.src = "news.jpg";

para.style.alignSelf = "center";

contentPage.appendChild(title);
contentPage.appendChild(para);
contentPage.appendChild(pic);

cont.appendChild(contentPage);
 }
 export default newsPageModule;