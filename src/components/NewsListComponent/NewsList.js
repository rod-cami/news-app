import React, { useEffect, useState } from 'react';
import { getDataForPageAndQuery } from '../../utils/connectionUtils';
import NewsCard from '../NewsCardComponent/NewsCard';
import { filterAndAddFavorites } from '../../utils/newsUtils';
import Pagination from '../Pagination/Pagination';

const NewsList = ({ query, view }) => {
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(2);
  const option = ['angular', 'reactjs', 'vuejs'];

  const updateHits = (data, listFavs) => {
    const updatedHits = filterAndAddFavorites(data.hits, listFavs);
    if (totalPage === 2) setTotalPage(data.nbPages);
    setHits(updatedHits);
  };
  
  const fetchData = async (page) => {
    const query = localStorage.getItem('query').toLocaleLowerCase();
    const listFavs = JSON.parse(localStorage.getItem('favsList') || "[]");
  
    if (option.includes(query) && view === "All" && page <= totalPage) {
      const data = await getDataForPageAndQuery({ query, page });
      updateHits(data, listFavs);
    } else if (view === "Favs") {
      setHits(listFavs);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [query, view, page]);

  return (
    <>
      {hits ?
        <>
          <ul className='cards'>
            {hits.map((item, index) => (
              <NewsCard key={index} item={item} setHits={setHits} />
            ))}
          </ul>
          {query && view === "All" && <Pagination page={page} setPage={setPage} totalPage={totalPage}/>}
        </>
        : null
      }

    </>
  )
}

export default NewsList;
