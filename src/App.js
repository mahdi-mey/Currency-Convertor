import './App.css';

function App() {
  return (
    <div className='app'>
      <label>Ammount</label>
      <input type="text" value={12000} />
        <div className='selectBox-container'>
          <div className='selectBox'>
            <label>From</label>
              <select>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
              </select>
          </div>
          <div className='selectBox'>
            <label>To</label>
            <select>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
              </select>
          </div>
        </div>
      <p className='resault'>61300</p>
    </div>
  );
}

export default App;
