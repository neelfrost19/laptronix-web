import styles from "@/styles/Home.module.css";
import {IPageProps} from "@/types/types";

export default function Stats(props: IPageProps){
    const {props: pageData} = props;
    return (
        <section className={styles.stats}>
            <div className={styles["stats-grid"]}>
                {pageData.stats.map((stat, index) => (
                    <div key={index} className={styles["stat-card"]}>
                        <h3>{stat.number}</h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
