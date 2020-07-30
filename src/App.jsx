import React, { useState } from 'react'
import styles from './App.module.scss'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Details from './components/Details'

export default function App() {
  const [activePage, setActivePage] = useState('/planets/')
  const [activeItem, setActiveItem] = useState(1)

  const handleClick = id => {
    setActiveItem(id)
  }

  const handleChangeActivePage = (page, id) => {
    setActivePage(page)
    setActiveItem(id || 0)
  }

  return (
    <div className={styles.container}>
      <Navbar handleClick={(page) => handleChangeActivePage(page)} />

      <div className={styles.section}>
        <SideBar activePage={activePage} handleClick={(id) => handleClick(id)} />

        <Details activePage={activePage} activeItem={activeItem} />
      </div>
    </div>
  )
}