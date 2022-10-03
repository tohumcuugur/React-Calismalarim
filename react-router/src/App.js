import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//pages
import Home from "./pages/Dashboard/Home"
import Users from "./pages/Dashboard/Users"
import Contact from "./pages/Dashboard/Contact"
// import Menu from "./components/Menu"
import UserDetail from './pages/Dashboard/UserDetail';
import Login from './pages/Auth/Login';
import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';
import Register from './pages/Auth/Register';
import Error404 from './pages/Error404';




function App() {
  return (
      <BrowserRouter>
        {/* <Menu /> */}
        <Routes>
            <Route path='/' element={<DashboardLayout />}>
              <Route index element={<Home />} />
              <Route path='users' element={<Users />}/>
              <Route path='users/:id' element={<UserDetail />}/>
              <Route path='contact' element={<Contact />}/>
            </Route>
            
            <Route path="auth" element={<AuthLayout />}>
              {/* <Route path='login' element={<Login />} /> */}
              <Route index element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>

            <Route path='*' element={<Error404 />} />

        </Routes>
      </BrowserRouter>
  );
}

// Girilen path kısmı url kısmında ne olarak gösterileceğini söyler. 

// <Route path="auth" element={<AuthLayout />}>
//     <Route index element={<Login /s>} />
// </Route> bu kısımda index yazan kısma eğer path girseydik path="login" gibi url kısmında path/login şeklinde giriş yapmamız gerekirdi. Bu halde  ise direk url kısmında /auth olarak yazarak ulaşabiliriz.

//Menu kısmını dashboard layout'a taşıdık.
// index == path="/"

// Route'lar switch case mantığı ile çalışır url'den istek atıldığında route'ları yukarıdan aşağı kontrol eder ve path eşleştiğinde işlemi gerçekleştirir.

//<Route path='*' element={<Error404 />} /> path="*" şeklinde tanımlama yaparak yanlış girilen bütün url'leri kapsayarak işlem yaptırabiliriz yani http://localhost:3000/auth/registerr gibi sonra 2"r" olduğu için otomatik * path'ine düşer ve sayfa bulunamadı yazısı çıkar
export default App;
