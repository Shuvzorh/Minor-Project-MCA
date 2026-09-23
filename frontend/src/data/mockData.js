// Mock Data for FoodBridge Surplus Food Rescue Platform — Kolkata, West Bengal Edition

export const initialDonations = [
  {
    id: 'DON-101',
    code: 'FB1024',
    foodType: 'Rice, Dal, Paneer & Mixed Vegetables',
    description: 'Freshly prepared hot banquet surplus from wedding dinner. Packed in sealed hygienic aluminum catering trays.',
    quantity: 150,
    unit: 'Meals',
    isVeg: true,
    category: 'Vegetarian',
    preparedAt: 'Today, 7:00 PM',
    pickupBefore: '10:30 PM',
    providerName: 'The Grand Ballroom Banquet',
    providerType: 'Wedding & Events Hall',
    location: 'EM Bypass, Near Science City, Kolkata',
    coords: [22.5448, 88.3986],
    distance: '1.8 km',
    status: 'Pending', // Pending | Volunteer Assigned | Food Picked Up | Out for Delivery | Delivered
    urgency: 'Urgent',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=60',
    assignedVolunteer: null,
    destinationNgo: 'Calcutta Rescue Outreach',
    createdAt: '8:15 PM',
    weightKg: 65,
    servings: 150,
    contactPerson: 'Banquet Manager Subhash (+91 98301 24510)',
    timeline: [
      { stage: 'Donation Created', time: '8:15 PM', completed: true, details: '150 meals listed by The Grand Ballroom Banquet' },
      { stage: 'Volunteer Assigned', time: null, completed: false, details: 'Awaiting nearby Kolkata volunteer pickup acceptance' },
      { stage: 'Food Picked Up', time: null, completed: false, details: 'Inspected and loaded into insulated carrier box' },
      { stage: 'Out for Delivery', time: null, completed: false, details: 'En route to Calcutta Rescue shelter' },
      { stage: 'Delivered to NGO', time: null, completed: false, details: 'Food safety check verified and distributed' }
    ]
  },
  {
    id: 'DON-102',
    code: 'FB1025',
    foodType: 'Pasta, Garlic Bread & Vegetable Curry',
    description: 'Surplus buffet dinner from evening hospitality service. Maintained in warm food containers.',
    quantity: 80,
    unit: 'Meals',
    isVeg: true,
    category: 'Vegetarian',
    preparedAt: 'Today, 6:30 PM',
    pickupBefore: '11:30 PM',
    providerName: 'Park Street Gourmet Bistro',
    providerType: 'Restaurant',
    location: '18 Park Street, Kolkata',
    coords: [22.5511, 88.3526],
    distance: '2.4 km',
    status: 'Volunteer Assigned',
    urgency: 'Normal',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=60',
    assignedVolunteer: {
      id: 'vol-1',
      name: 'Rahul Sharma',
      phone: '+91 98312 44890',
      vehicle: 'Hero Electric Scooter (Insulated Box)',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
    },
    destinationNgo: 'The Hope Foundation Kolkata',
    createdAt: '7:40 PM',
    weightKg: 35,
    servings: 80,
    contactPerson: 'Chef Debjit (+91 98310 56214)',
    timeline: [
      { stage: 'Donation Created', time: '7:40 PM', completed: true, details: '80 meals listed by Park Street Gourmet' },
      { stage: 'Volunteer Assigned', time: '8:05 PM', completed: true, details: 'Rahul Sharma accepted pickup' },
      { stage: 'Food Picked Up', time: null, completed: false, details: 'Estimated pickup at 8:45 PM' },
      { stage: 'Out for Delivery', time: null, completed: false, details: 'Transit route via AJC Bose Road' },
      { stage: 'Delivered to NGO', time: null, completed: false, details: 'Destination: The Hope Foundation' }
    ]
  },
  {
    id: 'DON-103',
    code: 'FB1026',
    foodType: 'Kolkata Dum Biryani & Chicken Chaap',
    description: 'Authentic dum biryani, raita, and gravy from corporate tech symposium banquet.',
    quantity: 200,
    unit: 'Meals',
    isVeg: false,
    category: 'Non-Vegetarian',
    preparedAt: 'Today, 5:45 PM',
    pickupBefore: '10:00 PM',
    providerName: 'Sector V Tech Park Cafeteria',
    providerType: 'Corporate Food Court',
    location: 'Sector V, Salt Lake, Kolkata',
    coords: [22.5735, 88.4331],
    distance: '3.1 km',
    status: 'Delivered',
    urgency: 'Urgent',
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60',
    assignedVolunteer: {
      id: 'vol-2',
      name: 'Priya Das',
      phone: '+91 98305 77123',
      vehicle: 'Tata Ace EV Mini Van',
      rating: 5.0,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80'
    },
    destinationNgo: 'Tomorrow’s Foundation Kolkata',
    createdAt: '6:15 PM',
    weightKg: 90,
    servings: 200,
    contactPerson: 'Catering In-charge Animesh (+91 98302 99314)',
    timeline: [
      { stage: 'Donation Created', time: '6:15 PM', completed: true, details: '200 meals freshly packed' },
      { stage: 'Volunteer Assigned', time: '6:30 PM', completed: true, details: 'Priya Das dispatched' },
      { stage: 'Food Picked Up', time: '7:00 PM', completed: true, details: 'Loaded in insulated food crates' },
      { stage: 'Out for Delivery', time: '7:20 PM', completed: true, details: 'Transit completed via EM Bypass' },
      { stage: 'Delivered to NGO', time: '7:50 PM', completed: true, details: 'Received and served at Tomorrow’s Foundation shelter' }
    ]
  },
  {
    id: 'DON-104',
    code: 'FB1027',
    foodType: 'Fresh Club Sandwiches & Bengali Sweets',
    description: 'Assorted whole grain sandwiches, samosas, and packed sweets boxes from afternoon seminar.',
    quantity: 60,
    unit: 'Meals',
    isVeg: true,
    category: 'Vegetarian',
    preparedAt: 'Today, 2:00 PM',
    pickupBefore: '9:30 PM',
    providerName: 'Eco Park Convention Catering',
    providerType: 'Catering Service',
    location: 'Major Arterial Road, New Town, Kolkata',
    coords: [22.5855, 88.4682],
    distance: '4.5 km',
    status: 'Food Picked Up',
    urgency: 'Normal',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=60',
    assignedVolunteer: {
      id: 'vol-3',
      name: 'Arjun Mehta',
      phone: '+91 98308 11200',
      vehicle: 'Maruti WagonR / Cargo boot',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
    },
    destinationNgo: 'Robin Hood Army Kolkata Hub',
    createdAt: '4:00 PM',
    weightKg: 25,
    servings: 60,
    contactPerson: 'Caterer Sourav (+91 98304 88321)',
    timeline: [
      { stage: 'Donation Created', time: '4:00 PM', completed: true, details: '60 snack boxes registered' },
      { stage: 'Volunteer Assigned', time: '4:20 PM', completed: true, details: 'Arjun Mehta accepted' },
      { stage: 'Food Picked Up', time: '5:00 PM', completed: true, details: 'Collected from New Town venue' },
      { stage: 'Out for Delivery', time: null, completed: false, details: 'En route to Robin Hood Army community camp' },
      { stage: 'Delivered to NGO', time: null, completed: false, details: '-' }
    ]
  },
  {
    id: 'DON-105',
    code: 'FB1028',
    foodType: 'Luchi, Chholar Dal, Khichuri & Labra',
    description: 'Traditional Bengali festive lunch surplus from community hall gathering. Pure vegetarian preparation.',
    quantity: 120,
    unit: 'Meals',
    isVeg: true,
    category: 'Vegetarian',
    preparedAt: 'Today, 1:30 PM',
    pickupBefore: '7:00 PM',
    providerName: 'Gariahat Utsav Community Hall',
    providerType: 'Wedding & Events Hall',
    location: 'Near Gariahat Crossing, South Kolkata',
    coords: [22.5186, 88.3643],
    distance: '3.8 km',
    status: 'Pending',
    urgency: 'Urgent',
    imageUrl: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&auto=format&fit=crop&q=60',
    assignedVolunteer: null,
    destinationNgo: 'Calcutta Rescue Outreach',
    createdAt: '3:30 PM',
    weightKg: 50,
    servings: 120,
    contactPerson: 'Event Trustee Kalyan (+91 98318 40291)',
    timeline: [
      { stage: 'Donation Created', time: '3:30 PM', completed: true, details: '120 meals registered' },
      { stage: 'Volunteer Assigned', time: null, completed: false, details: 'Waiting for pickup' },
      { stage: 'Food Picked Up', time: null, completed: false, details: '-' },
      { stage: 'Out for Delivery', time: null, completed: false, details: '-' },
      { stage: 'Delivered to NGO', time: null, completed: false, details: '-' }
    ]
  }
];

