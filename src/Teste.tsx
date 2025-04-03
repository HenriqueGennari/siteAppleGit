import React from 'react';

const Teste: React.FC = () => {
    const itens = ['images/iMac.svg',
        'images/macAcessories.svg',
        'images/macbookAir.svg',
        'images/macCompare.svg',
        'images/macDisplays.svg',
        'images/macMini.svg'];
  
    return (
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            <img src={item}></img>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Teste;