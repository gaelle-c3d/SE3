import React, {Component} from 'react';
import Header from './header'
import './navbar.scss'


class Navbar extends Component{


    render(){
return(
 <div className='navbar'>
<ul>
<li><Header></Header></li>
<li><div>Scene</div></li>
<li><span>Session</span></li>
<li><span>info</span></li>

</ul>
</div>

   )}

}

export default Navbar;
