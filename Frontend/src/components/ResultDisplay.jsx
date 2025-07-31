const ResultDisplay = ({ result }) => {
    if (!result) return null;
  
    return (
      <div className="max-w-2xl mx-auto mt-10 p-4 border rounded shadow">
        <h2 className="text-xl font-bold mb-4">Optimal Subject Distribution</h2>
        {result.solution.map((item, idx) => (
          <p key={idx}>{item.subject}: {item.value.toFixed(4)}</p>
        ))}
        <hr className="my-4" />
        <p><strong>Total Weighted GPA:</strong> {result.totalWeightedGpa.toFixed(4)}</p>
        <p><strong>GPA from Solution:</strong> {result.calculatedGpa.toFixed(4)}</p>
        <p><strong>Required GPA:</strong> {result.requiredGpa.toFixed(4)}</p>
        <p><strong>Difference:</strong> {result.difference.toFixed(4)}</p>
      </div>
    );
  };
  
  export default ResultDisplay;
  