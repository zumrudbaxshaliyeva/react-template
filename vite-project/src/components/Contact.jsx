import Image from "./Image";
import { BiSolidEnvelope} from "react-icons/bi";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
      <div className="contact-left">
<h1>Bizimlə əlaqə</h1>
<hr />
<p>Göstərilən xidmətlər haqqında sualınız var?<br /> Bizimlə əlaqə saxlayın</p>
<div className="contact-info">
    <BiSolidEnvelope className="contact-icon"/>
    <p>info@azfast.az</p>
</div>
      </div>
      <div className="contact-right">
         <img src={Image.contact} alt="" />
      </div>
      </div>
    </div>
  );
}

export default Contact;
