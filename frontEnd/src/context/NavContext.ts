import  {createContext} from 'react'
import { NavTypeInterface } from '../Types';

const NavContext=createContext<NavTypeInterface  | undefined>(undefined);
export default NavContext;