export const mockNgos = [
  {
    id: 'ngo-1',
    name: 'Calcutta Rescue Outreach',
    category: 'Shelter & Daily Food Program',
    address: '45 Park Street, Central Kolkata',
    coords: [22.5489, 88.3567],
    contactPerson: 'Dr. Ananya Roy',
    phone: '+91 98300 12345',
    email: 'info@calcuttarescue.org',
    activeNeeds: 'Requires 120 dinner meals',
    capacity: 250,
    mealsReceivedTotal: 2450,
    peopleServed: 1820,
    rating: 4.9,
    status: 'Open',
    verified: true,
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'ngo-2',
    name: 'The Hope Foundation Kolkata',
    category: 'Child Care & Youth Shelter',
    address: '39 Kasba Road, Near Ballygunge, Kolkata',
    coords: [22.5190, 88.3730],
    contactPerson: 'Sister Teresa Sen',
    phone: '+91 98310 98765',
    email: 'kolkata@hopefoundation.org',
    activeNeeds: 'Packaged rations & warm curries',
    capacity: 400,
    mealsReceivedTotal: 4120,
    peopleServed: 3200,
    rating: 5.0,
    status: 'Open',
    verified: true,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'ngo-3',
    name: 'Tomorrow’s Foundation Kolkata',
    category: 'Community Kitchen & Youth Shelter',
    address: '418 Chetla Central Road, Kalighat, Kolkata',
    coords: [22.5140, 88.3470],
    contactPerson: 'Arup Mukherjee',
    phone: '+91 98315 44210',
    email: 'reach@tomorrowsfoundation.org',
    activeNeeds: 'Meals for underprivileged kids',
    capacity: 300,
    mealsReceivedTotal: 3890,
    peopleServed: 2900,
    rating: 4.8,
    status: 'Open',
    verified: true,
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'ngo-4',
    name: 'Robin Hood Army Kolkata Hub',
    category: 'Emergency Food Distribution Camp',
    address: 'Esplanade Metro Plaza & Howrah Relief Point',
    coords: [22.5697, 88.3533],
    contactPerson: 'Tanmoy Sengupta',
    phone: '+91 98302 77441',
    email: 'kolkata@robinhoodarmy.com',
    activeNeeds: 'Cooked meals & packaged drinking water',
    capacity: 200,
    mealsReceivedTotal: 1850,
    peopleServed: 1400,
    rating: 4.8,
    status: 'Open',
    verified: true,
    image: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=600&auto=format&fit=crop&q=60'
  }
];

