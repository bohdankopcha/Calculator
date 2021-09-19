import React from 'react';
import './App.css';
import ClearButton from './Calc/ClearButton';
import FuncButton from './Calc/FuncButton';
import NumberLine from './Calc/NumberLine';
import NumButton from './Calc/NumButton';
import EqualsButton from './Calc/EqualsButton';
import HistoryList from './History/HistoryList';

function App() {

  const [numbers,setNumbers] = React.useState([]);
  const [equasion,setEquason]= React.useState([]);
  const [history,setHistory] = React.useState([]);

  const addToHistory = (value) => {
    setHistory(history.concat(value));
  }

  const clearHistory = () => { setHistory([]) }

  const handleNumberLine = (num) => {
    setNumbers(numbers + num);
  }

  const clearNumberLine = () => { setNumbers(''); setEquason('');}

  const handleActionButton = (value) => {
    let num = numbers ? numbers : 0
    setEquason(equasion + num + value);
    setNumbers('')
  }

  const handleEqualsButton = () => {
    let num = numbers ? numbers : 0;
    //eslint-disable-next-line
    let result = parseInt(eval(equasion + num))
    addToHistory(equasion + num + " = " + result)
    setEquason('');
    setNumbers(result)
  }

  const numList= [1,2,3,4,5,6,7,8,9,0]
  const actList = ['+','-','*','/']

  return (
    <div className='wrapper'>
      <div className='calc'>
        <div className='num-lines'>
          <NumberLine numbers={numbers}/>
          <p>{equasion?equasion:'Your equasion will be here'}</p>
        </div>
        <div style={{display:'flex', justifyContent: 'space-evenly', alignItems:'center'}}>
          <div className='numbers'>
            {numList.map(num => {
              return <NumButton number={num} onClick={handleNumberLine} key={num}/>
            })}
          </div>
          <div className='func-buttons'>
            {actList.map(act=>{ return <FuncButton action={act} onClick={handleActionButton} key={'action'+act}/> })}
            <ClearButton onClick={clearNumberLine}/>
            <EqualsButton onClick={handleEqualsButton}/>
          </div>
        </div>
      </div>
        <HistoryList items={history} clearHistory={clearHistory}/>
    </div>
    );
}

export default App;
