import React from 'react'
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../../StateProvider';

import './Header.css';


function Header() {
    const [{basket}, dispatch] = useStateValue();

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
                <div className='header-option'>
                    <span className='header-optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header-optionLineTwo'>
                        Sign In
                    </span>
                </div>
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
                
                <Link to='/checkout'>
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
