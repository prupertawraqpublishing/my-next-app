'use client'
 
// pages/index.tsx
import { useState, useEffect } from 'react';
import os from 'os';

const Home: React.FC = () => {
  const [hostname, setHostname] = useState('');

  useEffect(() => {
    // Fetch hostname when the component mounts
    const fetchHostname = async () => {
      try {
        const response = await fetch('/api/hostname');
        const data = await response.json();
        setHostname(data.hostname);
      } catch (error) {
        console.error('Error fetching hostname:', error);
      }
    };

    fetchHostname();
  }, []);

  return (
    <div>
      <h1>Hostname:</h1>
      <p>{hostname}</p>
    </div>
  );
};

export default Home;
