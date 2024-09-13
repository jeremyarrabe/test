import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import CurrentIP from '../components/CurrentIP';
import History from '../components/History';
import { redirect } from 'react-router-dom';
import CustomIP from '../components/CustomIP';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="w-[100%] md:w-[60%] mx-auto h-auto flex flex-col gap-10 mt-20">
        <CurrentIP />
        <CustomIP />
        <History />
      </div>
    </div>
  );
};

export default HomePage;
