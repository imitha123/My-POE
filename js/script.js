 function validateForm(){
            const email = document.getElementById("email").value.trim();

            // if there is no email an alert message will pop out
            if(email === ""){
                alert("No email entered, enter your email");
                return false;
            }
           else if (!email.includes("@")) {
                alert("Your is Email In Wrong Format");
                return false;
            } 
             else{
                alert("Form Submitted!😁");
                            return true;
            }
                
        }
// instances
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const price = document.getElementById('price');
const product = document.getElementById('Product');
const button = document.getElementById("submit");
const PName = document.getElementById("Name");


// 1. Get the gallery container
const gallery = document.getElementById("gallery");

// 2. List of image paths
const imagePaths = [
   
     {src: "Images/art2.jpg",title:"Stools", alt:"Image of a chair",id:"art2"},
     {src: "Images/art.jpg" ,title:"Stools" , alt:"Image of a chair",id:"art"},
     {src: "Images/art3.jpg",title:"Stools",  alt:"Image of a chair",id:"art3"},
     {src: "Images/art4.webp",title:"Stools",  alt:"Image of a chair",id:"art4"},
     {src: "Images/art5.jpg",title:"Stools",  alt:"Image of a chair",id:"art5"},
     {src: "Images/b2.jpg",title:"Baskets" , alt:"Image of a Basket",id:"B2"},
     {src: "Images/b3.webp",title:"Baskets"  , alt:"Image of a Basket",id:"B3"},
     {src: "Images/b4.webp",title:"Baskets"  , alt:"Image of a Basket",id:"B4"},
     {src: "Images/Tg.webp",title:"Baskets"  , alt:"Image of a Basket",id:"Tg"},
     {src: "Images/t (4).jpg",title:"Baskets" , alt:"Image of a Basket" ,id:"T4" },
     {src: "Images/tr (3).jpg",title:"Baskets"  , alt:"Image of a Basket",id:"Tr3"},
     {src: "Images/tr (1).jpg",title:"Dolls"  , alt:"Image of a Doll", id:"Tr1"},
     {src: "Images/tr (5).jpg" ,title:"Dolls"  , alt:"Image of a Doll", id:"Tr5"},
     {src: "Images/tr (7).jpg",title:"Dolls" , alt:"Image of a Doll",id:"Tr7" },
     {src: "Images/be (4).jpg",title:"Dolls"  , alt:"Image of a Doll",id:"Be4"},
     {src: "Images/be (1).jpg",title:"Beads" , alt:"Image of a Beads",id:"Be1"},
     {src: "Images/be (2).jpg",title:"Beads" , alt:"Image of a Beads",id:"Be2"},
     {src: "Images/be (3).jpg",title:"Beads" , alt:"Image of a Beads",id:"Be3"},
     {src: "Images/be (5).jpg",title:"Beads" , alt:"Image of a Beads",id:"Be5"},
     {src: "Images/nb (2).jpg",title:"Beads", alt:"Image of a Beads",id:"Nb2"},
     {src: "Images/nb (3).jpg",title:"Beads", alt:"Image of a Beads",id:"Nb3"},
     
];
// parallel arrays
const prices =[
   
    "R1200", "R1350","R650", "R340", "R670","R550", "R1600","R1500","R600", "R340","R300", "R500","R400", "R630","R500","R450","R300", "R300",
    "R200",
    "R300",
    "R400",
];
 const getIndex = 0;
index = 0;
imagePaths.forEach((src,index )=> {
  const img = document.createElement("img");
  img.src = src.src;                       // set the path
  img.title = src.title;                  // set its image title
  img.alt = src.alt;   
  
 
  img.addEventListener("click", () => {
   
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    price.textContent = `Price: ${prices[index]}`;
    product.textContent =`Product Name: ${imagePaths[index].title}`;
    PName.textContent = `Product ID: ${imagePaths[index].id}`;

    
  });

   button.addEventListener("click", () => {
   window.location.href = "Order.html";
});

  // set the images on the gallery container
  gallery.appendChild(img); 

});
// close the lightBox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});


