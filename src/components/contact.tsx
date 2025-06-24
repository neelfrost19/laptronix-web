import styles from "@/styles/Home.module.css";
import {IPageProps} from "@/types/types";
import BookPocModal from "@/components/modal/bookPocModal";

export default function Contact(props: IPageProps){
    const {props: pageData}= props;
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles["section-header"]}>
                <h2>Contact</h2>
                <h3>Launch your MVP</h3>
                <p>Start building your offshore team today</p>
                <BookPocModal/>
            </div>

            <div className={styles["contact-grid"]}>
                {pageData.contacts.map((contact, index) => (
                    <div key={index} className={styles["contact-card"]}>
                        <h4>{contact.country}</h4>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                    </div>
                ))}
            </div>

            {/*<div className={styles.careers}>*/}
            {/*    <h4>Careers at Laptronix</h4>*/}
            {/*</div>*/}
        </section>
    )
}
