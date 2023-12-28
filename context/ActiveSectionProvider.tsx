"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionProviderProps = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionProviderProps | null>(null);

const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
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
