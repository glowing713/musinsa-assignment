import { useEffect, useState } from 'react';

export default function useFilterList(products, filters) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult([
      ...products.filter(product => {
        if (filters.indexOf('품절포함') < 0 && product.isSoldOut) return false;
        let valid = true;
        if (filters.indexOf('품절포함') >= 0) valid = true;
        if (filters.indexOf('단독상품') >= 0) valid = product.isExclusive;
        if (filters.indexOf('세일상품') >= 0) valid = product.isSale;
        for (const filter of filters) {
          if (filter === '품절포함' || filter === '단독상품' || filter === '세일상품') continue;
          if (product.goodsName.includes(filter) || product.brandName.includes(filter)) valid = true;
          else valid = false;
        }
        return valid;
      }),
    ]);
  }, [products, filters]);

  return result;
}
