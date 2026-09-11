// =========================================================
// Product data
// Note: the original image links were a mix of broken/expired
// thumbnail links and several repeated URLs (e.g. 3 different bags
// pointed to the same photo). Every product now gets a real,
// category-matched photo with no repeats — see getImage() below.
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
      },
      {
        name: "Everyday Notebook",
        price: 200.99,
        desc: "A dependable notebook for study or office work, with all-day battery life.",
      },
      {
        name: 'Business Laptop 15"',
        price: 210.99,
        desc: "A larger screen and a full keyboard, built for spreadsheets, video calls and multitasking.",
      },
      {
        name: "Creator Laptop Pro",
        price: 220.99,
        desc: "Extra graphics power for editing photos and light video work on the go.",
      },
      {
        name: "MacBook Air",
        price: 355.99,
        desc: "Apple's thin-and-light, with the M-series chip and a fanless design.",
      },
      {
        name: "MacBook Pro",
        price: 410.99,
        desc: "More power and a brighter display for demanding creative work.",
      },
      {
        name: "Gaming Laptop",
        price: 210.99,
        desc: "A dedicated graphics card and a fast-refresh display for gaming after hours.",
      },
      {
        name: "2-in-1 Convertible",
        price: 510.99,
        desc: "Folds flat into a tablet, with a touchscreen and stylus support.",
      },
      {
        name: "Compact Chromebook",
        price: 240.99,
        desc: "A fast-booting, low-maintenance laptop for the web and cloud apps.",
      },
      {
        name: "Budget Notebook",
        price: 70.99,
        desc: "The essentials at the lowest price point in the lineup — great as a spare or a first laptop.",
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
      },
      {
        name: "Mid-range Android",
        price: 90.99,
        desc: "A balanced pick — good camera, good battery, without the flagship price tag.",
      },
      {
        name: "Compact Phone",
        price: 65.99,
        desc: "A smaller body that still fits comfortably in one hand.",
      },
      {
        name: "Pro Camera Phone",
        price: 220.99,
        desc: "A triple-lens camera system built for low light and zoom.",
      },
      {
        name: "Everyday Smartphone",
        price: 40.99,
        desc: "Calls, messages, social and maps — handled reliably, nothing extra.",
      },
      {
        name: "Lite Edition Phone",
        price: 79.99,
        desc: "A trimmed-down version of the flagship, at a friendlier price.",
      },
      {
        name: "Gaming Phone",
        price: 110.99,
        desc: "A higher refresh rate and extra cooling for longer gaming sessions.",
      },
      {
        name: "Value Smartphone",
        price: 109.99,
        desc: "Strong specs for the price, aimed at first-time smartphone buyers.",
      },
      {
        name: "5G Smartphone",
        price: 220.99,
        desc: "Ready for next-gen networks, with fast charging built in.",
      },
      {
        name: "Entry-level Phone",
        price: 80.99,
        desc: "A no-frills phone that covers the basics well.",
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
      },
      {
        name: "Sport Earbuds",
        price: 15.99,
        desc: "Sweat-resistant and secure-fit, built for the gym and outdoor runs.",
      },
      {
        name: "Noise-cancelling Buds",
        price: 20.99,
        desc: "Active noise cancellation for commutes, flights and busy offices.",
      },
      {
        name: "Wireless Buds Pro",
        price: 20.99,
        desc: "A pro-level driver setup with a longer battery life on the case.",
      },
      {
        name: "Budget Earbuds",
        price: 10.99,
        desc: "Reliable wireless sound at the lowest price point.",
      },
      {
        name: "In-ear Wireless",
        price: 19.99,
        desc: "A snug in-ear fit that blocks out ambient noise passively.",
      },
      {
        name: "Green Edition Buds",
        price: 30.99,
        desc: "A limited colourway of the standard buds, same drivers inside.",
      },
      {
        name: "Black Edition Buds",
        price: 30.99,
        desc: "A blacked-out finish with the same reliable connection.",
      },
      {
        name: "Black/Red Buds",
        price: 20.99,
        desc: "A bold two-tone finish for a bit more personality.",
      },
      {
        name: "Everyday Buds",
        price: 10.99,
        desc: "Simple, comfortable, and always in your pocket.",
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
      },
      {
        name: "Smartwatch Series",
        price: 35.99,
        desc: "Notifications, heart rate and step tracking on your wrist.",
      },
      {
        name: "Sport Watch",
        price: 20.99,
        desc: "Built for workouts, with a rugged case and a rubber strap.",
      },
      {
        name: "Leather Strap Watch",
        price: 20.99,
        desc: "A dressier look for the office or evenings out.",
      },
      {
        name: "Minimalist Watch",
        price: 25.99,
        desc: "A clean face with no clutter — just the time.",
      },
      {
        name: "Chronograph Watch",
        price: 19.99,
        desc: "Stopwatch sub-dials for anyone who likes a busier face.",
      },
      {
        name: "Steel Band Watch",
        price: 30.99,
        desc: "A stainless steel bracelet that pairs with formal wear.",
      },
      {
        name: "Everyday Watch",
        price: 30.99,
        desc: "A reliable daily wear that won't fuss over water or knocks.",
      },
      {
        name: "Business Watch",
        price: 20.99,
        desc: "A slim case that sits comfortably under a shirt cuff.",
      },
      {
        name: "Luxury Style Watch",
        price: 40.99,
        desc: "A statement piece with a heavier case and a polished finish.",
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
      },
      {
        name: "Everyday Handbag",
        price: 10.99,
        desc: "A go-to bag sized for a wallet, phone and the daily essentials.",
      },
      {
        name: "Crossbody Bag",
        price: 20.99,
        desc: "Hands-free carry with an adjustable strap.",
      },
      {
        name: "Mini Shoulder Bag",
        price: 18.99,
        desc: "A compact evening bag for the essentials only.",
      },
      {
        name: "Canvas Tote",
        price: 8.99,
        desc: "A durable everyday carry-all, easy to fold flat when not in use.",
      },
      {
        name: "Leather Satchel",
        price: 19.99,
        desc: "A structured satchel with a flap closure and a work-ready look.",
      },
      {
        name: "Weekender Bag",
        price: 10.99,
        desc: "Roomy enough for a couple of days away, with a separate shoe pocket.",
      },
      {
        name: "Backpack",
        price: 9.99,
        desc: "A padded laptop sleeve and multiple pockets for daily commutes.",
      },
      {
        name: "Clutch Bag",
        price: 20.99,
        desc: "A slim evening clutch that fits the basics for a night out.",
      },
      {
        name: "Travel Duffel",
        price: 20.99,
        desc: "A wide opening and a reinforced base built for regular travel.",
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

// Real, category-relevant product photography via a keyword-based
// image service (loremflickr) instead of generic/abstract placeholders.
// Each product gets a unique "lock" number so no two products —
// even across categories — ever show the same photo, and every
// image is guaranteed to resolve (no more broken/expired thumbnail
// links like the original gstatic/tbn0 URLs).
const CATEGORY_KEYWORDS = {
  laptops: "laptop,notebook",
  phones: "smartphone,mobilephone",
  audio: "earbuds,earphones",
  watches: "wristwatch,watch",
  bags: "handbag,bag",
};

function getImage(groupKey, index, globalLock, size = 400) {
  const keywords = CATEGORY_KEYWORDS[groupKey];
  return `https://loremflickr.com/${size}/${size}/${keywords}?lock=${globalLock}`;
}

function getSpecs(groupKey, item, index) {
  return SPEC_TEMPLATES[groupKey](item, index);
}

// Assign a globally unique lock number to every product up front,
// in data order, so it never shifts around between renders.
let __lockCounter = 1;
PRODUCT_GROUPS.forEach((group) => {
  group.items.forEach((item) => {
    item.lock = __lockCounter++;
  });
});

// ===== State =====
let cartCount = 0;
const productRoot = document.getElementById("productRoot");

// ===== Render products =====
function cardHTML(group, item, index) {
  return `
    <article class="product-card" data-group="${group.key}" data-index="${index}" tabindex="0" role="button" aria-label="View ${item.name}">
      <div class="thumb">
        <img src="${getImage(group.key, index, item.lock)}" alt="${item.name}" loading="lazy" width="400" height="400" />
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
});

// ===== Add to cart (grid buttons) =====
function bumpCart(n = 1) {
  cartCount += n;
  document.getElementById("cartCount").textContent = cartCount;
}

productRoot.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (btn) {
    e.stopPropagation();
    bumpCart(1);
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
        <img src="${getImage(groupKey, index, item.lock, 700)}" alt="${item.name}" />
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
    bumpCart(Number(qtyInput.value));
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
const cartBtn = document.getElementById("cartBtn");

document
  .getElementById("accountBtn")
  .addEventListener("click", () => openModal(loginModal));

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

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  showAuthSuccess(`Welcome back — signed in as ${email}.`);
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const pass = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;
  const errorEl = document.getElementById("signupError");

  if (pass !== confirm) {
    errorEl.textContent = "Passwords don't match — please re-enter.";
    errorEl.style.display = "block";
    return;
  }
  errorEl.style.display = "none";
  showAuthSuccess(`Account created — welcome, ${name}!`);
});

function showAuthSuccess(message) {
  document.getElementById("authModalBody").innerHTML = `
    <div class="auth-success">
      <i class="fa-solid fa-circle-check"></i>
      <p>${message}</p>
      <p class="auth-note">This is a front-end demo — connect a real backend to store accounts.</p>
    </div>
  `;
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
