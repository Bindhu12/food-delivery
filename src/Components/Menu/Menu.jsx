import React, { useState } from 'react'
import './Menu.css'
import { menu_list } from '../../Assets/assets';
import Image from 'react-bootstrap/Image';
import FoodItems from '../FoodItems/FoodItems';
function Menu() {
    const [menuItem, setMenuItem]=useState('All');
    const [isClicked,setIsClicked]=useState(false);
    return (
        <div className='mt-5' id='menu'>
            <h2>Our Menu</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perspiciatis voluptatibus dolor voluptatem unde quia rerum sed iste, impedit nobis deleniti ad enim itaque magni numquam aspernatur recusandae assumenda. Veniam.</p>
            <div className='d-flex justify-content-between gap-3 align-items-center menu-list'>
            {menu_list.map(menu => {
                return (
                    <div className='me-3' onClick={()=>setMenuItem((prev)=>prev===menu.menu_name?'All':menu.menu_name)}>
                        <Image src={menu.menu_image} roundedCircle className={`menu-img ${menuItem===menu.menu_name?'menu-click':''}`} />
                        <p className='text-center'>{menu.menu_name}</p>
                    </div>
                )
            })}
            </div>
            <hr className="mt-4 mb-5"/>
            <FoodItems menu={menuItem} />
        </div>
    )
}

export default Menu
