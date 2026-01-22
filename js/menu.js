// Menu Data for Jambo Kitchen
const menuData = [
    {
        id: 1,
        name: "Samosa Platter",
        description: "Crispy pastries filled with spiced beef or vegetables, served with tamarind sauce",
        price: 350,
        category: "starters",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
        tags: ["Popular", "Vegetarian Option"]
    },
    {
        id: 2,
        name: "Bhajia",
        description: "Thinly sliced potatoes coated in spiced gram flour, deep fried to perfection",
        price: 280,
        category: "starters",
        image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400",
        tags: ["Vegetarian"]
    },
    {
        id: 3,
        name: "Chicken Wings",
        description: "Crispy fried wings tossed in our signature pili pili sauce",
        price: 450,
        category: "starters",
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400",
        tags: ["Spicy"]
    },
    {
        id: 4,
        name: "Nyama Choma",
        description: "Traditional grilled goat meat served with ugali, kachumbari and sukuma wiki",
        price: 1200,
        category: "grills",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
        tags: ["Signature", "Popular"]
    },
    {
        id: 5,
        name: "Mbuzi Ribs",
        description: "Slow-cooked goat ribs with rosemary and garlic, fall-off-the-bone tender",
        price: 1450,
        category: "grills",
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400",
        tags: ["Chef's Choice"]
    },
    {
        id: 6,
        name: "Mixed Grill Platter",
        description: "Beef, chicken, and sausages served with chips and salad",
        price: 1800,
        category: "grills",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
        tags: ["For Sharing"]
    },
    {
        id: 7,
        name: "Pilau Rice",
        description: "Fragrant spiced rice cooked with beef, onions and traditional pilau masala",
        price: 550,
        category: "mains",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400",
        tags: ["Popular"]
    },
    {
        id: 8,
        name: "Swahili Fish Curry",
        description: "Fresh tilapia in coconut curry sauce, served with chapati or rice",
        price: 850,
        category: "mains",
        image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400",
        tags: ["Coastal"]
    },
    {
        id: 9,
        name: "Chicken Biryani",
        description: "Aromatic basmati rice layered with spiced chicken and fried onions",
        price: 750,
        category: "mains",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
        tags: ["Popular"]
    },
    {
        id: 10,
        name: "Githeri Special",
        description: "Traditional maize and beans stew with vegetables and beef",
        price: 400,
        category: "mains",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
        tags: ["Traditional", "Healthy"]
    },
    {
        id: 11,
        name: "Fresh Mango Juice",
        description: "Freshly blended Kenyan mangoes, no added sugar",
        price: 180,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400",
        tags: ["Fresh"]
    },
    {
        id: 12,
        name: "Passion Fruit Blend",
        description: "Tangy passion fruit mixed with a hint of honey",
        price: 200,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400",
        tags: ["Fresh", "Popular"]
    },
    {
        id: 13,
        name: "Kenyan Chai",
        description: "Traditional spiced tea with milk, ginger and cardamom",
        price: 100,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400",
        tags: ["Traditional"]
    },
    {
        id: 14,
        name: "Tusker Lager",
        description: "Kenya's iconic beer, served ice cold",
        price: 350,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400",
        tags: ["Alcoholic"]
    }
];

// Render Menu Items
function renderMenu(category = 'all') {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    
    const filteredItems = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);
    
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h4>${item.name}</h4>
                    <span class="menu-price">KES ${item.price}</span>
                </div>
                <p>${item.description}</p>
                <div class="menu-tags">
                    ${item.tags.map(tag => `<span class="menu-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize menu tabs
function initMenuTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderMenu(tab.dataset.category);
        });
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    initMenuTabs();
});
