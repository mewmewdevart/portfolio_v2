import React, { useState } from 'react';
import styles from './TabsComponent.module.css';

export interface TabContent {
  Name: string;
  imgPath: string;
}

export interface Tab {
  id: string;
  label: string;
  content: TabContent[];
}

export interface TabsComponentProps {
  tabs: Tab[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || '');

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content || [];

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {activeContent.map((item, index) => (
          <div key={index} className={styles.tabItem}>
            <img src={item.imgPath} alt={item.Name} className={styles.tabImage} />
            <span>{item.Name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
