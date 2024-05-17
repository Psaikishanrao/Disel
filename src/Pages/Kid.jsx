import React, { useEffect, useState } from 'react';
import { Products } from './Products';
import { ProductCard } from '../Components/ProductCard';

export const Kid = () => {
  const originalArr = Products({ cat: "kid" });
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    setProducts(originalArr);
  }, [originalArr]);

  function handleFilterChange(selectedFilter, filterType) {
    if (filterType === 'category') {
      setCategoryFilter(selectedFilter);
    } else if (filterType === 'color') {
      setColorFilter(selectedFilter);
    } else if (filterType === 'price') {
      setPriceFilter(selectedFilter);
    }
  }

  useEffect(() => {
    let filteredArr = originalArr;

    if (categoryFilter) {
      filteredArr = filteredArr.filter((el) => el.catg === categoryFilter);
    }

    if (colorFilter) {
      filteredArr = filteredArr.filter((el) => el.color === colorFilter);
    }

    if (priceFilter === 'lower') {
      filteredArr.sort((a, b) => a.mrp - b.mrp);
    } else if (priceFilter === 'higher') {
      filteredArr.sort((a, b) => b.mrp - a.mrp);
    }

    setProducts([...filteredArr]);
  }, [categoryFilter, colorFilter, priceFilter, originalArr]);

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' ,width:'40%', paddingTop: '30px'}}>
        <select onChange={(e) => handleFilterChange(e.target.value, 'category')} name="cat" id="category">
          <option value="">Filter by category</option>
          <option value="jeans">Jeans</option>
          <option value="shirt">Shirt</option>
          <option value="sweater">Sweater</option>
          <option value="t-shirt">T-Shirt</option>
        </select>
        <select onChange={(e) => handleFilterChange(e.target.value, 'color')} name="col" id="color">
          <option value="">Filter by color</option>
          <option value="Blue">Blue</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
        </select>
        <select onChange={(e) => handleFilterChange(e.target.value, 'price')} name="price" id="price">
          <option value="">Sort by price</option>
          <option value="lower">Lower to higher</option>
          <option value="higher">Higher to lower</option>
        </select>
      </nav>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "20px" }}>
        {products.map((el) => {
          return <ProductCard {...el} key={el.id} />;
        })}
      </div>
    </div>
  );
};
