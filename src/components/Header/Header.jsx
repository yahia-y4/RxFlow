
import React from 'react';
import './Header.css'

import TopIcon from '../TopIcon/TopIcon';
import { Link ,useLocation} from 'react-router-dom';
export default function Header(){
    const location = useLocation()
    return(
        <div className='header_div'>
            <div className='top_icon_div_flex' >
                
                {/* الصفحة العامة */}
                <Link to="/" className="top_icon_link">
                    <TopIcon icon="&#xf108;" class_f="fas" class_s={location.pathname === "/" ? "top_icon_div_selected" : ""}></TopIcon> 
                </Link>

                {/*اصفحة التخزين*/}
                <Link to="/storage" className="top_icon_link">
                    <TopIcon icon="&#xf019;" class_f="fa" class_s={location.pathname === "/storage" ? "top_icon_div_selected" : ""}></TopIcon>
                </Link>

                {/* البيع */}
                <Link to="/sale" className="top_icon_link">
                    <TopIcon icon="&#xf093;" class_f="fas" class_s={location.pathname === "/sale" ? "top_icon_div_selected" : ""}></TopIcon>
                </Link>

                {/* الاصناف */}
                <Link to="/categories" className="top_icon_link">
                    <TopIcon icon="&#xf84c;" class_f="fas" class_s={location.pathname === "/categories" ? "top_icon_div_selected" : ""}></TopIcon>  
                </Link>

                {/* المستودعات */}
                <Link to="/warehouses" className="top_icon_link">
                    <TopIcon icon="&#xf234;" class_f="fas" class_s={location.pathname === "/warehouses" ? "top_icon_div_selected" : ""}></TopIcon>
                </Link>

                {/* الزبائن */}
                <Link to="/customers" className="top_icon_link">
                    <TopIcon icon="&#xf503;" class_f="fas" class_s={location.pathname === "/customers" ? "top_icon_div_selected" : ""}></TopIcon>      
                </Link>

               
            </div>
            
        </div>
    )
}