import { createContext, ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

type childrens = {
  children: ReactNode;
};

interface UserProps {
  email: string;
  image: string;
  name: string;
}

type ContextProps = {
  user: UserProps;
  setUser: (data: UserProps) => void;
};

export const Context = createContext({} as ContextProps);

export default function ContextProvider({ children }: childrens) {
  const { data: session } = useSession();

  const [user, setUser] = useState<ContextProps | any>();

  useEffect(() => {
    if (session) {
      setUser(session.user);
    }
  }, [session]);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}
