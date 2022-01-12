export interface FAQsResponce {
  status: number;
  message: string;
  data: FAQsModel[];
}

export interface FAQsModel {
  id: number;
  question: string;
  answer: string;
}