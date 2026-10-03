export type Realm = "customer" | "admin";

export type AuthUser = {
  id: number;
  name: string;
  phone: string;
  role: string | null;
  isStaff: boolean;
  permissions: string[];
};