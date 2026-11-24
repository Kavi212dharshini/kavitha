const products = [
    {
        id: 1,
        name: "Floral Summer Dress",
        price: 899,
        category: "Women",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700"
    },
    {
        id: 2,
        name: "Casual Men's Shirt",
        price: 699,
        category: "Men",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=700"
    },
    {
        id: 3,
        name: "Classic Nude Heels",
        price: 1299,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700"
    },
    {
        id: 4,
        name: "Everyday Handbag",
        price: 999,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700"
    },
    {
        id: 5,
        name: "Women's Casual Outfit",
        price: 1099,
        category: "Women",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700"
    },
    {
        id: 6,
        name: "Men's Fashion Jacket",
        price: 1499,
        category: "Men",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700"
    },
    {
        id: 7,
        name: "Classic Sneakers",
        price: 1599,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
    },
    {
        id: 8,
        name: "Retro Sunglasses",
        price: 499,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700"
    },
    {
        id: 9,
        name: "Kids' Everyday T-shirt",
        price: 399,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700"
    },
    {
        id: 10,
        name: "Kids' Cozy Hoodie",
        price: 799,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=700"
    },
    {
        id: 11,
        name: "Classic Denim Jeans",
        price: 1199,
        category: "Men",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=700"
    },
    {
        id: 12,
        name: "Casual Cotton T-shirt",
        price: 499,
        category: "Men",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700"
    },
    {
        id: 13,
        name: "Lightweight Bomber Jacket",
        price: 1799,
        category: "Men",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700"
    },
    {
        id: 14,
        name: "Soft Knit Cardigan",
        price: 1399,
        category: "Women",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700"
    },
    {
        id: 15,
        name: "Everyday Wide-Leg Trousers",
        price: 1199,
        category: "Women",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700"
    },
    {
        id: 16,
        name: "Weekend Denim Jacket",
        price: 1699,
        category: "Women",
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=700"
    },
    {
        id: 17,
        name: "Kids' Playtime Overalls",
        price: 899,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700"
    },
    {
        id: 18,
        name: "Kids' Colourful Sneakers",
        price: 999,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=700"
    },
    {
        id: 19,
        name: "Kids' Printed Dress",
        price: 749,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=700"
    },
    {
        id: 20,
        name: "Minimalist Wristwatch",
        price: 1299,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
    },
    {
        id: 21,
        name: "Everyday Crossbody Bag",
        price: 1199,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700"
    },
    {
        id: 22,
        name: "Classic Leather Belt",
        price: 599,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700"
    },
    {
        id: 23,
        name: "Men's Linen Polo",
        price: 899,
        category: "Men",
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=700"
    },
    {
        id: 24,
        name: "Men's Everyday Chinos",
        price: 1099,
        category: "Men",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=700"
    },
    {
        id: 25,
        name: "Women's Satin Blouse",
        price: 999,
        category: "Women",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700"
    },
    {
        id: 26,
        name: "Women's Everyday Skirt",
        price: 899,
        category: "Women",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=700"
    },
    {
        id: 27,
        name: "Kids' Colourblock Sweatshirt",
        price: 699,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=700"
    },
    {
        id: 28,
        name: "Kids' Weekend Outfit",
        price: 849,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700"
    },
    {
        id: 29,
        name: "Everyday Tote Bag",
        price: 899,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=700"
    },
    {
        id: 30,
        name: "Classic Hoop Earrings",
        price: 399,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700"
    },
    {
        id: 31,
        name: "Men's Classic Linen Shirt",
        price: 999,
        category: "Men",
        image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=700"
    },
    {
        id: 32,
        name: "Men's Relaxed Sweatshirt",
        price: 1199,
        category: "Men",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700"
    },
    {
        id: 33,
        name: "Men's Smart Casual Blazer",
        price: 2199,
        category: "Men",
        image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=700"
    },
    {
        id: 34,
        name: "Women's Midi Wrap Dress",
        price: 1499,
        category: "Women",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700"
    },
    {
        id: 35,
        name: "Women's Cropped Knit Top",
        price: 799,
        category: "Women",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700"
    },
    {
        id: 36,
        name: "Women's Tailored Blazer",
        price: 1899,
        category: "Women",
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=700"
    },
    {
        id: 37,
        name: "Kids' Rain Jacket",
        price: 1099,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=700"
    },
    {
        id: 38,
        name: "Kids' Graphic T-shirt",
        price: 499,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1537655780520-1e392ead81f2?w=700"
    },
    {
        id: 39,
        name: "Kids' Party Outfit",
        price: 1199,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=700"
    },
    {
        id: 40,
        name: "Slim Leather Wallet",
        price: 699,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700"
    },
    {
        id: 41,
        name: "Gold Pendant Necklace",
        price: 799,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700"
    },
    {
        id: 42,
        name: "Everyday Travel Backpack",
        price: 1499,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=700"
    },
    {
        id: 43,
        name: "Textured Ceramic Vase",
        price: 899,
        category: "Home",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=700"
    },
    {
        id: 44,
        name: "Soft Cotton Cushion Cover",
        price: 599,
        category: "Home",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=700"
    },
    {
        id: 45,
        name: "Scented Soy Candle",
        price: 499,
        category: "Home",
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=700"
    },
    {
        id: 46,
        name: "Woven Table Runner",
        price: 749,
        category: "Home",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700"
    },
    {
        id: 47,
        name: "Daily Glow Face Serum",
        price: 699,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700"
    },
    {
        id: 48,
        name: "Velvet Matte Lipstick",
        price: 399,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=700"
    },
    {
        id: 49,
        name: "Hydrating Face Cream",
        price: 549,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=700"
    },
    {
        id: 50,
        name: "Everyday Makeup Brush Set",
        price: 799,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700"
    },
    {
        id: 51,
        name: "Gemstone Cocktail Ring",
        price: 999,
        category: "Jewellery",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700"
    },
    {
        id: 52,
        name: "Engraved Silver Cuff Bracelet",
        price: 499,
        category: "Jewellery",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=700"
    },
    {
        id: 53,
        name: "Traditional Kundan Anklet",
        price: 699,
        category: "Jewellery",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700"
    },
    {
        id: 54,
        name: "Floral Statement Brooch",
        price: 599,
        category: "Jewellery",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700"
    }
];

