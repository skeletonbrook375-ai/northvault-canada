/**
 * NORTHVAULTS - Trading Card Mystery Boxes (Canada)
 * Core Application Engine & Data Layer
 * 20 Mystery Box Designs (Starter, Collector, Premium)
 */

const BOX_DISCLAIMER =
  'Each box contains an assortment of trading cards (may include singles and/or booster packs from various sets and eras). Contents vary; no specific card, set, rarity or value is guaranteed. These are NorthVaults-packed mystery boxes — not original manufacturer factory-sealed products. Not affiliated with or endorsed by any trading card game publisher. Box artwork shown is our packaging design.';

const TIER_LABELS = {
  starter: 'Starter',
  collector: 'Collector',
  premium: 'Premium'
};

const PRODUCTS = [
  {
    id: 1,
    era: 'starter',
    title: 'Crimson Phoenix Trading Card Mystery Box',
    subtitle: 'Starter Tier &bull; Assorted Trading Cards',
    priceCAD: 189,
    desc: `Crimson and burnished-gold box featuring our fiery phoenix packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 2,
    era: 'starter',
    title: 'Sapphire Serpent Trading Card Mystery Box',
    subtitle: 'Starter Tier &bull; Assorted Trading Cards',
    priceCAD: 215,
    desc: `Cobalt-blue and silver box featuring our sapphire crystal and serpent packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 3,
    era: 'starter',
    title: 'Emerald Forest Spirit Trading Card Mystery Box',
    subtitle: 'Starter Tier &bull; Assorted Trading Cards',
    priceCAD: 249,
    desc: `Emerald-green and bronze box featuring our woodland spirit packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 4,
    era: 'starter',
    title: 'Amethyst Arcane Trading Card Mystery Box',
    subtitle: 'Starter Tier &bull; Assorted Trading Cards',
    priceCAD: 279,
    desc: `Royal-purple prism box featuring our floating amethyst crystal obelisk packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 5,
    era: 'collector',
    title: 'Amber Storm Bird Trading Card Mystery Box',
    subtitle: 'Collector Tier &bull; Assorted Trading Cards',
    priceCAD: 299,
    desc: `Amber-yellow and copper box featuring our storm-bird and lightning crystal packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 6,
    era: 'collector',
    title: 'Obsidian Star Dragon Trading Card Mystery Box',
    subtitle: 'Collector Tier &bull; Assorted Trading Cards',
    priceCAD: 325,
    desc: `Obsidian-black holographic-style box featuring our geometric dragon and star-orb packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 7,
    era: 'collector',
    title: 'Pearl Seraph Trading Card Mystery Box',
    subtitle: 'Collector Tier &bull; Assorted Trading Cards',
    priceCAD: 349,
    desc: `Pearl-white and champagne-gold box featuring our winged sunstone prism packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 8,
    era: 'collector',
    title: 'Teal Leviathan Trading Card Mystery Box',
    subtitle: 'Collector Tier &bull; Assorted Trading Cards',
    priceCAD: 365,
    desc: `Teal-cyan and silver box featuring our sea-leviathan and ice-crystal packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 9,
    era: 'collector',
    title: 'Magma Golem Trading Card Mystery Box',
    subtitle: 'Collector Tier &bull; Assorted Trading Cards',
    priceCAD: 389,
    desc: `Burnt-orange and brass box featuring our volcanic stone-golem packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 10,
    era: 'collector',
    title: 'Cosmic Lotus Trading Card Mystery Box',
    subtitle: 'Collector Tier &bull; Assorted Trading Cards',
    priceCAD: 399,
    desc: `Magenta-rose and chrome-silver box featuring our cosmic lotus and crescent moon packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 11,
    era: 'premium',
    title: 'Mossy Rune Trading Card Mystery Box',
    subtitle: 'Premium Tier &bull; Assorted Trading Cards',
    priceCAD: 419,
    desc: `Forest-olive and gold-leaf box featuring our mossy rune monolith packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 12,
    era: 'premium',
    title: 'Astral Knight Trading Card Mystery Box',
    subtitle: 'Premium Tier &bull; Assorted Trading Cards',
    priceCAD: 435,
    desc: `Midnight-navy and electric-cyan box featuring our astral knight and comet packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 13,
    era: 'premium',
    title: 'Ruby Chalice Trading Card Mystery Box',
    subtitle: 'Premium Tier &bull; Assorted Trading Cards',
    priceCAD: 449,
    desc: `Burgundy-wine and rose-gold box featuring our winged chalice and ruby crystal packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 14,
    era: 'premium',
    title: 'Clockwork Dragon Trading Card Mystery Box',
    subtitle: 'Premium Tier &bull; Assorted Trading Cards',
    priceCAD: 465,
    desc: `Slate-grey and copper box featuring our clockwork gear-dragon packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 15,
    era: 'premium',
    title: 'Aurora Spirit Wolf Trading Card Mystery Box',
    subtitle: 'Premium Tier &bull; Assorted Trading Cards',
    priceCAD: 479,
    desc: `Turquoise-mint and silver box featuring our aurora spirit wolf packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 16,
    era: 'premium',
    title: 'Solar Sphinx Trading Card Mystery Box',
    subtitle: 'Premium Tier &bull; Assorted Trading Cards',
    priceCAD: 495,
    desc: `Terracotta and bronze box featuring our winged guardian and solar disc packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 17,
    era: 'premium',
    title: 'Nebula Crystal Trading Card Mystery Box',
    subtitle: 'Premium Tier &bull; Assorted Trading Cards',
    priceCAD: 510,
    desc: `Indigo-violet and gold box featuring our floating arcane crystals and nebula packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 18,
    era: 'premium',
    title: 'Frost Stag Trading Card Mystery Box',
    subtitle: 'Premium Tier &bull; Assorted Trading Cards',
    priceCAD: 525,
    desc: `Ice-blue and white box featuring our crystalline frost-stag packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 19,
    era: 'premium',
    title: 'Emerald Cyber Serpent Trading Card Mystery Box',
    subtitle: 'Premium Tier &bull; Assorted Trading Cards',
    priceCAD: 539,
    desc: `Charcoal-gunmetal and neon-emerald box featuring our arcane serpent and rune-stone packaging artwork. ${BOX_DISCLAIMER}`
  },
  {
    id: 20,
    era: 'premium',
    title: 'Royal Griffin Trading Card Mystery Box',
    subtitle: 'Premium Tier &bull; Assorted Trading Cards',
    priceCAD: 549,
    desc: `Royal-gold and crimson box featuring our crowned griffin emblem packaging artwork. ${BOX_DISCLAIMER}`
  }
];

