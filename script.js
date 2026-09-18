// =========================================================
// Backend connection
// If you're not running the Node/Express backend, leave this as-is —
// login, signup and checkout will simply show a clear error instead
// of silently pretending to work.
// =========================================================
const API_BASE = "http://localhost:3000/api";

function getToken() {
  return localStorage.getItem("willow_token");
}
function setAuth(token, user) {
  localStorage.setItem("willow_token", token);
  localStorage.setItem("willow_user", JSON.stringify(user));
}
function clearAuth() {
  localStorage.removeItem("willow_token");
  localStorage.removeItem("willow_user");
}
function getCurrentUser() {
  const raw = localStorage.getItem("willow_user");
  return raw ? JSON.parse(raw) : null;
}

// =========================================================
// Product data — using the EXACT original image URLs you provided.
// Note: several of these are Google "encrypted-tbn0" thumbnail
// links, which are temporary and can expire or fail to load in
// some browsers — that's outside our control since they come from
// Google's cache, not a real image host. If any stop loading later,
// replace that one `img` value with a fresh image URL.
// =========================================================
const PRODUCT_GROUPS = [
  {
    key: "laptops",
    title: "Laptops & MacBooks",
    items: [
      {
        name: 'Slim Ultrabook 14"',
        price: 199.99,
        desc: "A light everyday laptop built for browsing, docs and streaming without weighing your bag down.",
        img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Everyday Notebook",
        price: 200.99,
        desc: "A dependable notebook for study or office work, with all-day battery life.",
        img: "https://img.magnific.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8594.jpg?semt=ais_hybrid&w=740&q=80",
      },
      {
        name: 'Business Laptop 15"',
        price: 210.99,
        desc: "A larger screen and a full keyboard, built for spreadsheets, video calls and multitasking.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bOavv4QzatTEGRvLgGvQLh9So7hsT_vyde1SQjIeK_Q91tcjb628Dsc&s=10",
      },
      {
        name: "Creator Laptop Pro",
        price: 220.99,
        desc: "Extra graphics power for editing photos and light video work on the go.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabazVKgs11dJP6PUwXaPbjbsQE-9jtnoQuAqfJpnJAQ&s=10",
      },
      {
        name: "MacBook Air",
        price: 355.99,
        desc: "Apple's thin-and-light, with the M-series chip and a fanless design.",
        img: "https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "MacBook Pro",
        price: 410.99,
        desc: "More power and a brighter display for demanding creative work.",
        img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGxlJTIwbGFwdG9wfGVufDB8fDB8fHww",
      },
      {
        name: "Gaming Laptop",
        price: 210.99,
        desc: "A dedicated graphics card and a fast-refresh display for gaming after hours.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePFJEPgOkwx3O9McPOjLupfF83mAHpAf-aXFqqkc1WTQo-tXsLHovOOCk&s=10",
      },
      {
        name: "2-in-1 Convertible",
        price: 510.99,
        desc: "Folds flat into a tablet, with a touchscreen and stylus support.",
        img: "https://www.shutterstock.com/image-photo/ankara-turkey-november-11-2025-260nw-2708740939.jpg",
      },
      {
        name: "Compact Chromebook",
        price: 240.99,
        desc: "A fast-booting, low-maintenance laptop for the web and cloud apps.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9sHs5lsgtdz1ujCpGRvL-VvV3dV_c85Flwj0gSZFXQsvHVbVP1AwT3M&s=10",
      },
      {
        name: "Budget Notebook",
        price: 70.99,
        desc: "The essentials at the lowest price point in the lineup — great as a spare or a first laptop.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXsdW1Wr4sQtfUOacrDHm5xSYxj__A9GBPRZ9dsRUnSoGoYInOl9gHN4P&s=10",
      },
    ],
  },
  {
    key: "phones",
    title: "Smartphones",
    items: [
      {
        name: "Flagship Smartphone",
        price: 70.99,
        desc: "The top camera and chipset in the range, for anyone who wants the best of everything.",
        img: "https://m.media-amazon.com/images/I/61ye1KFCwFL._AC_SY445_.jpg",
      },
      {
        name: "Mid-range Android",
        price: 90.99,
        desc: "A balanced pick — good camera, good battery, without the flagship price tag.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WjjMQXUOpkI4L4U6-HbiXpW3PtVe2OojuM9XWKOkCC67Im0Km7RdL_VI&s=10",
      },
      {
        name: "Compact Phone",
        price: 65.99,
        desc: "A smaller body that still fits comfortably in one hand.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0tSkX9qI4psW5vn7RWdizfAW6NSTAGz_A5ey7k8CrQ&s",
      },
      {
        name: "Pro Camera Phone",
        price: 220.99,
        desc: "A triple-lens camera system built for low light and zoom.",
        img: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/09/DSC01718-1.jpg?quality=90&strip=all&crop=0%2C16.66015625%2C100%2C66.6796875&w=2400",
      },
      {
        name: "Everyday Smartphone",
        price: 40.99,
        desc: "Calls, messages, social and maps — handled reliably, nothing extra.",
        img: "https://airkart.com/cdn/shop/files/1_d3e95162-667d-47e1-b7d3-034a07de3933.jpg?v=1778490412&width=533",
      },
      {
        name: "Lite Edition Phone",
        price: 79.99,
        desc: "A trimmed-down version of the flagship, at a friendlier price.",
        img: "https://www.lahorecentre.com/cdn/shop/files/VivoV80Lite256GBStorage_8GBRam.jpg?v=1788171017&width=1080",
      },
      {
        name: "Gaming Phone",
        price: 110.99,
        desc: "A higher refresh rate and extra cooling for longer gaming sessions.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vH_XYLSxA3aGqxWQGSUyimLD31kYE2yRn741x0QU9vSPBG0X0J4uYlY5&s=10",
      },
      {
        name: "Value Smartphone",
        price: 109.99,
        desc: "Strong specs for the price, aimed at first-time smartphone buyers.",
        img: "https://infinix.pk/wp-content/uploads/2026/02/20250730-144456_1-300x400.png",
      },
      {
        name: "5G Smartphone",
        price: 220.99,
        desc: "Ready for next-gen networks, with fast charging built in.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2nwKnUFake-M9G8WE7SudWLHFh3USiSFeJ9ZAlkPP26yr40CglDf-ch7&s=10",
      },
      {
        name: "Entry-level Phone",
        price: 80.99,
        desc: "A no-frills phone that covers the basics well.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRocYlq1NHxLG2ywERf9paEw5SKgJLZyw1uGtZcgulOQ&s=10",
      },
    ],
  },
  {
    key: "audio",
    title: "Air Buds",
    items: [
      {
        name: "Signature Earbuds",
        price: 20.99,
        desc: "The brand's flagship buds, tuned for a warm, balanced sound.",
        img: "https://audionic.co/cdn/shop/files/AirbudSignatureS680-Image-1_3_copy.png?v=1776334398",
      },
      {
        name: "Sport Earbuds",
        price: 15.99,
        desc: "Sweat-resistant and secure-fit, built for the gym and outdoor runs.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-N-mji5XjPee8Op_Szz3tGAX-dGxfgMl5Hj86O6-V0CB2Zc9DRF36KNM&s=10",
      },
      {
        name: "Noise-cancelling Buds",
        price: 20.99,
        desc: "Active noise cancellation for commutes, flights and busy offices.",
        img: "https://audionic.co/cdn/shop/files/AirbudSignatureS680-Image-1_3_copy.png?v=1776334398&width=1080",
      },
      {
        name: "Wireless Buds Pro",
        price: 20.99,
        desc: "A pro-level driver setup with a longer battery life on the case.",
        img: "https://audionic.co/cdn/shop/files/AirbudSignatureS680-Image-4_4_copy.png?v=1776334398",
      },
      {
        name: "Budget Earbuds",
        price: 10.99,
        desc: "Reliable wireless sound at the lowest price point.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYfT1bK3YCD3Nq_BaPH_o_NDdiHSXsLDzEwr6pImP5g&s",
      },
      {
        name: "In-ear Wireless",
        price: 19.99,
        desc: "A snug in-ear fit that blocks out ambient noise passively.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9nQx0oZ4Io__WD9mivvqvAm-DByUre7KJ_l0Rktvww&s=10",
      },
      {
        name: "Green Edition Buds",
        price: 30.99,
        desc: "A limited colourway of the standard buds, same drivers inside.",
        img: "https://audionic.co/cdn/shop/files/Green_Render.effectsResult.0006_copy.webp?v=1767354144&width=2048",
      },
      {
        name: "Black Edition Buds",
        price: 30.99,
        desc: "A blacked-out finish with the same reliable connection.",
        img: "https://audionic.co/cdn/shop/files/Black_001.webp?v=1777702216",
      },
      {
        name: "Black/Red Buds",
        price: 20.99,
        desc: "A bold two-tone finish for a bit more personality.",
        img: "https://audionic.co/cdn/shop/files/Black_Red_4.webp?v=1776498618",
      },
      {
        name: "Everyday Buds",
        price: 10.99,
        desc: "Simple, comfortable, and always in your pocket.",
        img: "https://audionic.co/cdn/shop/files/Black_4_3f015986-2be6-47e7-8554-1f48a4f921e2.webp?v=1776498618&width=2048",
      },
    ],
  },
  {
    key: "watches",
    title: "Watches",
    items: [
      {
        name: "Classic Analog Watch",
        price: 40.99,
        desc: "A timeless dial and a leather strap that goes with everything.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJb4bsfucEZKwJcBLdL088s8Eo1MRgDHnY3Sg6zxfLMw&s=10",
      },
      {
        name: "Smartwatch Series",
        price: 35.99,
        desc: "Notifications, heart rate and step tracking on your wrist.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJckicAlIOMpzjkRU_HqumEljcfONDaTbKRbzgAWqxCAwrS6QkZshtPOc&s=10",
      },
      {
        name: "Sport Watch",
        price: 20.99,
        desc: "Built for workouts, with a rugged case and a rubber strap.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11FD0-L7PFKejDr74AZ-HEzT744WAjXZrQ-D55SbeSLjEJUmlIEnUHjNG&s=10",
      },
      {
        name: "Leather Strap Watch",
        price: 20.99,
        desc: "A dressier look for the office or evenings out.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEtobTq1UKCheilWWYqkcbhrHAC4zY0tiMxlcGEcqsQ&s=10",
      },
      {
        name: "Minimalist Watch",
        price: 25.99,
        desc: "A clean face with no clutter — just the time.",
        img: "https://content.thewosgroup.com/productimage/17382325/17382325_1.jpg?impolicy=lister",
      },
      {
        name: "Chronograph Watch",
        price: 19.99,
        desc: "Stopwatch sub-dials for anyone who likes a busier face.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6G-EfCj_rcaR8BIN6Ck10KUy6RpY2XR1esbtZyqP4yA&s=10",
      },
      {
        name: "Steel Band Watch",
        price: 30.99,
        desc: "A stainless steel bracelet that pairs with formal wear.",
        img: "https://content.thewosgroup.com/productimage/17382325/17382325_1.jpg?impolicy=lister",
      },
      {
        name: "Everyday Watch",
        price: 30.99,
        desc: "A reliable daily wear that won't fuss over water or knocks.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDHQSg02FJiO9mY71lsusjkniEQxfiL1c1hQnBzhB0IxFU2PFhzDrsKkH&s=10",
      },
      {
        name: "Business Watch",
        price: 20.99,
        desc: "A slim case that sits comfortably under a shirt cuff.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMyg5pqy-vG9MshSvWvLR7qfdNwIBDnBTx1fx4H9JhIQ&s",
      },
      {
        name: "Luxury Style Watch",
        price: 40.99,
        desc: "A statement piece with a heavier case and a polished finish.",
        img: "https://i5.walmartimages.com/seo/Poedagar-Men-Watch-Luxury-Business-Quartz-Watches-Stainless-Stain-Strap-Sport-Chronograph-Men-39-s-Wristwatch-Waterproof-Luminous-Quartz-Wristwatches_7377e736-da3c-4991-80d2-e32d1ffc8ea3.39a950fcd8201e779d06ca5c6e77a4c3.jpeg",
      },
    ],
  },
  {
    key: "bags",
    title: "Bags",
    items: [
      {
        name: "Structured Tote",
        price: 10.99,
        desc: "A boxy silhouette that keeps its shape, great for the office.",
        img: "https://int.stylo.pk/cdn/shop/files/P3661418_1800x1800.jpg?v=1778756124",
      },
      {
        name: "Everyday Handbag",
        price: 10.99,
        desc: "A go-to bag sized for a wallet, phone and the daily essentials.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxc3-t3G0WD0VPq3k2wKwI-slNGGx1_V9RhNsjprHXtyIZvafaV0YIuIe&s=10",
      },
      {
        name: "Crossbody Bag",
        price: 20.99,
        desc: "Hands-free carry with an adjustable strap.",
        img: "https://unze.com.pk/cdn/shop/files/bg9383b_4dccd64c-3582-47bc-86d7-860a787acf8e.jpg?v=1778584127",
      },
      {
        name: "Mini Shoulder Bag",
        price: 18.99,
        desc: "A compact evening bag for the essentials only.",
        img: "https://unze.com.pk/cdn/shop/files/bg9383a_eebf91e8-8c56-4381-a1f9-0801d866f236.jpg?v=1778584127",
      },
      {
        name: "Canvas Tote",
        price: 8.99,
        desc: "A durable everyday carry-all, easy to fold flat when not in use.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSID3WvXMnxGQE2SD6y3FYY0xA0XQhEYxV7-5kgI9XjiosWKa7uCg27nMw&s=10",
      },
      {
        name: "Leather Satchel",
        price: 19.99,
        desc: "A structured satchel with a flap closure and a work-ready look.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7g-qvOis3WooZQmX2vZ8WZTJAmAFNTZtF78oZMk6YT_i3amtvj8VlShQ&s=10",
      },
      {
        name: "Weekender Bag",
        price: 10.99,
        desc: "Roomy enough for a couple of days away, with a separate shoe pocket.",
        img: "https://www.vegas.pk/beta-admin/public/storage/images/product/1690267645--7a44479c-2ab6-11ee-8952-0242ac110007.jpg",
      },
      {
        name: "Backpack",
        price: 9.99,
        desc: "A padded laptop sleeve and multiple pockets for daily commutes.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6TS-dcPjup2Hl6BgkUrBjDav16SsMDpRCgGcPZ6Fa8wsfBivBf_OYhQ&s=10",
      },
      {
        name: "Clutch Bag",
        price: 20.99,
        desc: "A slim evening clutch that fits the basics for a night out.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsm-C68SUZ96C4-dpEit7Yyex_H0EzS9T3XYAaF0q0UcTPXYNSM4Vu1Ss9&s=10",
      },
      {
        name: "Travel Duffel",
        price: 20.99,
        desc: "A wide opening and a reinforced base built for regular travel.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolwE4iKr6KVd2pkrGi-eUud9AxvzOk8oGzEdWtbl2WvaPw63a6itYEFk&s=10",
      },
    ],
  },
];

