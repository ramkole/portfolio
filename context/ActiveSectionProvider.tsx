"use client";

import { links } from "@/lib/data";
import { ReactNode, createContext, useContext, useState } from "react";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionProviderProps = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionProviderProps | null>(null);

const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useContextForActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("context is used outside");
  }

  return context;
};

export default ActiveSectionProvider;
