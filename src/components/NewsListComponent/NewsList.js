import React, { useEffect, useState } from 'react'
import { getDataForPageAndQuery } from '../../utils/connectionUtils';
import NewsCard from '../NewsCardComponent/NewsCard';


const NewsList = () => {
  const [hits, setHits] = useState([]);

  const getData = async () => {
    const data = await getDataForPageAndQuery({query: "reactjs",page: 0});
    const hits = data.map(item => ({ ...item, fave: false }));
    setHits(hits);
  }
  useEffect(()=>{getData()},[]);

  return (
    <>
      <ul className='cards'>
        {hits ? 
          hits.map(item =>
            item.author && item.story_title && item.story_url && item.created_at ?
            <NewsCard item={item} setHits={setHits} />
            : null
          )
        : 
          <p>Cargando...</p>
        }
      </ul>
    </>
  )
}

export default NewsList