export interface HomeResponce {
  status: number;
  message: string;
  data: HomeModel;
}

export interface HomeModel {
  slider: Slider[];
  clients: Client[];
  fqa: Fqa[];
  cats: Client[];
  service: Service[];
  setting: Setting;
}

export interface Fqa {
  id: number;
  question: string;
  answer: string;
}

export interface Client {
  id: number;
  image: string;
  name: string;
}

export interface Slider {
  id: number;
  image: string;
  text?: string;
}


export interface Setting {
  id: number;
  email: string;
  phone: string;
  lat?: any;
  lng?: any;
  whatsapp: string;
  androidLink: string;
  appleLink: string;
  imageAbout: string;
  about: string;
  terms: string;
  privacy: string;
  address: string;
  ourValues: OurValue[];
  socials : socials;
}

export interface OurValue {
  id: number;
  icon: string;
  text: string;
  name: string;
}

export interface Service {
  id: number;
  icon: string;
  image: string;
  desc: string;
  name: string;
  images: Image[];
  cat: Client;
}

export interface Image {
  id: number;
  image: string;
}

export interface socials{
  id: number;
  facebook :  string;
  instagram :  string;
  google:  string;
  twitter:  string;
  youtube:  string;
} 