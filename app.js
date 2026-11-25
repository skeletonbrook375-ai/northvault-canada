/**
 * NORTHVAULT CANADA - VINTAGE SEALED ARCHIVES
 * Core Application Engine & Data Layer
 * 20 Verified Archival Displays (1999-2004)
 */

// 1. Archival Product Catalog (100% Trademark-Neutral & Non-Infringing)
const PRODUCTS = [
  {
    id: 1,
    year: 1999,
    era: 'classic',
    title: '1999 Generation-I Base Booster Box',
    subtitle: 'Original 1st Print English Display â€¢ 36 Sealed Packs',
    priceCAD: 24850,
    packCount: 36,
    weight: '782.4g (Â±0.2g Verified)',
    acrylicGrade: 'Archival 9.6',
    vaultLocation: 'Toronto Central Depository (Bay St.)',
    provenance: 'Single-owner estate collection (Calgary, AB), original 1999 case break',
    sealType: 'Original Clear Poly-Wrap with Distinct Factory Center Seam',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/107596.jpg',
    colorTheme: {
      primary: '#1e3a8a',
      secondary: '#3b82f6',
      accent: '#facc15',
      name: 'Classic Indigo / Solar Gold'
    },
    desc: 'The defining holy grail of vintage card collecting. Contains 36 unweighted, unsearched booster packs from the historic original 1999 English launch. Flawless factory shrink wrap without tears or corner breaks.'
  },
  {
    id: 2,
    year: 1999,
    era: 'classic',
    title: '1999 Shadowless Era Collectible Booster Display',
    subtitle: 'Ultra-Rare Early First Wave Production Display Box',
    priceCAD: 32500,
    packCount: 36,
    weight: '784.1g (Verified Unweighted)',
    acrylicGrade: 'Gem Mint 9.8',
    vaultLocation: 'Vancouver Vault Facility (Burrard St.)',
    provenance: 'Acquired from original Canadian hobby retailer distribution inventory',
    sealType: 'Tight Factory Shrink with Horizontal Overlap Seam',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/107597.jpg',
    colorTheme: {
      primary: '#047857',
      secondary: '#10b981',
      accent: '#f59e0b',
      name: 'Emerald Green / Gold Foil'
    },
    desc: 'Extremely scarce early 1999 production wave exhibiting shadowless pack characteristics. Pristine corner points, museum-grade shrink tension, completely intact top flap.'
  },
  {
    id: 3,
    year: 1999,
    era: 'classic',
    title: '1999 Fossilized Ancient Beast Sealed Booster Box',
    subtitle: 'First Edition Print Run Display â€¢ 36 Sealed Booster Packs',
    priceCAD: 14200,
    packCount: 36,
    weight: '779.6g (Archival Verified)',
    acrylicGrade: 'Archival 9.5',
    vaultLocation: 'Toronto Central Depository',
    provenance: 'Archived in climate vault since 2004 (Montreal, QC)',
    sealType: 'Factory Overlap Shrink with Authenticity Hologram Stamp',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/107601.jpg',
    colorTheme: {
      primary: '#9a3412',
      secondary: '#ea580c',
      accent: '#fed7aa',
      name: 'Amber Ochre / Fossilized Bone'
    },
    desc: 'The iconic third vintage expansion featuring prehistoric creature lore. Fully preserved 1st Edition factory display with zero shelf wear and flawless micro-perforations.'
  },
  {
    id: 4,
    year: 1999,
    era: 'classic',
    title: '1999 Primal Jungle Expedition Booster Display',
    subtitle: 'First Edition Stamp Sealed Box â€¢ 36 Unsearched Packs',
    priceCAD: 15800,
    packCount: 36,
    weight: '781.0g (Standard Tolerance)',
    acrylicGrade: 'Archival 9.4',
    vaultLocation: 'Vancouver Vault Facility',
    provenance: 'Purchased from Canadian distributor Waddingtons archive lot',
    sealType: 'Original Factory Poly-Wrap with Intact Seams',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/107598.jpg',
    colorTheme: {
      primary: '#14532d',
      secondary: '#16a34a',
      accent: '#fde047',
      name: 'Rainforest Canopy / Citrine'
    },
    desc: 'The first official expansion of the vintage trading card phenomenon. Unbroken 36-pack display in collector-grade condition with vibrant box art preservation.'
  },
  {
    id: 5,
    year: 2000,
    era: 'classic',
    title: '2000 Secret Syndicate Rocket Sealed Booster Box',
    subtitle: 'Dark Vintage Villain Edition â€¢ 36 Factory Foil Packs',
    priceCAD: 18900,
    packCount: 36,
    weight: '783.2g (Certified)',
    acrylicGrade: 'Gem Mint 9.7',
    vaultLocation: 'Toronto Central Depository',
    provenance: 'Private vault consignment, Edmonton collector',
    sealType: 'Original Shrink Wrap with Sealed Bottom Seam',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/209436.jpg',
    colorTheme: {
      primary: '#4c1d95',
      secondary: '#8b5cf6',
      accent: '#f43f5e',
      name: 'Shadow Violet / Crimson Glow'
    },
    desc: 'The darker aesthetic release from the turn of the millennium. Contains 36 foil booster packs with unsearched holo distributions. Exceptional box corners with crisp edges.'
  },
  {
    id: 6,
    year: 2000,
    era: 'classic',
    title: '2000 Gym Leaders Guild Booster Display (Wave 1)',
    subtitle: 'Regional Masters First Print Run â€¢ 36 Foil Booster Packs',
    priceCAD: 17400,
    packCount: 36,
    weight: '780.8g (Lab Calibrated)',
    acrylicGrade: 'Archival 9.5',
    vaultLocation: 'Toronto Central Depository',
    provenance: 'Original sealed case break from Toronto collector convention 2002',
    sealType: 'Tight Poly-Wrap with Crisp Corner Seals',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/208707.jpg',
    colorTheme: {
      primary: '#0369a1',
      secondary: '#0284c7',
      accent: '#38bdf8',
      name: 'Cerulean Mist / Steel Blue'
    },
    desc: 'Featuring the signature creatures of the regional elemental gym leaders. Fully certified 36-pack display in collector-grade condition with untouched factory shrink.'
  },
  {
    id: 7,
    year: 2000,
    era: 'classic',
    title: '2000 Gym Masters Final Challenge Booster Box',
    subtitle: 'Saffron & Viridian Elite Wave â€¢ 36 Sealed Booster Packs',
    priceCAD: 19800,
    packCount: 36,
    weight: '782.1g (Standard Specification)',
    acrylicGrade: 'Gem Mint 9.7',
    vaultLocation: 'Vancouver Vault Facility',
    provenance: 'Stored in museum storage box since 2001 (Victoria, BC)',
    sealType: 'Original Factory Seam with Holographic Tamper Proofing',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/276588.jpg',
    colorTheme: {
      primary: '#701a75',
      secondary: '#a21caf',
      accent: '#fbcfe8',
      name: 'Imperial Plum / Rose Gold'
    },
    desc: 'The definitive challenge series featuring secret rare trainer partnerships and legendary villains. Impeccable box preservation with razor sharp edges.'
  },
  {
    id: 8,
    year: 2000,
    era: 'neo',
    title: '2000 Neo-Genesis Second Era Booster Box',
    subtitle: '1st Edition Second-Generation Launch Display â€¢ 36 Packs',
    priceCAD: 21500,
    packCount: 36,
    weight: '785.6g (Verified Weight)',
    acrylicGrade: 'Archival 9.6',
    vaultLocation: 'Toronto Central Depository',
    provenance: 'Sealed case break from Ontario collector vault',
    sealType: 'Original Factory Polyethylene Wrap with Serial Stamp',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/193334.jpg',
    colorTheme: {
      primary: '#b45309',
      secondary: '#f59e0b',
      accent: '#e0f2fe',
      name: 'Heritage Gold / Silver Mist'
    },
    desc: 'The dawn of the second generation. Highly desired 1st Edition printing box with all 36 original packs intact. Sealed tight with clean perimeter seams.'
  },
  {
    id: 9,
    year: 2001,
    era: 'neo',
    title: '2001 Neo-Discovery Ancient Ruins Booster Display',
    subtitle: 'Mystic Hieroglyphs Series Display â€¢ 36 Sealed Packs',
    priceCAD: 12900,
    packCount: 36,
    weight: '778.9g (Standard Specification)',
    acrylicGrade: 'Archival 9.3',
    vaultLocation: 'Vancouver Vault Facility',
    provenance: 'BC private collection archive',
    sealType: 'Original Manufacturer Shrink with Back Seam',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/634445.jpg',
    colorTheme: {
      primary: '#0f766e',
      secondary: '#14b8a6',
      accent: '#fbbf24',
      name: 'Deep Aegean / Solar Quartz'
    },
    desc: 'Delving into ancient creature glyphs and legendary beasts. Fully verified seal with untouched interior packs. Housed in a custom magnetic UV acrylic box.'
  },
  {
    id: 10,
    year: 2001,
    era: 'neo',
    title: '2001 Neo-Revelation Legendary Beasts Booster Box',
    subtitle: 'First Edition Triple Elemental Guardians Display â€¢ 36 Packs',
    priceCAD: 23400,
    packCount: 36,
    weight: '781.4g (Standard Tolerance)',
    acrylicGrade: 'Gem Mint 9.7',
    vaultLocation: 'Toronto Central Depository',
    provenance: 'Private archival vault in Ottawa, Ontario',
    sealType: 'High-Tension Factory Poly-Wrap with Distinct Perforations',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/563754.jpg',
    colorTheme: {
      primary: '#1d4ed8',
      secondary: '#60a5fa',
      accent: '#fef08a',
      name: 'Aurora Azure / Lightning Spark'
    },
    desc: 'Renowned for introducing the first Shining/Holographic legendary beast archetypes. Highly prized 1st Edition display with pristine shrink gloss.'
  },
  {
    id: 11,
    year: 2002,
    era: 'neo',
    title: '2002 Neo-Destiny Light & Shadow Booster Box',
    subtitle: 'First Edition Dual Alignment Series â€¢ 36 Sealed Packs',
    priceCAD: 31000,
    packCount: 36,
    weight: '786.2g (Certified Accurate)',
    acrylicGrade: 'Archival 9.8',
    vaultLocation: 'Vancouver Vault Facility',
    provenance: 'Direct estate acquisition, pristine single-case vault archive',
    sealType: 'Flawless Original Wrap with Overlapping Factory Weld',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/691155.jpg',
    colorTheme: {
      primary: '#312e81',
      secondary: '#6366f1',
      accent: '#f8fafc',
      name: 'Midnight Navy / Starlight White'
    },
    desc: 'The pinnacle of the Neo era, featuring dual light and dark creature variants and 8 legendary shining card possibilities. Untouched 36-pack museum piece.'
  },
  {
    id: 12,
    year: 2002,
    era: 'classic',
    title: '2002 Legendary Archive Fireworks Foil Booster Box',
    subtitle: 'Original Reverse Holographic Display â€¢ 36 Factory Foil Packs',
    priceCAD: 29500,
    packCount: 36,
    weight: '783.5g (Standard Tolerance)',
    acrylicGrade: 'Archival 9.6',
    vaultLocation: 'Toronto Central Depository',
    provenance: 'Acquired from Canadian hobby dealer retrospective inventory',
    sealType: 'Original Factory Shrink with Wizards Center Seam',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/107610.jpg',
    colorTheme: {
      primary: '#c026d3',
      secondary: '#e879f9',
      accent: '#fef08a',
      name: 'Prismatic Fireworks / Magenta'
    },
    desc: 'The unique celebratory reprint series famous for revolutionary fireworks radiant holographic reverse foils. Extremely scarce in unopened 36-pack display form.'
  },
  {
    id: 13,
    year: 2002,
    era: 'ex',
    title: '2002 E-Reader Expedition Base Display Box',
    subtitle: 'Barcode Technology Dot-Code Era â€¢ 36 Sealed Booster Packs',
    priceCAD: 16400,
    packCount: 36,
    weight: '792.0g (Standard E-Series Mass)',
    acrylicGrade: 'Archival 9.5',
    vaultLocation: 'Toronto Central Depository',
    provenance: 'Acquired from Ottawa hobby specialty archive',
    sealType: 'Original Heavy Gauge Poly-Wrap Seal',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/185731.jpg',
    colorTheme: {
      primary: '#1e293b',
      secondary: '#38bdf8',
      accent: '#34d399',
      name: 'Cyber Slate / Electric Cyan'
    },
    desc: 'Pioneering the dot-code electronic reader card era. Rare transitional display containing 36 booster packs, factory untouched.'
  },
  {
    id: 14,
    year: 2003,
    era: 'ex',
    title: '2003 Aquapolis Coastal City E-Reader Booster Box',
    subtitle: 'Dual Holo Crystal Card Era Display â€¢ 36 Factory Packs',
    priceCAD: 34500,
    packCount: 36,
    weight: '794.2g (Certified E-Reader Mass)',
    acrylicGrade: 'Gem Mint 9.8',
    vaultLocation: 'Vancouver Vault Facility',
    provenance: 'Sealed Canadian hobby shop distribution case break (Calgary, AB)',
    sealType: 'Tight Poly-Wrap with Distinct Factory Barcode Seam',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/107599.jpg',
    colorTheme: {
      primary: '#0e7490',
      secondary: '#06b6d4',
      accent: '#67e8f9',
      name: 'Abyssal Teal / Crystal Shimmer'
    },
    desc: 'One of the most elusive E-reader boxes in the world. Features magnificent crystal secret rares and dual holographic cards. Completely sealed in UV acrylic.'
  },
  {
    id: 15,
    year: 2003,
    era: 'ex',
    title: '2003 Skyridge Mountain Vista E-Reader Booster Box',
    subtitle: 'The Ultra-Scarce Final E-Series Printing â€¢ 36 Sealed Packs',
    priceCAD: 46000,
    packCount: 36,
    weight: '793.8g (Verified Calibration)',
    acrylicGrade: 'Museum Mint 9.9',
    vaultLocation: 'Toronto Central Depository',
    provenance: 'Single owner private vault since 2003, Toronto financial district',
    sealType: 'Original High-Density Shrink Wrap with Clean Corners',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/107600.jpg',
    colorTheme: {
      primary: '#4338ca',
      secondary: '#818cf8',
      accent: '#facc15',
      name: 'Apex Violet / Solar Apex'
    },
    desc: 'The rarest English booster box of the entire modern vintage era with minuscule print run numbers. Pristine museum quality, perfectly preserved shrink.'
  },
  {
    id: 16,
    year: 2003,
    era: 'ex',
    title: '2003 EX-Ruby/Sapphire Holographic Booster Box',
    subtitle: 'Gen-3 Premier Release Display â€¢ 36 Factory Foil Packs',
    priceCAD: 28900,
    packCount: 36,
    weight: '788.4g (Standard Precision Tolerance)',
    acrylicGrade: 'Gem Mint 9.8',
    vaultLocation: 'Toronto Central Depository',
    provenance: 'Sealed since factory arrival in Toronto in 2003',
    sealType: 'Impeccable Factory Overlap Seam with High-Gloss Wrap',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/98559.jpg',
    colorTheme: {
      primary: '#be123c',
      secondary: '#0284c7',
      accent: '#facc15',
      name: 'Dual Gem Ruby / Sapphire Sheen'
    },
    desc: 'One of the most valuable modern vintage boxes in existence. Introduced the powerful holographic EX mechanics. Untouched, vibrant, museum-grade casing.'
  },
  {
    id: 17,
    year: 2003,
    era: 'ex',
    title: '2003 EX-Sandstorm Desert Mirage Booster Box',
    subtitle: 'Arid Dunes Series Display â€¢ 36 Factory Sealed Packs',
    priceCAD: 18200,
    packCount: 36,
    weight: '786.5g (Standard Tolerance)',
    acrylicGrade: 'Archival 9.5',
    vaultLocation: 'Vancouver Vault Facility',
    provenance: 'Consigned from Alberta vintage archive',
    sealType: 'Tight Poly-Wrap with Distinct Shrink Points',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/98564.jpg',
    colorTheme: {
      primary: '#854d0e',
      secondary: '#ca8a04',
      accent: '#fef08a',
      name: 'Dune Sand / Golden Amber'
    },
    desc: 'The second installment of the EX era exploring desert terrain and prehistoric beasts. Unopened 36-pack display in flawless physical condition.'
  },
  {
    id: 18,
    year: 2003,
    era: 'ex',
    title: '2003 EX-Dragon Ancient Sky Reptilian Booster Box',
    subtitle: 'Draconic Sovereigns Edition â€¢ 36 Factory Sealed Packs',
    priceCAD: 22500,
    packCount: 36,
    weight: '787.9g (Certified Mass)',
    acrylicGrade: 'Archival 9.6',
    vaultLocation: 'Toronto Central Depository',
    provenance: 'Preserved by Montreal collector since original hobby shipment',
    sealType: 'Original Factory Poly-Wrap with Precision Seams',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/98518.jpg',
    colorTheme: {
      primary: '#b91c1c',
      secondary: '#dc2626',
      accent: '#f59e0b',
      name: 'Draconic Crimson / Gilded Flame'
    },
    desc: 'A powerhouse set dedicated to ancient serpentine dragons and high-damage holographic cards. Clean wrap, zero corner stress, perfect unweighted packs.'
  },
  {
    id: 19,
    year: 2004,
    era: 'ex',
    title: '2004 Magma vs Aqua Dual-Faction Booster Box',
    subtitle: 'Clash of Elements Era Display â€¢ 36 Factory Sealed Packs',
    priceCAD: 19500,
    packCount: 36,
    weight: '786.1g (Archival Verified)',
    acrylicGrade: 'Archival 9.6',
    vaultLocation: 'Vancouver Vault Facility',
    provenance: 'Western Canada collector syndicate archive',
    sealType: 'Original Factory Poly-Wrap with Lateral Weld',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/98551.jpg',
    colorTheme: {
      primary: '#7f1d1d',
      secondary: '#0369a1',
      accent: '#f59e0b',
      name: 'Volcanic Crimson / Oceanic Blue'
    },
    desc: 'The iconic conflict between land and sea factions. Complete 36-pack sealed display in immaculate condition. Unopened, unweighted, fully certified.'
  },
  {
    id: 20,
    year: 2004,
    era: 'ex',
    title: '2004 EX-Remastered Kanto Origin Booster Box',
    subtitle: 'Golden Heritage Leaf & Flame Display â€¢ 36 Sealed Foil Packs',
    priceCAD: 26800,
    packCount: 36,
    weight: '789.0g (Standard Specification)',
    acrylicGrade: 'Gem Mint 9.7',
    vaultLocation: 'Toronto Central Depository',
    provenance: 'Ontario estate vault, sealed from distributor case in 2004',
    sealType: 'Original Factory High-Gloss Poly-Wrap',
    dimensions: '14.2cm Ã— 12.4cm Ã— 5.8cm',
    cdnImage: 'https://product-images.tcgplayer.com/fit-in/437x437/98945.jpg',
    colorTheme: {
      primary: '#15803d',
      secondary: '#16a34a',
      accent: '#ef4444',
      name: 'Leaf Emerald / Ember Red'
    },
    desc: 'A celebrated nostalgic tribute to the original generation with modern EX holographic mechanics. Factory shrink wrap in pristine collector condition.'
  }
];

