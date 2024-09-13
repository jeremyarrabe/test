import React, { useState } from 'react';
import { checkIP } from '../utils/checkIP';

const CustomIP = () => {
  const [customData, setCustomData] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const saveSearch = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCustomSearch = async (e) => {
    e.preventDefault();
    const ip = e.target.customIP.value;
    if (checkIP(ip) && ip.length > 0) {
      setError('');
      setIsLoading(true);
      try {
        const response = await fetch(`https://ipinfo.io/${ip}/geo?token=f79b28fee568a2`);
        const data = await response.json();
        saveSearch(data);
        setCustomData(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    } else {
      setError('Please enter a valid IP');
    }
  };

  return (
    <>
      <h2 className="mt-4 text-2xl font-bold">Search an IP</h2>
      <form className="flex gap-4 relative" onSubmit={(e) => handleCustomSearch(e)}>
        {error && <span className="text-base absolute -bottom-6 text-red-500">{error}</span>}
        <input
          placeholder="Enter IP Address"
          className={`p-2 border-2 ${error && 'border-red-500'}`}
          name="customIP"
        />
        <button className="py-2 px-6 font-medium bg-green-400 rounded-md">Submit</button>
      </form>
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
              <th className="px-6 py-3">Postal</th>
              <th className="px-6 py-3">Timezone</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" odd:bg-gray-900  even:bg-gray-800 border-b border-gray-700">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customData.ip}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customData.hostname}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customData.city}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customData.region}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customData.country}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customData.loc}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customData.org}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customData.postal}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customData.timezone}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomIP;
