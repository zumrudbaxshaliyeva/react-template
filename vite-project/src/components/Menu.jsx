import Image from "./Image"
const Menu = () => {

  
  return (
    <div className="menu">
        <div className="container d-flex align-items-center">
        <div className="logo">
        <img src={Image.logo} alt="" className="logo-img" />
        <img src={Image.logo2} alt="" className="logo2-img"/>
        </div>
        <div className="navbar d-flex justify-content-center">
        <ul>
            <li>Haqqımızda</li>
            <li>Xidmətlərimiz</li>
            <li>Əlaqə</li>
            
        </ul>
        
        </div>
        
   </div>
        </div>
     

  )
}

export default Menu
