# NORTHVAULT CANADA • Vintage Sealed Booster Box Vault

An archival e-commerce web platform designed for selling vintage sealed collectible card booster boxes in Canada (1999–2004) without infringing copyrights or trademarks.

---

## 🛡️ Intellectual Property & Copyright Protection Strategy

To comply strictly with copyright and trademark guidelines:
1. **Zero Trademark Infringement**: No publisher trademarks, logos, or commercial brand names (*Pokémon, Nintendo, Game Freak, Creatures, Wizards of the Coast, Pikachu, Charizard*, etc.) are used in product names, metadata, or descriptions.
2. **Archival & Descriptive Classification**: Products are cataloged using factual, historical collector specifications:
   - Release year (e.g., *1999*, *2000*, *2003*)
   - Pack count (e.g., *36 Factory Sealed Foil Packs*)
   - Era and printing wave (e.g., *Generation-I Base*, *Shadowless Early First Wave*, *Prehistoric Ancient Beast*, *Secret Syndicate*, *Neo Generation*, *EX Ruby Era*)
   - Physical box mass and seal verification (e.g., *782.4g, factory shrink wrap with clear center overlap seam*)
3. **Original Vector 3D Artwork**: No commercial product photographs or copyrighted character illustrations. Products are rendered dynamically using high-resolution SVG 3D vector graphics featuring metallic foil gradients, holographic authenticity seals, factory seams, and acrylic casing reflections.

---

## 🇨🇦 Canadian E-Commerce Advantages

* **Domestic Inventory Advantage**: Emphasizes that all boxes are already vaulted in Toronto (Bay St.) and Vancouver (Burrard St.), eliminating 13–15% in CBSA import duties, customs holds, and courier brokerage charges.
* **Provincial Tax Automation**: Real-time tax calculation for all 10 provinces & 3 territories:
  - Ontario: 13% HST
  - Quebec: 14.975% GST + QST
  - British Columbia: 12% GST + PST
  - Alberta / Territories: 5% GST
  - Atlantic Provinces: 15% HST
* **Canadian Payment Methods**:
  - **Interac e-Transfer** (preferred in Canada for zero card fees on high-value collectibles)
  - **Major Credit Cards** (Stripe-styled card processing)
  - **Direct Canadian Bank Wire & Escrow** (RBC, TD, Scotiabank, BMO, CIBC)
* **Insured Transit**: Free Canada Post Priority / FedEx Secure Armored Courier with direct signature delivery.
* **Archival Preservation**: Every box includes an 8mm UV-filtering magnetic acrylic display case.

---

## 📁 Project Structure

```
sealed-vault-canada/
├── index.html        # Main storefront, hero showcase, catalog, FAQ, consign form, modals
├── styles.css        # Luxury dark vault design, glassmorphism, responsive grid, animations
├── app.js            # Catalog engine, dynamic SVG generator, cart, tax calculator & checkout
└── README.md         # Documentation & guide
```

---

## 🚀 How to Run the Website

### Option 1: Direct Local Preview (No installation required)
Simply double-click `index.html` or right-click `index.html` → **Open with** → **Google Chrome** (or Microsoft Edge / Opera).

### Option 2: Free Cloud Hosting (1-click)
You can deploy this folder directly to any static host for free:
- **Netlify**: Drag and drop the `sealed-vault-canada` folder into [Netlify Drop](https://app.netlify.com/drop).
- **Vercel**: Run `npx vercel` or import the repository.
- **GitHub Pages**: Push this directory to a GitHub repository and enable GitHub Pages in repository settings.

---

## ⚙️ Customization Guide

- **Add/Modify Boxes**: Open `app.js` and edit the `PRODUCTS` array to update prices, weights, release years, or add new boxes.
- **Change Currency Default**: Toggle between CAD and USD anytime with the top currency switcher, or change the default in `app.js` (`this.currency = 'CAD'`).
- **Update Vault Email & Phone**: Search for `vault@northvault.ca` and `1-888-555-VAULT` in `index.html` to insert your actual contact details.
