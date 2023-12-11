import React, { useState } from 'react'
import Selector from '../../components/Selector/Selector'
import NewsList from '../../components/NewsListComponent/NewsList'

const Home = ({setPage, setQuery, query,view}) => {

  return (
    <main className='content'>
      <Selector setQuery={setQuery}/>
      <NewsList setQuery={setQuery} setPage={setPage} query={query} view={view}/>
    </main>
  )
}

export default Home