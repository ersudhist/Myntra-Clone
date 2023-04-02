import { navbar } from "../script/navbar.js";

let header = document.getElementById("Home-headerEl");
header.innerHTML = navbar();


let wishlistcontainer=document.getElementById("wishcontainer")
let CART= JSON.parse(localStorage.getItem("cartdata")) ||[];
let WISH=JSON.parse(localStorage.getItem("wishlist"))||[];
let total=document.getElementById("wishTotal")
total.innerText=WISH.length;

window.addEventListener("load",()=>{
    console.log(WISH)
    let cardlist= getCardList(WISH)
    wishlistcontainer.innerHTML=null;
    wishlistcontainer.append(cardlist)
  })

function getCardList(data){
    console.log(data)
    let cardList=document.createElement("div")
    cardList.classList.add("card-list-s")
    
    data.forEach((element)=>{
        
       let card=getData(element.image,element.brand,element.about,element.price,element.id,element)
       cardList.append(card)
       
    })
    return cardList;
    
    }

    function getData(image,brand,about,price,id,element){
       
        let card=document.createElement("div")
        card.classList.add("card")
        card.setAttribute("data-id",id)
        let imageDiv=document.createElement("div")
        let img=document.createElement("img")
        imageDiv.classList.add("card-image")
        img.src=image;
        imageDiv.append(img)
        let cardbody=document.createElement("div")
        cardbody.classList.add("card-body");
      
        let Brand = document.createElement("h4");
        Brand.innerText=brand;
        
        let About = document.createElement("p");
        About.innerText=about;

        let Price = document.createElement("h5");
        Price.innerText=`Rs. ${price}`;
        

        let btn1=document.createElement("button")
        btn1.classList.add("wishbtn");
        btn1.innerText="Add to CART";
        btn1.addEventListener("click",()=>{
           
          CART.push((element))
          console.log(CART)
          localStorage.setItem("cartdata",JSON.stringify(CART))
          alert("product added to Cart")
          bagtotal.innerText=CART.length;
      
       })

        let Id=document.createElement("div")
        Id.setAttribute("data-id",id)
      
        card.append(imageDiv)
        cardbody.append(Brand,About,Price,btn1)
        card.append(cardbody)
      
         return card;
      
      }
      