// Spec templates per category — combined with the item name/index
// to produce a plausible, varied spec sheet for the product modal.
const SPEC_TEMPLATES = {
  laptops: (item, i) => [
    [
      "Processor",
      ["Core i3", "Core i5", "Core i7", "Apple M2", "Ryzen 5"][i % 5],
    ],
    ["RAM", ["4GB", "8GB", "8GB", "16GB", "16GB"][i % 5]],
    [
      "Storage",
      ["128GB SSD", "256GB SSD", "512GB SSD", "512GB SSD", "1TB SSD"][i % 5],
    ],
    [
      "Display",
      ['13.3" FHD', '14" FHD', '15.6" FHD', '14" Retina', '16" QHD'][i % 5],
    ],
  ],
  phones: (item, i) => [
    [
      "Display",
      ['6.1" OLED', '6.4" AMOLED', '6.7" OLED', '6.5" LCD', '6.1" LTPO'][i % 5],
    ],
    ["Storage", ["64GB", "128GB", "128GB", "256GB", "256GB"][i % 5]],
    [
      "Camera",
      ["12MP single", "48MP dual", "50MP triple", "64MP dual", "108MP triple"][
        i % 5
      ],
    ],
    [
      "Battery",
      ["4000 mAh", "4500 mAh", "5000 mAh", "4800 mAh", "5000 mAh"][i % 5],
    ],
  ],
  audio: (item, i) => [
    [
      "Battery life",
      [
        "4h (24h w/ case)",
        "5h (28h w/ case)",
        "6h (30h w/ case)",
        "5h (25h w/ case)",
        "7h (32h w/ case)",
      ][i % 5],
    ],
    ["Connectivity", "Bluetooth 5.2"],
    ["Noise cancellation", i % 2 === 0 ? "Active (ANC)" : "Passive"],
    ["Water resistance", ["IPX4", "IPX5", "IPX4", "IPX7", "IPX4"][i % 5]],
  ],
  watches: (item, i) => [
    ["Display", i % 2 === 0 ? "Analog" : '1.4" AMOLED'],
    ["Battery life", i % 2 === 0 ? "2 years (cell)" : "Up to 7 days"],
    ["Water resistance", ["3 ATM", "5 ATM", "3 ATM", "5 ATM", "10 ATM"][i % 5]],
    [
      "Strap",
      ["Leather", "Silicone", "Stainless steel", "Nylon", "Rubber"][i % 5],
    ],
  ],
  bags: (item, i) => [
    [
      "Material",
      ["Vegan leather", "Canvas", "Genuine leather", "Nylon", "Cotton canvas"][
        i % 5
      ],
    ],
    ["Capacity", ["8L", "12L", "18L", "25L", "35L"][i % 5]],
    [
      "Dimensions",
      ["30×22×10cm", "34×26×12cm", "38×28×14cm", "42×30×16cm", "50×32×20cm"][
        i % 5
      ],
    ],
    ["Closure", i % 2 === 0 ? "Zip" : "Magnetic flap"],
  ],
};

