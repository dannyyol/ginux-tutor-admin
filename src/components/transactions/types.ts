export interface Transaction {
  id: number;
  name: string;
  email: string;
  avatar: string;
  paymentType: string;
  paidDate: string;
  paidTime: string;
  amount: number;
  status: 'successful' | 'failed';
}