import { useEffect, useState } from 'react';

export default function useFilterList(products, filters) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult([]);
    products.forEach(product => {
      let isValid = true;
      // if (product.isSoldOut && filters.indexOf('품절포함' < 0)) return;
      if (!product.isSale && filters.indexOf('세일상품') >= 0) return;
      if (!product.isExclusive && filters.indexOf('단독상품') >= 0) return;
      for (const filter of filters) {
        if (filter === '품절포함' || filter === '세일상품' || filter === '단독상품') continue;
        if (!product.goodsName.includes(filter) && !product.brandName.includes(filter)) {
          isValid = false;
          break;
        }
      }

      if (isValid) setResult(prevArr => [...prevArr, product]);
    });
  }, [products, filters]);

  return result;
}
