import './HomePage2.css'
import {Link} from 'react-router-dom';

const HomePage2 = () =>{
    return(
<div>
<div className='homepage2container'>
    <div>
<h1>Homepage</h1>
<label className='label1' htmlFor="inputfield">Input Field</label>
<input className="input-field" id="inputfield" name="inputfield" type="text" />

<button className='homepagebutton'>Search</button>
</div>
<Link to="/home" className="advancedFilterLink">Advanced Filter &#11165;</Link>

<div className='imputs'>

<div className='imput-left'>

<form>
  <label >Issuing country:</label>
  <select className='country'>
    <option value="male">Canada</option>
    <option value="female">Russia</option>
    <option value="other">America</option>
  </select>
</form>


<form>
  <label >Metal:</label>
  <select className='metal'>
    <option value="male">Gold</option>
    <option value="female">Silver</option>
    <option value="other">Bronze</option>
  </select>
</form>

<form>
  <label >Quality of the coin:</label>
  <select className='quality'>
    <option value="male">Proof</option>
    <option value="female">Brilliant Uncirculated</option>
    <option value="other">Mint State</option>
  </select>
</form>

</div>

<div className='imput-right'>

<label>Price</label>
<span>from</span><input type="text" className='fromto'/><span>to</span><input type="text" className='fromto' />


<label>Year of issue</label>
<span>from</span><input type="text" className='fromto'/><span>to</span><input type="text" className='fromto'/>


</div>


</div>
</div>
</div>
    )
}
export default HomePage2;