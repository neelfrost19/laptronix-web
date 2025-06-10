import styles from "@/styles/Home.module.css";
import {IPageProps} from "@/types/types";

export default function Testimonials(props: IPageProps){
    const {props: pageData}= props;
    return (
        <section id="testimonials" className={styles.testimonials}>
            <div className={styles["section-header"]}>
                <h2>Project Success</h2>
                <h3>Our clients speak for us</h3>
            </div>

            <div className={styles["testimonials-grid"]}>
                {pageData.testimonials.map((testimonial, index) => (
                    <div key={index} className={styles["testimonial-card"]}>
                        <p>{testimonial.text}</p>
                        <div className={styles["testimonial-author"]}>
                            <img src={testimonial.avatar} alt={testimonial.author}/>
                            <div>
                                <h5>{testimonial.author}</h5>
                                <span>{testimonial.position}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
