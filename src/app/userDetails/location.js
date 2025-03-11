'use client';
import Script from "next/script";

const Location = () => {
  return (
    <div>
      <h1>User Location:</h1>
      <Script
        src='/location.js'
        onLoad={() => console.log('Script loaded')}
      />
    </div>
  );
};

export default Location;