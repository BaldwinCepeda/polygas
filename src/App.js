
import './App.css';
import BasicTable from './components/BasicTable.js';
import logo from '/Users/baldwin/GitProjects/polygonGas/polygas/src/maticlogo.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1 className='Title'>PolyFees <img className="Matic-logo" src={logo}></img>
        </h1>
        <p>There's tons of crypto projects.
          Which ones are people actually paying to use?</p>
        <BasicTable className="Table"></BasicTable>

      </header>



    </div >
  );
}

export default App;
