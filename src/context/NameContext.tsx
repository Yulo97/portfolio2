"use client";
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface IContextProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  validarName: () => boolean;
}

export const NameContext = createContext<IContextProps>({
  name: "",
  setName: () => "",
  validarName: () => false,
});

export const NameProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState<string>("");

  const validarName = (): boolean => {
    if (!name) {
      return false;
    }
    return true;
  };

  return (
    <NameContext.Provider value={{ name, setName, validarName }}>{children}</NameContext.Provider>
  );
};
