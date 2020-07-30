import React from 'react'
import styles from './Navbar.module.scss'

export default function Navbar(props) {
  const handleClick = (url, i) => {
    props.handleClick(url)

    document.getElementsByClassName(`${styles.active}`)[0].classList.remove(`${styles.active}`)

    document.getElementsByClassName(`${styles.list__item}`)[i].classList.add(`${styles.active}`)
  }
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>StarW</h1>

      <div className={styles.list}>
        <div className={styles.list__item} onClick={() => handleClick('/films/', 0)}>
          <p>Films</p>
        </div>

        <div className={styles.list__item} onClick={() => handleClick('/people/', 1)}>
          <p>People</p>
        </div>

        <div className={`${styles.list__item} ${styles.active}`} onClick={() => handleClick('/planets/', 2)}>
          <p>Planets</p>
        </div>

        <div className={styles.list__item} onClick={() => handleClick('/species/', 3)}>
          <p>Spacies</p>
        </div>

        <div className={styles.list__item} onClick={() => handleClick('/starships/', 4)}>
          <p>Starships</p>
        </div>

        <div className={styles.list__item} onClick={() => handleClick('/vehicles/', 5)}>
          <p>Vehicles</p>
        </div>
      </div>
    </div>
  )
}