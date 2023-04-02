let slide = document.getElementById("slide");
let placeorder = document.getElementById("placeorder");
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




