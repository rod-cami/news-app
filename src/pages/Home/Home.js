import React from 'react'
import Selector from '../../components/Selector/Selector'
import NewsList from '../../components/NewsListComponent/NewsList'

const Home = ({setQuery, query, view, page}) => {

  return (
    <main className='content'>
      <Selector setQuery={setQuery}/>
      <NewsList setQuery={setQuery} query={query} view={view} page={page}/>
    </main>
  )
}

export default Home