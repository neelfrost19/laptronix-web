'use client';

import { useState } from 'react';
import styles from '../../styles/bookPocModal.module.css';

const BookPocModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, company, message });
        setIsOpen(false);
    };

    return (
        <>
            <button className={styles.openButton} onClick={() => setIsOpen(true)}>
                Book a free PoC
            </button>

            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>×</button>
                        <h2 className={styles.heading}>Book a Proof of Concept</h2>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <label>
                                Company:
                                <input
                                    type="text"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                            </label>
                            <label>
                                Message:
                                <textarea
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    style={{ resize: 'none' }}
                                />
                            </label>
                            <button type="submit" className={styles.submitButton}>
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookPocModal;
