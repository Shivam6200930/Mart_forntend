import "./App.css";
import Homepage from "./COMPONENTS/homepage/homepage";
import Login from "./COMPONENTS/login/login";
import Register from "./COMPONENTS/register/register";
import PageNotFound from "./COMPONENTS/pageNotFound/pageNotFound";
import Layout from "./COMPONENTS/Layout/Layout";
import ChangeUserPassword from "./COMPONENTS/changeUserPassword/ChangeUserPassword";
import Edit from "./COMPONENTS/Edit/Edit";
import Profile from "./COMPONENTS/Profile/Profile";
import Forget_Password from "./COMPONENTS/FrogettenPassword/Forget_Password";
import Admin from "./COMPONENTS/Admin/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />}></Route>
          </Route>
      
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/changepassword" element={<ChangeUserPassword />}></Route>
          <Route path="/forgetpassword" element={<Forget_Password />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
