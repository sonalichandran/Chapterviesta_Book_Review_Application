import myImage from '../Assets/Image/book1.jpg';
import '../Assets/Css/Home.css'
import '../Assets/Css/Cards.css'
import {Link} from 'react-router-dom'




function Home()
{
    return(
        <div>

        <div>
            <div className="content1">
            <h1>ChApTeRvIsTa
                </h1>
        </div>
      
       
        <div className="all">

        <div className="container">
        <main class="page-content">
  <div class="card">
    <div class="content">
      {/* <h2 class="title">Mountain View</h2>
      <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
      <button class="btn">View Book</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      {/* <h2 class="title">To The Beach</h2>
      <p class="copy">Plan your next beach trip with these fabulous destinations</p> */}
      <button class="btn">View Book</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      {/* <h2 class="title">Desert Destinations</h2>
      <p class="copy">It's the desert you've always dreamed of</p> */}
      <button class="btn">View Book</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      {/* <h2 class="title">Explore The Galaxy</h2>
      <p class="copy">Seriously, straight up, just blast off into outer space today</p> */}
      <button class="btn">View Book</button>
    </div>
  </div>
</main>
      </div>
<div className="down1">

  <div className="down">

<Link to ='/Bookpage'><button className="view">Explore</button></Link>
</div>
</div>


        </div>
    
       
        <img src={myImage} className="image"/>
        
       
      
        <div>
    </div>

        </div>

        </div>
     
    )
}
export default Home;