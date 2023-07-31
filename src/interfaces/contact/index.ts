import { MessageInterface } from 'interfaces/message';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface ContactInterface {
  id?: string;
  name: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;
  message?: MessageInterface[];
  business?: BusinessInterface;
  _count?: {
    message?: number;
  };
}

export interface ContactGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  business_id?: string;
}
