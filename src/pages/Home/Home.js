import React from 'react'
import Selector from '../../components/Selector/Selector'
import NewsList from '../../components/NewsListComponent/NewsList'

const Home = () => {
  return (
    <main className='content'>
      <Selector/>
      <NewsList/>
    </main>
  )
}

export default Home