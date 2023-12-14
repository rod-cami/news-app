import React from 'react'
import iconFavorite2 from '../../assets/icons/favorite/iconmonstr-favorite-2.png';
import iconFavorite3 from '../../assets/icons/favorite/iconmonstr-favorite-3.png';
import iconTimer from '../../assets/icons/timer/iconmonstr-time-2.png';
import { timeElapsed } from '../../utils/newsUtils';

const NewsCard = ({ item, setHits }) => {
  const openTab = () => window.open(item.story_url,'_blank');

  const updateLocalStorage = (faveList) => {
    localStorage.setItem('favsList', JSON.stringify(faveList));
  };

  const handleFave = () =>{
    setHits( e =>{
      return e.map(i => i.objectID === item.objectID ? {...i, fave: !i.fave} : i);
    })
    
    const faveList = JSON.parse(localStorage.getItem('favsList') || "[]");

    if (item.fave) {
      const updatedFaveList = faveList.filter(e => e.objectID !== item.objectID);
      updateLocalStorage(updatedFaveList);
    } else {
      faveList.push({ ...item, fave: true });
      updateLocalStorage(faveList);
    }
    
  }

  return (
    <li className={'card'}>
      <div className='bodyCard' onClick={openTab}>
        <div className='date'>
          <img src={iconTimer} alt="timer" />
          <span>{timeElapsed(item.created_at)} ago by {item.author}</span>
        </div>
        <div className='story_title'>{item.story_title}</div>				
      </div>
      <div className='likeCard' onClick={()=>handleFave()}>
        <img src={item.fave ? iconFavorite3:  iconFavorite2} alt={item.fave ? "Favorited" : "Not Favorited"} />
      </div>
    </li>
  )
}

export default NewsCard