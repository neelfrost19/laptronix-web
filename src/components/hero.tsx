import styles from "@/styles/Home.module.css";
import Image from 'next/image'
import { ChevronDown, Menu, X, ArrowRight, Users, Code, Globe, Award, Clock, Target } from 'lucide-react';

export default function Hero(){
    return (
        <section className={styles.hero}>
            <div className={styles["hero-content"]}>
                <h1>What we Do</h1>
                <h2>IT Consulting, Software, Web, and Hardware Solutions</h2>
                <p>Laptronix delivers comprehensive technology solutions—from strategic IT consulting and custom software
                    development to web applications, hardware installation, and engineering. We create integrated, scalable
                    systems tailored to meet the evolving needs of modern businesses.</p>
                <ul className={styles["hero-features"]}>
                    <li>
                        <Users size={20} className="text-purple-400" />
                        <span>IT Consulting</span>
                    </li>
                    <li>
                        <Code size={20} className="text-purple-400" />
                        <span>Custom Software & Web App Development</span>
                    </li>
                    <li>
                        <Globe size={20} className="text-purple-400" />
                        <span>Hardware Engineering & Installation</span>
                    </li>
                </ul>
                {/*<div className={styles["hero-image-container"]}>*/}
                {/*    <Image*/}
                {/*        src="/images/hero/hero-0.jpg"*/}
                {/*        alt="heroImage0"*/}
                {/*        width={300}*/}
                {/*        height={400}*/}
                {/*        className={styles["hero-image"]}*/}
                {/*    />*/}

                {/*</div>*/}
            </div>
        </section>
    )
}
