import React, { useEffect, useState } from 'react'
import { getDataForPageAndQuery } from '../../utils/connectionUtils';
import NewsCard from '../NewsCardComponent/NewsCard';


const NewsList = ({query, view}) => {
    
  const [favsList, setFavsList] = useState([]);
  localStorage.setItem("favsList",favsList);

  const [hits, setHits] = useState([]);
  const option = ['angular','reactjs','vuejs'];

  const getData = async () => {
    const query = localStorage.getItem('query').toLocaleLowerCase();
    const listFavs = JSON.parse(localStorage.getItem('favsList') || "[]" );

    if (option.includes(query) && view == "All") {
      const page = parseInt(localStorage.getItem('page'),10);
      const data = await getDataForPageAndQuery({query: query,page: page});
      const post = []
      data.forEach(item =>{
        const myFave = listFavs.find(e=>e.objectID == item.objectID)?.fave || false;
        if (item.author && item.created_at && item.story_title && item.story_url) {
          post.push({
            author: item.author,
            created_at: item.created_at,
            story_title: item.story_title,
            story_url: item.story_url,
            objectID: item.objectID,
            fave: myFave
          });
        }
      })
      setHits(post);
    } 
    if (view == "Favs") {
      setHits(listFavs)
      console.log(hits)
    }
  }
  useEffect(()=>{getData()},[query, view]);

  return (
    <>
      <ul className='cards'>
        {hits ? 
          hits.map(item =>
            <NewsCard item={item} setHits={setHits} favsList={favsList} setFavsList={setFavsList}/>
          )
        : 
          <p>Cargando...</p>
        }
      </ul>
    </>
  )
}

export default NewsList