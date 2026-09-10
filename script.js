// ===== Product data =====
// Pulled straight from the original markup, grouped and cleaned up.
const PRODUCT_GROUPS = [
  {
    key: "laptops",
    title: "Laptops & MacBooks",
    items: [
      {
        name: 'Slim Ultrabook 14"',
        price: 199.99,
        img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Everyday Notebook",
        price: 200.99,
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: 'Business Laptop 15"',
        price: 210.99,
        img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Creator Laptop Pro",
        price: 220.99,
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "MacBook Air",
        price: 355.99,
        img: "https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "MacBook Pro",
        price: 410.99,
        img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Gaming Laptop",
        price: 210.99,
        img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "2-in-1 Convertible",
        price: 510.99,
        img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Compact Chromebook",
        price: 240.99,
        img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Budget Notebook",
        price: 70.99,
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=60&w=800&auto=format&fit=crop",
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
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Mid-range Android",
        price: 90.99,
        img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Compact Phone",
        price: 65.99,
        img: "https://images.unsplash.com/photo-1592286927505-1def25115481?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Pro Camera Phone",
        price: 220.99,
        img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Everyday Smartphone",
        price: 40.99,
        img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Lite Edition Phone",
        price: 79.99,
        img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Gaming Phone",
        price: 110.99,
        img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Value Smartphone",
        price: 109.99,
        img: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "5G Smartphone",
        price: 220.99,
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Entry-level Phone",
        price: 80.99,
        img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?fm=jpg&q=60&w=800&auto=format&fit=crop",
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
        img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Sport Earbuds",
        price: 15.99,
        img: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Noise-cancelling Buds",
        price: 20.99,
        img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Wireless Buds Pro",
        price: 20.99,
        img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Budget Earbuds",
        price: 10.99,
        img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "In-ear Wireless",
        price: 19.99,
        img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Green Edition Buds",
        price: 30.99,
        img: "https://images.unsplash.com/photo-1590658165737-15a047b7c9c8?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Black Edition Buds",
        price: 30.99,
        img: "https://images.unsplash.com/photo-1631867675167-90a456a90863?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Black/Red Buds",
        price: 20.99,
        img: "https://images.unsplash.com/photo-1590658006821-08d7d8f3c8d3?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Everyday Buds",
        price: 10.99,
        img: "https://images.unsplash.com/photo-1606400082777-ef05f3c5e84e?fm=jpg&q=60&w=800&auto=format&fit=crop",
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
        img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Smartwatch Series",
        price: 35.99,
        img: "https://images.unsplash.com/photo-1544117519-31a4b719223d?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Sport Watch",
        price: 20.99,
        img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Leather Strap Watch",
        price: 20.99,
        img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Minimalist Watch",
        price: 25.99,
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Chronograph Watch",
        price: 19.99,
        img: "https://images.unsplash.com/photo-1495856458515-0637185db551?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Steel Band Watch",
        price: 30.99,
        img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Everyday Watch",
        price: 30.99,
        img: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Business Watch",
        price: 20.99,
        img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Luxury Style Watch",
        price: 40.99,
        img: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?fm=jpg&q=60&w=800&auto=format&fit=crop",
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
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Everyday Handbag",
        price: 10.99,
        img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Crossbody Bag",
        price: 20.99,
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Mini Shoulder Bag",
        price: 18.99,
        img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Canvas Tote",
        price: 8.99,
        img: "https://images.unsplash.com/photo-1591044752260-af31049fc71b?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Leather Satchel",
        price: 19.99,
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Weekender Bag",
        price: 10.99,
        img: "https://images.unsplash.com/photo-1547949003-9792a18a2645?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Backpack",
        price: 9.99,
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Clutch Bag",
        price: 20.99,
        img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
      {
        name: "Travel Duffel",
        price: 20.99,
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?fm=jpg&q=60&w=800&auto=format&fit=crop",
      },
    ],
  },
];

// ===== Render products =====
const productRoot = document.getElementById("productRoot");
let cartCount = 0;

function renderProducts(filterKey = "all") {
  productRoot.innerHTML = "";
  const groups = PRODUCT_GROUPS.filter(
    (g) => filterKey === "all" || g.key === filterKey,
  );

  groups.forEach((group) => {
    const section = document.createElement("div");
    section.className = "category-group";
    section.innerHTML = `
      <h3>${group.title}</h3>
      <div class="product-grid">
        ${group.items
          .map(
            (item, i) => `
          <article class="product-card">
            <div class="thumb">
              <img src="${item.img}" alt="${item.name}" loading="lazy" width="400" height="400" />
            </div>
            <div class="info">
              <h4>${item.name}</h4>
              <p class="price">$${item.price.toFixed(2)}</p>
              <button class="add-btn" data-group="${group.key}" data-index="${i}">Add to cart</button>
            </div>
          </article>`,
          )
          .join("")}
      </div>
    `;
    productRoot.appendChild(section);
  });

  if (groups.length === 0) {
    productRoot.innerHTML = `<p>No products found. Try a different search.</p>`;
  }
}

renderProducts();

// ===== Category filter chips =====
document.querySelectorAll(".cat-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document
      .querySelectorAll(".cat-chip")
      .forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    renderProducts(chip.dataset.filter);
  });
});

// ===== Add to cart =====
productRoot.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  cartCount += 1;
  document.getElementById("cartCount").textContent = cartCount;
  btn.textContent = "Added ✓";
  setTimeout(() => (btn.textContent = "Add to cart"), 1200);
});

// ===== Search =====
const searchInput = document.getElementById("siteSearch");
searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();
  if (!term) {
    renderProducts(getActiveFilter());
    return;
  }
  const filtered = PRODUCT_GROUPS.map((g) => ({
    ...g,
    items: g.items.filter((i) => i.name.toLowerCase().includes(term)),
  })).filter((g) => g.items.length > 0);

  productRoot.innerHTML = "";
  if (filtered.length === 0) {
    productRoot.innerHTML = `<p>No products match "${term}".</p>`;
    return;
  }
  filtered.forEach((group) => {
    const section = document.createElement("div");
    section.className = "category-group";
    section.innerHTML = `
      <h3>${group.title}</h3>
      <div class="product-grid">
        ${group.items
          .map(
            (item) => `
          <article class="product-card">
            <div class="thumb"><img src="${item.img}" alt="${item.name}" loading="lazy" /></div>
            <div class="info">
              <h4>${item.name}</h4>
              <p class="price">$${item.price.toFixed(2)}</p>
              <button class="add-btn">Add to cart</button>
            </div>
          </article>`,
          )
          .join("")}
      </div>
    `;
    productRoot.appendChild(section);
  });
});

function getActiveFilter() {
  const active = document.querySelector(".cat-chip.active");
  return active ? active.dataset.filter : "all";
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
  newsletterForm.innerHTML = `<p style="font-weight:600;color:var(--teal-dark)">Thanks — we'll be in touch at ${email}.</p>`;
});
