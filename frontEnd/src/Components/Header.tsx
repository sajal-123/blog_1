import React, {  useState ,useContext } from 'react';
import { react } from '../constants/index';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import NavContext from '../context/NavContext'
// import './'

interface NavItems {
    title: string;
    link: string;
    type: string,
    items?: string[]
}

const navbarConfigInfo: NavItems[] = [
    { title: 'Home', link: '/', type: 'link' },
    { title: 'Article', link: '/article', type: 'link' },
    { title: 'Pages', link: '/pages', type: 'DropDown', items: ['About Us', 'Contact Us'] },
    { title: 'Pricing', link: '/pricing', type: 'link' },
    { title: 'Faq', link: '/faq', type: 'link' },
];
const NavLinks: React.FC<NavItems & { index: number }> = ({ title, link, type, items, index }) => {
    return type === 'link' ? (
        <li key={index} className="relative group">
            <a href={link} className="font-semibold text-lg px-4 py-2 relative overflow-hidden">
                {title}
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </a>
        </li>
    ) : (
        <li className="relative group" key={index}>
            <a className="font-semibold text-lg px-4 py-2 flex items-center" href='/'>
                {title}
                <MdKeyboardArrowDown className="ml-1 group-hover:rotate-180 transition-all duration-400 " />
            </a>
            {items && <div className='hidden transition-all duration-400 pt-4 absolute md:bottom-[50%] md:right-0 bottom-full max-md:left-full transform translate-y-full group-hover:block w-max'>
                <ul className='flex flex-col shadow-lg overflow-hidden rounded-lg'>{
                    items.map((page) => {
                        return (
                            <a href="/" className='hover:bg-dark-hard hover:text-white px-4 py-2 text-gray-700 lg:text-dark-soft'>{page}</a>
                        )
                    })}</ul>
            </div>}
        </li>
    );
};

const Header: React.FC = () => {

    const {isNavbarVisible,setIsNavbarVisible}=useContext(NavContext)

    const handleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      // Trigger animation on component mount
      setAnimate(true);
    }, []);

    return (
        <header className="flex items-center justify-between mx-auto px-5 py-2 relative">
            <div>
                <img src={react} alt="React Logo" />
            </div>
            <div className='md:hidden z-40'>
                {!isNavbarVisible ? (
                    <CiMenuFries className="font-bold w-6 h-6 cursor-pointer" onClick={handleNavbar} />
                ) : (
                    <IoMdClose className="font-bold w-6 h-6 cursor-pointer" onClick={handleNavbar} />
                )}
            </div>
            <div className={`fixed md:static ${isNavbarVisible ? 'right-0' : '-right-full'} z-auto top-0 bottom-0 w-full md:w-auto flex flex-col md:flex-row justify-center items-center gap-6 transition-all duration-300 ease-in-out bg-slate-400 md:bg-white`}>
                <ul className="flex flex-col md:flex-row justify-center items-center gap-6">
                    {navbarConfigInfo.map((navItem, i) => (
                        <NavLinks key={i} {...navItem} index={i} />
                    ))}
                </ul>
                <button className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:bg-white group border-2 border-blue-400">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-blue-600 to-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white font-bold">Sign in</span>
                </button>
            </div>
        </header>
    );
};

export default Header;