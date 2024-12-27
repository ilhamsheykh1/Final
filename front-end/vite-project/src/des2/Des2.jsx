import './Des2.css'
import l1 from '../assets/l1.png'
import l2 from '../assets/l2.png'
import table from '../assets/table.svg'
import {Link} from 'react-router-dom';

const Description =()=>{
return(
<div>
    <div className='desccont'>
<div className='left1l'>
   <div className='birlp'><img src={l1} className='impo'/></div>
    <div className='ikilp'><img src={l2} className='impo'/></div>
</div>

<div className='right'>
    <div className='contincont'>
<p className='badimcan'>Canadian Beaver</p>
<p className='cont2'>""Looney". Unique coin with the image of a goat. Canadian dollar symbol.</p>
<p className='cont2'>The reverse of the coin depicts a black goat - a symbol of Canada and an inscription divided into the lower and upper semicircle "Canadian dollar".</p>
<p className='cont2'>The obverse depicts Queen Elizabeth II. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is the year of coinage.</p>

<img className='table' src={table}/>
<div className='link'><Link to="/list">Back to the list</Link></div>
</div>
</div>

</div>
</div>
);
};
export default Description