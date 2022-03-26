
import './App.css';
import AnsweringQuestion from './components/AnsweringQuestion/AnsweringQuestion';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div>
      <Header></Header>
      <Products></Products>
      <AnsweringQuestion></AnsweringQuestion>
    </div>
  );
}

export default App;
