import React, { useEffect, useState } from 'react'
import styles from './Details.module.scss'
import starWars from '../../services/StarWars-services'

export default function Details(props) {
  const activePage = props.activePage
  const activeItem = props.activeItem
  const [active, setActive] = useState()
  const [item, setItem] = useState([])
  const Api = new starWars();

  const handleClick = link => {
    setActive(link)
  }

  useEffect(() => {
    if (activeItem === 0) {
      return
    } else {
      Api.getItem(`${activePage}`, activeItem).then((body) => {
        setItem(body)
      });
    }
  }, [activePage, activeItem])

  useEffect(() => {
    Api.get(active).then((body) => {
      setItem(body)
    });
  }, [active])

  return (
    <div className={styles.details}>
      <h3 className={styles.title}>Details</h3>

      {Object.keys(item).map((cityId, i) => (
        <div key={i} className="card-panel">
          {Array.isArray(item[cityId]) ? (
            <div>
              <p className={styles.details__item}>{cityId[0].toUpperCase() + cityId.split('_').join(' ').slice(1)}  :</p>

              {item[cityId].map((link, i) => {
                return (
                  <div key={i}>
                    <p className={`${styles.details__item} ${styles.arrays}`} onClick={() => handleClick(link)}>
                      {link}
                    </p>
                  </div>
                )
              })}
            </div>
          ) :
            <p className={styles.details__item}>
              {cityId[0].toUpperCase() + cityId.split('_').join(' ').slice(1)}  :
            {item[cityId]}
            </p>}
        </div>
      ))}
    </div>
  )
}