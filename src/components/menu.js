import React from "react";
import styles from "./menu.module.css"
import { Link } from "gatsby";



export default () => {

    return (
        <div className={styles.menu}>
            <Link className={styles.link} to='/'>
                <p className={styles.menuitem}>Home</p>
            </Link>
            <Link className={styles.link} to='/tutorial'>
                <p className={styles.menuitem}>Tutorials</p>
            </Link>
            <Link className={styles.link} to='/testing'>
                <p className={styles.menuitem}>Testing</p>
            </Link>
            <Link className={styles.link} to='/integration'>
                <p className={styles.menuitem}>Integrations</p>
            </Link>
            <Link className={styles.link} to='/operation'>
                <p className={styles.menuitem}>Operations</p>
            </Link>
            <Link className={styles.link} to='/news'>
                <p className={styles.menuitem}>News</p>
            </Link>
        </div>
    );
}

