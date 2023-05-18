import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  
  useEffect(()=>{
    const loadAll = async () =>{
      //pegando lista geral
      let list = await Tmdb.getHomeList();
      console.log(list)
    }

    loadAll();
  }, []);

  return (
    <div>
      Dominic Toretto says: never abandon your family. (Insert bandoleros)
    </div>
  );
}