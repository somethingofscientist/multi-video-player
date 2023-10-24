import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css';
import jintama0 from '../../Videos/jintama.mp4'
import jintama1 from '../../Videos/gintama1.mp4'
import jintama2 from '../../Videos/gintama2.mp4'

import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const Layout = () => {
    // ADS ARRAY HERE
    const ads_Arr = [
        // {
        //     ads_link: "https://uploads-ssl.webflow.com/63f53af6e7d3ad6807222368/64703481041bb767ea996fe6_Startbucks%20logo%20on%20product%20gif%20example.gif"
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

    ]

    // VIDEO ARRAY HERE HARDCODED
    const arr = [
        {
            id: 1,
            title: "Gintama 1",
            video: jintama0,
        },
        {
            id: 2,
            title: "Gintama 2",
            video: jintama1,
        },
        {
            id: 3,
            title: "Gintama 3",
            video: jintama2,
        },
        {
            id: 1,
            title: "Gintama 1",
            video: jintama0,
        },
        {
            id: 2,
            title: "Gintama 2",
            video: jintama1,
        },
        {
            id: 3,
            title: "Gintama 3",
            video: jintama2,
        },
        {
            id: 1,
            title: "Gintama 1",
            video: jintama0,
        },
        {
            id: 2,
            title: "Gintama 2",
            video: jintama1,
        },
        {
            id: 3,
            title: "Gintama 3",
            video: jintama2,
        },
        {
            id: 1,
            title: "Gintama 1",
            video: jintama0,
        },
        {
            id: 2,
            title: "Gintama 2",
            video: jintama1,
        },
        {
            id: 3,
            title: "Gintama 3",
            video: jintama2,
        },
        {
            id: 1,
            title: "Gintama 1",
            video: jintama0,
        },
        {
            id: 2,
            title: "Gintama 2",
            video: jintama1,
        },
        {
            id: 3,
            title: "Gintama 3",
            video: jintama2,
        },
    ]

    // Pagination
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);

    const totalItems = arr.length;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Header />
            <main>
                <div className={styles.container}>
                    {/* Left AD Section */}
                    <div className={styles.left_ads}>
                        {
                            ads_Arr.map((val) => (
                                <img src={val.ads_link} key={val.id} alt="" />
                            ))
                        }
                    </div>
                    {/* MAIN LAYOUT */}
                    <div className={styles.pagination_container}>
                        {/* Main Video Layout */}
                        <div className={styles.main_container}>
                            {currentItems.map((val, index) => (
                                <div
                                    key={val.id}
                                    className={styles.video_container}
                                >
                                    <video
                                        controls
                                        muted
                                        autoPlay={true}
                                        loop={true}
                                        src={val.video}
                                    />
                                    <div className={styles.details}>
                                        {val.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Page Layout */}
                        <div className={styles.pagination}>
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <MdArrowBackIosNew />
                            </button>
                            {
                                pageNumbers.map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => paginate(number)}
                                        className={number === currentPage ? styles.active : ''}
                                    >
                                        {number}
                                    </button>
                                ))
                            }
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={indexOfLastItem >= arr.length}
                            >
                                <MdArrowForwardIos />
                            </button>
                        </div>
                    </div>
                    {/* Right AD Section */}
                    <div className={styles.right_ads}>
                        {
                            ads_Arr.map((val) => (
                                <img src={val.ads_link} key={val.id} alt="" />
                            ))
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Layout