function getImage(item) {
  return item.img;
}

function getSpecs(groupKey, item, index) {
  return SPEC_TEMPLATES[groupKey](item, index);
}

// ===== State =====
let cart = []; // { groupKey, index, qty }
const productRoot = document.getElementById("productRoot");

// ===== Render products =====
function cardHTML(group, item, index) {
  return `
    <article class="product-card" data-group="${group.key}" data-index="${index}" tabindex="0" role="button" aria-label="View ${item.name}">
      <div class="thumb">
        <img src="${getImage(item)}" alt="${item.name}" loading="lazy" width="400" height="400" />
      </div>
      <div class="info">
        <h4>${item.name}</h4>
        <p class="price">$${item.price.toFixed(2)}</p>
        <button class="add-btn" data-group="${group.key}" data-index="${index}">Add to cart</button>
      </div>
    </article>`;
}

function renderGroups(groups) {
  productRoot.innerHTML = "";

  if (groups.length === 0) {
    productRoot.innerHTML = `<p class="empty-state">No products match your search. Try a different term.</p>`;
    return;
  }

  groups.forEach((group) => {
    const section = document.createElement("div");
    section.className = "category-group";
    section.innerHTML = `
      <h3>${group.title}</h3>
      <div class="product-grid">
        ${group.items.map((item, i) => cardHTML(group, item, i)).join("")}
      </div>
    `;
    productRoot.appendChild(section);
  });
}

