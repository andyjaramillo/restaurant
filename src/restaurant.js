


const contents = () => {
   const cont = document.querySelector("#content");
   const contentPage = document.createElement("div");
   contentPage.classList.add('page-content');
   const pic = document.createElement('img');
   const title = document.createElement('h1');
   const para = document.createElement('p');
  
  title.innerHTML = "Welcome to the Italian Restaurant";
  title.style.alignContent = "center";
   para.innerHTML = "Experience the best of Italian cuisine at our restaurant. We take pride in serving delicious dishes made with authentic Italian ingredients. Our passionate chefs create culinary masterpieces that will tantalize your taste buds.";
   pic.src = "restaurant-image.jpg";

   para.style.alignSelf = "center";
   contentPage.appendChild(pic);
 contentPage.appendChild(title);
 contentPage.appendChild(para);

 cont.appendChild(contentPage);
 }




export default contents;



 
