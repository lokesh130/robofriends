import React from 'react';
import Card from './card';


const CardList=({array})=>{
  const cardlist=array.map((user,index)=>{
    return(
          <Card id={array[index].id} name={array[index].name} email={array[index].email}/>
          )
  }
  );

  return cardlist;
}

export default CardList;
