"use client";
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface IContextProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IContextProps>({
  language: "",
  setLanguage: () => {},
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>("es");

  return (
    <GlobalContext.Provider value={{ language, setLanguage }}>{children}</GlobalContext.Provider>
  );
};
