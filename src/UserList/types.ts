export interface UserType {
  id: number;
  name: string;
  email: string;
  phone: number;
}

export interface ColumnType {
  id: string;
  label: string;
  type: string;
}
export interface UserListProps {
  newUser: UserType | null;
}

export interface HandleDelete {
  (id: number): void;
}