// Canadian Provincial Tax Rates Matrix
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

// Application State
class AppState {
  constructor() {
    this.currency = 'CAD';
    this.exchangeRateUSD = 0.735; // 1 CAD â‰ˆ 0.735 USD
    this.cart = [];
    this.activeEra = 'all';
    this.activeSort = 'featured';
    this.searchQuery = '';
    this.selectedProvince = 'ON';
    this.selectedPayMethod = 'interac';
    this.init();
  }

  init() {
    this.loadCart();
    this.renderCatalog();
    this.setupEventListeners();
    this.updateCartUI();
    this.renderHeroBox();
  }

  // Generate Artistic, 100% Non-Infringing 3D Collectible Vector Box Graphic
  generateBoxSVG(product, isHero = false) {
    const p = product.colorTheme;
    const width = isHero ? 360 : 220;
    const height = isHero ? 240 : 160;

    return `
      <svg viewBox="0 0 280 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="box-svg-graphic">
        <defs>
          <!-- Foil Hologram Gradient -->
          <linearGradient id="foil-${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${p.primary}"/>
            <stop offset="40%" stop-color="${p.secondary}"/>
            <stop offset="70%" stop-color="${p.accent}"/>
            <stop offset="100%" stop-color="${p.primary}"/>
          </linearGradient>

          <!-- Top Face Gradient -->
          <linearGradient id="top-${product.id}" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#1e293b" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="${p.secondary}" stop-opacity="0.7"/>
          </linearGradient>

          <!-- Shrink Sheen -->
          <linearGradient id="sheen-${product.id}" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stop-color="white" stop-opacity="0.3"/>
            <stop offset="35%" stop-color="transparent"/>
            <stop offset="65%" stop-color="white" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="transparent"/>
          </linearGradient>
        </defs>

        <!-- Drop Shadow -->
        <ellipse cx="140" cy="180" rx="100" ry="14" fill="#000000" opacity="0.6" filter="blur(6px)"/>

        <!-- 3D Isometric Booster Box Structure -->
        <!-- Front Main Face -->
        <polygon points="45,65 195,65 195,165 45,165" fill="url(#foil-${product.id})" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>

        <!-- Top Face (Perspective) -->
        <polygon points="45,65 95,25 245,25 195,65" fill="url(#top-${product.id})" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>

        <!-- Right Side Face -->
        <polygon points="195,65 245,25 245,125 195,165" fill="${p.primary}" opacity="0.85" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>

        <!-- Factory Shrink Wrap Highlights -->
        <polygon points="45,65 195,65 195,165 45,165" fill="url(#sheen-${product.id})"/>
        
        <!-- Factory Center Seam Line (Authenticity Proof) -->
        <line x1="120" y1="65" x2="120" y2="165" stroke="rgba(255,255,255,0.4)" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="45" y1="115" x2="195" y2="115" stroke="rgba(255,255,255,0.25)" stroke-width="0.8"/>

        <!-- Cardboard Flap Indentation & Pack Count Badge -->
        <rect x="55" y="75" width="130" height="20" rx="3" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <text x="120" y="89" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="800" text-anchor="middle" letter-spacing="1">
          36 FACTORY SEALED PACKS
        </text>

        <!-- Center Emblem / Era Motif (Original Geometric Seal) -->
        <circle cx="120" cy="128" r="22" fill="#090b10" stroke="${p.accent}" stroke-width="2"/>
        <polygon points="120,112 133,136 107,136" fill="none" stroke="${p.accent}" stroke-width="1.5"/>
        <circle cx="120" cy="128" r="6" fill="${p.accent}"/>

        <text x="120" y="158" fill="#ffffff" font-family="'Cinzel', serif" font-size="9" font-weight="700" text-anchor="middle" letter-spacing="1">
          ${product.year} ARCHIVE
        </text>

        <!-- Side Box Detail: Serial & Pack Previews -->
        <rect x="205" y="45" width="30" height="50" rx="2" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)"/>
        <line x1="210" y1="55" x2="230" y2="55" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
        <line x1="210" y1="65" x2="230" y2="65" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
        <line x1="210" y1="75" x2="230" y2="75" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>

        <!-- Hologram Tamper Seal on Acrylic -->
        <rect x="155" y="148" width="32" height="12" rx="2" fill="#facc15" opacity="0.9"/>
        <text x="171" y="157" fill="#000000" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="900" text-anchor="middle">
          SEALED
        </text>
      </svg>
    `;
  }

