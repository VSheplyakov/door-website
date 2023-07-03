import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Catalog.css'

const Catalog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://sheet.best/api/sheets/faecafee-88f1-4f33-92c5-4e59010e3023'
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="catalog container">
      <h2>Catalog</h2>
      <div className="grid">
        {data.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt="Product" />
            <p className='brand'>{item.brand}</p>
            <p className='description'>{item.description}</p>
            <p className='specification'>{formatSpecifications(item.specifications)}</p>
            <p>ціна:<span className='price'> {item.price}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Функція для форматування полів 'specifications'
const formatSpecifications = (specifications) => {
  // Розділити рядок на окремі рядки за допомогою символу нового рядка '\n'
  const lines = specifications.split('\n');

  // Додати крапку перед кожним рядком і повернути результат у вигляді списку
  return lines.map((line, index) => <span key={index}>&#8226; {line}</span>);
};

export default Catalog;
