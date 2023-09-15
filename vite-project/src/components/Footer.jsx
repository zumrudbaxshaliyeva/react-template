import Image from "./Image"
import { BiSolidEnvelope } from "react-icons/bi"
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li><img src={Image.logo2} alt="" className="logo2" /></li>
          <li>Haqqımızda</li>
          <li>Xidmətlərimiz</li>
          <li>Bizimlə əlaqə</li>

        </ul>
        <div className="footer-info">
    <BiSolidEnvelope className="foot-icon"/>
    <p>info@azfast.az</p>
</div>
</div>
<hr />
<p className="p">Azfast Customs MMC © 2023 Bütün hüquqlar qorunur.</p>
      
    </div>
  )
}

export default Footer
