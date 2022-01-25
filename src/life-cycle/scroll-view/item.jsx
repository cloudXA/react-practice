import React from 'react';


const Item = ({ key, name, url, description }) => {
  return <div>
      <div key={key}>
        {name} --- {description} 
        <img src={url} alt="图片" width={100} height={100} />
      </div>
  </div>;
};
export default Item;
