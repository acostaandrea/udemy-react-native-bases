import { useEffect, useState } from "react";
import { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/load-users.actions";

export const useUsers = () => {
  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
   loadUsersAction(1).then(setUser)
  }, [])
  
  return {
    users
  };
};
