export interface ServicesResponce {
  status: number;
  message: string;
  data: Data;
}

export interface Data {
  data: ServicesModel[];
  pagination: Pagination;
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface ServicesModel {
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