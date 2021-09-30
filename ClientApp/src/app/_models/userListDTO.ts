import {image} from './image';

export class UserListDTO {
  id:number;
  name: string;
  userName: string;
  age: number;
  gender: string;
  created: Date;
  lastActive: Date;
  city: string;
  country: string;
  imageUrl: image;
}
