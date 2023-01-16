import { createContext, ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";

import { useQueryClient } from 'react-query'


import { api } from "../axios";

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

  candidaturaName: string;
  setCandidaturaName: (name: string) => void;

  DeletarVaga: boolean;
  setDeletarVaga: (estado: boolean) => void;
  Deletar: (idVaga: string | string[] | undefined) => void;
};

export const Context = createContext({} as ContextProps);

export default function ContextProvider({ children }: childrens) {
  const queryClient = useQueryClient()
  const { data: session } = useSession();

  const [user, setUser] = useState<ContextProps | any>();

  const [candidaturaName, setCandidaturaName] = useState("");

  const [DeletarVaga, setDeletarVaga] = useState(false);

  function Deletar(id: string | string[] | undefined) {

    api.delete(`/api/deleteOneJob/${id}`).then(() => queryClient.invalidateQueries('allJobs'));

    setTimeout(() => {
      Router.push("/perfil");
    }, 2000);
  }

  useEffect(() => {
    if (session) {
      setUser(session.user);
    }
  }, [session]);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        candidaturaName,
        setCandidaturaName,
        Deletar,
        DeletarVaga,
        setDeletarVaga,
      }}
    >
      {children}
    </Context.Provider>
  );
}
