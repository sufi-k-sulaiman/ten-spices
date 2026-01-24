import About from './pages/About';
import Catering from './pages/Catering';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Nutrition from './pages/Nutrition';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Catering": Catering,
    "Contact": Contact,
    "Home": Home,
    "Menu": Menu,
    "Nutrition": Nutrition,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};