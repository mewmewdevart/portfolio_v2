import { work } from "../../../utils/work";
import styles from "./WorkComponent.module.css";

const WorkComponent = () => {
  return (
    <div className={styles.WorkComponent}>
      <div className={styles.func}>
        <div className={styles.work}>
          {work.map(({ category, skills, icon }, index) => (
            <div key={index}>
              <h3 className="flex items-center gap-2">
                {icon}
                {category}
              </h3>
              <ul>
                {skills.map(
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
