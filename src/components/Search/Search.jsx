import React from 'react'
import styles from './Search.module.scss'

export default function Search(props) {
  return (
    <div>
      <input type="text" className={styles.input}
        placeholder="Search..."
        onChange={(e) => props.handleChange(e.target.value)} />
    </div>
  )
}