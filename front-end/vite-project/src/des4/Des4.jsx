
import j1 from '../assets/k1.png'
import j2 from '../assets/k2.png'
import table from '../assets/table.svg'
import {Link} from 'react-router-dom';

const Des4 =()=>{
return(
<div>
    <div className='desccont'>
<div className='left1l'>
   <div className='birlp'><img src={j1} className='impo'/></div>
    <div className='ikilp'><img src={j2} className='impo'/></div>
</div>

<div className='right'>
    <div className='contincont'>
<p className='badimcan'>Kennedy</p>
<p className='cont2'>Unique coin featuring Thomas Jefferson, the 3rd American president. Face value - 5 cents.</p>
<p className='cont2'>The obverse of the coin depicts a bust of the 3rd American president, Thomas Jefferson. The inscription on the right semicircle "IN GOD WE TRUST". Below is the inscription “FREEDOM” and the year of minting. Under the image of Jefferson was a monogram of an engraver. The initials of the engraver FS first appeared on coins in 1966.</p>
<p className='cont2'>The reverse side shows the Jefferson Monticello estate, as well as the inscription: on the top - the motto “E PLURIBUS UNUM”, on the bottom - the inscriptions “MONTICELLO”, “FIVE CENTS” and “UNITED STATES OF AMERICA”.</p>

<img className='table' src={table}/>
<div className='link'><Link to="/list">Back to the list</Link></div>
</div>
</div>

</div>
</div>
);
};
export default Des4;