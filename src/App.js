import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, ThemeSettings } from "../src/components";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import { auth } from "./firebase";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ProtectedRoute({ element, authUser }) {
  return authUser ? element : <Navigate to='/' />;
}

function App() {
  const [authUser, setAuthUser] = useState(null);
  const {
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <ToastContainer />
        <div className='flex relative dark:bg-main-dark-bg'>
          {authUser && (
            <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
              <TooltipComponent content='Settings' position='Top'>
                <button
                  type='button'
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: "50%" }}
                  className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray'
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
          )}
          {activeMenu && authUser ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu && authUser ? "md:ml-72" : "flex-2"
            }`}
          >
            {authUser && (
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
                <Navbar authUser={authUser} />
              </div>
            )}
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Public Routes */}
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                {/* Protected Routes */}
                <Route
                  path='/ecommerce'
                  element={
                    <ProtectedRoute
                      authUser={authUser}
                      element={<Ecommerce />}
                    />
                  }
                />
                <Route
                  path='/orders'
                  element={
                    <ProtectedRoute authUser={authUser} element={<Orders />} />
                  }
                />
                <Route
                  path='/employees'
                  element={
                    <ProtectedRoute
                      authUser={authUser}
                      element={<Employees />}
                    />
                  }
                />
                <Route
                  path='/customers'
                  element={
                    <ProtectedRoute
                      authUser={authUser}
                      element={<Customers />}
                    />
                  }
                />
                <Route
                  path='/kanban'
                  element={
                    <ProtectedRoute authUser={authUser} element={<Kanban />} />
                  }
                />
                <Route
                  path='/editor'
                  element={
                    <ProtectedRoute authUser={authUser} element={<Editor />} />
                  }
                />
                <Route
                  path='/calendar'
                  element={
                    <ProtectedRoute
                      authUser={authUser}
                      element={<Calendar />}
                    />
                  }
                />
                <Route
                  path='/color-picker'
                  element={
                    <ProtectedRoute
                      authUser={authUser}
                      element={<ColorPicker />}
                    />
                  }
                />
                <Route
                  path='/line'
                  element={
                    <ProtectedRoute authUser={authUser} element={<Line />} />
                  }
                />
                <Route
                  path='/area'
                  element={
                    <ProtectedRoute authUser={authUser} element={<Area />} />
                  }
                />
                <Route
                  path='/bar'
                  element={
                    <ProtectedRoute authUser={authUser} element={<Bar />} />
                  }
                />
                <Route
                  path='/pie'
                  element={
                    <ProtectedRoute authUser={authUser} element={<Pie />} />
                  }
                />
                <Route
                  path='/financial'
                  element={
                    <ProtectedRoute
                      authUser={authUser}
                      element={<Financial />}
                    />
                  }
                />
                <Route
                  path='/color-mapping'
                  element={
                    <ProtectedRoute
                      authUser={authUser}
                      element={<ColorMapping />}
                    />
                  }
                />
                <Route
                  path='/pyramid'
                  element={
                    <ProtectedRoute authUser={authUser} element={<Pyramid />} />
                  }
                />
                <Route
                  path='/stacked'
                  element={
                    <ProtectedRoute authUser={authUser} element={<Stacked />} />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
