import { IMeta } from "../common";

export type IUser = {
  id: string;
  username: string;
  email: string;
  password: string;
  profilePhoto: string;
  contactNumber: string;
  role: "USER" | "ADMIN";
  isActive: "ACTIVATE" | "DEACTIVATE";
  createdAt: string;
  updatedAt: string;
};

export type IFlat = {
  id: string;
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  amenities: string;
  photos: string[];
  postedBy: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
};

export type IFlatResponse = {
  data: IFlat[];
  meta: IMeta;
};