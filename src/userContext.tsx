import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from './userdata';
import { userData as initialUserData } from './userdata';

interface UserContextType {
  userData: User[];
  addUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<User[]>(initialUserData);

  const addUser = (user: User) => {
    setUserData((prev) => [...prev, user]);
  };

  return (
    <UserContext.Provider value={{ userData, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
