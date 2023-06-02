let cartArr = JSON.parse(localStorage.getItem("cartdata"))||[]
console.log(cartArr);

let slide = document.getElementById("slide");
let images=["../images/offer1.png","../images/offer2.png","../images/offer3.png"];
let i=0;
showoffer(i);

//showing offers here
function showoffer(){
    slide.innerHTML="";
    let button1 = document.createElement("button");
    button1.innerText="<";
    button1.addEventListener("click",()=>{
        
        if(i==0){
            i=images.length-1;
            showoffer(i);
        }else{
            i--;
            showoffer(i);
        }
        
    })
    let button2 = document.createElement("button");
    button2.innerText=">";
  button2.addEventListener("click",()=>{
    console.log(i)
    if(i==images.length-1){
        i=0;
        showoffer(i);
    }else{
        i++;
      showoffer(i);
    }
     
  })

   let image=document.createElement("img");
    image.setAttribute("src",images[i]);


    slide.append(button1,image,button2);
}



//showing all product in cart page

let totalitems = document.createElement("totalitems");
let allitems = document.getElementById("items");
let subtotal = document.getElementById("sub_total");
let discount = document.getElementById("discount");
let promoButton = document.getElementById("promoButton");
let placeorder = document.getElementById("placeorder");
let carttotal = document.getElementById("cart_total");
let shippingfee = document.getElementById("shipping_fee");
let inbag = document.getElementById("inbag");
let couponcode = document.getElementById("couponcode");

showitem();
 function showitem(){
    allitems.innerHTML="";
    cartArr.forEach(function(ele) {
     let item = document.createElement("div");
      let image = document.createElement("img");
      image.setAttribute("src",ele.image);
      let div = document.createElement("div");
       let brand = document.createElement("h4");
       brand.innerText=ele.brand;
       let about = document.createElement("p");
       about.innerText=ele.about;
       let category = document.createElement("p");
       category.innerText= ele.category;
       let price = document.createElement("h4");
       price.innerText = `₹${ele.price}`;
       
       let button = document.createElement("button");
       button.innerText="X";
        button.addEventListener("click",()=>{
            Cart = cartArr.filter((element)=>{
            return element.id!==ele.id;
        })
        localStorage.setItem("cartdata",JSON.stringify(Cart));
        showitem();
        showcart();
        })

       div.append(brand,about,category,price);
      item.append(image,div,button);
     allitems.append(item);
    });

    //calculating price here
    //calculate total price here
   let sum=0;
   for(let i=0;i<cartArr.length;i++){
    sum+=cartArr[i].price;
    console.log(sum)
   }
   console.log(cartArr[0].price)
   subtotal.innerText = +sum;

    let alltotal=0;
   if(sum>=500){
    shippingfee.innerText = 0;
    alltotal=sum;
    carttotal.innerText = sum;
   }else if(sum<500){
    carttotal.innerText = (sum+40);
    alltotal=(sum+40);
    shippingfee.innerText = 40;
   }

    //applying promocode here
    promoButton.addEventListener("click",()=>{
        if(couponcode.value=="flat50"){
            carttotal.innerText = (alltotal-50);
            discount.innerText = 50;
        }
        else if(couponcode.value=="flat100"){
            carttotal.innerText = (alltotal-100);
            discount.innerText = 100;
        }
        else if(couponcode.value==""){
            carttotal.innerText = alltotal;
            discount.innerText=0;
        }
        else{
            alert("Enter Valid Promo Code");
        }
       })
    
 }

 function showcart(){
    if(cartArr.length===0){
     totalitems.innerText = "";
    inbag.innerText = "Bag Is Empety! Add Some Items in the bag"
    subtotal.innerText = 0;
    discount.innerText = 0;
    shippingfee.innerText = 0;
    carttotal.innerText = 0;
   }else if(cartArr.length>0){
    totalitems.innerText = cartArr.length;
   }
  }
  showcart();

  placeorder.addEventListener("click",()=>{
    window.location.href = "../HTML/address.html";
  })
