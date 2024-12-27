
import j1 from "../assets/cs1.png";
import j2 from "../assets/cs2.png";
import table from '../assets/table.svg'
import {Link} from 'react-router-dom';

const Des5 =()=>{
return(
<div>
    <div className='desccont'>
<div className='left1l'>
   <div className='birlp'><img src={j1} className='impo'/></div>
    <div className='ikilp'><img src={j2} className='impo'/></div>
</div>

<div className='right'>
    <div className='contincont'>
<p className='badimcan'>Canadian Cent</p>
<p className='cont2'>
"Canadian cent." A unique coin with the image of maple leaves - symbols of Canada. Face value - 1 cent.</p>
<p className='cont2'>On May 3, 2012, the Department of the Treasury of Canada announced the cessation of production of a 1 cent coin. The latest issues of the famous 1-cent maple leaf were minted in 2012.</p>
<p className='cont2'>On the reverse, in the center of the coin are two maple leaves (the symbol of Canada), the year of issue is 2012 on the left. The upper part of the coin shows the denomination: 1 cent (1 cent), in the lower part of the inscription in a semicircle: CANADA.</p>

<img className='table' src={table}/>
<div className='link'><Link to="/list">Back to the list</Link></div>
</div>
</div>

</div>
</div>
);
};
export default Des5;