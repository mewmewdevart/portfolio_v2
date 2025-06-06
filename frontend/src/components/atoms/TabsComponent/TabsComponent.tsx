import React, { useState } from "react";

export interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsComponentProps {
  tabs: Tab[];
  defaultActiveIndex?: number;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ tabs, defaultActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <div className="w-full mx-auto">
      <div className="flex ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-lg font-semibold transition-all duration-200 cursor-pointer  focus-visible:outline-none focus-visible:px-2 focus-visible:py-1
          focus-visible:border-primary focus-visible:border-4 focus-visible:border-dashed ${
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
      <div className="p-4 text-white ">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

export default TabsComponent;
