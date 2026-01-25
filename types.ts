
export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export interface User {
  id: string;
  username: string;
  password?: string;
  role: UserRole;
  fullName: string;
}

export interface Branch {
  id: string;
  name: string;
  code: string;
}

export interface Detector {
  id: string;
  branchId: string;
  loopNumber: string;
  detectorNumber: string;
  mapImage?: string; // Base64 string
  photo?: string; // Base64 string from camera
  notes?: string;
  pinX?: number; // Percentage from left (0-100)
  pinY?: number; // Percentage from top (0-100)
}

export interface AppState {
  users: User[];
  branches: Branch[];
  detectors: Detector[];
  currentUser: User | null;
  language: 'ar' | 'en';
}