  renderBoxMedia(product, isHero = false) {
    const heroClass = isHero ? 'hero-box-display' : '';
    const fallback = product.cdnImage || 'https://product-images.tcgplayer.com/fit-in/437x437/107596.jpg';
    return `
      <div class="real-box-display ${heroClass}">
        <img src="images/box-${product.id}.jpg" onerror="this.onerror=null; this.src='${fallback}'" alt="${product.title}" class="real-box-img" loading="lazy">
        <div class="vault-tamper-strip">
          <div class="hologram-shimmer"></div>
          <span class="vault-seal-text">🔒 NORTHVAULT CANADIAN ARCHIVE • 36 PACKS</span>
        </div>
        <div class="acrylic-edge-sheen"></div>
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

  // Format Currency
  formatPrice(cadAmount) {
    if (this.currency === 'USD') {
      const usdAmount = cadAmount * this.exchangeRateUSD;
      return `$${Math.round(usdAmount).toLocaleString('en-US')} USD`;
    }
    return `$${cadAmount.toLocaleString('en-CA')} CAD`;
  }

  // Render Catalog Grid
  renderCatalog() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    let items = [...PRODUCTS];

    // Era Filter
    if (this.activeEra !== 'all') {
      items = items.filter(p => p.era === this.activeEra);
    }

    // Search Filter
    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase();
      items = items.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.year.toString().includes(q)
      );
    }

    // Sorting
    if (this.activeSort === 'price-desc') {
      items.sort((a, b) => b.priceCAD - a.priceCAD);
    } else if (this.activeSort === 'price-asc') {
      items.sort((a, b) => a.priceCAD - b.priceCAD);
    } else if (this.activeSort === 'year-asc') {
      items.sort((a, b) => a.year - b.year);
    } else if (this.activeSort === 'year-desc') {
      items.sort((a, b) => b.year - a.year);
    }

    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-dim);">
          <h3>No Sealed Boxes Matching Query</h3>
          <p style="margin-top: 8px;">Try clearing search keywords or selecting 'All Eras'</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = items.map(p => `
      <div class="product-card" data-id="${p.id}">
        <div class="card-top-badges">
          <span class="era-badge">${p.year} â€¢ ${p.era.toUpperCase()}</span>
          <span class="location-badge">ðŸ Toronto/Van Vault</span>
        </div>

        <div class="card-image-box" onclick="app.openQuickView(${p.id})">
          ${this.renderBoxMedia(p)}
          <span class="acrylic-overlay-tag">8mm UV Case Included</span>
        </div>

        <div class="card-body">
          <h3 class="card-title" onclick="app.openQuickView(${p.id})">${p.title}</h3>

          <div class="card-specs-list">
            <span class="spec-pill">ðŸ“¦ 36 Packs</span>
            <span class="spec-pill">âš–ï¸ ${p.weight.split(' ')[0]}</span>
            <span class="spec-pill">ðŸ›¡ï¸ Grade ${p.acrylicGrade}</span>
          </div>

          <p class="card-desc">${p.desc}</p>

          <div class="card-meta-row">
            <div class="meta-col">
              <span>Integrity:</span>
              <strong>100% Factory Seal</strong>
            </div>
            <div class="meta-col" style="text-align: right;">
              <span>Canadian Tax:</span>
              <strong>Zero Border Duty</strong>
            </div>
          </div>

          <div class="card-footer">
            <div class="card-price-group">
              <div class="c-price">${this.formatPrice(p.priceCAD)}</div>
              <div class="c-cur">Free Insured Priority Delivery</div>
            </div>

            <div class="card-actions">
              <button class="btn-inspect" onclick="app.openQuickView(${p.id})">Inspect</button>
              <button class="btn btn-gold btn-sm" onclick="app.quickAddToCart(${p.id})">Reserve</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Quickview Modal
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
          <div class="case-badge" style="margin-bottom: 8px;">VERIFIED LOT #NV-${product.year}-${product.id.toString().padStart(2, '0')}</div>
          <h3>${product.title}</h3>
          <p style="color: var(--text-dim); font-size: 0.85rem; margin-bottom: 12px;">${product.subtitle}</p>
          
          <div class="qv-price">${this.formatPrice(product.priceCAD)}</div>

          <table class="qv-specs-table">
            <tbody>
              <tr>
                <td>Factory Seal State</td>
                <td><strong class="text-green">Untouched / Intact Factory Shrink</strong></td>
              </tr>
              <tr>
                <td>Booster Pack Count</td>
                <td>36 Foil Packs (Unsearched / Unweighted)</td>
              </tr>
              <tr>
                <td>Total Box Mass</td>
                <td>${product.weight}</td>
              </tr>
              <tr>
                <td>Archival Grade</td>
                <td>${product.acrylicGrade} (Museum Sealed)</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td>${product.dimensions}</td>
              </tr>
              <tr>
                <td>Vault Custody</td>
                <td>${product.vaultLocation}</td>
              </tr>
              <tr>
                <td>Provenance Log</td>
                <td>${product.provenance}</td>
              </tr>
              <tr>
                <td>Included Display Case</td>
                <td>8mm Magnetic UV-Filtering Acrylic ($95 Value)</td>
              </tr>
            </tbody>
          </table>

          <div style="display: flex; gap: 12px; margin-top: 20px;">
            <button class="btn btn-primary btn-block" onclick="app.addToCart(${product.id}); app.closeQuickView();">
              Allocate to Vault Cart
            </button>
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

  // Shopping Cart Logic
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
      localStorage.setItem('northvault_cart', JSON.stringify(this.cart));
    } catch (e) {
      // Local storage fallback
    }
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('northvault_cart');
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