function loadCart() {
    try {
        const savedCart = JSON.parse(localStorage.getItem("shoppyCart") || "[]");

        if (!Array.isArray(savedCart)) {
            return [];
        }

        return savedCart.filter(item =>
            item &&
            Number.isInteger(item.id) &&
            products.some(product => product.id === item.id) &&
            Number.isInteger(item.quantity) &&
            item.quantity > 0
        );
    } catch (error) {
        console.error("Could not read the saved cart.", error);
        return [];
    }
}

let cart = loadCart();

function saveCart() {
    try {
        localStorage.setItem("shoppyCart", JSON.stringify(cart));
    } catch (error) {
        console.error("Could not save the cart.", error);
    }
}

function money(amount) {
    return `₹${amount.toLocaleString("en-IN")}`;
}

function productCard(product) {
    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return `
        <article class="product-card">
            <div class="product-image-wrap">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-tag">${product.category}</span>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${money(product.price)}</p>
                <div class="product-cart-control">
                    <span>Add to cart</span>
                    <div class="quantity product-quantity" aria-label="Quantity for ${product.name}">
                        <button type="button" aria-label="Decrease ${product.name} quantity"
                            onclick="changeQuantity(${product.id}, -1)" ${quantity === 0 ? "disabled" : ""}>−</button>
                        <span>${quantity}</span>
                        <button type="button" aria-label="Add one ${product.name}"
                            onclick="addToCart(${product.id})">+</button>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function getCartCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function renderCartCount() {
    const count = document.getElementById("cart-count");
    if (count) {
        count.textContent = getCartCount();
    }
}

function addToCart(id) {
    const product = products.find(item => item.id === Number(id));
    if (!product) {
        console.error(`Cannot add unknown product ${id} to the cart.`);
        return;
    }

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: product.id, quantity: 1 });
    }

    saveCart();
    renderCartCount();
    renderProducts();
}

function changeQuantity(id, amount) {
    const item = cart.find(entry => entry.id === Number(id));
    if (!item) {
        return;
    }

    item.quantity += amount;
    if (item.quantity <= 0) {
        cart = cart.filter(entry => entry.id !== Number(id));
    }

    saveCart();
    renderProducts();
    renderCart();
}

function removeCartItem(id) {
    cart = cart.filter(item => item.id !== Number(id));
    saveCart();
    renderProducts();
    renderCart();
}

function renderCart() {
    renderCartCount();
    const itemsContainer = document.getElementById("cart-items");
    if (!itemsContainer) {
        return;
    }

    const cartProducts = cart.map(item => {
        const product = products.find(entry => entry.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
    }).filter(Boolean);

    if (!cartProducts.length) {
        itemsContainer.innerHTML = `
            <div class="empty-cart">
                <span class="empty-cart-icon" aria-hidden="true">🛍️</span>
                <h2>Your cart is waiting for something lovely</h2>
                <p>Explore the collection and add a favourite to get started.</p>
                <a class="shop-btn" href="index.html">Continue shopping</a>
            </div>
        `;
    } else {
        itemsContainer.innerHTML = cartProducts.map(item => `
            <article class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-details">
                    <h3>${item.name}</h3>
                    <p>${money(item.price)} <span>each</span></p>
                    <div class="quantity" aria-label="Quantity for ${item.name}">
                        <button type="button" aria-label="Decrease ${item.name} quantity"
                            onclick="changeQuantity(${item.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button type="button" aria-label="Increase ${item.name} quantity"
                            onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-total">
                    <strong>${money(item.price * item.quantity)}</strong>
                    <button class="remove-btn" type="button"
                        onclick="removeCartItem(${item.id})">Remove</button>
                </div>
            </article>
        `).join("");
    }

    const subtotal = cartProducts.reduce((total, item) =>
        total + item.price * item.quantity, 0);
    const delivery = subtotal === 0 || subtotal >= 2000 ? 0 : 99;
    const subtotalElement = document.getElementById("subtotal");
    const deliveryElement = document.getElementById("delivery");
    const totalElement = document.getElementById("total");
    const checkoutButton = document.getElementById("checkout-btn");

    if (subtotalElement) subtotalElement.textContent = money(subtotal);
    if (deliveryElement) {
        deliveryElement.textContent = delivery === 0 && subtotal > 0
            ? "Free"
            : money(delivery);
    }
    if (totalElement) totalElement.textContent = money(subtotal + delivery);
    if (checkoutButton) checkoutButton.disabled = cartProducts.length === 0;
}

function checkout() {
    if (!cart.length) {
        return;
    }

    alert("Thank you for shopping with Shoppy! Checkout is a demo.");
    cart = [];
    saveCart();
    renderCart();
}

function renderProducts() {
    const homeProducts = document.getElementById("home-products");
    if (homeProducts) {
        const lifestyleProducts = products.filter(product =>
            ["Home", "Beauty", "Jewellery"].includes(product.category)
        );
        homeProducts.innerHTML = lifestyleProducts.map(productCard).join("");
    }

    const productList = document.getElementById("product-list");
    if (!productList) {
        return;
    }

    const page = document.body.dataset.page;
    const categories = {
        men: ["Men"],
        women: ["Women"],
        kids: ["Kids"],
        accessories: ["Accessories", "Shoes"],
        lifestyle: ["Home", "Beauty", "Jewellery"]
    };
    const requestedCategory = new URLSearchParams(window.location.search).get("category");
    const selectedCategories = page === "lifestyle" && categories.lifestyle.includes(requestedCategory)
        ? [requestedCategory]
        : categories[page];
    const visibleProducts = selectedCategories
        ? products.filter(product => selectedCategories.includes(product.category))
        : products;

    productList.innerHTML = visibleProducts.length
        ? visibleProducts.map(productCard).join("")
        : `<p class="empty-category">New styles are on the way. Check back soon!</p>`;

    if (page === "accessories") {
        const heading = document.getElementById("page-heading");
        if (heading) heading.textContent = "Accessories & Shoes";
    }

    if (page === "lifestyle") {
        const heading = document.getElementById("page-heading");
        const categoryNames = {
            Home: "Home & Living",
            Beauty: "Beauty & Cosmetics",
            Jewellery: "Jewellery"
        };
        if (heading) {
            heading.textContent = categoryNames[requestedCategory] || "Home, Beauty & Jewellery";
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderCartCount();
    renderProducts();
    renderCart();

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();
            const message = document.getElementById("form-message");
            if (message) {
                message.textContent = "Thanks for getting in touch! Your message has been received.";
            } else {
                alert("Thanks for getting in touch! Your message has been received.");
            }
            contactForm.reset();
        });
    }

    const checkoutButton = document.getElementById("checkout-btn");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", checkout);
    }
});
