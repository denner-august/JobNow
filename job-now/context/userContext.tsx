import { createContext, ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import jobs from "../jobs/jobs.json";
import Router from "next/router";

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
  Deletar: (idVaga: number) => void;
};

export const Context = createContext({} as ContextProps);

export default function ContextProvider({ children }: childrens) {
  const { data: session } = useSession();

  const [user, setUser] = useState<ContextProps | any>();

  const [candidaturaName, setCandidaturaName] = useState("");

  const [DeletarVaga, setDeletarVaga] = useState(false);

  function Deletar(vagaId: number) {
    const search = jobs.vagas.findIndex((vaga) => vaga.id === vagaId);
    jobs.vagas.splice(search, 1);

    Router.push("/perfil");
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
