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

export {timeElapsed}