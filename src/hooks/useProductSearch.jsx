import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useProductSearch(pageNumber) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const maxPage = 3;

  useEffect(() => {
    setIsLoading(true); // 로딩 상태 시작
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: `https://static.msscdn.net/musinsaUI/homework/data/goods${pageNumber}.json`,
        });
        setIsLoading(false); // 서버로부터 데이터를 받은 후에 로딩 상태 종료
        setProducts(prevProducts => removeDuplicates(prevProducts, response.data.data.list)); // 기존 상품 목록에 새로운 데이터 추가(중복 제거)
        setHasMore(pageNumber + 1 <= maxPage); // 지금이 마지막 페이지인지 체크
      } catch (e) {
        console.log('읭?? 에러가 발생했는디??', e);
      }
    };

    fetchData();
  }, [pageNumber]); // 이 hook은 페이지 번호의 변화를 추적합니다

  return { isLoading, products, hasMore };
}

function removeDuplicates(prevItems, newItems) {
  const resultArr = [...prevItems];
  const prevKeys = new Set(Object.values(prevItems).map(item => item.goodsNo));
  Object.values(newItems).forEach(newItem => {
    if (!prevKeys.has(newItem.goodsNo)) resultArr.push(newItem);
  });

  return resultArr;
}
