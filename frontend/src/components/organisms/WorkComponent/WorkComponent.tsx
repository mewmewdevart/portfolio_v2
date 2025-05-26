import React from "react";
import useWork from "../../../utils/work";
import styles from "./WorkComponent.module.css";

const WorkComponent: React.FC = () => {
  const work = useWork();

  return (
    <div className={styles.WorkComponent}>
      <div className={styles.func}>
        <div className={styles.work}>
          {work.map((category, index) => (
            <div key={index}>
              <h3 className="flex items-center gap-2">
                {category.icon}
                {category.category}
              </h3>
              <ul>
                {category.skills.map(
                  ({ companyName, jobName, date, jobDescription }, idx) => (
                    <li key={idx} className={styles.timelineItem}>
                      <span>{jobName}</span>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">{companyName}</span>
                        <span className="text-neutral-500">{date}</span>
                      </div>
                      <span
                        dangerouslySetInnerHTML={{ __html: jobDescription }}
                      ></span>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
