import React from 'react';


const Item = ({ ele }) => {
  const { name, description, url } = ele;
  return <div>
      <div >
        {name} --- {description} 
        <img src={url} alt="图片" width={100} height={100} />
      </div>
  </div>;
};
export default Item;
