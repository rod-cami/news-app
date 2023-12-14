import React from 'react';

const Selector = ({setQuery}) => {
  const option = ['Select your news','Angular','ReactJS','VueJS'];

  const search = (value) =>{
    setQuery(option[value])
  }
  return (
    <>
      <select className='select-news' id="news" defaultValue={0} onChange={e=>search(e.target.value)}>
        {
          option.map((value, index) => {
            return index === 0 ? <option key={index} value={value} disabled hidden>Select your news</option> :
              <option key={index} value={index}>{value}</option>
          })
        }
      </select>
    </>
    
  )
}

export default Selector