import styles from "@/styles/Home.module.css";
import {IPageProps} from "@/types/types";

export default function Service(props: IPageProps){
    console.log(props);
    const {props: pageData}= props;
    return (
        <section id="services" className={styles.services}>
            <div className={styles["section-header"]}>
                <h2>OUR SERVICES</h2>
                <h3>Build Better, Scale Smarter</h3>
                <p>From rapid MVPs to full-scale platforms — our services are built to power your growth at every
                    stage.</p>
                <a href="#contact" className={styles["cta-button"]}>Learn More</a>
            </div>
            <div className={styles["services-grid"]}>
                {pageData.services.map((service, index) => (
                    <div key={index} className={styles["services-grid"]}>
                        <div className={styles["service-image"]}>
                            <img src={service.image} alt={service.title}/>
                        </div>
                        <div className={styles["service-content"]}>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
