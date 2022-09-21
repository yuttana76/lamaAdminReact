import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar"
import "./app.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";


function App() {

  return (
    <Router >
     <Topbar/>
     <div className="container">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/users" element={<UserList/>}/>
        <Route exact path="/user/:userId" element={<User/>}/>
      </Routes>
     </div>
    </Router>
  );
}

export default App;
