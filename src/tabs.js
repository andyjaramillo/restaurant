import aboutPageModule from "./about";
import newsPageModule from "./news";
import contents from "./restaurant";

const createTabs = () => {
   
    const cont = document.querySelector("#content");
    const div1 = document.createElement("button");
    const div2 = document.createElement("button");
    const div3 = document.createElement("button");

    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'news-btn');
    div3.setAttribute('id', 'about-btn');

    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    div1.textContent = "Home";
    div2.textContent = "news";
    div3.textContent = "about";
    cont.appendChild(div1);
    cont.appendChild(div2);
    cont.appendChild(div3);

    div1.addEventListener("click", function(){
       clearContent();
        contents();
    });
    div2.addEventListener("click", function(){
        clearContent();
        newsPageModule();
    })
    div3.addEventListener("click", function(){
        clearContent();
        aboutPageModule();
    })
}

function clearContent() {
    const cont = document.querySelector("#content");
    const page = document.querySelector('.page-content');
    if(page){
        cont.removeChild(page);
    }
}

export default createTabs