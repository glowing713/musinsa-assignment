import { useEffect, useState } from 'react';

export default function useSearchSuggestion(products, searchKeyword) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions([]);

    if (searchKeyword === '') setSuggestions([]);
    else {
      products.forEach(({ goodsName, brandName }) => {
        if (goodsName.includes(searchKeyword) || brandName.includes(searchKeyword)) {
          setSuggestions(prevSug => [...prevSug, [goodsName, brandName]]);
        }
      });
    }
  }, [products, searchKeyword]);

  return suggestions;
}
