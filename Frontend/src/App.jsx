import React from 'react';
import { AppRoutes } from './Routes';
import { PaginasProvider } from './services/paginas';

export function App() {
  return (
    <PaginasProvider>
      <AppRoutes />
    </PaginasProvider>
  );
}

export default App;