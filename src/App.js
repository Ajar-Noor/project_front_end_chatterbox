import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Loader from "./component/Uploads/Loader";
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoutes from "./layout/dashboard/PrivateRoutes";
const Register = lazy(() => import("./pages/Auth/Register"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Main = lazy(() => import("./layout/dashboard"));
const Chats = lazy(() => import("./layout/dashboard/Chats"));
const Conversation = lazy(() => import("./component/Conversation"));
const Group = lazy(() => import("./component/groupChat/Group"));
const CallPage = lazy(() => import("./component/calls/CallPage"));
const Profile = lazy(() => import("./component/profile/Profile"));
const Page404 = lazy(() => import("./pages/Dashboard/page404"));

// 👉 App Component
const App = () => {
  return (
    <>
      <div className="font-[nunito]">
        <AuthContextProvider>
          {/* Routes Component */}
          <Routes>
            {/* public Routes */}
            <Route
              path="/auth/register"
              element={
                <Suspense fallback={<Loader />}>
                  <Register />
                </Suspense>
              }
            />
            <Route
              path="/auth/login"
              element={
                <Suspense fallback={<Loader />}>
                  <Login />
                </Suspense>
              }
            />

            {/* protected Routes */}
            <Route element={<PrivateRoutes />}>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loader />}>
                    <Main />
                  </Suspense>
                }
              />
              <Route
                path="/chatapp/chats"
                element={
                  <Suspense fallback={<Loader />}>
                    <Chats />
                  </Suspense>
                }
              />
              <Route
                path="/chatapp/group"
                element={
                  <Suspense fallback={<Loader />}>
                    <Group />
                  </Suspense>
                }
              />
              <Route
                path="/chatapp/conversation"
                element={
                  <Suspense fallback={<Loader />}>
                    <Conversation />
                  </Suspense>
                }
              />
              <Route
                path="/chatapp/calls"
                element={
                  <Suspense fallback={<Loader />}>
                    <CallPage />
                  </Suspense>
                }
              />
              <Route
                path="/chatapp/profile"
                element={
                  <Suspense fallback={<Loader />}>
                    <Profile />
                  </Suspense>
                }
              />
            </Route>

            {/* 404 Error */}
            <Route
              path="*"
              element={
                <Suspense fallback={<Loader />}>
                  <Page404 />
                </Suspense>
              }
            />
          </Routes>

          <ToastContainer position="top-center" autoClose={5000} closeOnClick />
        </AuthContextProvider>
      </div>
    </>
  );
};

export default App;