function renderProducts(filterKey = "all") {
  const groups = PRODUCT_GROUPS.filter(
    (g) => filterKey === "all" || g.key === filterKey,
  );
  renderGroups(groups);
}

function getActiveFilter() {
  const active = document.querySelector(".cat-chip.active");
  return active ? active.dataset.filter : "all";
}

renderProducts();

// ===== Category filter chips =====
document.querySelectorAll(".cat-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document
      .querySelectorAll(".cat-chip")
      .forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    searchInput.value = "";
    renderProducts(chip.dataset.filter);
  });
});

// ===== Search =====
const searchInput = document.getElementById("siteSearch");
searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();
  if (!term) {
    renderProducts(getActiveFilter());
    return;
  }
  const base = PRODUCT_GROUPS.filter(
    (g) => getActiveFilter() === "all" || g.key === getActiveFilter(),
  );
  const filtered = base
    .map((g) => ({
      ...g,
      items: g.items.filter((i) => i.name.toLowerCase().includes(term)),
    }))
    .filter((g) => g.items.length > 0);
  renderGroups(filtered);
  document
    .getElementById("products")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

// =========================================================
// Cart
// =========================================================
function findCartLine(groupKey, index) {
  return cart.find(
    (line) => line.groupKey === groupKey && line.index === index,
  );
}

