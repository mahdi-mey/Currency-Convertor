import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ammount, setAmmount] = useState(1)
  const [fromCur, setFromCur] = useState('EUR')
  const [toCur, setToCur] = useState('USD')
  const [resault, setResault] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function(){ 
    async function fetchData(){
      setIsLoading(true)
      let res = await fetch(`https://api.frankfurter.app/latest?amount=${ammount}&from=${fromCur}&to=${toCur}`) 
      let data  = await res.json()
      setResault(data.rates[toCur])
      setIsLoading(false)
    }
    fetchData()
  }, [ammount, fromCur, toCur])

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
      {/* <p className='resault'>{resault} {toCur}</p> */}
    </div>
  );
}

export default App;