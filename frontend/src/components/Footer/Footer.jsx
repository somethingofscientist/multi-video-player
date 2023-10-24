import React from 'react'
import styles from './Footer.module.css'
import paypal from '../../images/payment_images/paypal.png'
import paytm from '../../images/payment_images/paytm.png'
import master_card from '../../images/payment_images/master_card.png'
import visa from '../../images/payment_images/visa.png'

import Marquee from "react-fast-marquee";
import { SiPaytm } from 'react-icons/si'
import { FaCcPaypal, FaCcVisa } from 'react-icons/fa'
import { BiLogoMastercard } from 'react-icons/bi'


const Footer = () => {
    // ADS ARRAY HERE
    const ads_Arr = [
        // {
        //     ads_link: "https://uploads-ssl.webflow.com/63f53af6e7d3ad6807222368/644a04331e1649bc445f66d6_e4xZi4xfifpsdlsTC3ZvD2ahscMK-TKyHLQYQYkVjdlHZxMN3rV0StLJPkN3dJMGP1SPJAu0LAfa5v8dtPdHOqO7ay9hsx29I5WsxYWYXBBgQaskMB7e3HL-Id7x_l4PAQXz4HSpeWfWgkDznQ.gif"
        // },
        // {
        //     ads_link: "https://images.squarespace-cdn.com/content/v1/5c055f98620b858a898bfcae/1549062533683-83B820V8S8LYFRA7WN8R/DAAC-WALKCYCLE-BLUEslower.gif"
        // },
        // {
        //     ads_link: "https://cdn.dribbble.com/users/5207593/screenshots/14109968/media/e5c5cfff8145ed9b24dc760c2621c2a3.gif"
        // },

        {
            id: 1,
            ads_link: "https://rodolfogrimaldi.com/wp-content/uploads/2014/02/Your-Ad-Here.gif"
        },
        {
            id: 2,
            ads_link: "https://rodolfogrimaldi.com/wp-content/uploads/2014/02/Your-Ad-Here.gif"
        },
        {
            id: 3,
            ads_link: "https://rodolfogrimaldi.com/wp-content/uploads/2014/02/Your-Ad-Here.gif"
        },
        {
            id: 4,
            ads_link: "https://rodolfogrimaldi.com/wp-content/uploads/2014/02/Your-Ad-Here.gif"
        },
    ]

    return (
        <>
            <div className={styles.container}>
                <Marquee>
                    <div className={styles.ads_banner}>
                        {
                            ads_Arr.map((val) => (
                                <img src={val.ads_link} alt="" key={val.id} />
                            ))
                        }
                    </div>
                </Marquee>
                <div className={styles.left}>
                    <div className={styles.left_heading}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi reiciendis obcaecati repudiandae minima nihil amet optio dolorum, dolorem nisi corrupti blanditiis fugiat vero, voluptatem iusto ducimus natus dicta assumenda!
                    </div>
                    <div className={styles.left_sub_heading}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi reiciendis obcaecati repudiandae minima nihil amet optio dolorum, dolorem nisi corrupti blanditiis fugiat vero, voluptatem iusto ducimus natus dicta assumenda!
                    </div>
                    <div className={styles.left_heading}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi reiciendis obcaecati repudiandae minima nihil amet optio dolorum, dolorem nisi corrupti blanditiis fugiat vero, voluptatem iusto ducimus natus dicta assumenda!
                    </div>

                    <div className={styles.left_icons}>
                        <FaCcPaypal />
                        <SiPaytm />
                        <BiLogoMastercard />
                        <FaCcVisa />
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.column}>
                        <div className={styles.column_heading}>Company</div>
                        <div className={styles.column_sub_heading}>Company 1</div>
                        <div className={styles.column_sub_heading}>Company 2</div>
                        <div className={styles.column_sub_heading}>Company 3</div>
                        <div className={styles.column_sub_heading}>Company 4</div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.column_heading}>Company</div>
                        <div className={styles.column_sub_heading}>Company 1</div>
                        <div className={styles.column_sub_heading}>Company 2</div>
                        <div className={styles.column_sub_heading}>Company 3</div>
                        <div className={styles.column_sub_heading}>Company 4</div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.column_heading}>Company</div>
                        <div className={styles.column_sub_heading}>Company 1</div>
                        <div className={styles.column_sub_heading}>Company 2</div>
                        <div className={styles.column_sub_heading}>Company 3</div>
                        <div className={styles.column_sub_heading}>Company 4</div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.column_heading}>Company</div>
                        <div className={styles.column_sub_heading}>Company 1</div>
                        <div className={styles.column_sub_heading}>Company 2</div>
                        <div className={styles.column_sub_heading}>Company 3</div>
                        <div className={styles.column_sub_heading}>Company 4</div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer