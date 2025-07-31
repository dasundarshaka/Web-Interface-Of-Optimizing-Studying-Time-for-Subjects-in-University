import { useState } from 'react';

const GpaForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    totalCredit: '',
    targetGpa: '',
    currentGpa: '',
    currentTotalCredit: '',
    semesterCredit: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          type="number"
          step="any"
          value={form[key]}
          onChange={handleChange}
          placeholder={key.replace(/([A-Z])/g, ' $1')}
          className="border p-2 rounded"
          required
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Calculate</button>
    </form>
  );
};

export default GpaForm;
