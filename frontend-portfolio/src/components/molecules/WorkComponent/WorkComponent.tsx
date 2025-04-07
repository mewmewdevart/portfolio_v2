import { work } from "@utils/work";
import styles from './WorkComponent.module.css';

const WorkComponent = () => {
  return (
    <div className={styles.WorkComponent}>
      <div className={styles.func}>
        <div className={styles.work}>
          {work.map(({ category, skills, icon }, index) => (
            <div key={index}>
              <h3 className="flex items-center gap-2">{icon}{category}</h3>
              <ul>
                {skills.map(({ companyName, jobName, date }, idx) => (
                  <li key={idx} className={styles.timelineItem}>
                    <span>{jobName}</span>
                    <small>{companyName}</small>
                    <small>{date}</small>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;