export const mockVolunteers = [
  {
    id: 'vol-1',
    name: 'Rahul Sharma',
    email: 'rahul.vol@foodbridge.org',
    phone: '+91 98312 44890',
    vehicle: 'Hero Electric Scooter (Insulated Box)',
    location: 'Sector V, Salt Lake, Kolkata',
    coords: [22.5740, 88.4300],
    deliveriesCompleted: 48,
    rating: 4.9,
    hoursContributed: 114,
    status: 'Active / Available',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'vol-2',
    name: 'Priya Das',
    email: 'priya.das@foodbridge.org',
    phone: '+91 98305 77123',
    vehicle: 'Tata Ace EV Mini Van',
    location: 'Park Circus / EM Bypass, Kolkata',
    coords: [22.5400, 88.3850],
    deliveriesCompleted: 62,
    rating: 5.0,
    hoursContributed: 148,
    status: 'Active / On Route',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'vol-3',
    name: 'Arjun Mehta',
    email: 'arjun.vol@foodbridge.org',
    phone: '+91 98308 11200',
    vehicle: 'Maruti WagonR / Cargo boot',
    location: 'Howrah / Burrabazar Hub, Kolkata',
    coords: [22.5850, 88.3450],
    deliveriesCompleted: 35,
    rating: 4.8,
    hoursContributed: 82,
    status: 'Active / Available',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'vol-4',
    name: 'Sneha Roy',
    email: 'sneha.vol@foodbridge.org',
    phone: '+91 98319 66320',
    vehicle: 'TVS Jupiter Scooter',
    location: 'Gariahat / Jadavpur, South Kolkata',
    coords: [22.5050, 88.3650],
    deliveriesCompleted: 29,
    rating: 4.9,
    hoursContributed: 64,
    status: 'Active / Available',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80'
  }
];

