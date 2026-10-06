export type PageRoute = 'home' | 'our-cars' | 'about-us' | 'contact-us';

export type CarCategory = 'Supercar' | 'Grand Tourer' | 'Executive Sedan' | 'Luxury SUV' | 'Electric & Hybrid';

export interface VehicleSpec {
  engine: string;
  power: string;
  torque: string;
  acceleration: string; // 0-100 km/h
  topSpeed: string;
  transmission: string;
  drivetrain: string;
  coeCategory: 'Cat A' | 'Cat B' | 'Cat E';
}

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: CarCategory;
  priceSgd: number; // SGD price including COE estimate
  coeIncluded: boolean;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  specs: VehicleSpec;
  featured?: boolean;
  status: 'In Showroom' | 'Available for Order' | 'Reserved';
  mileageKm?: number;
  condition: 'Brand New' | 'Pre-Owned Certified';
  exteriorColor: string;
  interiorColor: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredCarId?: string;
  enquiryType: 'General Enquiry' | 'Test Drive' | 'Trade-In Valuation' | 'Finance & COE';
  message: string;
}

export interface TestDriveFormData {
  fullName: string;
  email: string;
  phone: string;
  vehicleId: string;
  preferredDate: string;
  preferredTimeSlot: string;
  specialRequests?: string;
}
