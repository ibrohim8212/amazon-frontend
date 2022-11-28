import c from './Sidebar.module.css';
import { FiArrowLeft, FiX} from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {SidebarData} from './SidebarData'
import { Link } from 'react-router-dom';

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {
  const sidebaropen = useRef();
  const [sidebarLimit, setSidebarLimit] = useState(4);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState(null);

  useEffect(() => {
    if(selectedSidebarItem){
      sidebaropen.current.scrollLeft = sidebaropen.current.offsetWidth
    }
    else{
      sidebaropen.current.scrollLeft = 0
    }
  }, [selectedSidebarItem])

  return (
    <div>    
    <div ref={sidebaropen} className={isSidebarOpen === true ? `${c.sidebar} ${c.active}` : `${c.sidebar}`}>
    <div className={c.closes}>
        <FiX className={c.close} onClick={() => {setIsSidebarOpen(false)}}/>
        </div>

<div className={c.greeting}>
    <Link className={c.greetingLink} to="/login">
<FaUserCircle /> 
<h2>Hello, Sing in</h2>
</Link>
</div>

      <div className={c.sidebarDown}>
        <div className={c.sidebarWrapper} >
          {
            SidebarData.slice(0, sidebarLimit).map(sidebarEl =>
              <div key={uuidv4()} className={c.sidebarItem} onClick={() => {setSelectedSidebarItem(sidebarEl)}}>
                <p className={c.text}>{sidebarEl.titleMain}</p>
              </div>  
            )
          }
          <div className={c.sidebarItem} onClick={() => {sidebarLimit <= 4 ? setSidebarLimit(SidebarData.length) : setSidebarLimit(4)}}>
             <p className={c.text}>{sidebarLimit === 4 ? "See more" : "See less" }</p>
          </div>
        </div>
        <div  className={c.sidebarOpen}>
<div className={c.sidebarMenu} onClick={() => {setSelectedSidebarItem(null)}}>
<FiArrowLeft/>
          <h3>Main Menu</h3>
</div>
          <div>
            <h2 className={c.bigText}>{selectedSidebarItem?.titleBig}</h2>
            {
              selectedSidebarItem?.titleMini.map(i =>
                <p className={c.miniText} key={uuidv4()}>{i}</p>  
              )
            }
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Sidebar