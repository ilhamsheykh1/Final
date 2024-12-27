import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import table from '../assets/table.svg'
import {Link} from 'react-router-dom';

const Des6 =()=>{
return(
<div>
    <div className='desccont'>
<div className='left1l'>
   <div className='birlp'><img src={a1} className='impo'/></div>
    <div className='ikilp'><img src={a2} className='impo'/></div>
</div>

<div className='right'>
    <div className='contincont'>
<p className='badimcan'>A penny</p>
<p className='cont2'>
"A penny". A unique coin with a shield image with 13 vertical stripes.</p>
<p className='cont2'>Minted from 1793 to the present day.</p>
<p className='cont2'>In 1959, on the 150th anniversary of the birth of Lincoln, the reverse design was changed. Instead of wheat spikelets, the image of the Lincoln Memorial was depicted on the coin. On the surviving copies you can see the image of the statue of the 16th American president between the columns. Coins of this type were minted in multi-billion copies until 2008.</p>

<img className='table' src={table}/>
<div className='link'><Link to="/list">Back to the list</Link></div>
</div>
</div>

</div>
</div>
);
};
export default Des6;