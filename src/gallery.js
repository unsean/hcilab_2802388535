const vessels = [
  {
    id: 1,
    name: 'Oceanic Explorer',
    price: '$4,500,000',
    category: 'Luxury Yacht',
    image: '/src/img/gallery1.avif',
    description: 'The Oceanic Explorer is a magnificent luxury yacht designed for transoceanic adventures. Featuring state-of-the-art navigation systems, spacious cabins, and an elegant entertainment area, this vessel provides unparalleled comfort for extended journeys across the seas.',
    details: {
      year: 2023,
      length: '120 ft',
      capacity: '4 guests, 2 crew',
      engine: 'Twin MTU 16V 2000 M96L',
      features: [
        'Master suite with panoramic views',
        'Infinity pool on deck',
        'Helipad',
        'Beach club with fold-out terraces',
        'Cinema room',
        'Full-service spa and gym'
      ]
    }
  },
  {
    id: 2,
    name: 'Cargo Titan',
    price: '$12,000,000',
    category: 'Cargo Ship',
    image: '/src/img/cargo1.jpg',
    description: 'The Cargo Titan is a state-of-the-art cargo vessel designed for maximum efficiency and reliability. With optimized storage layout and advanced fuel management systems, it provides excellent value for commercial shipping operations.',
    details: {
      year: 2024,
      length: '280 ft',
      capacity: '50,000 tons',
      engine: 'Wärtsilä 14RT-flex96C',
      features: [
        'Advanced loading/unloading systems',
        'Optimized hull design for fuel efficiency',
        'Integrated logistics management console',
        'Modern crew quarters for 20 personnel',
        'Environmentally compliant waste management',
        'Enhanced navigation and safety systems'
      ]
    }
  },
  {
    id: 3,
    name: 'Azure Voyager',
    price: '$8,200,000',
    category: 'Luxury Liner',
    image: '/src/img/voyage.jpg',
    description: 'The Azure Voyager is a luxury liner that combines elegance with cutting-edge maritime technology. Featuring panoramic views from its observation deck and premium entertainment facilities.',
    details: {
      year: 2023,
      length: '150 ft',
      capacity: '90 guests, 18 crew',
      engine: 'Hybrid MTU/Electric',
      features: [
        'Observation deck with 360° views',
        "Gourmet kitchen with chef's table",
        'Wine cellar and tasting room',
        'Smart home automation throughout',
        'Outdoor cinema and entertainment area',
        'Multiple jacuzzis and infinity pool'
      ]
    }
  },
  {
    id: 4,
    name: 'Deep Sea Challenger',
    price: '$6,800,000',
    category: 'Fishing Vessel',
    image: '/src/img/fishing1.jpeg',
    description: 'A modern fishing vessel equipped with advanced sonar systems and sustainable fishing technology. Designed for both commercial fishing operations and research expeditions.',
    details: {
      year: 2023,
      length: '85 ft',
      capacity: '32 crew members',
      engine: 'Caterpillar C32 ACERT',
      features: [
        'Advanced fish finding sonar',
        'Sustainable fishing equipment',
        'Onboard processing facility',
        'Research laboratory',
        'Extended range fuel tanks',
        'Weather monitoring station'
      ]
    }
  },
  {
    id: 5,
    name: 'Royal Majesty',
    price: '$25,500,000',
    category: 'Luxury Yacht',
    image: '/src/img/yacht2.webp',
    description: 'The Royal Majesty represents the pinnacle of luxury yachting. This magnificent vessel combines timeless elegance with cutting-edge technology and unparalleled comfort.',
    details: {
      year: 2024,
      length: '180 ft',
      capacity: '126 guests, 18 crew',
      engine: 'Quad MTU 20V 4000 M93L',
      features: [
        'Private owner\'s deck with infinity pool',
        'Luxury spa and wellness center',
        'Underwater observation lounge',
        'Professional-grade kitchen',
        'Stabilized helicopter landing pad',
        'Advanced security systems'
      ]
    }
  },
  {
    id: 6,
    name: 'Pacific Trader',
    price: '$9,500,000',
    category: 'Cargo Ship',
    image: '/src/img/cargo2.jpeg',
    description: 'A versatile cargo vessel designed for efficient transportation across the Pacific routes. Features advanced cargo handling systems and fuel-efficient propulsion.',
    details: {
      year: 2023,
      length: '220 ft',
      capacity: '120,000 tons',
      engine: 'MAN B&W 8K98MC-C',
      features: [
        'Automated cargo handling',
        'Fuel-efficient hull design',
        'Advanced navigation systems',
        'Crew comfort amenities',
        'Environmental protection systems',
        'Real-time cargo monitoring'
      ]
    }
  },
  {
    id: 7,
    name: 'Crystal Serenity',
    price: '$18,750,000',
    category: 'Luxury Liner',
    image: '/src/img/maxresdefault.jpg',
    description: 'The Crystal Serenity offers an unmatched luxury cruising experience with its elegant design and premium amenities. Perfect for exclusive charters and special events.',
    details: {
      year: 2024,
      length: '160 ft',
      capacity: '3200 guests, 54 crew',
      engine: 'Hybrid Rolls-Royce MTU',
      features: [
        'Grand ballroom for events',
        'Multiple dining venues',
        'Luxury spa and wellness center',
        'Art gallery and library',
        'Outdoor entertainment areas',
        'Advanced stabilization systems'
      ]
    }
  },
  {
    id: 8,
    name: 'Marine Explorer',
    price: '$5,200,000',
    category: 'Fishing Vessel',
    image: '/src/img/fishing3.jpg',
    description: 'A specialized fishing vessel designed for deep-sea exploration and sustainable fishing practices. Equipped with modern technology for efficient operations.',
    details: {
      year: 2023,
      length: '75 ft',
      capacity: '8 crew members',
      engine: 'Cummins QSK38-M',
      features: [
        'Advanced fish detection systems',
        'Sustainable fishing gear',
        'Onboard processing facility',
        'Research equipment',
        'Extended range capability',
        'Weather monitoring systems'
      ]
    }
  },
  {
    id: 9,
    name: 'Golden Horizon',
    price: '$32,000,000',
    category: 'Luxury Yacht',
    image: '/src/img/yacht1.jpeg',
    description: 'The Golden Horizon represents the ultimate in luxury yachting, featuring innovative design and unparalleled amenities. A true masterpiece of maritime engineering.',
    details: {
      year: 2024,
      length: '200 ft',
      capacity: '642 guests, 52 crew',
      engine: 'Quad MTU 20V 4000 M93L',
      features: [
        'Private owner\'s suite with terrace',
        'Luxury spa and wellness center',
        'Underwater observation lounge',
        'Professional-grade kitchen',
        'Helicopter landing pad',
        'Advanced security systems'
      ]
    }
  },
  {
    id: 10,
    name: 'Atlantic Carrier',
    price: '$11,500,000',
    category: 'Cargo Ship',
    image: '/src/img/cargo3.jpeg',
    description: 'A modern cargo vessel optimized for Atlantic routes, featuring advanced cargo handling systems and fuel-efficient design for maximum operational efficiency.',
    details: {
      year: 2023,
      length: '250 ft',
      capacity: '35,000 tons',
      engine: 'Wärtsilä 14RT-flex96C',
      features: [
        'Automated cargo systems',
        'Fuel-efficient design',
        'Advanced navigation',
        'Crew amenities',
        'Environmental systems',
        'Cargo monitoring'
      ]
    }
  },
  {
    id: 11,
    name: 'Emerald Princess',
    price: '$28,500,000',
    category: 'Luxury Liner',
    image: '/src/img/liner1.jpg',
    description: 'The Emerald Princess combines luxury with innovation, offering an exceptional cruising experience. Features state-of-the-art amenities and elegant design.',
    details: {
      year: 2024,
      length: '170 ft',
      capacity: '52000 guests, 214 crew',
      engine: 'Hybrid Rolls-Royce MTU',
      features: [
        'Grand ballroom',
        'Multiple restaurants',
        'Luxury spa',
        'Art gallery',
        'Entertainment areas',
        'Stabilization systems'
      ]
    }
  }
];