const PROVINCIAL_TAX_RATES = {
  ON: { name: 'Ontario', rate: 0.13, label: 'ON 13% HST' },
  QC: { name: 'Quebec', rate: 0.14975, label: 'QC 14.975% GST+QST' },
  BC: { name: 'British Columbia', rate: 0.12, label: 'BC 12% GST+PST' },
  AB: { name: 'Alberta', rate: 0.05, label: 'AB 5% GST' },
  MB: { name: 'Manitoba', rate: 0.12, label: 'MB 12% GST+PST' },
  SK: { name: 'Saskatchewan', rate: 0.11, label: 'SK 11% GST+PST' },
  NS: { name: 'Nova Scotia', rate: 0.15, label: 'NS 15% HST' },
  NB: { name: 'New Brunswick', rate: 0.15, label: 'NB 15% HST' },
  NL: { name: 'Newfoundland & Labrador', rate: 0.15, label: 'NL 15% HST' },
  PE: { name: 'Prince Edward Island', rate: 0.15, label: 'PE 15% HST' },
  YT: { name: 'Territories (YT/NT/NU)', rate: 0.05, label: 'Territories 5% GST' }
};

class AppState {
  constructor() {
    this.currency = 'CAD';
    this.exchangeRateUSD = 0.735;
    this.cart = [];
    this.activeEra = 'all';
    this.activeSort = 'featured';
    this.searchQuery = '';
    this.selectedProvince = 'ON';
    this.selectedPayMethod = 'cod';
    this.init();
  }

