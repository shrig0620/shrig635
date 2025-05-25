import React from 'react';
import { useLocation } from 'react-router-dom';

function Welcome() {
  const { state } = useLocation();
  return <h1>Welcome, {state?.username}!</h1>;
}
export default Welcome;