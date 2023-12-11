import React, { useState } from 'react'

const Menu = ({setView}) => {
  const view = localStorage.getItem('view');

  const changeView = (view) =>{
    setView(view);
  }

  return (
    <>
      <nav className='menu'>
        <ul>
            <li className={`btn-menu btn-menu-ALL ${view == "All" && 'btn-menu-active'}`} onClick={()=>changeView("All")}>All</li>
            <li className={`btn-menu btn-menu-FAVES ${view == "Favs" && 'btn-menu-active'}`} onClick={()=>changeView("Favs")}>My faves</li>
        </ul>
      </nav>
    </>
  )
}

export default Menu