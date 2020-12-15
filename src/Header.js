import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo' src='/images/white-amazon.png' alt=""/> 
            </Link>
           <div className="header_search">
                <input className='header_searchInput' type="text"/>
                <SearchIcon className='header_searchIcon' />
           </div>
           <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionone">Hello {!user? 'Guest' : user.email} </span>
                        <span className="header_optiontwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className="header_option">
                        <span className="header_optionone">Returns</span>
                        <span className="header_optiontwo">& Orders</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionone">Your</span>
                    <span className="header_optiontwo">Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon  />
                        <span className='header_optiontwo header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>
           </div>
        </div>
    )
}

export default Header
//Every problem in the world happens