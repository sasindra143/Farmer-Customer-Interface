// JavaScript for Responsive Menu
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

// Close menu when a navigation link is clicked
function closeMenu() {
    const nav = document.querySelector('.nav-links');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
}

/*Hero-Scetiion*/

 // Fade-in effect for hero section on scroll
 document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    setTimeout(() => {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 500);
});

/*nav*/
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
function closeMenu() {
    document.querySelector(".nav-links").classList.remove("active");
}

/*product*/
  // Sample Product Data
  const products = [
    { name: "Organic Apples", farmer: "Suresh", location: "Himachal Pradesh", price: "₹120/kg", category: "organic", img: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741200701/DALL_E_2025-03-06_00.21.29_-_A_realistic_image_of_fresh_red_apples_with_a_glossy_surface_arranged_on_a_rustic_wooden_table._Some_apples_are_whole_while_others_are_sliced_to_rev_upswbq.webp" },
    { name: "Fresh Tomatoes", farmer: "Rajesh", location: "Maharashtra", price: "₹40/kg", category: "vegetables", img: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741193283/DALL_E_2025-03-05_21.54.16_-_A_realistic_image_of_fresh_ripe_tomatoes_on_a_wooden_table_with_some_tomatoes_still_attached_to_the_vine._The_tomatoes_are_bright_red_with_a_few_sl_xzjt7b.webp" },
    { name: "Pure Cow Milk", farmer: "Kiran", location: "Punjab", price: "₹50/litre", category: "dairy", img: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741200622/DALL_E_2025-03-06_00.19.58_-_A_realistic_image_of_a_glass_of_fresh_cow_milk_placed_on_a_wooden_table_with_a_traditional_milk_jug_beside_it._In_the_background_a_grazing_cow_in_a_abq5ld.webp" },
    { name: "Basmati Rice", farmer: "Arjun", location: "Uttar Pradesh", price: "₹80/kg", category: "grains", img: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741200939/DALL_E_2025-03-06_00.25.25_-_A_realistic_image_of_a_bowl_of_basmati_rice_with_long_slender_grains_that_are_fluffy_and_well-cooked._The_rice_is_placed_on_a_rustic_wooden_table_w_afvf5t.webp" },
    { name: "Carrots", farmer: "Rajesh", location: "Maharashtra", price: "₹40/kg", category: "vegetables", img: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741197822/DALL_E_2025-03-05_23.33.25_-_A_realistic_image_of_a_bunch_of_fresh_vibrant_orange_carrots_with_lush_green_tops_arranged_on_a_wooden_surface._Some_carrots_are_whole_while_others_o1tnid.webp" },
    { name: "Organic Carrots", farmer: "Manoj", location: "Rajasthan", price: "₹60/kg", category: "organic", img: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741197822/DALL_E_2025-03-05_23.33.25_-_A_realistic_image_of_a_bunch_of_fresh_vibrant_orange_carrots_with_lush_green_tops_arranged_on_a_wooden_surface._Some_carrots_are_whole_while_others_o1tnid.webp" },
    { name: "Banana", farmer: "Suresh", location: "Himachal Pradesh", price: "₹120/kg", category: "fruits", img: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741197934/DALL_E_2025-03-05_23.34.59_-_A_realistic_image_of_a_bunch_of_ripe_yellow_bananas_with_a_few_brown_spots_placed_on_a_wooden_table._One_banana_is_peeled_halfway_to_reveal_its_soft_imnv26.webp" },
    { name: "Honey", farmer: "Manoj", location: "AndhraPradesh", price: "₹560/kg", category: "organic", img:"https://res.cloudinary.com/dvknx0hpm/image/upload/v1741326132/DALL_E_2025-03-07_11.11.25_-_A_realistic_and_vibrant_illustration_of_fresh_honey_being_poured_from_a_honey_dipper_into_a_glass_jar._The_scene_should_include_a_beehive_in_the_backg_y5jbak.webp"},
    { name: "Brinjal", farmer: "Rajesh", location: "Maharashtra", price: "₹40/kg", category: "vegetables", img:"https://res.cloudinary.com/dvknx0hpm/image/upload/v1741326125/DALL_E_2025-03-07_11.11.14_-_A_realistic_and_vibrant_illustration_of_fresh_brinjal_eggplant_growing_in_a_lush_green_farm._The_image_should_feature_healthy_brinjal_plants_with_ri_ganro9.webp"},
    { name: "Beans", farmer: "Rajesh", location: "Maharashtra", price: "₹40/kg", category: "vegetables", img:"https://res.cloudinary.com/dvknx0hpm/image/upload/v1741326387/DALL_E_2025-03-07_11.16.13_-_A_realistic_and_vibrant_illustration_of_fresh_green_beans_growing_on_a_farm._The_image_should_showcase_healthy_bean_plants_with_bright_green_pods_hang_lgy0pm.webp"},
    { name: "Water Melon", farmer: "Suresh", location: "Himachal Pradesh", price: "₹120/kg", category: "fruits", img:"https://res.cloudinary.com/dvknx0hpm/image/upload/v1741326127/DALL_E_2025-03-07_11.11.21_-_A_realistic_and_vibrant_illustration_of_fresh_watermelons_growing_in_a_lush_green_farm._The_image_should_showcase_ripe_juicy_watermelons_on_the_vine_nhwfih.webp"},
    { name: "Pure Buffalo Milk", farmer: "Kiran", location: "Punjab", price: "₹70/litre", category: "dairy", img:"https://res.cloudinary.com/dvknx0hpm/image/upload/v1741326909/DALL_E_2025-03-07_11.24.55_-_A_realistic_and_vibrant_illustration_of_fresh_buffalo_milk_being_poured_into_a_traditional_clay_pot._The_image_should_feature_a_healthy_buffalo_in_the_nuviuf.webp"},
    {name: "Red Gram", farmer: "Arjun", location: "Uttar Pradesh", price: "₹180/kg", category: "grains", img:"https://res.cloudinary.com/dvknx0hpm/image/upload/v1741327029/DALL_E_2025-03-07_11.26.41_-_A_realistic_and_vibrant_illustration_of_fresh_red_gram_pigeon_pea_plants_growing_in_a_lush_green_farm._The_image_should_showcase_healthy_plants_with_ivudpt.webp"},
    { name: "Pine apple", farmer: "Suresh", location: "Himachal Pradesh", price: "₹120/kg", category: "fruits", img:"https://res.cloudinary.com/dvknx0hpm/image/upload/v1741326645/DALL_E_2025-03-07_11.20.24_-_A_realistic_and_vibrant_illustration_of_fresh_pineapples_growing_in_a_tropical_farm._The_image_should_feature_ripe_golden_pineapples_with_spiky_green_xydv3g.webp"}
];

// Generate 50 Products (Repeating Sample Data)
let allProducts = [];
for (let i = 0; i < 50; i++) {
    allProducts.push({ ...products[i % products.length], id: i });
}


/*
// Display Products
function displayProducts(productList) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    productList.forEach(product => {
        container.innerHTML += `
            <div class="product-card" data-category="${product.category}">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>👨‍🌾 Farmer: ${product.farmer} (${product.location})</p>
                <p>💰 ${product.price}</p>
                <div class="button-container">
                    
                    <button class="buy-btn">Buy Now</button>

                    
                    <button class="cart-btn" onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</button>
                </div>
            </div>
        `;
    });
}*/
function displayProducts(productList) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    productList.forEach(product => {
        container.innerHTML += `
            <div class="product-card" data-category="${product.category}">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>👨‍🌾 Farmer: ${product.farmer} (${product.location})</p>
                <p>💰 ${product.price}</p>
                <div class="button-container">
                    <button class="buy-btn" onclick="redirectToPayment('${product.name}', '${product.price}')">Buy Now</button>
                    <button class="cart-btn" onclick="addToWishlist('${product.name}', '${product.price}')">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

// Redirect to Payment Page
function redirectToPayment(name, price) {
    window.location.href = `paymentsystem.html?product=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;
}

// Add Product to Wishlist and Redirect to Customer Dashboard
function addToWishlist(name, price) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push({ name, price });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.location.href = "customer.html";
}

// Initial Display of All Products
displayProducts(allProducts);


// Filter Products by Category
function filterProducts(category) {
    if (category === "all") {
        displayProducts(allProducts);
    } else {
        const filteredProducts = allProducts.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Cart Functionality
let cart = [];
function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} added to cart!`);
    console.log("Cart:", cart);
}

// Initial Display of All Products
displayProducts(allProducts);


 // Blog data
 const blogData = [
    {
        title: "🌿 Organic Farming Benefits",
        content: "Organic farming avoids synthetic chemicals, promotes biodiversity, and ensures healthier food for consumers.",
        image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741323752/94d4f2e7-f269-4b20-abb6-00baceec0a11_tjrcas.webp",
        video: "https://youtube.com/shorts/HSoFvkRreGY?si=deCsUQ9M0I_z5ME1"
    },
    {
        title: "🚜 Success Story: A Farmer’s Journey",
        content: "Ramesh, a small-scale farmer, struggled with middlemen taking a big cut of his earnings. Now he earns 3x more through direct sales.",
        image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741323942/DALL_E_2025-03-07_10.34.34_-_A_heartwarming_illustration_of_a_farmer_s_success_story._The_image_should_depict_a_farmer_standing_proudly_in_a_lush_green_field_holding_freshly_harv_kfuzgo.webp",
        video: ""
    },
    {
        title: "🌍 Sustainable Agriculture",
        content: "Sustainable farming practices help conserve natural resources and reduce pollution. Here’s an artistic illustration representing sustainable agriculture, showcasing eco-friendly farming practices and environmental harmony.  🌱🌍",
        image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741323907/DALL_E_2025-03-07_10.34.40_-_An_artistic_and_educational_illustration_representing_sustainable_agriculture._The_image_should_showcase_a_vibrant_farm_with_eco-friendly_practices_su_gulkhf.webp",
        video: ""
    },
    {
        title: "Best Crops to Grow This SeasonBest Crops to Grow This Season",
        content: "Sustainable farming practices help conserve natural resources and reduce pollution.A vibrant illustration showcasing the best crops to grow this season, highlighting sustainable and seasonal farming.",
        image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741324658/DALL_E_2025-03-07_10.47.08_-_An_informative_and_visually_appealing_illustration_showcasing_the_best_crops_to_grow_this_season._The_image_should_feature_a_lush_farm_divided_into_se_arukj8.webp ",
        video: ""
    },
    {
        title: "🐝 The Role of Bees in Farming",
        content: "Sustainable farming practices help conserve natural resources and reduce pollution.",
        image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741325351/DALL_E_2025-03-07_10.58.54_-_An_educational_and_artistic_illustration_showcasing_the_vital_role_of_bees_in_farming._The_image_should_feature_a_thriving_farm_with_blooming_crops_b_lc0y8t.webp",
        video: ""
    },
    {
        title: "🌍 Farm-to-Table Movement",
        content: "Sustainable farming practices help conserve natural resources and reduce pollution.",
        image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1741325452/DALL_E_2025-03-07_11.00.39_-_An_inspiring_and_educational_illustration_representing_the_Farm-to-Table_movement._The_image_should_depict_a_direct_connection_between_a_sustainable_f_zzd7vu.webp",
        video: ""
    }
];

// Open blog modal
function openBlog(index) {
    document.getElementById("blog-title").innerText = blogData[index].title;
    document.getElementById("blog-content").innerText = blogData[index].content;
    document.getElementById("blog-image").src = blogData[index].image;
    document.getElementById("blog-modal").style.display = "block";
}

// Close blog modal
function closeBlog() {
    document.getElementById("blog-modal").style.display = "none";
}



/*cart*/

function addToCart() {
    window.location.href = "customer.html"; // Redirect to customer page
}

 // FAQ toggle functionality
 const faqQuestions = document.querySelectorAll('.faq-question');
 faqQuestions.forEach((question) => {
     question.addEventListener('click', () => {
         const answer = question.nextElementSibling;
         answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
     });
 });

 // Live Chat Popup
 const liveChatBtn = document.getElementById('live-chat-btn');
 const chatPopup = document.getElementById('chat-popup');
 const closeChatBtn = document.getElementById('close-chat');

 liveChatBtn.addEventListener('click', () => {
     chatPopup.style.display = 'block';
 });

 closeChatBtn.addEventListener('click', () => {
     chatPopup.style.display = 'none';
 });

 // Send message functionality (just for show)
 const sendMsgBtn = document.getElementById('send-msg');
 const chatMsgInput = document.getElementById('chat-msg');

 sendMsgBtn.addEventListener('click', () => {
     if (chatMsgInput.value.trim()) {
         alert('Your message has been sent!');
         chatMsgInput.value = '';  // Clear input after sending
     } else {
         alert('Please type a message.');
     }
 });