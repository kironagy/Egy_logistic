import './Navbar.scss'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Navbar(props){
    const [menu , setMenu] = useState(false)
    const [style , setStyle] = useState(props.style)
    // For Show and hidden Menu
    function Menu(){
        if(menu === false){
            setMenu(true)
        }else{
            setMenu(false)
        }
    }
    return(
        <div className={`Navbar`}  >
           <ul style={props.style == true ? {backgroundColor:'white'} : {backgroundColor:'transparent'} }>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About us </NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/Resources'>Resources</NavLink></li>
            <li><NavLink to='/contact-us'><button>Contact us</button></NavLink></li>

          
           </ul>
           <NavLink to='/' className='logo'>
                <img src={'../img/Logo.png'}></img>
            </NavLink>
           <div className='menu'>
                <img id='menu' onClick={Menu} src='../img/menu.svg'></img>
                <div className={menu == true ? "dropMenu" : "dropMenuH"}>
                    <ul onClick={Menu}>
                        <li><NavLink  to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About us </NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li><NavLink to='/Resources'>Resources</NavLink></li>
                        <li><NavLink to='/contact-us'><button>Contact us</button></NavLink></li>
                    </ul>
                </div>
           </div>
        </div>
    )
}

export default Navbar;