import { Vehicle } from '../types';

import heroShowroomImg from '../assets/images/hero_meritus_showroom_1791285854294.jpg';
import rollsRoyceImg from '../assets/images/car_rolls_royce_1791285868183.jpg';
import porscheGt3Img from '../assets/images/car_porsche_gt3_1791285880215.jpg';
import ferrari296Img from '../assets/images/car_ferrari_296_1791285889570.jpg';
import maybachImg from '../assets/images/maybach_s680_1791288138010.jpg';
import lamborghiniImg from '../assets/images/lamborghini_revuelto_1791288152435.jpg';
import qualityInspectionImg from '../assets/images/quality_inspection_1791288165555.jpg';
import vipLoungeImg from '../assets/images/vip_lounge_1791288176982.jpg';
import astonMartinImg from '../assets/images/aston_martin_db12_1791288189045.jpg';

export const HERO_SHOWROOM_IMAGE = heroShowroomImg;

export const VEHICLES: Vehicle[] = [
  {
    id: 'rolls-royce-ghost-series-ii',
    name: 'Rolls-Royce Ghost Series II',
    brand: 'Rolls-Royce',
    model: 'Ghost Series II',
    year: 2025,
    category: 'Executive Sedan',
    priceSgd: 1688000,
    coeIncluded: true,
    shortDescription: 'The pinnacle of bespoke luxury and effortless V12 power crafted for supreme Singapore elegance.',
    fullDescription: 'The Rolls-Royce Ghost Series II represents the purest expression of luxury motor cars. Powered by a twin-turbocharged 6.75-liter V12 engine sending power through Planar suspension system with flagship All-Wheel Steering, it isolates occupants in serene silence.',
    image: rollsRoyceImg,
    gallery: [
      rollsRoyceImg,
      'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200'
    ],
    specs: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 bhp @ 5,000 rpm',
      torque: '850 Nm @ 1,600 rpm',
      acceleration: '4.8 s',
      topSpeed: '250 km/h',
      transmission: '8-Speed Satellite-Aided Automatic',
      drivetrain: 'All-Wheel Drive (AWD)',
      coeCategory: 'Cat B'
    },
    featured: true,
    status: 'In Showroom',
    mileageKm: 120,
    condition: 'Brand New',
    exteriorColor: 'Royal Midnight Purple',
    interiorColor: 'Gold Starlight Leather'
  },
  {
    id: 'porsche-911-gt3-rs',
    name: 'Porsche 911 GT3 RS (992)',
    brand: 'Porsche',
    model: '911 GT3 RS',
    year: 2024,
    category: 'Supercar',
    priceSgd: 1248000,
    coeIncluded: true,
    shortDescription: 'Uncompromising track performance engineered for Singapore road mastery with active aerodynamics.',
    fullDescription: 'The 911 GT3 RS features an ultra-lightweight carbon fiber chassis, active aerodynamic DRS wing creating up to 860kg of downforce, and a high-revving 4.0-liter naturally aspirated boxer engine spinning up to 9,000 RPM.',
    image: porscheGt3Img,
    gallery: [
      porscheGt3Img,
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200'
    ],
    specs: {
      engine: '4.0L Naturally Aspirated Flat-6',
      power: '525 bhp @ 8,500 rpm',
      torque: '465 Nm @ 6,300 rpm',
      acceleration: '3.2 s',
      topSpeed: '296 km/h',
      transmission: '7-Speed Porsche Doppelkupplung (PDK)',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      coeCategory: 'Cat B'
    },
    featured: true,
    status: 'In Showroom',
    mileageKm: 450,
    condition: 'Brand New',
    exteriorColor: 'Dark Amethyst Metallic',
    interiorColor: 'Race-Tex Black with Gold Stitching'
  },
  {
    id: 'ferrari-296-gtb',
    name: 'Ferrari 296 GTB Assetto Fiorano',
    brand: 'Ferrari',
    model: '296 GTB',
    year: 2024,
    category: 'Supercar',
    priceSgd: 1390000,
    coeIncluded: true,
    shortDescription: 'Plug-in hybrid V6 mid-rear architecture redefining pure driving emotion with 830 cv total output.',
    fullDescription: 'The Ferrari 296 GTB ushers in a new era for Maranello. Combining an ultra-revving 120° V6 turbo engine with a Formula 1 derived electric motor, it achieves intoxicating acceleration and immediate throttle response.',
    image: ferrari296Img,
    gallery: [
      ferrari296Img,
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200'
    ],
    specs: {
      engine: '2.9L Twin-Turbo V6 + Electric Motor',
      power: '830 CV (819 bhp)',
      torque: '740 Nm @ 6,250 rpm',
      acceleration: '2.9 s',
      topSpeed: '330 km/h',
      transmission: '8-Speed F1 Dual-Clutch',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      coeCategory: 'Cat B'
    },
    featured: true,
    status: 'In Showroom',
    mileageKm: 880,
    condition: 'Pre-Owned Certified',
    exteriorColor: 'Nero Daytona with Gold Livery',
    interiorColor: 'Sabbia Gold Leather'
  },
  {
    id: 'mercedes-maybach-s680',
    name: 'Mercedes-Maybach S 680 4MATIC',
    brand: 'Mercedes-Benz',
    model: 'Maybach S 680',
    year: 2025,
    category: 'Executive Sedan',
    priceSgd: 1180000,
    coeIncluded: true,
    shortDescription: 'Hand-finished luxury, two-tone gold lacquer finish and First-Class rear suite for royal comfort.',
    fullDescription: 'The ultimate flagship sedan from Stuttgart and Affalterbach. Equipped with a hand-built 6.0-liter V12 biturbo engine, executive reclining calf-rest seating with silver champagne flutes and Burmester High-End 4D Surround Sound.',
    image: maybachImg,
    gallery: [
      maybachImg,
      rollsRoyceImg
    ],
    specs: {
      engine: '6.0L V12 Biturbo',
      power: '612 bhp @ 5,250 rpm',
      torque: '900 Nm @ 2,000 rpm',
      acceleration: '4.5 s',
      topSpeed: '250 km/h',
      transmission: '9G-TRONIC Automatic',
      drivetrain: '4MATIC All-Wheel Drive',
      coeCategory: 'Cat B'
    },
    featured: true,
    status: 'In Showroom',
    mileageKm: 50,
    condition: 'Brand New',
    exteriorColor: 'Kalahari Gold / Obsidian Black',
    interiorColor: 'Deep Purple Nappa Leather'
  },
  {
    id: 'aston-martin-db12',
    name: 'Aston Martin DB12 Super Tourer',
    brand: 'Aston Martin',
    model: 'DB12',
    year: 2025,
    category: 'Grand Tourer',
    priceSgd: 1088000,
    coeIncluded: true,
    shortDescription: 'The world’s first Super Tourer combining raw British power with bespoke handcrafted interior.',
    fullDescription: 'Elevating the legendary DB lineage to unprecedented height, the Aston Martin DB12 delivers 680 PS from its hand-crafted twin-turbo V8, riding on custom Michelin Pilot Sport 5 S tires and bespoke infotainment.',
    image: astonMartinImg,
    gallery: [
      astonMartinImg,
      porscheGt3Img
    ],
    specs: {
      engine: '4.0L Twin-Turbo V8',
      power: '680 PS (671 bhp)',
      torque: '800 Nm @ 2,750 rpm',
      acceleration: '3.6 s',
      topSpeed: '325 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      coeCategory: 'Cat B'
    },
    featured: false,
    status: 'In Showroom',
    mileageKm: 310,
    condition: 'Brand New',
    exteriorColor: 'Iridescent Bronze / Satin Gold',
    interiorColor: 'Oxblood Leather'
  },
  {
    id: 'bentley-continental-gt-speed',
    name: 'Bentley Continental GT Speed W12',
    brand: 'Bentley',
    model: 'Continental GT Speed',
    year: 2024,
    category: 'Grand Tourer',
    priceSgd: 1150000,
    coeIncluded: true,
    shortDescription: 'Peerless 6.0-liter W12 Grand Tourer with electronic all-wheel steering and gold knurling details.',
    fullDescription: 'The Continental GT Speed represents the apex of grand touring performance. Featuring dynamic ride anti-roll stabilization, diamond-in-diamond quilting, and effortless long-distance cross-country capability.',
    image: rollsRoyceImg,
    gallery: [
      rollsRoyceImg
    ],
    specs: {
      engine: '6.0L Twin-Turbo W12',
      power: '650 bhp @ 5,000 rpm',
      torque: '900 Nm @ 1,500 rpm',
      acceleration: '3.6 s',
      topSpeed: '335 km/h',
      transmission: '8-Speed Dual-Clutch',
      drivetrain: 'Active All-Wheel Drive',
      coeCategory: 'Cat B'
    },
    featured: false,
    status: 'Available for Order',
    mileageKm: 0,
    condition: 'Brand New',
    exteriorColor: 'Damson Dark Violet',
    interiorColor: 'Portland & Imperial Blue'
  },
  {
    id: 'lamborghini-revuelto',
    name: 'Lamborghini Revuelto V12 HPEV',
    brand: 'Lamborghini',
    model: 'Revuelto',
    year: 2025,
    category: 'Supercar',
    priceSgd: 2480000,
    coeIncluded: true,
    shortDescription: '1015 CV V12 High Performance Electrified Vehicle setting the new benchmark for super sports cars.',
    fullDescription: 'Lamborghini’s revolutionary flagship hybrid combines a brand-new 6.5-liter naturally aspirated V12 with 3 axial-flux electric motors and an 8-speed transverse dual-clutch transmission.',
    image: lamborghiniImg,
    gallery: [
      lamborghiniImg,
      ferrari296Img
    ],
    specs: {
      engine: '6.5L NA V12 + 3 Electric Motors',
      power: '1,015 CV (1,001 bhp)',
      torque: '725 Nm + Electric Boost',
      acceleration: '2.5 s',
      topSpeed: '350 km/h',
      transmission: '8-Speed Dual Clutch',
      drivetrain: 'e-AWD',
      coeCategory: 'Cat B'
    },
    featured: true,
    status: 'Reserved',
    mileageKm: 80,
    condition: 'Brand New',
    exteriorColor: 'Viola Pasifae Dark Purple',
    interiorColor: 'Nero Ade with Giallo Gold accents'
  },
  {
    id: 'range-rover-sv-long-wheelbase',
    name: 'Range Rover SV Long Wheelbase',
    brand: 'Range Rover',
    model: 'SV LWB',
    year: 2025,
    category: 'Luxury SUV',
    priceSgd: 898000,
    coeIncluded: true,
    shortDescription: 'Supreme luxury off-road mastery with ceramic controls and SV Signature Suite rear console.',
    fullDescription: 'Crafted by Special Vehicle Operations, the Range Rover SV LWB offers unparalleled comfort, active noise cancellation headrests, and a 530 PS twin-turbo V8 powertrain.',
    image: maybachImg,
    gallery: [
      maybachImg
    ],
    specs: {
      engine: '4.4L Twin-Turbo V8',
      power: '615 PS (607 bhp)',
      torque: '750 Nm @ 1,800 rpm',
      acceleration: '4.5 s',
      topSpeed: '261 km/h',
      transmission: '8-Speed Automatic',
      drivetrain: 'All-Wheel Drive (AWD)',
      coeCategory: 'Cat B'
    },
    featured: false,
    status: 'In Showroom',
    mileageKm: 1200,
    condition: 'Pre-Owned Certified',
    exteriorColor: 'SV Bespoke Satin Bronze',
    interiorColor: 'Perseus Red & Semi-Aniline Leather'
  },
  {
    id: 'audi-rs-etron-gt',
    name: 'Audi RS e-tron GT ice.race edition',
    brand: 'Audi',
    model: 'RS e-tron GT',
    year: 2025,
    category: 'Electric & Hybrid',
    priceSgd: 698000,
    coeIncluded: true,
    shortDescription: 'All-electric 646 PS grand tourer with 800V ultra-fast charging and electric quattro precision.',
    fullDescription: 'Combining high-efficiency 800-volt charging architecture with breathtaking electric performance, the RS e-tron GT propels from 0 to 100 km/h in 3.3 seconds in near-total silence.',
    image: porscheGt3Img,
    gallery: [
      porscheGt3Img
    ],
    specs: {
      engine: 'Dual Permanent Magnet Electric Motors',
      power: '646 PS (Boost Mode)',
      torque: '830 Nm',
      acceleration: '3.3 s',
      topSpeed: '250 km/h',
      transmission: '2-Speed Rear / 1-Speed Front',
      drivetrain: 'e-quattro All-Wheel Drive',
      coeCategory: 'Cat B'
    },
    featured: false,
    status: 'In Showroom',
    mileageKm: 150,
    condition: 'Brand New',
    exteriorColor: 'Mythos Black Metallic',
    interiorColor: 'Audi Exclusive Gold Stitching'
  },
  {
    id: 'bmw-m8-competition-gran-coupe',
    name: 'BMW M8 Competition Gran Coupé',
    brand: 'BMW',
    model: 'M8 Competition',
    year: 2024,
    category: 'Executive Sedan',
    priceSgd: 798000,
    coeIncluded: true,
    shortDescription: 'High-performance 625 hp 4-door luxury coupe with M xDrive dynamic drift capability.',
    fullDescription: 'The BMW M8 Competition Gran Coupé fuses high-revving M TwinPower Turbo V8 performance with supreme rear-seat comfort and carbon-ceramic brake authority.',
    image: astonMartinImg,
    gallery: [
      astonMartinImg
    ],
    specs: {
      engine: '4.4L M TwinPower Turbo V8',
      power: '625 bhp @ 6,000 rpm',
      torque: '750 Nm @ 1,800 rpm',
      acceleration: '3.2 s',
      topSpeed: '305 km/h',
      transmission: '8-Speed M Steptronic',
      drivetrain: 'M xDrive AWD with 2WD mode',
      coeCategory: 'Cat B'
    },
    featured: false,
    status: 'In Showroom',
    mileageKm: 2800,
    condition: 'Pre-Owned Certified',
    exteriorColor: 'Frozen Dark Purple Metallic',
    interiorColor: 'Sakhir Orange & Black Merino Leather'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: '1',
    title: 'Premium Vehicle Selection',
    description: 'Directly sourced exotic supercars, luxury sedans, and rare grand tourers thoroughly inspected for Singapore roads.',
    icon: 'Car',
    image: ferrari296Img,
    thumbnail: ferrari296Img,
    badge: 'Exotic Supercars'
  },
  {
    id: '2',
    title: 'Trusted Service',
    description: 'Over 15 years of transparent reputation in Singapore with complete documentation and warranty backing.',
    icon: 'ShieldCheck',
    image: rollsRoyceImg,
    thumbnail: rollsRoyceImg,
    badge: '15+ Years Trust'
  },
  {
    id: '3',
    title: 'Professional Automotive Team',
    description: 'Dedicated luxury automotive specialists providing tailored advice on financing, COE timing, and bespoke imports.',
    icon: 'Users',
    image: vipLoungeImg,
    thumbnail: vipLoungeImg,
    badge: 'VIP Specialists'
  },
  {
    id: '4',
    title: 'Quality & Reliability',
    description: 'Every vehicle undergoes our rigorous 150-point technical certification prior to showroom placement.',
    icon: 'CheckCircle2',
    image: qualityInspectionImg,
    thumbnail: qualityInspectionImg,
    badge: '150-Point Certified'
  },
  {
    id: '5',
    title: 'Customer-Focused Experience',
    description: 'Private VIP consultations, home test-drive deliveries, and tailored Singapore COE management.',
    icon: 'Award',
    image: heroShowroomImg,
    thumbnail: heroShowroomImg,
    badge: 'Private VIP Service'
  },
  {
    id: '6',
    title: 'Transparent Assistance',
    description: 'Clear pricing with zero hidden fees, upfront COE breakdown, and comprehensive trade-in appraisals.',
    icon: 'Sparkles',
    image: maybachImg,
    thumbnail: maybachImg,
    badge: 'Zero Hidden Fees'
  }
];

export const SHOWROOM_STATS = [
  { value: '250+', label: 'Premium Vehicles Delivered' },
  { value: '100%', label: 'Professional Service' },
  { value: '99.4%', label: 'Customer Satisfaction' },
  { value: '15+', label: 'Years Automotive Experience' }
];
