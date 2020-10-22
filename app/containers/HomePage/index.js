/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Dashboard from '../../components/Dashboard';

export default function HomePage() {
  return (
    <div className="main">
      <Dashboard />
    </div>
  );
}
