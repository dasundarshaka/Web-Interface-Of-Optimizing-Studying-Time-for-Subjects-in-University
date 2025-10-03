import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a29bfe', '#fd79a8', '#55efc4'];

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  let data = Array.isArray(result.solution)
    ? result.solution.map((item) => ({
        name: item.subject,
        value: item.value
      }))
    : [];

  // Sort by value (descending)
  data.sort((a, b) => b.value - a.value);

  // Calculate total for percentage labels
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Studying Time Periods for Subjects in Hours</h2>

      {/* PIE CHART */}
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label={({ name, value }) =>
                `${name}: ${(value / total * 100).toFixed(1)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) =>
                [`${value.toFixed(4)} (${(value / total * 100).toFixed(1)}%)`, name]
              }
            />
            
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p>Unable to acheive this target GPA.</p>
      )}

<div className='mt-5 mb-5'>
      {Array.isArray(result.solution) ? (
        result.solution.map((item, idx) => (
          <p key={idx}>
            {item.subject}: {item.value.toFixed(4)}
          </p>
        ))
      ) : (
        <p>So,No studying time periods available</p>
      )}

      </div>

      <hr className="my-4" />

      {typeof result.totalWeightedGpa === 'number' && (
        <>
          <p><strong>Total Weighted GPA:</strong> {result.totalWeightedGpa.toFixed(4)}</p>
          <p><strong>GPA from Solution:</strong> {result.calculatedGpa.toFixed(4)}</p>
          
        </>
      )}

      {result.error && (
        <p className="text-red-500 font-semibold mt-4">⚠️ {result.error}</p>
      )}
    </div>
  );
};

export default ResultDisplay;
