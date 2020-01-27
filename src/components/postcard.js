import React from "react";
import styles from "./postcard.module.css";

export default ({date, minutes, name, details, labelImage, personImage}) => {

    return (
        <div className={styles.card}>

            <img className={styles.image} src={labelImage} />

            <div className={styles.content}>
                <div className={styles.subTitle}>
                    <p className={styles.subTitleItem}>PEOPLE</p>
                    <p className={styles.subTitleItem}>{date}</p>
                    <p className={styles.subTitleItem}>{minutes}</p>
                </div>

                <p style={{padding: 20}}>{details}</p>

                <div className={styles.person}>
                    <img className={styles.personImage} src={personImage} />
                    <strong className={styles.personName}>{name}</strong>
                </div>
            </div>

        </div>
    );
}