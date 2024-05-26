import { IMeta } from "../common";
import { IUser } from "../user/user";


export type IFlat = {
  id: string;
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  amenities: string;
  photos: string[];
  requests: Request[];
  postedBy: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
};

export type IFlatResponse = {
  data: IFlat[];
  meta: IMeta;
};

export interface IRequest {
  id: string;
  userId: string;
  flatId: string;
  moveInDate?: string;
  lengthOfStay?: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  user: {
    id: string;
    username: string;
    profilePhoto?: string;
    contactNumber?: string;
  };
}

// interface Flat {
//   id: string;
//   location: string;
//   description: string;
//   rentAmount: number;
//   bedrooms: number;
//   amenities: string[];
//   photos: string[];
//   requests: Request[];
// }
