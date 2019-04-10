import React from 'react';


const Card =({id,name,email})=>
{
    return(
      <div className="bg-light-green dib pa3 ma3 tc br3 grow ">
          <div className="pill">
            <img alt="robo" src={`https://robohash.org/${id}?size=200x200`} />
          </div>
          <div className="courier hot-pink">
            <p>{name}</p>
            <p>{email}</p>
          </div>
      </div>
    );

}



export default Card;
