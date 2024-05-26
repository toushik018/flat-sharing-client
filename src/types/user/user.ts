export interface Request {
    id: string;
    userId: string;
    flatId: string;
    moveInDate: string;
    lengthOfStay: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    createdAt: string;
    updatedAt: string;
}

export interface IUser {
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
    flats: any[];
    requests: Request[];
}


export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN"
}

export enum UserStatus {
    ACTIVATE = "ACTIVATE",
    DEACTIVATE = "DEACTIVATE"
}