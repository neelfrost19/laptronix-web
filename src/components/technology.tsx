import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {IPageProps} from "@/types/types";

export default function Technology(props: IPageProps){
    const {props: pageData} = props;

    return (
        <section id="technologies" className={styles.technologies}>
            <div className={styles["section-header"]}>
                <h2>How we work</h2>
                <h3>Technology we offer</h3>
            </div>
            <div className={styles["tech-grid"]}>
                {pageData.technologies.map((tech, index) => (
                    <div key={index} className={styles["tech-card"]}>
                        <Image
                            src={tech.image}
                            alt={tech.name}
                            width={100}
                            height={100}
                            className={styles["tech-image"]}
                        />
                        <div>
                            <h4>{tech.name}</h4>
                            <p>{tech.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
