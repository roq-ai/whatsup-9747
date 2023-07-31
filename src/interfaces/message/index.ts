import { UserInterface } from 'interfaces/user';
import { ContactInterface } from 'interfaces/contact';
import { GetQueryInterface } from 'interfaces';

export interface MessageInterface {
  id?: string;
  content: string;
  sender_id?: string;
  receiver_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  contact?: ContactInterface;
  _count?: {};
}

export interface MessageGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  sender_id?: string;
  receiver_id?: string;
}
