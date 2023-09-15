import Image from "./Image";
const About = () => {
  return (
    <div className="about">
        <div className="container">
       
      <div className="about-left">
<img src={Image.about} alt="" />
      </div>
      <div className="about-right">
<h1>Haqqımızda</h1>
<hr />
<p>Azfast Customs MMC – gömrük bəyannaməsinin tərtibatı sahəsində biliklərə malik mütəxəssislərdən ibarət komandadır. Biz qısa müddətli mənfəətə deyil, uzunmüddətli tərəfdaşlığa diqqət yetiririk, buna görə də biz həmişə müştəriləri dinləməyə hazırıq və çevik olmağı bacarırıq. Biz həmişə əməkdaşlığa açıq və işimizdə dürüsdük.</p>
      </div>
     </div>
     </div>
  );
}

export default About;
