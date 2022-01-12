export interface GeneralResponce {
  status: number;
  message: string;
  data: ContactModel;
}

export interface ContactModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}