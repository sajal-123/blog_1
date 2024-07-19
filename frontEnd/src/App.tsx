import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from './Pages/Home/HomeScreen';
import NavContextProvider from './context/NavContextProvider';
import ArticleDetail from './Pages/articleDetail/ArticleDetail';
import RegisterPage from './Pages/register/RegisterPage';
import ProfilePage from './Pages/Profile/ProfilePage';
import { Toaster } from 'sonner';
import LoginPage from './Pages/Login/LoginPage';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import ResetPassword from './Pages/ForgetPassword/ResetPassword';
// Define routes


function App() {
  return (
    <NavContextProvider>
      <div className="app font-openSans">
        <Toaster position="top-center" richColors />
        <Routes>
          <Route path="/" element={<HomeScreen />} /> // Home route
          <Route path="/blog/:id" element={<ArticleDetail />} /> // Blog detail route
          <Route path="/register" element={<RegisterPage />} /> // Register route
          <Route path="/profile/:name" element={<ProfilePage />} /> // profile route
          <Route path="/login" element={<LoginPage />} /> // Login route
          <Route path="/forget-password" element={<ForgetPassword />} /> // forget route
          <Route path="/resetPassword" element={<ResetPassword />} /> // reset route
        </Routes>
      </div>
    </NavContextProvider>
  );
}

export default App;
