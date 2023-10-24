import React from 'react'
import styles from './Header.module.css';
import blue_tick from '../../images/blue-removebg-preview.png';


import { BsFillSearchHeartFill } from 'react-icons/bs'
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <div className={styles.logo}>
                        <img src={blue_tick} alt="" />
                    </div>
                    <p>Company Heading</p>
                </div>
                <div className={styles.categories}>
                    <Marquee
                        gradient
                        gradientColor='rgb(0, 6, 40)'
                    >
                        <div className={styles.category}>Category</div>
                        <div className={styles.category}>Category</div>
                        <div className={styles.category}>Category</div>
                        <div className={styles.category}>Category</div>
                        <div className={styles.category}>Category</div>
                        <div className={styles.category}>Category</div>
                        <div className={styles.category}>Category</div>
                        <div className={styles.category}>Category</div>
                        <div className={styles.category}>Category</div>
                    </Marquee>
                </div>

                {/* SEARCH BAR */}
                <div className={styles.search_bar}>
                    <input
                        placeholder='Search here ...'
                        type="search"
                    />
                    <div className={styles.search_bar_logo}>
                        <BsFillSearchHeartFill />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header