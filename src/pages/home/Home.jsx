import './Home.css'
import { Link } from 'react-router-dom';
import img from './banner.png'
function Home(){
    return(
        <div id="Home">
            <div className="centro">
                <img id='imgHome' src={img} alt="" /> 
            </div>
            <div className="btn">
                <Link to='/dashboard'>
                <button>CONTROLAR</button>
                </Link>
            </div>
        </div>
    )
}
export default Home;