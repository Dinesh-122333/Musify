import React from 'react'
import logo from '../assets/Images/logo.png'

export default function SideNav() {
    const [sidebar, setSidebar] = useState(false);
    return (
    <> 
        <h1><img src={logo} alt="" className='w-15'/>Musify</h1>
        <div>
            Home</div>
    </>
  )
}
