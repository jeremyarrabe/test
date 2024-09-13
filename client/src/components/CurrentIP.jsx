import React, { useEffect, useState } from 'react';

const CurrentIP = () => {
  const [userGeoData, setUserGeoData] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getUserGeoLocation = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('https://ipinfo.io/geo?token=f79b28fee568a2');
        const data = await response.json();
        setUserGeoData(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    getUserGeoLocation();
  }, []);
  return (
    <>
      <h2 className="mt-4 text-2xl font-bold">Current User IP</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {isLoading ? (
          <p className="text-lg text-black text-center py-5">Loading Table...</p>
        ) : (
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
              <tr className=" odd:bg-gray-900  even:bg-gray-800 border-b border-gray-700">
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {userGeoData.ip}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {userGeoData.hostname}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {userGeoData.city}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {userGeoData.region}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {userGeoData.country}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {userGeoData.loc}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {userGeoData.org}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {userGeoData.postal}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {userGeoData.timezone}
                </th>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default CurrentIP;
