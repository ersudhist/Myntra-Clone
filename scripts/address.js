let cartArr = JSON.parse(localStorage.getItem("cartdata"))||[]
let subtotal = document.getElementById("sub_total");
let shippingfee = document.getElementById("shipping_fee");
let carttotal = document.getElementById("cart_total");
let continuebtn = document.getElementById("placeorder");
let alladres = document.getElementById("all_address");

let form = document.querySelector("form");
let name = document.getElementById("name");
let mobile = document.getElementById("mobile");
let pincode = document.getElementById("pincode");
let area = document.getElementById("area");
let town = document.getElementById("town");
let city = document.getElementById("city");
let state = document.getElementById("state")

let allAddress=JSON.parse(localStorage.getItem("address"))||[];
form.addEventListener("submit",(e)=>{
e.preventDefault();
let obj={
    name: name.value,
    mobile: mobile.value,
    pincode: pincode.value,
    area: area.value,
    town: town.value,
    city: city.value,
    state: state.value
}
  allAddress.push(obj);
  localStorage.setItem("address",JSON.stringify(allAddress))
  showaddress();
  console.log(allAddress);
})

//showing address on address page
showaddress();
function showaddress(){
    alladres.innerHTML="";
   allAddress.forEach(element => {
    let box = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let btn = document.createElement("input");
    btn.setAttribute("type","radio");
    let name = document.createElement("p");
    name.innerText=element.name;
    let area = document.createElement("p");
    area.innerText=`${element.area}`;
    let town = document.createElement("p");
    town.innerText=`, ${element.town}`;
    let city = document.createElement("p");
    city.innerText=`, ${element.city}`;
    let state = document.createElement("p");
    state.innerText=element.state;
    let pincode = document.createElement("p");
    pincode.innerText = `-${element.pincode}`;
    let mobile = document.createElement("p");
    mobile.innerText=`Mobile: ${element.mobile}`;
    div1.append(btn,name);
    div2.append(area,town,city,state,pincode);
    box.append(div1,div2,mobile);
    alladres.append(box);
   });
}

console.log(cartArr);
//showing prise here
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

continuebtn.addEventListener("click",()=>{
    window.location.href = "../HTML/payment.html";
  })