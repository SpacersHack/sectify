'use client';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const OtpComponent = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (event) => {
    setOtp(event);
  };
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={5}
      containerStyle={'justify-between my-14'}
      inputStyle={
        'border rounded-md border-gray-400 p-3 px-8 mx-1 text-black bg-white'
      }
      renderSeparator={<span></span>}
      renderInput={(props) => {
        console.log(props);
        return <input {...props} style={{ minWidth: '0.8rem' }} />;
      }}
    />
  );
};

export default OtpComponent;