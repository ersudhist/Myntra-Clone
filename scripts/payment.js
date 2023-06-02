let cartArr = JSON.parse(localStorage.getItem("cartdata"))||[]
let slide = document.getElementById("slide");
let placeorder = document.getElementById("placeorder");
let subtotal = document.getElementById("sub_total");
let shippingfee = document.getElementById("shipping_fee");
let carttotal = document.getElementById("cart_total");
let images=["../images/offer1.png","../images/offer2.png","../images/offer3.png"];
let i=0;

placeorder.addEventListener("click",()=>{
    window.location.href = "../HTML/end.html";
})
//showing offers here
showoffer(i);
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
};

showprice();
 function showprice(){
    let sum=0;
    for(let i=0;i<cartArr.length;i++){
     sum+=cartArr[i].price;
    }
    subtotal.innerText =0;
 
     let alltotal=0;
    if(sum>=500){
     shippingfee.innerText = 0;
     subtotal.innerText=sum;
     alltotal=sum;
     carttotal.innerText = sum;
    }else if(sum<500){
        subtotal.innerText=sum;
     carttotal.innerText = (sum+40);
     alltotal=(sum+40);
     shippingfee.innerText = 40;
    }
}

function showcart(){
    if(cartArr.length===0){
    subtotal.innerText = 0;
    shippingfee.innerText = 0;
    carttotal.innerText = 0;
    }
  }
showcart();




