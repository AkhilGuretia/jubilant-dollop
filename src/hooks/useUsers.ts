import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userService, { User } from "../Components/Services/userService";

const useUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const [err, setErr] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const { request, Cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsLoading(false);
      });

    return () => Cancel();
  }, []);

  return {
    users,
    err,
    isLoading,
    setUsers,
    setErr,
  };
};

export default useUsers;
