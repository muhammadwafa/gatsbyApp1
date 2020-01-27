import React from "react";
import Header from './header';
import styles from "./container.module.css"

export default ({ children }) => (
    <div className={styles.container}>
        <Header />
        <main className={styles.main}>
            {children}
        </main>
    </div>
);
