import React from 'react';

const Selector = () => {
  const option = ['Angular','React','Vuejs'];

  const search = (value) =>{
    localStorage.setItem("query",option[value])
  }
  return (
    <>
    <select className='select-news' id="news" defaultValue={0} onChange={e=>search(e.target.value)}>
      <option key={0} value={0} disabled>Select your news</option>
      {
        option.map((value, index) => {
          return <option key={index+1} value={index+1}>{value}</option>
        })
      }
    </select>
    </>
    
  )
}

export default Selector