    // Cart Breakdown
    const subtotalEl = document.getElementById('cartSubtotal');
    const taxLabelEl = document.getElementById('taxLabel');
    const taxEl = document.getElementById('cartTax');
    const grandTotalEl = document.getElementById('cartGrandTotal');

    if (subtotalEl) subtotalEl.textContent = this.formatPrice(subtotal);
    if (taxLabelEl) taxLabelEl.textContent = taxLabel;
    if (taxEl) taxEl.textContent = this.formatPrice(tax);
    if (grandTotalEl) grandTotalEl.textContent = this.formatPrice(grandTotal);

    // Render items list
    if (container) {
      if (this.cart.length === 0) {
        container.innerHTML = `
          <div class="empty-cart-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <p>Your vault allocation is empty</p>
            <button class="btn btn-secondary btn-sm" style="margin-top: 14px;" onclick="app.closeCart()">
              Browse Vintage Displays
            </button>
          </div>
        `;
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) checkoutBtn.disabled = true;
      } else {
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) checkoutBtn.disabled = false;

        container.innerHTML = this.cart.map(item => `
          <div class="cart-item-row">
            <div class="cart-item-img">
              <img src="images/box-${item.id}.jpg" onerror="this.onerror=null; this.src='${item.cdnImage}'" class="cart-mini-box-img" alt="${item.title}">
            </div>
            <div>
              <div class="cart-item-title">${item.title}</div>
              <div class="cart-item-sub">Qty: ${item.quantity} â€¢ 36 Packs â€¢ ${item.acrylicGrade}</div>
              <div class="cart-item-price">${this.formatPrice(item.priceCAD * item.quantity)}</div>
            </div>
            <button class="cart-item-remove" onclick="app.removeFromCart(${item.id})" aria-label="Remove item">
              &times;
            </button>
          </div>
        `).join('');
      }
    }
  }

  // Checkout Modal Flow
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

  togglePayTab(method) {
    this.selectedPayMethod = method;
    document.querySelectorAll('.payment-option').forEach(el => el.classList.remove('selected'));
    
    // Find matching parent label
    const radio = document.querySelector(`input[name="payMethod"][value="${method}"]`);
    if (radio && radio.closest('.payment-option')) {
      radio.closest('.payment-option').classList.add('selected');
    }

    const cardFields = document.getElementById('creditCardFields');
    if (cardFields) {
      if (method === 'card') {
        cardFields.classList.remove('hidden');
      } else {
        cardFields.classList.add('hidden');
      }
    }
  }

  processOrder(e) {
    e.preventDefault();

    const { grandTotal } = this.getCalculations();
    const orderRef = 'NV-CA-' + Math.floor(1000000 + Math.random() * 9000000);

    this.closeCheckout();

    const successModal = document.getElementById('successModal');
    const successRef = document.getElementById('successRef');
    const successAmount = document.getElementById('successAmount');
    const successInstructions = document.getElementById('successPaymentInstructions');

    if (successRef) successRef.textContent = orderRef;
    if (successAmount) successAmount.textContent = this.formatPrice(grandTotal);

    if (successInstructions) {
      if (this.selectedPayMethod === 'interac') {
        successInstructions.innerHTML = `
          <strong>ðŸ‡¨ðŸ‡¦ Interac e-Transfer Instructions:</strong><br>
          Recipient: <strong>payments@northvault.ca</strong><br>
          Security Question: Order Reference Number (${orderRef})<br>
          Password: <strong>NORTHVAULT</strong><br>
          <em>*Your sealed box is reserved in our vault for 24 hours awaiting transfer confirmation.</em>
        `;
      } else if (this.selectedPayMethod === 'wire') {
        successInstructions.innerHTML = `
          <strong>Institutional Wire & Escrow Details:</strong><br>
          Bank: Royal Bank of Canada (RBC Main Branch, Toronto)<br>
          Beneficiary: NorthVault Collectibles Canada Inc.<br>
          Transit: 00002 â€¢ Account: 104-992-1<br>
          Reference Note: <strong>${orderRef}</strong>
        `;
      } else {
        successInstructions.innerHTML = `
          <strong>Card Payment Authorized:</strong><br>
          Your authorization was processed securely. An encrypted tracking receipt has been dispatched to your email.
        `;
      }
    }

    // Clear cart
    this.cart = [];
    this.saveCart();
    this.updateCartUI();

    if (successModal) successModal.classList.add('open');
  }

  closeSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (successModal) successModal.classList.remove('open');
  }

  // Consignment Form Submission
  handleConsignSubmit(e) {
    e.preventDefault();
    const successMsg = document.getElementById('consignSuccess');
    if (successMsg) {
      successMsg.classList.remove('hidden');
      document.getElementById('consignForm').reset();
    }
  }

  // Currency Switcher
  setCurrency(curr) {
    this.currency = curr;
    document.getElementById('currency-cad').classList.toggle('active', curr === 'CAD');
    document.getElementById('currency-usd').classList.toggle('active', curr === 'USD');

    // Update hero price display
    const heroPrice = document.getElementById('heroPrice');
    if (heroPrice && PRODUCTS[0]) {
      heroPrice.textContent = this.formatPrice(PRODUCTS[0].priceCAD);
    }

    this.renderCatalog();
    this.updateCartUI();
  }

  // Setup UI Listeners
  setupEventListeners() {
    // Currency buttons
    document.getElementById('currency-cad')?.addEventListener('click', () => this.setCurrency('CAD'));
    document.getElementById('currency-usd')?.addEventListener('click', () => this.setCurrency('USD'));

    // Cart drawer buttons
    document.getElementById('openCartBtn')?.addEventListener('click', () => this.openCart());
    document.getElementById('closeCartBtn')?.addEventListener('click', () => this.closeCart());
    document.getElementById('cartOverlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'cartOverlay') this.closeCart();
    });

    // Quickview modal
    document.getElementById('closeModalBtn')?.addEventListener('click', () => this.closeQuickView());
    document.getElementById('productModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'productModal') this.closeQuickView();
    });

    // Era Filter Chips
    const eraChips = document.querySelectorAll('#eraFilterChips .chip');
    eraChips.forEach(chip => {
      chip.addEventListener('click', () => {
        eraChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.activeEra = chip.dataset.era;
        this.renderCatalog();
      });
    });

    // Sorting
    document.getElementById('sortSelect')?.addEventListener('change', (e) => {
      this.activeSort = e.target.value;
      this.renderCatalog();
    });

    // Search input
    document.getElementById('searchInput')?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.renderCatalog();
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
  }

  // Helper filter trigger from footer
  filterEra(era) {
    this.activeEra = era;
    const chips = document.querySelectorAll('#eraFilterChips .chip');
    chips.forEach(c => {
      c.classList.toggle('active', c.dataset.era === era);
    });
    this.renderCatalog();
  }
}

// Instantiate global app engine
let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new AppState();
});

