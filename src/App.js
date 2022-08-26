import logo from './logo.svg';
import './App.css';
import BasicTable from './components/BasicTable.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>PolyFees</h1>
        <p>There's tons of crypto projects.
          Which ones are people actually paying to use?</p>
        <BasicTable></BasicTable>
      </header>



    </div>
  );
}

export default App;
