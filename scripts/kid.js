let productContainer=document.getElementById("displaySection");
let CART= JSON.parse(localStorage.getItem("Cart")) ||[];
let WISH=JSON.parse(localStorage.getItem("wishlist"))||[];

window.addEventListener("load",()=>{
    fetchedData();
  })
//   fetchedData();
  function fetchedData(){
    fetch(`https://mockapi-7431.onrender.com/products?category=Kids`)
    
     .then((res)=>{
      return res.json();
     })
    
     .then((data)=>{
       console.log(data);
        
       let cardlist= getCardList(data)
       productContainer.innerHTML=null;
       productContainer.append(cardlist)
     
     })
    } 

    function getCardList(data){
        
        let cardList=document.createElement("div")
        cardList.classList.add("card-list-s")
        
        data.forEach((element)=>{
            
           let card=getData(element.image,element.brand,element.about,element.price,element.id,element.category)
           cardList.append(card)
           
        })
        return cardList;
        
        }

        function getData(image,brand,about,price,id,category){
           
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
            
            let btn=document.createElement("button");
            btn.innerText="Wishlist";
          
            let Id=document.createElement("div")
            Id.setAttribute("data-id",id)
          
            card.append(imageDiv)
            cardbody.append(Brand)
            cardbody.append(About)
            cardbody.append(Price)
            card.append(cardbody)
          
             return card;
          
          }