export const mockUsers = {
  provider: {
    id: 'usr-p1',
    role: 'provider',
    name: 'The Grand Ballroom',
    organizationName: 'The Grand Ballroom Banquets & Caterers',
    contactPerson: 'Subhashish Banerjee (General Manager)',
    email: 'manager@grandballroomkolkata.com',
    phone: '+91 98301 24510',
    location: 'EM Bypass, Near Science City, Kolkata',
    avatar: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&auto=format&fit=crop&q=80',
    stats: {
      totalDonations: 24,
      completedDonations: 21,
      foodSavedKg: 850,
      peopleServed: 2100
    }
  },
  volunteer: {
    id: 'usr-v1',
    role: 'volunteer',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@foodbridge.org',
    phone: '+91 98312 44890',
    vehicle: 'Hero Electric Scooter (Insulated Box)',
    location: 'Sector V, Salt Lake, Kolkata',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    stats: {
      deliveriesCompleted: 48,
      hoursContributed: 114,
      mealsRescued: 4120,
      rating: 4.9
    }
  },
  ngo: {
    id: 'usr-n1',
    role: 'ngo',
    name: 'Calcutta Rescue',
    organizationName: 'Calcutta Rescue Outreach Foundation',
    contactPerson: 'Dr. Ananya Roy (Director)',
    email: 'contact@calcuttarescue.org',
    phone: '+91 98300 12345',
    location: '45 Park Street, Central Kolkata',
    avatar: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=200&auto=format&fit=crop&q=80',
    stats: {
      donationsReceived: 28,
      mealsDistributed: 2450,
      peopleServed: 1820,
      activeRequests: 2
    }
  },
  admin: {
    id: 'usr-a1',
    role: 'admin',
    name: 'Sourav Ganguly',
    title: 'Kolkata City Operations Director',
    email: 'admin.kolkata@foodbridge.org',
    phone: '+91 98300 00000',
    location: 'FoodBridge Central Ops Hub, Salt Lake, Kolkata',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    stats: {
      totalDonations: 1248,
      foodSavedKg: 3840,
      volunteersCount: 86,
      ngosCount: 32
    }
  }
};

export const initialNotifications = [
  {
    id: 'notif-1',
    icon: '🍱',
    title: 'New food donation nearby (EM Bypass)',
    description: '150 meals available at The Grand Ballroom Banquet, Kolkata.',
    time: '5 mins ago',
    unread: true,
    link: '/volunteer'
  },
  {
    id: 'notif-2',
    icon: '👤',
    title: 'Donation accepted for pickup',
    description: 'Rahul Sharma accepted your donation of 80 meals from Park Street.',
    time: '35 mins ago',
    unread: true,
    link: '/track/DON-102'
  },
  {
    id: 'notif-3',
    icon: '✅',
    title: 'Food delivered successfully',
    description: 'Dum Biryani delivered to Tomorrow’s Foundation shelter.',
    time: '2 hours ago',
    unread: false,
    link: '/track/DON-103'
  }
];

export const adminChartData = [
  { month: 'Jan', meals: 1400, kg: 420 },
  { month: 'Feb', meals: 1850, kg: 540 },
  { month: 'Mar', meals: 2300, kg: 690 },
  { month: 'Apr', meals: 2900, kg: 880 },
  { month: 'May', meals: 3450, kg: 1050 },
  { month: 'Jun', meals: 4200, kg: 1260 },
  { month: 'Jul', meals: 5100, kg: 1530 },
  { month: 'Aug', meals: 6800, kg: 2040 },
  { month: 'Sep', meals: 8400, kg: 2520 }
];
