// Mock Data for FoodBridge Surplus Food Rescue Platform

export const initialDonations = [
  {
    id: 'DON-101',
    code: 'FB1024',
    foodType: 'Rice, Dal & Fresh Vegetables',
    description: 'Freshly prepared hot banquet surplus from wedding dinner. Packed in sealed hygienic aluminum catering trays.',
    quantity: 150,
    unit: 'Meals',
    isVeg: true,
    category: 'Vegetarian',
    preparedAt: 'Today, 7:00 PM',
    pickupBefore: '10:30 PM',
    providerName: 'ABC Wedding Hall',
    providerType: 'Wedding & Events Hall',
    location: '14 Grand Boulevard, Central District',
    coords: [12.9716, 77.5946],
    distance: '1.8 km',
    status: 'Pending', // Pending | Volunteer Assigned | Food Picked Up | Out for Delivery | Delivered
    urgency: 'Urgent',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=60',
    assignedVolunteer: null,
    destinationNgo: 'Helping Hands NGO',
    createdAt: '8:15 PM',
    weightKg: 65,
    servings: 150,
    contactPerson: 'Manager Rajesh (+1 555-0192)',
    timeline: [
      { stage: 'Donation Created', time: '8:15 PM', completed: true, details: '150 meals listed by ABC Wedding Hall' },
      { stage: 'Volunteer Assigned', time: null, completed: false, details: 'Awaiting nearby volunteer pickup acceptance' },
      { stage: 'Food Picked Up', time: null, completed: false, details: 'Inspected and loaded into temperature-safe container' },
      { stage: 'Out for Delivery', time: null, completed: false, details: 'En route to destination NGO shelter' },
      { stage: 'Delivered to NGO', time: null, completed: false, details: 'Food safety check verified and distributed' }
    ]
  },
  {
    id: 'DON-102',
    code: 'FB1025',
    foodType: 'Pasta, Bread & Vegetable Curry',
    description: 'Surplus buffet dinner from evening hospitality service. Maintained in warm containers.',
    quantity: 80,
    unit: 'Meals',
    isVeg: true,
    category: 'Vegetarian',
    preparedAt: 'Today, 6:30 PM',
    pickupBefore: '11:30 PM',
    providerName: 'XYZ Restaurant',
    providerType: 'Restaurant',
    location: '22 Gourmet Lane, West End',
    coords: [12.9815, 77.6085],
    distance: '3.2 km',
    status: 'Volunteer Assigned',
    urgency: 'Normal',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=60',
    assignedVolunteer: {
      id: 'vol-1',
      name: 'Rahul Sharma',
      phone: '+1 555-0842',
      vehicle: 'Cargo Scooter (Insulated Box)',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
    },
    destinationNgo: 'Hope Foundation',
    createdAt: '7:40 PM',
    weightKg: 35,
    servings: 80,
    contactPerson: 'Chef Marco (+1 555-0321)',
    timeline: [
      { stage: 'Donation Created', time: '7:40 PM', completed: true, details: '80 meals listed by XYZ Restaurant' },
      { stage: 'Volunteer Assigned', time: '8:05 PM', completed: true, details: 'Rahul Sharma accepted pickup' },
      { stage: 'Food Picked Up', time: null, completed: false, details: 'Estimated pickup at 8:45 PM' },
      { stage: 'Out for Delivery', time: null, completed: false, details: 'Transit corridor via West Ring' },
      { stage: 'Delivered to NGO', time: null, completed: false, details: 'Destination: Hope Foundation' }
    ]
  },
  {
    id: 'DON-103',
    code: 'FB1026',
    foodType: 'Royal Chicken & Vegetable Biryani',
    description: 'Authentic dum biryani, raita, and mirchi ka salan from annual conference feast.',
    quantity: 200,
    unit: 'Meals',
    isVeg: false,
    category: 'Non-Vegetarian',
    preparedAt: 'Today, 5:45 PM',
    pickupBefore: '10:00 PM',
    providerName: 'ABC Hotel & Banquets',
    providerType: 'Luxury Hotel',
    location: '88 MG Road, Metro Center',
    coords: [12.9785, 77.6208],
    distance: '2.5 km',
    status: 'Delivered',
    urgency: 'Urgent',
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60',
    assignedVolunteer: {
      id: 'vol-2',
      name: 'Priya Das',
      phone: '+1 555-0911',
      vehicle: 'Electric Van',
      rating: 5.0,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80'
    },
    destinationNgo: 'Helping Hands NGO',
    createdAt: '6:15 PM',
    weightKg: 90,
    servings: 200,
    contactPerson: 'Chef Laurent (+1 555-0784)',
    timeline: [
      { stage: 'Donation Created', time: '6:15 PM', completed: true, details: '200 meals freshly packed' },
      { stage: 'Volunteer Assigned', time: '6:30 PM', completed: true, details: 'Priya Das dispatched' },
      { stage: 'Food Picked Up', time: '7:00 PM', completed: true, details: 'Loaded in insulated boxes' },
      { stage: 'Out for Delivery', time: '7:20 PM', completed: true, details: 'Transit completed' },
      { stage: 'Delivered to NGO', time: '7:50 PM', completed: true, details: 'Received by David Miller at Helping Hands' }
    ]
  },
  {
    id: 'DON-104',
    code: 'FB1027',
    foodType: 'Fresh Artisan Breads & Sandwiches',
    description: 'Assorted whole grain sourdough, paninis, and fruit boxes prepared fresh this afternoon.',
    quantity: 60,
    unit: 'Meals',
    isVeg: true,
    category: 'Vegetarian',
    preparedAt: 'Today, 2:00 PM',
    pickupBefore: '9:30 PM',
    providerName: 'City Catering Co.',
    providerType: 'Catering Service',
    location: '10 Industrial Way, North Hub',
    coords: [12.9982, 77.5714],
    distance: '3.6 km',
    status: 'Food Picked Up',
    urgency: 'Normal',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=60',
    assignedVolunteer: {
      id: 'vol-3',
      name: 'Arjun Mehta',
      phone: '+1 555-0633',
      vehicle: 'Car / SUV',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
    },
    destinationNgo: 'Meals For All',
    createdAt: '4:00 PM',
    weightKg: 25,
    servings: 60,
    contactPerson: 'Ramesh Shastri (+1 555-0456)',
    timeline: [
      { stage: 'Donation Created', time: '4:00 PM', completed: true, details: '60 boxes registered' },
      { stage: 'Volunteer Assigned', time: '4:20 PM', completed: true, details: 'Arjun Mehta accepted' },
      { stage: 'Food Picked Up', time: '5:00 PM', completed: true, details: 'Collected from City Catering' },
      { stage: 'Out for Delivery', time: null, completed: false, details: 'En route to Meals For All' },
      { stage: 'Delivered to NGO', time: null, completed: false, details: '-' }
    ]
  },
  {
    id: 'DON-105',
    code: 'FB1028',
    foodType: 'South Indian Sambar, Rice & Vegetable Curry',
    description: 'Catered lunch surplus from festive hall gathering. Pure vegetarian preparation.',
    quantity: 120,
    unit: 'Meals',
    isVeg: true,
    category: 'Vegetarian',
    preparedAt: 'Today, 1:30 PM',
    pickupBefore: '7:00 PM',
    providerName: 'Grand Wedding Hall',
    providerType: 'Wedding & Events Hall',
    location: '5 Tech Park Way, East Zone',
    coords: [12.9698, 77.7499],
    distance: '4.1 km',
    status: 'Pending',
    urgency: 'Urgent',
    imageUrl: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&auto=format&fit=crop&q=60',
    assignedVolunteer: null,
    destinationNgo: 'City Food Camp',
    createdAt: '3:30 PM',
    weightKg: 50,
    servings: 120,
    contactPerson: 'Event Director Amy (+1 555-0992)',
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
    name: 'Helping Hands NGO',
    category: 'Shelter & Soup Kitchen',
    address: '45 Sunshine Colony, Central District',
    coords: [12.9654, 77.5921],
    contactPerson: 'David Miller',
    phone: '+1 555-4321',
    email: 'contact@helpinghands.org',
    activeNeeds: 'Requires 120 meals dinner',
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
    name: 'Hope Foundation',
    category: 'Food Collection & Youth Shelter',
    address: '102 Industrial Area, West Ring Road',
    coords: [12.9845, 77.5812],
    contactPerson: 'Sister Teresa Maria',
    phone: '+1 555-8765',
    email: 'relief@hopefoundation.org',
    activeNeeds: 'Packaged groceries & warm curries',
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
    name: 'Meals For All',
    category: 'Community Kitchen & Relief',
    address: '18 Heritage Plaza, Old Town',
    coords: [12.9578, 77.5732],
    contactPerson: 'Ramanathan Iyer',
    phone: '+1 555-6677',
    email: 'info@mealsforall.org',
    activeNeeds: 'Vegetarian meals for senior citizens',
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
    name: 'City Food Camp',
    category: 'Emergency Food Camp',
    address: '77 Lakeview Road, East District',
    coords: [12.9691, 77.6322],
    contactPerson: 'Sarah Jenkins',
    phone: '+1 555-9012',
    email: 'camp@cityfoodcamp.org',
    activeNeeds: 'Bread, milk & dry rations',
    capacity: 180,
    mealsReceivedTotal: 1850,
    peopleServed: 1400,
    rating: 4.7,
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
    phone: '+1 555-0842',
    vehicle: 'Cargo Scooter (Insulated Box)',
    location: 'Koramangala, 2.1 km away',
    coords: [12.9352, 77.6245],
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
    phone: '+1 555-0911',
    vehicle: 'Electric Van (Temp Controlled)',
    location: 'Indiranagar, 1.4 km away',
    coords: [12.9783, 77.6408],
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
    phone: '+1 555-0633',
    vehicle: 'Car / SUV',
    location: 'Malleshwaram, 3.2 km away',
    coords: [12.9982, 77.5714],
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
    phone: '+1 555-0722',
    vehicle: 'Electric Scooter',
    location: 'Whitefield, 4.5 km away',
    coords: [12.9698, 77.7499],
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
    name: 'ABC Hotel',
    organizationName: 'ABC Hotel & Banquets',
    contactPerson: 'Chef Rajesh Kumar',
    email: 'manager@abchotel.com',
    phone: '+1 (555) 234-5678',
    location: '14 Grand Boulevard, Central District',
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
    phone: '+1 (555) 084-2199',
    vehicle: 'Cargo Scooter (Insulated Box)',
    location: 'Koramangala 4th Block',
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
    name: 'Helping Hands NGO',
    organizationName: 'Helping Hands Care Foundation',
    contactPerson: 'David Miller (Director)',
    email: 'contact@helpinghands.org',
    phone: '+1 (555) 432-1098',
    location: '45 Sunshine Colony, Central District',
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
    name: 'Eleanor Vance',
    title: 'Operations Director',
    email: 'eleanor@foodbridge.org',
    phone: '+1 (555) 900-1122',
    location: 'FoodBridge HQ, Metro Hub',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
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
    title: 'New food donation nearby',
    description: '150 meals available 1.8 km away at ABC Wedding Hall.',
    time: '5 mins ago',
    unread: true,
    link: '/volunteer'
  },
  {
    id: 'notif-2',
    icon: '👤',
    title: 'Donation accepted',
    description: 'Rahul accepted your donation for 80 meals.',
    time: '35 mins ago',
    unread: true,
    link: '/track/DON-102'
  },
  {
    id: 'notif-3',
    icon: '✅',
    title: 'Donation delivered',
    description: 'Your food has been delivered to Helping Hands NGO.',
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
