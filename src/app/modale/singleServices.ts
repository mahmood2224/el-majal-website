export interface SingleServicesResponce {
  status: number;
  message: string;
  data: SingleServicesModel;
}

export interface SingleServicesModel {
  id: number;
  icon: string;
  image: string;
  desc: string;
  name: string;
  images: Image[];
  cat: Cat;
}

export interface Cat {
  id: number;
  image: string;
  name: string;
}

export interface Image {
  id: number;
  image: string;
}