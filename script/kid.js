let productContainer=document.getElementById("displaySection");
let filterContainer=document.getElementById("filterSection")
let sortby=document.getElementById("sortby")
let Paginate=document.getElementById("Pagination")
let CART= JSON.parse(localStorage.getItem("Cart")) ||[];
let WISH=JSON.parse(localStorage.getItem("wishlist"))||[];

window.addEventListener("load",()=>{
    fetchedData();
  })
//   fetchedData();
  function fetchedData(page){
    fetch(`https://mockapi-7431.onrender.com/products?category=Kids&_limit=10&_page=${page}`)
    
     .then((res)=>{
      let total=res.headers.get("X-Total-Count")
      let ButtonNumber=Math.ceil(total/10)
      Paginate.innerHTML=null;
      for(let i=1;i<=ButtonNumber;i++){
      let displaybtn=getAsButton(i,i)
      Paginate.append(displaybtn)
  }
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
            
            let btn=document.createElement("button");
            btn.classList.add("btn")
            btn.innerText="Add to WISHLIST";
            btn.addEventListener("click",()=>{
               
                    WISH.push((element))
                    console.log(WISH)
                    localStorage.setItem("wishlist",JSON.stringify(WISH))
                    alert("product added to Wishlist")
                
            })
          
          
            let Id=document.createElement("div")
            Id.setAttribute("data-id",id)
          
            card.append(imageDiv)
            cardbody.append(Brand)
            cardbody.append(About)
            cardbody.append(Price)
            cardbody.append(btn)
            card.append(cardbody)
          
             return card;
          
          }
          // ------------------------------------filter--------------------------------------------------

          const checkboxes = document.querySelectorAll(".brand");


          // loop through the checkboxes and add an event listener to each one
          checkboxes.forEach(function(ele) {
            ele.addEventListener('change', function() {
              // uncheck all the checkboxes
              checkboxes.forEach(function(ele) {
                ele.checked = false;
              });
        
              ele.checked = true;
              console.log(ele.value)
  
  
              function fetchedData(ele){
                  console.log(ele.value)
                  fetch(`https://mockapi-7431.onrender.com/products?brand=${ele.value}&category=Kids`)
                  
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
                  
                  fetchedData(ele)
  
               });
  
              
          });
   // <------------------------------------------------------filter by pricerange-------------------------------------------------------------->
   const checkboxes1 = document.querySelectorAll(".pricevalue");
   checkboxes1.forEach(function(element) {
      element.addEventListener('change', function() {
        // uncheck all the checkboxes
        checkboxes1.forEach(function(element) {
          element.checked = false;
        });
  
        element.checked = true;
        console.log(element.value)
        
        
        function fetchedData(element){
          console.log(element.value)
          fetch(`https://mockapi-7431.onrender.com/products?price_lte=${element.value}&category=Kids`)
          
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
          
          fetchedData(element)
  
       });
        
    });
  //   <----------------------------------------------sorting------------------------------------------------------>
  sortby.addEventListener("change",()=>{
      if(sortby.value=="lowtohigh"){
   
          fetch(`https://mockapi-7431.onrender.com/products?_sort=price&_order=asc&category=Kids`)
    
          .then((res)=>{
           return res.json();
          })
         
          .then((data)=>{
           console.log(data);
             let cardlist= getCardList(data)
              productContainer.innerHTML=null;
              productContainer.append(cardlist)
          })
  
      }else{
          fetch(`https://mockapi-7431.onrender.com/products?_sort=price&_order=desc&category=Kids`)
    
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
      
    
    })
      // <----------------------------------------Pagination-------------------------------------------------------------->
   function getAsButton(text,dataId){
    let Paginationbtn=document.createElement("button")
    Paginationbtn.setAttribute("data-id",dataId);
    Paginationbtn.classList.add("pagination-button")
    Paginationbtn.setAttribute("data-page-number",dataId)
    Paginationbtn.innerText=text;
    Paginationbtn.addEventListener("click",(e)=>{
      fetchedData(e.target.dataset.id)
      console.log(e.target.dataset.id)
      Paginationbtn.style.backgroundColor="black"
      Paginationbtn.style.color="white"
    })
    return Paginationbtn;
  }