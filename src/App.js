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
import MovieList from './context/movieContext';
import ReduxPractice from './redux-practice/index';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => {
    console.log(state, 'state.counter')
    return state.counter
  })
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

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
      {/* <RefTheory /> */}
      {/* <MovieList /> */}
      <ReduxPractice />
      
      {/* <h1>count:{counter}</h1>
      <button onClick={() => dispatch(increase(5))}>++</button>
      <button onClick={() => dispatch(decrease())}>--</button>
      {
        isLogged ? <h3> not see</h3> : ''
      } */}
    </div>
  );
}

export default App;
