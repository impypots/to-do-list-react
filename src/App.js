import './App.css';
import TopMenu from './TopMenu';
import listArray from './data'

function App() {

  return (
    <div className="App">
      <TopMenu />
     {listArray[0]}
    </div>
  );
}

export default App;
