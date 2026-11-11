import { Navigate } from 'react-router-dom';

import { estaLogado } from '../../services/api';

export default function RotaProtegida({ children }) {
  if (!estaLogado()) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
