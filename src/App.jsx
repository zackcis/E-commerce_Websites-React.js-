
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import Footer from './layouts/footer';
import { Nav } from './layouts/header';
import { Contact } from './pages/contact/contact';
import { Shop } from './pages/shop/shop';
import { Authentif } from './pages/autentif/authentif';
function App() {
  return (
    <MyProvider>
      <Nav/>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/Authentif' element={<Authentif/>} />
      </Routes >
      <Footer/>
    </MyProvider>

  );
}
export default App;