function addToCart(groupKey, index, qty = 1) {
  const existing = findCartLine(groupKey, index);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ groupKey, index, qty });
  }
  updateCartCount();
}

function removeFromCart(groupKey, index) {
  cart = cart.filter(
    (line) => !(line.groupKey === groupKey && line.index === index),
  );
  updateCartCount();
  renderCartModal();
}

function changeCartQty(groupKey, index, delta) {
  const line = findCartLine(groupKey, index);
  if (!line) return;
  line.qty = Math.max(1, line.qty + delta);
  updateCartCount();
  renderCartModal();
}

function cartItemData(line) {
  const group = PRODUCT_GROUPS.find((g) => g.key === line.groupKey);
  const item = group.items[line.index];
  return { group, item };
}

function updateCartCount() {
  const totalQty = cart.reduce((sum, line) => sum + line.qty, 0);
  document.getElementById("cartCount").textContent = totalQty;
}

function renderCartModal() {
  const body = document.getElementById("cartModalBody");

  if (cart.length === 0) {
    body.innerHTML = `<p class="cart-empty">Your cart is empty. Go add something nice.</p>`;
    return;
  }

  let total = 0;
  const rows = cart
    .map((line) => {
      const { group, item } = cartItemData(line);
      const subtotal = item.price * line.qty;
      total += subtotal;
      return `
        <li class="cart-row" data-group="${line.groupKey}" data-index="${line.index}">
          <img src="${getImage(item)}" alt="${item.name}" />
          <div class="cart-row-info">
            <p class="cart-row-name">${item.name}</p>
            <p class="cart-row-price">$${item.price.toFixed(2)} × ${line.qty} = $${subtotal.toFixed(2)}</p>
          </div>
          <div class="cart-row-qty">
            <button type="button" class="cart-qty-minus" aria-label="Decrease quantity">−</button>
            <span>${line.qty}</span>
            <button type="button" class="cart-qty-plus" aria-label="Increase quantity">+</button>
          </div>
          <button type="button" class="cart-row-remove" aria-label="Remove ${item.name}">
            <i class="fa-solid fa-trash"></i>
          </button>
        </li>`;
    })
    .join("");

  body.innerHTML = `
    <ul class="cart-list">${rows}</ul>
    <div class="cart-summary">
      <span>Total</span>
      <strong>$${total.toFixed(2)}</strong>
    </div>
    <button class="btn btn-primary cart-checkout-btn" id="checkoutBtn">Checkout</button>
  `;

  document.getElementById("checkoutBtn").addEventListener("click", async () => {
    const user = getCurrentUser();
    if (!user) {
      body.innerHTML = `<p class="cart-empty">Please log in first to check out.</p>
        <button class="btn btn-primary cart-checkout-btn" id="goToLoginBtn">Log in</button>`;
      document.getElementById("goToLoginBtn").addEventListener("click", () => {
        closeModal(document.getElementById("cartModal"));
        renderAuthModal();
        openModal(loginModal);
      });
      return;
    }

    const checkoutBtn = document.getElementById("checkoutBtn");
    checkoutBtn.disabled = true;
    checkoutBtn.textContent = "Placing order...";

    try {
      const items = cart.map((line) => {
        const { group, item } = cartItemData(line);
        return {
          name: item.name,
          category: group.key,
          price: item.price,
          qty: line.qty,
        };
      });
      const order = await apiRequest("/checkout", {
        method: "POST",
        headers: { Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify({ items }),
      });
      cart = [];
      updateCartCount();
      body.innerHTML = `<p class="cart-empty">Order #${order.orderId} placed — total $${order.total.toFixed(2)}. Thank you!</p>`;
    } catch (err) {
      body.innerHTML = `<p class="cart-empty">${err.message}</p>`;
    }
  });
}

document.getElementById("cartModalBody").addEventListener("click", (e) => {
  const row = e.target.closest(".cart-row");
  if (!row) return;
  const groupKey = row.dataset.group;
  const index = Number(row.dataset.index);

  if (e.target.closest(".cart-qty-plus")) changeCartQty(groupKey, index, 1);
  else if (e.target.closest(".cart-qty-minus"))
    changeCartQty(groupKey, index, -1);
  else if (e.target.closest(".cart-row-remove"))
    removeFromCart(groupKey, index);
});

document.getElementById("cartBtn").addEventListener("click", () => {
  renderCartModal();
  openModal(document.getElementById("cartModal"));
});

productRoot.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (btn) {
    e.stopPropagation();
    addToCart(btn.dataset.group, Number(btn.dataset.index), 1);
    btn.textContent = "Added ✓";
    setTimeout(() => (btn.textContent = "Add to cart"), 1200);
    return;
  }

  const card = e.target.closest(".product-card");
  if (card) openProductModal(card.dataset.group, Number(card.dataset.index));
});

