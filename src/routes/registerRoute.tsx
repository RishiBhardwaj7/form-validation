import type { User } from "../userdata";
import { useUserContext } from "../userContext";

export const useAddUser = () => {
  const { addUser } = useUserContext();

  const addUserHandler = (user: User) => {
    addUser(user);
    console.log('User added:', user);
  };

  return { addUserHandler };
};
