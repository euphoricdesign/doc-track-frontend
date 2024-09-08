import { Routes, Route, Navigate } from "react-router-dom";
import { AppointmentsRoutes } from "./routes/AppointmentsRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUserFromLocalStorage } from "./helpers/localStorage";
import { setAuthenticated, setUser } from "./redux/userSlice";
import { useLocation } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.user.authenticated);

  const location = useLocation();

  let status = authenticated ? "authenticated" : "not-authenticated";

  useEffect(() => {
    const user = loadUserFromLocalStorage();
    if (user) {
      dispatch(setUser(user));
      dispatch(setAuthenticated());
    }
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/auth/login' || location.pathname === '/auth/register') {
      // Aplicar estilo específico al body cuando se está en la ruta de login
      document.body.style.display = 'block'; 
      document.body.style.background = 'white';
    } else {
      // Restablecer estilo del body para otras rutas
      document.body.style.background = '#f3f9ff'
      document.body.style.display = 'flex';
    }
  }, [location]);


  return (
    <>
      <Routes>
        {status === "not-authenticated" ? (
          <Route path="/auth/*" element={<AuthRoutes />} />
        ) : (
          <Route path="/*" element={<AppointmentsRoutes />} />
        )}
        <Route
          path="*"
          element={
            status === "not-authenticated" ? (
              <Navigate to="/auth" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
