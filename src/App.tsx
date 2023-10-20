import { useState } from 'react'
import Bingo from "./components/block";
import './App.css'

const compareRandom = (a: number, b: number): number => {
  return a - b;
};

const generateNumbers = (): number[] => {
  let arr: number[] = [];
  while (true) {
    let a = Math.round(4.5 + Math.random() * 32);
    let b = Math.round(4.5 + Math.random() * 32);
    let c = Math.round(4.5 + Math.random() * 32);
    let d = Math.round(4.5 + Math.random() * 32);
    let e = Math.round(4.5 + Math.random() * 32);

    if (a !== b && b !== c && c !== d && d !== a && b !== d && a !== c && e !== c && e !== a && e !== d) {
      arr.push(a, b, c, d, e);
      arr.sort(compareRandom);
      return arr;
    }
  }
};

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>(generateNumbers);

  const changeNumber = (): void => {
    setNumbers(generateNumbers());
  };

  return (
      <div className="App">
        <div className="block">
          <h1 className="h1">Bingo 5 of 36</h1>
          <div>
            {numbers.map((num, key) => (
                <Bingo key={key} num={num} />
            ))}
          </div>
          <button className="btn" onClick={changeNumber}>New Numbers</button>
        </div>
      </div>
  );
};

export default App
