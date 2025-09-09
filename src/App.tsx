import React from 'react';
import { EconTutorProvider } from './contexts/BizTutorContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <ThemeProvider>
      <EconTutorProvider>
        <Layout />
      </EconTutorProvider>
    </ThemeProvider>
  );
}

export default App;