import styles from "@/styles/Home.module.css";
import {IPageProps} from "@/types/types";

export default function Portfolio(props: IPageProps){
    const {props: pageData}= props;
    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className={styles["section-header"]}>
                <h2>Success Stories</h2>
                <p>Discover how top startups and SMEs use Laptronix Tech to design and develop applications that engage,
                    educate, and convert users.</p>
                <a href="#contact" className={styles["cta-button"]}>Launch your MVP</a>
            </div>

            <div className={styles["portfolio-grid"]}>
                {pageData.portfolio.map((project, index) => (
                    <div key={index} className={styles["portfolio-card"]}>
                        <div className={styles["portfolio-image"]}>
                            <img src={project.image} alt={project.title}/>
                        </div>
                        <div className={styles["portfolio-content"]}>
                            <span className={styles["portfolio-category"]}>{project.category}</span>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
