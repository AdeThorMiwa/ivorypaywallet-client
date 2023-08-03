export enum UserType {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface User {
  uid: string;
  userType: UserType;
  username: string;
  email: string;
  avatar: string;
}
