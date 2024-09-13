import React, { useEffect, useState } from 'react';

const History = () => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserHistory = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/getHistory', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: 1 }),
        });
        const data = await response.json();
        setHistory(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    getUserHistory();
  }, []);
  return (
    <>
      <h2 className="mt-4 text-2xl font-bold">History</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-400 h-[150px] ">
          <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
            <tr>
              <th className="px-6 py-3">IP</th>
              <th className="px-6 py-3">Hostname</th>
              <th className="px-6 py-3">City</th>
              <th className="px-6 py-3">Region</th>
              <th className="px-6 py-3">Country</th>
              <th className="px-6 py-3">LOC</th>
              <th className="px-6 py-3">Org</th>
              <th className="px-6 py-3">PostalL</th>
              <th className="px-6 py-3">Timezone</th>
            </tr>
          </thead>
          <tbody>
            {history.map((data, key) => {
              return (
                <tr
                  key={key}
                  className=" odd:bg-gray-900  even:bg-gray-800 border-b border-gray-700"
                >
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.ip}
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.city}
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.region}
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.country}
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.loc}
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.hostname}
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.org}
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.postal}
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.timezone}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default History;