productRoot.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".product-card");
  if (card) {
    e.preventDefault();
    openProductModal(card.dataset.group, Number(card.dataset.index));
  }
});

// =========================================================
// Product detail modal
// =========================================================
const productModal = document.getElementById("productModal");
const productModalBody = document.getElementById("productModalBody");

function openProductModal(groupKey, index) {
  const group = PRODUCT_GROUPS.find((g) => g.key === groupKey);
  const item = group.items[index];
  const specs = getSpecs(groupKey, item, index);

  productModalBody.innerHTML = `
    <div class="modal-product">
      <div class="modal-thumb">
        <img src="${getImage(item)}" alt="${item.name}" />
      </div>
      <div class="modal-info">
        <p class="modal-category">${group.title}</p>
        <h2>${item.name}</h2>
        <p class="modal-price">$${item.price.toFixed(2)}</p>
        <p class="modal-desc">${item.desc}</p>
        <ul class="modal-specs">
          ${specs.map(([label, value]) => `<li><span>${label}</span><strong>${value}</strong></li>`).join("")}
        </ul>
        <div class="modal-qty">
          <label for="modalQty">Quantity</label>
          <div class="qty-control">
            <button type="button" id="qtyMinus" aria-label="Decrease quantity">−</button>
            <input type="number" id="modalQty" value="1" min="1" max="10" />
            <button type="button" id="qtyPlus" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="btn btn-primary modal-add-btn" id="modalAddBtn">Add to cart</button>
      </div>
    </div>
  `;

  const qtyInput = document.getElementById("modalQty");
  document.getElementById("qtyMinus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value) - 1);
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    qtyInput.value = Math.min(10, Number(qtyInput.value) + 1);
  });
  document.getElementById("modalAddBtn").addEventListener("click", () => {
    addToCart(groupKey, index, Number(qtyInput.value));
    const btn = document.getElementById("modalAddBtn");
    btn.textContent = "Added ✓";
    setTimeout(() => (btn.textContent = "Add to cart"), 1200);
  });

  openModal(productModal);
}

