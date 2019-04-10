import React from 'react';


const SearchBox=({func})=>{
  return (
    <div>
    <input className="b--green pa2 bg-lightest-blue" type="search" placeholder="search robots" onChange={func}/>
    <br/>
    </div>
  );
}

export default SearchBox;
