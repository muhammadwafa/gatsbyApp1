import React from "react";
import styles from "./header.module.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import Menu from './menu';

export default () => {

    const data = useStaticQuery(graphql` query {
        logo: file(relativePath: { eq: "images/gatsby-icon.png" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }`);

    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.threeMenu}>
                    <Img className={styles.logo} fixed={data.logo.childImageSharp.fixed} objectFit="cover"  alt="" />
                    <p className={styles.title}>Blog</p>
                    <a className={styles.circleci} href="">About CircleCI</a>
                </div>
                <div />
                <button className={styles.button}>Start building for free</button>
            </div>
            <Menu />
        </div>
    );
}

