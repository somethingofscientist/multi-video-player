import { useState } from 'react';
import styles from './Search.module.css'
import { UsersData } from './User';

const Search = () => {
    const [search, setSearch] = useState('');

    const filteredData = UsersData.filter((x) =>
        x.name.toLowerCase().includes(search) ||
        x.surname.toLowerCase().includes(search) ||
        x.agenda.toLowerCase().includes(search)
    );

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder='search here...'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className={styles.list}>
                {
                    filteredData.length > 0 ?
                        (
                            filteredData.map((val) => (
                                <div className={styles.list_card} key={val.phone}>
                                    <p>Name: {val.name}</p>
                                    <p>Surname: {val.surname}</p>
                                    <p>Agenda: {val.agenda}</p>
                                    <p>Phone: {val.phone}</p>
                                </div>
                            ))
                        )
                        :
                        (
                            <div className={styles.loading}>
                                <p>No Data Found...</p>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default Search