const timeElapsed = (timeCreate) =>{
  const day1 = new Date(timeCreate).getTime();
  const day2 = new Date().getTime();
  let t = (day2 - day1) / 1000; 
  if(t >= 60){
    t = t / 60;
    if(t >= 60){
      t = t / 60;
      if(t >= 24){
        t = t / 24;
        if(t > 1){
          return `${t.toFixed()} Dias`;
        }else{
          return `${t.toFixed()} Dia`;
        }
      }else{
        return `${t.toFixed()} Horas`;
      }
    }else{
      return `${t.toFixed()} Minutos`;
    }
  }else{
    return `${t.toFixed()} Segundos`;
  }
}

const filterAndAddFavorites = (dataHits, favoritesList) => {
  const posts = [];

  dataHits.forEach(item => {
    const myFavorite = favoritesList.find(e => e.objectID === item.objectID)?.fave || false;

    if (item.author && item.created_at && item.story_title && item.story_url) {
      posts.push({
        author: item.author,
        created_at: item.created_at,
        story_title: item.story_title,
        story_url: item.story_url,
        objectID: item.objectID,
        fave: myFavorite
      });
    }
  });

  return posts;
}

export {timeElapsed, filterAndAddFavorites}