  init() {
    this.loadCart();
    this.renderCatalog();
    this.setupEventListeners();
    this.updateCartUI();
    this.renderHeroBox();

    const heroPrice = document.getElementById('heroPrice');
    if (heroPrice && PRODUCTS[0]) {
      heroPrice.textContent = this.formatPrice(PRODUCTS[0].priceCAD);
    }

    const params = new URLSearchParams(window.location.search);
    const addParam = parseInt(params.get('add'), 10);
    if (!Number.isNaN(addParam) && PRODUCTS.some(p => p.id === addParam)) {
      this.addToCart(addParam);
      window.history.replaceState({}, '', window.location.pathname + window.location.hash);
    }
  }

  renderBoxMedia(product, isHero = false) {
    const heroClass = isHero ? 'hero-box-display' : '';
    return `
      <div class="real-box-display ${heroClass}">
        <img src="box-${product.id}.jpg" alt="${product.title}" class="real-box-img" loading="lazy">
        <div class="showcase-edge-sheen"></div>
        <div class="corner-bracket top-left"></div>
        <div class="corner-bracket top-right"></div>
        <div class="corner-bracket bottom-left"></div>
        <div class="corner-bracket bottom-right"></div>
      </div>
    `;
  }

  renderHeroBox() {
    const heroBox = document.getElementById('heroVisualBox');
    if (heroBox && PRODUCTS[0]) {
      heroBox.innerHTML = this.renderBoxMedia(PRODUCTS[0], true);
    }
  }

  formatPrice(cadAmount) {
    if (this.currency === 'USD') {
      const usdAmount = cadAmount * this.exchangeRateUSD;
      return `$${Math.round(usdAmount).toLocaleString('en-US')} USD`;
    }
    return `$${cadAmount.toLocaleString('en-CA')} CAD`;
  }

  renderCatalog() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    let items = [...PRODUCTS];

