import { useState } from 'react';
import GpaForm from './components/GpaForm';
import ResultDisplay from './components/ResultDisplay';
import { solveGpa } from './api';

function App() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (data) => {
    try {
      const response = await solveGpa(data);
      setResult(response);
    } catch (err) {
      alert('Failed to solve GPA');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">GPA Target Solver</h1>
      <GpaForm onSubmit={handleSubmit} />
      <ResultDisplay result={result} />
    </div>
  );
}

export default App;
