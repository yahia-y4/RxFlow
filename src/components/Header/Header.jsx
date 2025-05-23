
import React from 'react';
import './Header.css'

import TopIcon from '../TopIcon/TopIcon';

export default function Header(){
    return(
        <div className='header_div'>
            <div className='top_icon_div_flex' >
                
                {/* الصفحة العامة */}
                <TopIcon icon="&#xf108;" class_f="fas"></TopIcon> 

                {/*اصفحة التخزين*/}
                <TopIcon icon="&#xf019;" class_f="fa"></TopIcon>

                {/* البيع */}
                <TopIcon icon="&#xf093;" class_f="fas"></TopIcon>

                {/* الاصناف */}
                <TopIcon icon="&#xf84c;" class_f="fas"></TopIcon>

                {/* المستودعات */}
                <TopIcon icon="&#xf234;" class_f="fas"></TopIcon>

                {/* الزبائن */}
                <TopIcon icon="&#xf503;" class_f="fas"></TopIcon>

               
            </div>
            
        </div>
    )
}