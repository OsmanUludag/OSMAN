import React from 'react'

const Jsx2 = () => {

  const user ={
    name : "Osman Uludag",
    email : "osmanuludag@gmail.com",
    occupation : "Developer",
  };

  return (
    <div>
        <div> Name : {user.name} </div>
        <div> Email : {user.email} </div>
        <div> Occupation : {user.occupation} </div>
    </div>
  );
};

export default Jsx2;