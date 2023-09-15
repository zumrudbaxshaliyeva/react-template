import Image from "./Image";
const Mission = () => {
  return (
    <div className='mission'>
      <div className='container'>
       
            <div className='mission-left'>
<h1>Missiyamız</h1>
<hr />
<p>Azərbaycanda gömrük və logistika xidmətləri sahəsində ən etibarlı və məhsuliyyətli cəmiyyət olmaq.</p>
            </div>
            <div className=' mission-right'>
<img src={Image.mission} alt="" />
            </div>
        </div>
      </div>
   
  );
}

export default Mission;
