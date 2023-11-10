import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
const Navbar = ()=>{
        const activestyle = 'underline underline-offset-4'
        const{count}=useContext(ShoppingCartContext)  
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/' >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    className={({isActive})=> isActive ? activestyle:undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    className={({isActive})=> isActive ? activestyle:undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     to='/electronics'
                     className={({isActive})=> isActive ? activestyle:undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/funitures'
                    className={({isActive})=> isActive ? activestyle:undefined}>
                        Funitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    className={({isActive})=> isActive ? activestyle:undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    className={({isActive})=> isActive ? activestyle:undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li>
                    kendo@platzi.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({isActive})=> isActive ? activestyle:undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({isActive})=> isActive ? activestyle:undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in' 
                    className={({isActive})=> isActive ? activestyle:undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex flex-row gap-1 items-center
                ">
                    <ShoppingCartIcon className="h-6 w-6 text-black">
                        
                    </ShoppingCartIcon>
                <div>
                     {count}
                </div>
                    
                </li>
            </ul>
        </nav>
    )
}
export default Navbar