// =========================================================
// Generic modal open/close helpers
// =========================================================
function openModal(modalEl) {
  modalEl.classList.add("open");
  document.body.classList.add("modal-locked");
}
function closeModal(modalEl) {
  modalEl.classList.remove("open");
  document.body.classList.remove("modal-locked");
}

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    // Close only on a direct click on the dark backdrop or the visible close (×) button —
    // not on anything inside the modal content.
    if (e.target === overlay || e.target.closest(".modal-close")) {
      closeModal(overlay);
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document
      .querySelectorAll(".modal-overlay.open")
      .forEach((m) => closeModal(m));
  }
});

// =========================================================
// Login / Sign up modal
// =========================================================
const loginModal = document.getElementById("loginModal");

document.getElementById("accountBtn").addEventListener("click", () => {
  renderAuthModal();
  openModal(loginModal);
});

document.querySelectorAll(".auth-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".auth-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    document
      .querySelectorAll(".auth-form")
      .forEach((f) => f.classList.remove("active"));
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

function showFormsPanel() {
  document.getElementById("authFormsPanel").style.display = "";
  document.getElementById("authDynamicPanel").style.display = "none";
}

function showDynamicPanel(html) {
  document.getElementById("authFormsPanel").style.display = "none";
  const dynamicPanel = document.getElementById("authDynamicPanel");
  dynamicPanel.innerHTML = html;
  dynamicPanel.style.display = "";
}

function renderAuthModal() {
  const user = getCurrentUser();
  if (!user) {
    showFormsPanel();
    return;
  }
  showDynamicPanel(`
    <div class="auth-success">
      <i class="fa-solid fa-circle-user"></i>
      <p>Signed in as <strong>${user.name}</strong> (${user.email})</p>
      <button class="btn btn-ghost" id="logoutBtn">Log out</button>
    </div>
  `);
  document.getElementById("logoutBtn").addEventListener("click", () => {
    clearAuth();
    closeModal(loginModal);
  });
}

async function apiRequest(path, options = {}) {
  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });
  } catch (err) {
    throw new Error(
      "Couldn't reach the backend. Is it running? Start it with `npm start` in the backend folder.",
    );
  }
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Something went wrong.");
  return data;
}

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const submitBtn = e.target.querySelector("button[type='submit']");
  submitBtn.disabled = true;

  try {
    const data = await apiRequest("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    setAuth(data.token, data.user);
    showAuthSuccess(`Welcome back — signed in as ${data.user.name}.`);
  } catch (err) {
    showAuthError("loginForm", err.message);
  } finally {
    submitBtn.disabled = false;
  }
});

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;
  const errorEl = document.getElementById("signupError");

  if (pass !== confirm) {
    errorEl.textContent = "Passwords don't match — please re-enter.";
    errorEl.style.display = "block";
    return;
  }
  errorEl.style.display = "none";

  const submitBtn = e.target.querySelector("button[type='submit']");
  submitBtn.disabled = true;

  try {
    const data = await apiRequest("/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password: pass }),
    });
    setAuth(data.token, data.user);
    showAuthSuccess(`Account created — welcome, ${data.user.name}!`);
  } catch (err) {
    errorEl.textContent = err.message;
    errorEl.style.display = "block";
  } finally {
    submitBtn.disabled = false;
  }
});

function showAuthError(formId, message) {
  const errorEl = document.getElementById(
    formId === "loginForm" ? "loginError" : "signupError",
  );
  errorEl.textContent = message;
  errorEl.style.display = "block";
}

function showAuthSuccess(message) {
  showDynamicPanel(`
    <div class="auth-success">
      <i class="fa-solid fa-circle-check"></i>
      <p>${message}</p>
    </div>
  `);
}

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");
navToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// ===== Newsletter form =====
const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value;
  newsletterForm.innerHTML = `<p class="newsletter-thanks">Thanks — we'll be in touch at ${email}.</p>`;
});