// ==== DOM Elements ====
const elements = {
    grid: document.getElementById('vessel-grid'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    sortSelect: document.getElementById('sort-select'),
    searchInput: document.getElementById('search-input'),
    modal: document.getElementById('modal'),
    modalClose: document.getElementById('modal-close'),
    modalContent: {
    img: document.getElementById('modal-img'),
    title: document.getElementById('modal-title'),
    price: document.getElementById('modal-price'),
    year: document.getElementById('modal-year'),
    length: document.getElementById('modal-length'),
    capacity: document.getElementById('modal-capacity'),
    engine: document.getElementById('modal-engine'),
    features: document.getElementById('modal-features'),
    desc: document.getElementById('modal-desc')
  }
};

// ==== State Management ====
let state = {
  currentFilter: 'all',
  currentSort: 'default',
  searchQuery: ''
};

// Create vessel card for gallery-grid
function createVesselCard(vessel) {
  return `
    <div class="card vessel-card">
      <div class="card-image">
        <img src="${vessel.image}" alt="${vessel.name}">
        <div class="price-badge">${vessel.price}</div>
        <div class="category-tag">${vessel.category}</div>
      </div>
      <div class="card-body">
        <h3>${vessel.name}</h3>
        <p>${truncateText(vessel.description, 200)}</p>
        <button class="btn btn-primary view-details" 
                data-id="${vessel.id}">
          View Details
        </button>
      </div>
    </div>
  `;
}

function updateModal(vessel) {
  // Update main content
  elements.modalContent.img.src = vessel.image;
  elements.modalContent.title.textContent = vessel.name;
  elements.modalContent.price.textContent = vessel.price;
  elements.modalContent.desc.textContent = vessel.description;

  // Update specifications
  elements.modalContent.year.textContent = vessel.details.year;
  elements.modalContent.length.textContent = vessel.details.length;
  elements.modalContent.capacity.textContent = vessel.details.capacity;
  elements.modalContent.engine.textContent = vessel.details.engine;

  // Update features list
  elements.modalContent.features.innerHTML = vessel.details.features
    .map(feature => `<li>${feature}</li>`)
    .join('');
}

// Helper
function truncateText(text, maxLength = 100) {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

// Filter
function filterByCategory(vessels, category) {
  if (category === 'all') return vessels;
  return vessels.filter(vessel => vessel.category === category);
}

// Filter Search
function filterBySearch(vessels, query) {
  if (!query) return vessels;
  query = query.toLowerCase();
  return vessels.filter(vessel => 
    vessel.name.toLowerCase().includes(query) ||
    vessel.description.toLowerCase().includes(query) ||
    vessel.category.toLowerCase().includes(query)
  );
}

// Sort by
function sortVessels(vessels, sortType) {
  const vesselsCopy = [...vessels];

  switch (sortType) {
    case 'price-asc':
      return vesselsCopy.sort((a, b) => 
        parseInt(a.price.replace(/\D/g, '')) - 
        parseInt(b.price.replace(/\D/g, '')));
    case 'price-desc':
      return vesselsCopy.sort((a, b) => 
        parseInt(b.price.replace(/\D/g, '')) - 
        parseInt(a.price.replace(/\D/g, '')));
    case 'name-asc':
      return vesselsCopy.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return vesselsCopy.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return vesselsCopy;
  }
}

// ==== Render Functions ====
function renderVessels() {
  // Apply filters and sort
  let filteredVessels = filterByCategory(vessels, state.currentFilter);
  filteredVessels = filterBySearch(filteredVessels, state.searchQuery);
  filteredVessels = sortVessels(filteredVessels, state.currentSort);
  
  // Render the vessels
  if (filteredVessels.length === 0) {
    elements.grid.innerHTML = `
      <div class="no-results">
        <i class="ri-ship-line"></i>
        <p>No vessels found matching your criteria</p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  const vesselCards = filteredVessels.map(vessel => createVesselCard(vessel)).join('');
  elements.grid.innerHTML = vesselCards;

  document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', () => {
      const vesselId = parseInt(button.dataset.id);
      const vessel = vessels.find(v => v.id === vesselId);
      if (vessel) {
        updateModal(vessel);
        elements.modal.classList.remove('hidden');
      }
    });
  });
}

function resetFilters() {
  state.currentFilter = 'all';
  state.currentSort = 'default';
  state.searchQuery = '';
  
  elements.filterButtons.forEach(btn => {
    btn.classList.remove('active');
    btn.querySelector('i').style.transform = 'scale(1)';
  });
  elements.filterButtons[0].classList.add('active');
  elements.filterButtons[0].querySelector('i').style.transform = 'scale(1.1)';
  elements.sortSelect.value = 'default';
  elements.searchInput.value = '';
  
  renderVessels();
}

// ==== Event Handlers ====
function handleFilterClick(event) {
  const button = event.target.closest('.filter-btn');
  if (!button) return;
  
  const category = button.dataset.filter;
  if (!category) return;

  state.currentFilter = category;
  
  elements.filterButtons.forEach(btn => {
    btn.classList.remove('active');
    btn.querySelector('i').style.transform = 'scale(1)';
  });
  button.classList.add('active');
  button.querySelector('i').style.transform = 'scale(1.1)';

  renderVessels();
}

function handleSortChange(event) {
  state.currentSort = event.target.value;
  renderVessels();
}

function handleSearch(event) {
  state.searchQuery = event.target.value.toLowerCase();
  renderVessels();
}

function closeModal() {
  elements.modal.classList.add('hidden');
}

function initialize() {
  document.querySelector('.filter-group').addEventListener('click', handleFilterClick);
  elements.sortSelect.addEventListener('change', handleSortChange);
  elements.searchInput.addEventListener('input', handleSearch);
  elements.modalClose.addEventListener('click', closeModal);
  elements.modal.addEventListener('click', event => {
    if (event.target === elements.modal) closeModal();
  });

  renderVessels();
}

document.addEventListener('DOMContentLoaded', initialize);