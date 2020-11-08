import React from 'react'
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../../StateProvider';
import { auth } from '../../firebase';

import './Header.css';


function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
           <Link to="/">
           <img className='header-logo' src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=''
           />
           </Link>

            <div className='header-search'>
               <input className='header-searchInput' type='text' /> 
               <SearchIcon className='header-searchIcon' />  
            </div>

            <div className='header-nav'>
                <Link to={!user && "/login"} className='link' >
                <div onClick={handleAuthentication} className='header-option'>
                    <span className='header-optionLineOne'>
                    Hello, {!user?"Guest": user.email}
                    </span>
                    <span className='header-optionLineTwo'>
                        {user ? "Sign out" : "Sign In"}
                    </span>                    
                </div>
                </Link>
                <div className='header-option'>
                <span className='header-optionLineOne'>
                        Returns
                    </span>
                    <span className='header-optionLineTwo'>
                       & Orders
                    </span>
                </div>
                <div className='header-option'>
                <span className='header-optionLineOne'>
                        Your
                    </span>
                    <span className='header-optionLineTwo'>
                        Prime
                    </span>
                </div>
                
                <Link to='/checkout' className='link'>
                    <div className='header-optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header-optionLineTwo header-basketCount'>{basket?.length}
                    </span>
                    </div>
                </Link>

            </div>


        </div>
    )
}

export default Header
