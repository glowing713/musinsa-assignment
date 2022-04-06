import { useEffect, useState } from 'react';

export default function useFilterList(products, filters) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult([]);
    products.forEach(product => {
      if (filters.indexOf('세일상품') >= 0) {
        if (!product.isSale) return;
      }
      if (filters.indexOf('품절포함') < 0) {
        if (product.isSoldOut) return;
      }
      if (filters.indexOf('단독상품') >= 0) {
        if (!product.isExclusive) return;
      }
      setResult(prevArr => [...prevArr, product]);
    });
  }, [products, filters]);

  return result;
}
