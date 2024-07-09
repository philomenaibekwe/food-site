 const dishes = [
    {
        name: "Bibimbap",
        cuisine: "Korean",
        description: "A vibrant dish featuring a colorful mix of rice, sautéed vegetables, gochujang (chilli paste), and a fried egg.",
        ingredients: ["Rice", "Assorted Vegetables", "Gochujang", "Egg"],
        image: "https://th.bing.com/th/id/OIP.pJRVwXcbKuPQFrHrvoehCAHaFk?rs=1&pid=ImgDetMainhttps://chefsheilla.com/wp-content/uploads/2021/01/Korean-Beef-Bibimbap-2-1-scaled.jpg",
        price: 25.99,
        spicy: false,
        rating: 4.8
    },
    {
        name: "Bulgogi",
        cuisine: "Korean",
        description: "Thinly sliced marinated beef or pork, grilled to perfection. Sweet, savory, and utterly delicious.",
        ingredients: ["Beef", "Marinade (Soy Sauce, Sugar, Garlic, Sesame Oil)", "Vegetables"],
        image: "https://i.pinimg.com/originals/6f/00/24/6f002428a0f12087f878f90cd24e728b.jpg",
        price: 14.99,
        spicy: true,
        rating: 4.5
    },
    {
        name: "Jjajangmyeon",
        cuisine: "Korean",
        description: "Noodles in rich black bean sauce, often topped with diced vegetables and meat.",
        ingredients: ["Noodles", "Black Bean Sauce", "Vegetables", "Meat"],
        image: "https://i.redd.it/6sd0m8nh8a741.jpg",
        price: 25.99,
        spicy: false,
        rating: 4.8
    },
    {
        name: "Mapo Tofu",
        cuisine: "Chinese",
        description: "A spicy Sichuan dish made with tofu, minced pork, and fermented black beans.",
        ingredients: ["Tofu", "Minced Pork", "Chili Bean Paste", "Sichuan Peppercorns"],
        image: "https://www.chinasichuanfood.com/wp-content/uploads/2019/01/mapo-tofu-1.jpg",
        price: 14.99,
        spicy: true,
        rating: 4.5
    },
    {
        name: "Pad Thai",
        cuisine: "Thai",
        description: "Stir-fried rice noodles with shrimp, tofu, bean sprouts, peanuts, and lime.",
        ingredients: ["Rice Noodles", "Shrimp", "Tofu", "Bean Sprouts", "Peanuts"],
        image: "https://www.eatwell101.com/wp-content/uploads/2019/04/Pad-Thai-recipe-2.jpg",
        price: 18.99,
        spicy: false,
        rating: 4.7
    },
    {
        name: "Margherita Pizza",
        cuisine: "Italian",
        description: "Classic pizza with tomato sauce, fresh mozzarella, basil, and olive oil.",
        ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Fresh Basil"],
        image: "https://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg",
        price: 12.99,
        spicy: true,
        rating: 4.6
    }    
];

const productList = document.querySelector('.product-list');

productList.innerText = '';

const productdetails = document.querySelector('div.product-details')
productdetails.innerText='';

const displayDishDetails = (dish) => {
    const detailsContainer = document.createElement('div');
    productdetails.innerHTML = `
    <img src="${dish.image}" alt="${dish.name}" style="max-width: 200px;">
        Name: ${dish.name}
        cuisine: ${dish.cuisine}
        price: $${dish.price}
        rating: ${dish.rating}
     `;
     productdetails.setAttribute("style","border: 3px solid black;") 
     return detailsContainer;
    }

    const imageclick = (idx) =>{
        displayDishDetails(dishes[idx])
    }

    const createProductListItem = (dish,index) => {
        // All operations on div used as list item
        const productListItem = document.createElement('div'); // <div></div>
        productListItem.setAttribute('class', 'product-list-item');
        productListItem.setAttribute('onclick', `imageclick(${index})`)
    
        // All operation on img 
        const productImageSection = document.createElement('img') //<img />
        productImageSection.setAttribute('src', dish.image)
        productImageSection.setAttribute('class', 'product-image')
    
        
        // All operation on Paragragh
        const productName = document.createElement('p'); // <p></p>
        productName.innerText =
        `Name: ${dish.name}, 
            cuisine: ${dish.cuisine},
            price: $${dish.price},
            rating: ${dish.rating},
            `;
            
            productListItem.appendChild(productImageSection);
            productListItem.appendChild(productName);
    
    
            productListItem.onclick = function() {
                // Remove 'selected' class from all list items
                document.querySelectorAll('.product-list-item ').forEach(productListitem => {
                    productListitem.classList.remove('selected');
                });
                productListItem.classList.add('selected');
                displayDishDetails(dish);
            };
    
            
            productList.appendChild(productListItem);
    return productListItem;        
    
     }
    
    const renderProductList = (filteredDishes) => {
        const productList = document.querySelector('.product-list');
        productList.innerHTML = '';
    
        filteredDishes.forEach((dish,i) => {
            createProductListItem(dish,i)
                }) ;
    };
    // Function to filter dishes
    const filterDishes = () => {
        
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const filteredDishes = dishes.filter(dish => 
            dish.name.toLowerCase().includes(searchTerm) ||
            dish.cuisine.toLowerCase().includes(searchTerm) ||
            dish.description.toLowerCase().includes(searchTerm) ||
            dish.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
        );
        renderProductList(filteredDishes);
    };

// Initial rendering of product list
renderProductList(dishes);

// Add event listener to search input
document.getElementById('search').addEventListener('input', filterDishes);
document.getElementById('searchButton').addEventListener('click', filterDishes);


let navLinks = document.getElementById("navLinks")

   function showMenu(){
    navLinks.style.right ="0";
   }
   function hideMenu(){
    navLinks.style.right="-200px";
   }














