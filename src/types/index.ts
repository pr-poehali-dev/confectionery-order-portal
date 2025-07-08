export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export interface OrderForm {
  date: string;
  weight: string;
  filling: string;
  design: string;
  phone: string;
  name: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
}

export interface WorkingHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}
