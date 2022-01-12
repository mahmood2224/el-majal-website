export interface SiteInfoResponce {
  status: number;
  message: string;
  data: SiteInfoModel;
}

export interface SiteInfoModel {
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
}

interface OurValue {
  id: number;
  icon: string;
  text: string;
  name: string;
}