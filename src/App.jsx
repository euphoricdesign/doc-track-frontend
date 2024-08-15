import { Routes, Route, Navigate } from "react-router-dom";
import { AppointmentsRoutes } from "./routes/AppointmentsRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUserFromLocalStorage } from "./helpers/localStorage";
import { setAuthenticated, setUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.user.authenticated);

  let status = authenticated ? "authenticated" : "not-authenticated";

  useEffect(() => {
    const user = loadUserFromLocalStorage();
    if (user) {
      dispatch(setUser(user));
      dispatch(setAuthenticated());
    }
  }, [dispatch]);

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
