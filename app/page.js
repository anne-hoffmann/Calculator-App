"use client"
import { useState } from 'react'

export default function Calculator() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttons = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', '+', '-',
    '*', '/', '.',
    'C', '=',
  ];

  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-gradient">
      <div className="bg-[#EEF5FF] p-6 rounded-lg shadow-lg h-[550px] w-[400px] drop-shadow-2xl">
      <h1 className="text-4xl font-bold mb-10">Calculator</h1>
        <input
          type="text"
          className="w-full mb-2 text-3xl border-2 border-[#86B6F6] focus:outline-none"
          value={expression}
          readOnly
        />
        <input
          type="text"
          className="w-full text-4xl font-bold mb-4 focus:outline-none border-2 border-[#86B6F6]"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-3 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="text-xl bg-[#86B6F6] hover:bg-[#3081D0] p-2 rounded-lg"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}