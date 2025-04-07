"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import ptBR from "../locales/pt-BR.json";
import enUS from "../locales/en-US.json";

type Language = "pt-BR" | "en-US";

interface Translations {
  [key: string]: string;
}

const translations: Record<Language, Translations> = {
  "pt-BR": ptBR,
  "en-US": enUS,
};

interface TranslationContextProps {
  texts: Translations;
  language: Language;
  setLanguage: (language: Language) => void;
}

export const TranslationContext = createContext<TranslationContextProps | undefined>({
  texts: translations["pt-BR"],
  language: "pt-BR",
  setLanguage: () => {},
});

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("language") as Language) || "pt-BR";
    }
    return "pt-BR";
  });
  const [texts, setTexts] = useState<Translations>(translations[language]);

  useEffect(() => {
    setTexts(translations[language]);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  return (
    <TranslationContext.Provider value={{ texts, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};