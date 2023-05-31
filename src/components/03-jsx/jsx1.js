import React from 'react'

const Jsx1 = () => {

    const message=
    "Class isimleri className içerisinde verilir ve attribute lar camelCase yazılır";
    
  return (
    <ul>
     <li>Tüm elementler tek bir root içinde olmalı</li>
     <li className='title'>{message} </li>
    </ul>
  );
};

export default Jsx1;