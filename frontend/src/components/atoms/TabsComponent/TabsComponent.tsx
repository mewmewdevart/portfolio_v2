import React, { useState, useContext } from "react";
import { TranslationContext } from "../../../context/TranslationContext";

export interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsComponentProps {
  tabs: Tab[];
  defaultActiveIndex?: number;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ tabs, defaultActiveIndex = 0 }) => {
  const { texts } = useContext(TranslationContext)!;
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <div className="w-full mx-auto">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-lg font-semibold transition-all duration-200 cursor-pointer ${
              activeIndex === index
                ? "border-b-2 border-primary text-primary"
                : "text-gray hover:text-primary "
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

export default TabsComponent;
