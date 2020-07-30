import React from 'react'
import styles from './ItemList.module.scss'

export default function ItemList(props) {
  const { name, title } = props.planet

  return (
    <div>
      <p className={styles.name}>{name} {title}</p>
    </div>
  )
}