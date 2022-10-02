import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//pages
import Home from "./pages/Home"
import Users from "./pages/Users"
import Contact from "./pages/Contact"
import Menu from "./components/Menu"
import UserDetail from './pages/UserDetail';




function App() {
  return (
      <BrowserRouter>
        <Menu />
        <Routes>
            <Route index element={<Home />} />
            <Route path='users' element={<Users />}/>
            <Route path='users/:id' element={<UserDetail />}/>
            <Route path='contact' element={<Contact />}/>

        </Routes>
      </BrowserRouter>
  );
}
// index == path="/"
export default App;
