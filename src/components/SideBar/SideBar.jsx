import React, { useEffect, useState } from 'react'
import styles from './SideBar.module.scss'
import ItemList from '../ItemList'
import starWars from '../../services/StarWars-services'
import Search from '../Search'

export default function SideBar(props) {
  const Api = new starWars();
  const [planets, setPlanets] = useState([]);
  const activePage = props.activePage;
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const handleClick = (id) => {
    props.handleClick(id)
  }

  const getId = (obj) => {
    return obj.url.split('/').slice(-2, -1)
  }

  useEffect(() => {
    setLoading(true);
    Api.getAll(activePage).then((body) => {
      setPlanets(body.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      }));

      setLoading(false);
    });
  }, [activePage]);

  return (
    <div className={styles.list}>
      {loading ? (
        <div className={styles.overlay_loader}>
          <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
          <>
            <Search handleChange={(text) => setSearch(text)} />
            {planets.filter(el => el.name ? el.name.toLowerCase().includes(search.toLowerCase()) : el.title.toLowerCase().includes(search.toLowerCase())).map((planet, i) => (
              <div key={i} className={styles.textBlock} onClick={() => handleClick(getId(planet))}>
                <ItemList planet={planet} />
              </div>
            ))}
          </>
        )}
    </div>
  )
}