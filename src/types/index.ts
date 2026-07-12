// Shared type definitions
export interface NavLink {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tag?: string;
  imageQuery: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imageQuery: string;
  span?: 'wide' | 'tall' | 'normal';
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}
