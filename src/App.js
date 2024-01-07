import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ammount, setAmmount] = useState(1)
  const [fromCur, setFromCur] = useState('EUR')
  const [toCur, setToCur] = useState('USD')

  useEffect(function(){ 
    async function fetchData(){
      let data = await fetch('https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD') 
      let res  = await data.json()
      console.log(res);
    }
    fetchData()
  }, [])

  return (
    <div className='app'>
      <label>Ammount</label>
      <input type="text" value={ammount} onChange={(e) => setAmmount(Number(e.target.value))} />
        <div className='selectBox-container'>
          <div className='selectBox'>
            <label>From</label>
              <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
              </select>
          </div>
          <div className='selectBox'>
            <label>To</label>
            <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
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
