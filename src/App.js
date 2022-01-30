import logo from './logo.svg';
import JsxPractice from './jsx/JsxPractice';
import Communicate from './communicate/parent.jsx';
import FormContainer from './form-item/index';
import SimulateLifeCycle from './life-cycle/index';
import RefPractice from './ref-practice/Ref/index';
import ForwardRef from './ref-practice/ForwardRef/GrandFather';
import MergeForwardRef from './ref-practice/mergeForwardRef/Home';
import HocRef from './ref-practice/HocRef';
import RefCommunicate from './ref-practice/refCommunicate/Father';
import RefFather from './ref-practice/refCommunicate2/Father';
import RefTheory from './ref-practice/refTheory';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <JsxPractice />
      <Communicate /> */}
      {/* <FormContainer /> */}
      {/* <SimulateLifeCycle /> */}
      {/* <RefPractice /> */}
      {/* <ForwardRef /> */}
      {/* <MergeForwardRef /> */}
      {/* <HocRef /> */}
      {/* <RefCommunicate /> */}
      {/* <RefFather /> */}
      <RefTheory />
    </div>
  );
}

export default App;
