import './Description.css'
import first from '../assets/31.svg'
import second from '../assets/32.svg'
import table from '../assets/table.svg'
import {Link} from 'react-router-dom';

const Description =()=>{
return(
<div>
    <div className='desccont'>
<div className='left1'>
   <div className='bir'><img src={first}/></div>
    <div className='iki'><img src={second}/></div>
</div>

<div className='right'>
    <div className='contincont'>
<p className='badimcan'>Canadian Beaver</p>
<p className='cont2'>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
<p className='cont2'>In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.</p>
<p className='cont2'>In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription "5 cents" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.</p>

<img className='table' src={table}/>
<div className='link'><Link to="/list">Back to the list</Link></div>
</div>
</div>

</div>
</div>
);
};
export default Description