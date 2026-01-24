import Home from './pages/Home';
import Menu from './pages/Menu';
import Catering from './pages/Catering';
import Nutrition from './pages/Nutrition';
import About from './pages/About';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Menu": Menu,
    "Catering": Catering,
    "Nutrition": Nutrition,
    "About": About,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};