    if (this.activeEra !== 'all') {
      items = items.filter(p => p.era === this.activeEra);
    }

    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase();
      items = items.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );
    }

    if (this.activeSort === 'price-desc') {
      items.sort((a, b) => b.priceCAD - a.priceCAD);
    } else if (this.activeSort === 'price-asc') {
      items.sort((a, b) => a.priceCAD - b.priceCAD);
    }

    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-dim);">
          <h3>No Mystery Boxes Matching Query</h3>
          <p style="margin-top: 8px;">Try clearing search keywords or selecting 'All Tiers'</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = items.map(p => {
      const tierLabel = TIER_LABELS[p.era] || 'Starter';
      return `
      <div class="product-card" data-id="${p.id}">
        <div class="card-top-badges">
          <span class="era-badge">${tierLabel} Tier</span>
          <span class="location-badge">Ships from Canada</span>
        </div>

        <div class="card-image-box" onclick="app.openQuickView(${p.id})">
          ${this.renderBoxMedia(p)}
          <span class="showcase-overlay-tag">Cash on Delivery</span>
        </div>

        <div class="card-body">
          <h3 class="card-title" onclick="app.openQuickView(${p.id})">${p.title}</h3>

          <div class="card-specs-list">
            <span class="spec-pill">Mystery Box</span>
            <span class="spec-pill">Contents Vary</span>
            <span class="spec-pill">Cash on Delivery</span>
          </div>

          <p class="card-desc">${p.desc}</p>

          <div class="card-meta-row">
            <div class="meta-col">
              <span>Payment:</span>
              <strong>Cash on Delivery</strong>
            </div>
            <div class="meta-col" style="text-align: right;">
              <span>Shipping:</span>
              <strong>Free in Canada</strong>
            </div>
          </div>

          <div class="card-footer">
            <div class="card-price-group">
              <div class="c-price">${this.formatPrice(p.priceCAD)}</div>
              <div class="c-cur">Free shipping &bull; Pay on delivery</div>
            </div>

            <div class="card-actions">
              <button class="btn-inspect" onclick="app.openQuickView(${p.id})">Details</button>
              <button class="btn btn-gold btn-sm" onclick="app.quickAddToCart(${p.id})">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    `;
    }).join('');
  }

  openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const content = document.getElementById('modalContent');

    content.innerHTML = `
      <div class="quickview-grid">
        <div class="qv-image-box">
          <div style="width: 100%; max-width: 320px;">
            ${this.renderBoxMedia(product, true)}
          </div>
        </div>

        <div class="qv-details">
          <h3>${product.title}</h3>
          <p style="color: var(--text-dim); font-size: 0.85rem; margin-bottom: 12px;">${product.subtitle}</p>

          <div class="qv-price">${this.formatPrice(product.priceCAD)}</div>

          <table class="qv-specs-table">
            <tbody>
              <tr>
                <td>Contents</td>
                <td>${product.desc}</td>
              </tr>
              <tr>
                <td>Payment</td>
                <td>Cash on delivery (pay the courier when your order arrives)</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free, Canada only (1-3 business days processing, 3-8 business days transit)</td>
              </tr>
              <tr>
                <td>Returns</td>
                <td>Refuse unopened box at delivery or return unopened within 14 days</td>
              </tr>
            </tbody>
          </table>

          <div style="display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap;">
            <button class="btn btn-primary" style="flex: 1;" onclick="app.addToCart(${product.id}); app.closeQuickView();">
              Add to Cart
            </button>
            <a class="btn btn-secondary" href="product-${product.id}.html">Full product page</a>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('open');
  }

  closeQuickView() {
    const modal = document.getElementById('productModal');
    if (modal) modal.classList.remove('open');
  }

  addToCart(productId) {
    const existing = this.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      const product = PRODUCTS.find(p => p.id === productId);
      if (product) {
        this.cart.push({ ...product, quantity: 1 });
      }
    }
    this.saveCart();
    this.updateCartUI();
    this.openCart();
  }

  quickAddToCart(productId) {
    this.addToCart(productId);
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.updateCartUI();
  }

  updateQuantity(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
        return;
      }
      this.saveCart();
      this.updateCartUI();
    }
  }

  saveCart() {
    try {
      localStorage.setItem('northvaults_cart_v2', JSON.stringify(this.cart));
    } catch (e) {
      // Local storage fallback
    }
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('northvaults_cart_v2');
      if (saved) {
        this.cart = JSON.parse(saved);
      }
    } catch (e) {
      this.cart = [];
    }
  }

  openCart() {
    const overlay = document.getElementById('cartOverlay');
    if (overlay) overlay.classList.add('open');
  }

  closeCart() {
    const overlay = document.getElementById('cartOverlay');
    if (overlay) overlay.classList.remove('open');
  }

  updateProvinceTax() {
    const select = document.getElementById('provinceTaxSelect');
    if (select) {
      this.selectedProvince = select.value;
      this.updateCartUI();
    }
  }

  getCalculations() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.priceCAD * item.quantity), 0);
    const provConfig = PROVINCIAL_TAX_RATES[this.selectedProvince] || PROVINCIAL_TAX_RATES['ON'];
    const tax = subtotal * provConfig.rate;
    const grandTotal = subtotal + tax;

    return {
      subtotal,
      tax,
      grandTotal,
      taxLabel: `Estimated Tax (${provConfig.label}):`
    };
  }

  updateCartUI() {
    const totalCount = this.cart.reduce((sum, i) => sum + i.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    const navTotalEl = document.getElementById('cartNavTotal');
    const drawerItemCountEl = document.getElementById('drawerItemCount');
    const container = document.getElementById('cartItemsContainer');

    const { subtotal, tax, grandTotal, taxLabel } = this.getCalculations();

    if (cartCountEl) cartCountEl.textContent = totalCount;
    if (drawerItemCountEl) drawerItemCountEl.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    if (navTotalEl) navTotalEl.textContent = this.formatPrice(subtotal);

    const subtotalEl = document.getElementById('cartSubtotal');
    const taxLabelEl = document.getElementById('taxLabel');
    const taxEl = document.getElementById('cartTax');
    const grandTotalEl = document.getElementById('cartGrandTotal');

    if (subtotalEl) subtotalEl.textContent = this.formatPrice(subtotal);
    if (taxLabelEl) taxLabelEl.textContent = taxLabel;
    if (taxEl) taxEl.textContent = this.formatPrice(tax);
    if (grandTotalEl) grandTotalEl.textContent = this.formatPrice(grandTotal);

    if (container) {
      if (this.cart.length === 0) {
        container.innerHTML = `
          <div class="empty-cart-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <p>Your cart is empty</p>
            <button class="btn btn-secondary btn-sm" style="margin-top: 14px;" onclick="app.closeCart()">
              Browse Mystery Boxes
            </button>
          </div>
        `;
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) checkoutBtn.disabled = true;
      } else {
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) checkoutBtn.disabled = false;

        container.innerHTML = this.cart.map(item => {
          const tierLabel = TIER_LABELS[item.era] || 'Starter';
          return `
          <div class="cart-item-row">
            <div class="cart-item-img">
              <img src="box-${item.id}.jpg" class="cart-mini-box-img" alt="${item.title}">
            </div>
            <div>
              <div class="cart-item-title">${item.title}</div>
              <div class="cart-item-sub">Qty: ${item.quantity} &bull; ${tierLabel} Tier &bull; Cash on Delivery</div>
              <div class="cart-item-price">${this.formatPrice(item.priceCAD * item.quantity)}</div>
            </div>
            <button class="cart-item-remove" onclick="app.removeFromCart(${item.id})" aria-label="Remove item">
              &times;
            </button>
          </div>
        `;
        }).join('');
      }
    }
  }

  openCheckout() {
    if (this.cart.length === 0) return;
    this.closeCart();

    const checkoutModal = document.getElementById('checkoutModal');
    const { subtotal, tax, grandTotal } = this.getCalculations();

    const provConfig = PROVINCIAL_TAX_RATES[this.selectedProvince] || PROVINCIAL_TAX_RATES['ON'];
    const provDisplay = document.getElementById('chkProvinceDisplay');
    if (provDisplay) provDisplay.value = `${provConfig.name} (${this.selectedProvince})`;

    const chkSubtotal = document.getElementById('chkSubtotal');
    const chkTax = document.getElementById('chkTax');
    const chkFinalTotal = document.getElementById('chkFinalTotal');
    const chkBtnTotal = document.getElementById('chkBtnTotal');
    const chkItemsList = document.getElementById('chkItemsList');

    if (chkSubtotal) chkSubtotal.textContent = this.formatPrice(subtotal);
    if (chkTax) chkTax.textContent = this.formatPrice(tax);
    if (chkFinalTotal) chkFinalTotal.textContent = this.formatPrice(grandTotal);
    if (chkBtnTotal) chkBtnTotal.textContent = this.formatPrice(grandTotal);

    if (chkItemsList) {
      chkItemsList.innerHTML = this.cart.map(i => `
        <div class="chk-item-mini-row">
          <span>${i.quantity}x ${i.title}</span>
          <span>${this.formatPrice(i.priceCAD * i.quantity)}</span>
        </div>
      `).join('');
    }

    if (checkoutModal) checkoutModal.classList.add('open');
  }

  closeCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) checkoutModal.classList.remove('open');
  }

  async processOrder(e) {
    e.preventDefault();
    if (this.cart.length === 0) return;

    const name = document.getElementById('chkName')?.value.trim() || '';
    const email = document.getElementById('chkEmail')?.value.trim() || '';
    const phone = document.getElementById('chkPhone')?.value.trim() || '';
    const address = document.getElementById('chkAddress')?.value.trim() || '';
    const city = document.getElementById('chkCity')?.value.trim() || '';
    const postal = document.getElementById('chkPostal')?.value.trim() || '';
    const province = this.selectedProvince || 'ON';

    const { subtotal, tax, grandTotal } = this.getCalculations();
    const orderRef = 'NV-CA-' + Math.floor(1000000 + Math.random() * 9000000);
    const itemsText = this.cart
      .map(i => `${i.quantity}x ${i.title} (${this.formatPrice(i.priceCAD * i.quantity)})`)
      .join('; ');

    const submitBtn = document.getElementById('submitOrderBtn');
    const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Placing Order...';
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/skeletonbrook375@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New COD order ${orderRef}`,
          _template: 'table',
          order_ref: orderRef,
          name,
          email,
          phone,
          address: `${address}, ${city}, ${province} ${postal}, Canada`,
          items: itemsText,
          subtotal: this.formatPrice(subtotal),
          tax: this.formatPrice(tax),
          total_due_on_delivery: this.formatPrice(grandTotal)
        })
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === 'false' || result.success === false) {
        throw new Error(result.message || 'Submission failed');
      }

      this.closeCheckout();

      const successModal = document.getElementById('successModal');
      const successRef = document.getElementById('successRef');
      const successAmount = document.getElementById('successAmount');
      const successInstructions = document.getElementById('successPaymentInstructions');

      if (successRef) successRef.textContent = orderRef;
      if (successAmount) successAmount.textContent = this.formatPrice(grandTotal);
      if (successInstructions) {
        successInstructions.innerHTML = `
          <strong>Cash on Delivery Instructions:</strong><br>
          Pay <strong>${this.formatPrice(grandTotal)}</strong> in cash to the courier on delivery. We'll email you a confirmation with your tracking number within 1&ndash;3 business days.
        `;
      }

      document.getElementById('orderForm')?.reset();
      this.cart = [];
      this.saveCart();
      this.updateCartUI();

      if (successModal) successModal.classList.add('open');
    } catch (err) {
      alert('We could not submit your order right now. Please try again or reach us via the Contact page.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      }
    }
  }

  closeSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (successModal) successModal.classList.remove('open');
  }

  setCurrency(curr) {
    this.currency = curr;
    document.getElementById('currency-cad')?.classList.toggle('active', curr === 'CAD');
    document.getElementById('currency-usd')?.classList.toggle('active', curr === 'USD');

    const heroPrice = document.getElementById('heroPrice');
    if (heroPrice && PRODUCTS[0]) {
      heroPrice.textContent = this.formatPrice(PRODUCTS[0].priceCAD);
    }

    this.renderCatalog();
    this.updateCartUI();
  }

  setupEventListeners() {
    document.getElementById('currency-cad')?.addEventListener('click', () => this.setCurrency('CAD'));
    document.getElementById('currency-usd')?.addEventListener('click', () => this.setCurrency('USD'));

    document.getElementById('openCartBtn')?.addEventListener('click', () => this.openCart());
    document.getElementById('closeCartBtn')?.addEventListener('click', () => this.closeCart());
    document.getElementById('cartOverlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'cartOverlay') this.closeCart();
    });

    document.getElementById('closeModalBtn')?.addEventListener('click', () => this.closeQuickView());
    document.getElementById('productModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'productModal') this.closeQuickView();
    });

    const eraChips = document.querySelectorAll('#eraFilterChips .chip');
    eraChips.forEach(chip => {
      chip.addEventListener('click', () => {
        eraChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.activeEra = chip.dataset.era;
        this.renderCatalog();
      });
    });

    document.getElementById('sortSelect')?.addEventListener('change', (e) => {
      this.activeSort = e.target.value;
      this.renderCatalog();
    });

    document.getElementById('searchInput')?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.renderCatalog();
    });

    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
  }

  filterEra(era) {
    this.activeEra = era;
    const chips = document.querySelectorAll('#eraFilterChips .chip');
    chips.forEach(c => {
      c.classList.toggle('active', c.dataset.era === era);
    });
    this.renderCatalog();
  }
}

let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new AppState();
});
