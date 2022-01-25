import React from "react";
import Simulate from './simulate/index';
import ScrollView from './scroll-view/index';
const Index = () => {
  return <div>
      <div style={{ border: '1px solid green'}}>
         simulate: <Simulate /> 
      </div>
      <br />
      <div style={{ border: '1px solid pink'}}>
          <ScrollView></ScrollView>

      </div>

  </div>;
};

export default Index;
