import { useEffect, useRef, useState } from "react";
import { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/load-users.actions";

export const useUsers = () => {
  const [users, setUser] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
   loadUsersAction(1).then(setUser)
  }, [])

  const nextPage = async() => {
    currentPageRef.current += 1;
    const users = await loadUsersAction(currentPageRef.current);
    if(users.length > 0) {
      setUser(users);
    }else{
      currentPageRef.current -= 1;
      // alert("No hay más usuarios")
    }
  }

  const previousPage = async() => {
    if(currentPageRef.current < 1) return;
    currentPageRef.current -= 1;
    const users = await loadUsersAction(currentPageRef.current);
    setUser(users);
  }
  
  return {
    users,
    nextPage,
    previousPage
  };
};
