import React from 'react';
import Footer from './shared/Footer';
import Sliders from './shared/slider';
import styles from "../styles/css/Landing.module.css"
const Landing = () => {
    return (
        <div className={styles.container}>
        <div className={styles.pic}><h1>buy what you want!!</h1></div>
        <Sliders/>
        <Footer/>
        </div>
    );
};

export default Landing;