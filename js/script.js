 function validateForm(){
            const Email = document.getElementById("email").value;
            const Product = document.getElementById("productsSelector").value;
            const ProductID = document.getElementById("productid").value;
            const Amount = document.getElementById("amountList").value;

            // if there is no email an alert message will pop out
            if(Email === "" || product === "" || ProductID === "" || Amount === ""){
                alert("Form Not Completed");
                return false;
            }
            if (!Email.includes("@")) {
                alert("Your Email is in the Wrong Format");
                return false;
            } 
         
             displayFormDetails({ Email, Product, ProductID, Amount });
             
                alert("Form Submitted!✅");
               
                            return false;
            

                
        }
        function displayFormDetails(details) {
    const container = document.getElementById("results");
   
    // Clear previous results
    container.innerHTML = "";

    // Create a p tag and ul and a button
    const ul = document.createElement("ul");

    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    li3.textContent = `(Click on the container to close)❌`;
    li3.style.color = "black";
    li3.style.fontSize = "large";
    li2.style.color = "black";
    li2.textContent = `Details Of Order:`;
    ul.style.listStyle = "none";
       
    ul.appendChild(li3);
     ul.appendChild(li2);
     
    for (let key in details) {
        const li = document.createElement("li");
        ul.style.listStyle = "none";
        container.style.display = "flex";
        li.textContent = `${key}: ${details[key]}`;
        ul.appendChild(li);
    }
    
    container.addEventListener("click", () => {
      container.style.display = "none";
    })

    container.appendChild(ul);
}

        
// instances
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const price = document.getElementById('price');
const product = document.getElementById('Product');
const button = document.getElementById("submit");
const PName = document.getElementById("Title");
const Name = document.getElementById("Name");
const Search = document.getElementById("Input");



// 1. Get the gallery container
const gallery = document.getElementById("gallery");

// 2. List of image paths
const imagePaths = [
   
     {src: "Images/art2.jpg",title:"Stools",name: "Lozi Stool", alt:"Image of a chair",id:"st2",price: "1200"},
     {src: "Images/art.jpg" ,title:"Stools" ,name: "Cameron Stool", alt:"Image of a chair",id:"st",price: "1100"},
     {src: "Images/art3.jpg",title:"Stools", name: "Tonga Stool", alt:"Image of a chair",id:"st3",price: "700"},
     {src: "Images/art4.webp",title:"Stools", name: "Cameron Stool", alt:"Image of a chair",id:"st4",price: "900"},
     {src: "Images/art5.jpg",title:"Stools",  name: "Cameron Stool", alt:"Image of a chair",id:"st5",price: "800"},
     {src: "Images/b2.jpg",title:"Stools" , name: "Sunufu Stool", alt:"Image of a Basket",id:"B2",price: "750"},
     {src: "Images/b3.webp",title:"Baskets", name: "Tonga Basket", alt:"Image of a Basket",id:"B3",price: "600"},
     {src: "Images/b4.webp",title:"Baskets",  name: "Buyera Basket", alt:"Image of a Basket",id:"B4",price: "1500"},
     {src: "Images/Tg.webp",title:"Baskets" , name: "Tonga Basket" , alt:"Image of a Basket",id:"B",price: "400"},
     {src: "Images/t (4).jpg",title:"Baskets" , name: "Kenya Basket", alt:"Image of a Basket" ,id:"B5",price: "550" },
     {src: "Images/tr (3).jpg",title:"Baskets" , name: "Zambia Basket", alt:"Image of a Basket",id:"B6",price: "650"},
     {src: "Images/tr (1).jpg",title:"Dolls", name: "Cameron Doll", alt:"Image of a Doll", id:"D1",price: "450"},
     {src: "Images/tr (5).jpg" ,title:"Dolls" ,name: "Cameron Doll", alt:"Image of a Doll", id:"D2",price: "850"},
     {src: "Images/tr (7).jpg",title:"Dolls" ,name: "Cameron Doll", alt:"Image of a Doll",id:"D3",price: "1550" },
     {src: "Images/be (4).jpg",title:"Dolls" ,name: "Cameron Doll", alt:"Image of a Doll",id:"D4",price: "1250"},
     {src: "Images/be (1).jpg",title:"Beads" ,name: "Ghana Beads", alt:"Image of a Beads",id:"Be1",price: "420"},
     {src: "Images/be (2).jpg",title:"Beads" ,name: "Ghana Beads", alt:"Image of a Beads",id:"Be2",price: "390"},
     {src: "Images/be (3).jpg",title:"Beads" , name: "Ghana Beads",alt:"Image of a Beads",id:"Be3",price: "480"},
     {src: "Images/be (5).jpg",title:"Beads" ,name: "Ghana Beads", alt:"Image of a Beads",id:"Be5",price: "350"},
     {src: "Images/nb (2).jpg",title:"Beads", name: "Emba Beads",alt:"Image of a Beads",id:"Be4",price: "950"},
     {src: "Images/nb (3).jpg",title:"Beads",name: "Emba Beads", alt:"Image of a Beads",id:"Be6",price: "730"},
     
];


const galleryContainer = document.getElementById("gallery");
const spinner = document.getElementById("spinner");

 Index = 0;
 function renderImages(images){
  galleryContainer.innerHTML = "";



  images.forEach( (image,Index) => {
const ImgDiv = document.createElement("div");

    
    ImgDiv.innerHTML = `<img src = "${image.src}" > <h2>${image.name}</h2>`;
    ImgDiv.style.boxShadow = " 2px 2px 2px black";
    ImgDiv.style.borderRadius = "5px";
    ImgDiv.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";



    ImgDiv.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src= imagePaths[Index].src;
    product.textContent =`Product Title: ${imagePaths[Index].title}`;
    Name.textContent = `Product Name: ${imagePaths[Index].name}`
    PName.textContent = `Product ID: ${imagePaths[Index].id}`;
    price.textContent = `Price: ${imagePaths[Index].price}`;
    
    closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  button.addEventListener("click", ()=> {
    window.location.href = "Order.html";
  })

  lightbox.addEventListener("click", (e) =>{
    if( e.target === lightbox){
      lightbox.style.display = "none";
    }
  })
  })
    galleryContainer.appendChild(ImgDiv);
    
  });

  
 }

 renderImages(imagePaths);

Search.addEventListener("input", () => {

  const searchTerm = Search.value.toLowerCase().trim();

   if (searchTerm === "") {
    // If search box is empty, show all images again
   renderImages(imagePaths);

    return;
  }else{
      spinner.style.display = "block";
        setTimeout(() => {

    const filteredImages = imagePaths.filter(image =>
      image.title.toLowerCase().includes(searchTerm) ||
      image.name.toLocaleLowerCase().includes(searchTerm)
    );

    renderImages(filteredImages);
    spinner.style.display = "none";
  }, 500);

  // Render filtered images temporarily

   renderImages(filteredImages);

  }

})



