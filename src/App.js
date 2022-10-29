
import './App.css';
import BasicTable from './BasicTable.js';
import Table from './Table.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1 className='Title'>PolyFees
        </h1>
        <p>There's tons of crypto projects.
          Which ones are people actually paying to use?</p>
        <Table className="Table"></Table>

      </header>



    </div >
  );
}

export default App;
