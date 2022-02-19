import React, { useEffect, useState } from "react";
import ScrollView from './ScrollView';
import Item from './item';


const Index = () => {
  const [ data, setData ] = useState({ docs: [], page: 0, pageCount: 10});
  const [isBound, setIsBound] = useState(false);

  const getAjax = async (body) => { 
    const response = await fetch('http://127.0.0.1:5000/api/products/get_product', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body)
    }) 
    return response.json();
  }

  useEffect(() => {
    (async () => {
      const result = await getAjax({
        page: 0,
        pageCount: 10
      });

      setData(result)
    })()
  }, [])

  const handleScrollToLower = async (page) => {
    const result = await getAjax({
      page: ++page,
      pageCount: 10
    })

    setData((data) => {
      if(data.docs.length === data.totalCount) { setIsBound(true); return data }
      return {
        ...data,
        docs: result.page === 0 ? result.docs : data.docs.concat(result.docs)
      }

    })
    
  }

  return <div>
      <ScrollView
          data={data}
          item={Item}
          scrollToLower={ handleScrollToLower }
          unBound={isBound}
      >
          
      </ScrollView>
  </div>;
};

export default Index;

/**
 * data 数据结构: page: 当前页, pageCount: 页数, list: 
 *  [{
 *    img: './images/p.png',
 *    title: '张学友唱片---《吻别》',
 *    price: '￥111'
 *  }]
 * 
 *  1. 初始化请求数据
 *  2. 数据传入子组件中，子组件基于props变化而重新渲染
 *  3. 在子组件中需要配合好data数据结构 and Item预渲染结构
 *  4. 子组件监听实现底部逻辑，通知父组件做出请求的改变
 *  5. 父组件获取新的数据，传递给子组件，子组件基于props更新
 * 
 */