import DisplayTile from './DisplayTile';
import 'bulma/css/bulma.css';
import artWorks from './ArtworksbyKD/artworkdbykd.png';
import './App.css';
import roseinrain from './ArtworksbyKD/RoseInRain.jpg';
import WhiteFlower from './ArtworksbyKD/WhiteFlower.jpg';
import coverbook from './ArtworksbyKD/CoverBook.jpg';
import sunrise from './ArtworksbyKD/Sunrise.jpg';
import womensDay from './ArtworksbyKD/WomensDay.jpg';
import dog from './ArtworksbyKD/HandshakeDog.jpg';
import cloudsP from './ArtworksbyKD/CloudPainting.jpg';
import clouds from './ArtworksbyKD/Clouds.jpg';
import kd from './ArtworksbyKD/KD.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div >
      <div style={{backgroundColor:'black',textAlign: 'center', color:'#ffffff', height: '40px', margin:'auto', padding:'6px'}}>
        <div className = "heading">
          <h2><Link to="/" className="has-text-white">HomeHandmade Paintings</Link></h2>
        </div>
        <div className = "heading"> 
          <h2> <Link to="/customised" className="has-text-white">Customised Paintings</Link></h2>
        </div>
        <div className = "heading">
          <h2><Link to="/about" className="has-text-white">About the Artist</Link></h2>
        </div>
        <div className = "heading">
          <h2><Link to="https://www.instagram.com/artworksbykd/" className="has-text-success">Instagram Feed</Link></h2>
        </div>
      </div>

      <div>
      <img src={artWorks} style={{width:'900px', height:'500px', marginLeft: 'auto',marginRight: 'auto',display: 'block' }}/>
      </div>
      <div className="container">
        <section className="section">
          <div className = "columns">
            <div className="column is-3">
              <DisplayTile image = {roseinrain} imageTitle="Rose in Rain" price="₹1500"/>
            </div>
            <div className="column is-3">
              <DisplayTile image = {WhiteFlower} imageTitle="White Sunflower on Black Background" price="₹5000"/>
            </div>
            <div className="column is-3">
              <DisplayTile image = {sunrise} imageTitle="Sunrise Scenery Painting" price="₹1500"/>
            </div>
            <div className="column is-3">
              <DisplayTile image = {coverbook} imageTitle="Sketchbook Cover Painting" price="₹2000"/>
            </div>
            
          </div>
        </section>
        <section className="section">
        <div className = "columns">
            <div className="column is-3">
              <DisplayTile image = {womensDay} imageTitle="Beautiful Women's Day Painting" price="₹700"/>
            </div>
            <div className="column is-3">
              <DisplayTile image = {dog} imageTitle="Human and Dog Handshake" price="₹600"/>
            </div>
            <div className="column is-3">
              <DisplayTile image = {cloudsP} imageTitle="Girl Painting Clouds" price="₹600"/>
            </div>
            <div className="column is-3">
              <DisplayTile image = {clouds} imageTitle="Heart with Clouds" price="₹600"/>
            </div>
          </div>
        </section>
       
      </div>
      <div style={{backgroundColor:'#87CEEB',textAlign: 'center', color:'#ffffff', height: '400px', padding:''}}>
      <figure style={{width:'250px', height:'300px'}}>
                    <img src={kd} style={{width:'250px', height:'300px', marginLeft: 'auto', marginRight:'auto' }} alt='Rose in Rain'/>
                    <figcaption style={{textAlign:'center', fontWeight: 'bold'}}>Kajal Dusseja</figcaption>            
                </figure>
       
      </div >
      
    </div>
  );
}

export default Home;
