import Layout from "../components/Layout";
import IndexStyle from "../styles/Index.module.scss";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import myImg from './cafe_terrace.jpeg'
import myImg1 from './monalisa.webp'
import myImg2 from './orientalpoppies.jpeg'
import myImg3 from './theoldguitarist.jpeg'
import myImg4 from './creationofadam.jpeg'
import myImg5 from '../public/art_expo.png'


var artArray = [
  myImg, myImg1, myImg2, myImg3, myImg4
];

var imgWidth = 500;
var imgHeight = 500;

var randomImg = artArray[Math.floor(Math.random()*artArray.length)];



const Index = () => 
<Layout>
   
<h2 className = {IndexStyle.title}> Welcome to our TSA Art Gallery! </h2>
<br/>
  <div className = {IndexStyle.featured}>
    <Image className = {IndexStyle.Images} src = {myImg5}/> 
    </div>
  <div classname = {IndexStyle.artflex}>
<h2 className = {IndexStyle.title}> Featured - </h2>  
  <div className = {IndexStyle.artflex}>
  <a href="/Artworks/monalisa_HDcropped">
 <div>
<Image 
  className = {IndexStyle.Images2} 
  src = {myImg1}
  width={imgWidth}
  height={imgHeight}
/> 
  <p>"Mona Lisa" by Leonardo da Vinci</p>
  </div>
  </a>
  <a href="/Artworks/orientalpoppies">
  <div>
<Image 
  className = {IndexStyle.Images2} 
  src = {myImg2}
  width={imgWidth}
  height={imgHeight}
/> 
  <p>"Oriental Poppies" by Georgia O'Keefe</p>
  </div>
  </a>
  <a href="/Artworks/oldguitarist">
   <div>
<Image 
  className = {IndexStyle.Images2} 
  src = {myImg3}
  width={imgWidth}
  height={imgHeight}
/> 
  <p>"The Old Guitarist" by Pablo Picasso</p>
  </div>
  </a>
  <a href="/Artworks/creationofadam">
  <div>
<Image 
  className = {IndexStyle.Images2} 
  src = {myImg4}
  width={imgWidth}
  height={imgHeight}
/> 
  <p>"The Creation of Adam" by Michelangelo</p>
  </div>
  </a>
  <a href="/Artworks/cafeterrace">
  <div>
<Image 
  className = {IndexStyle.Images2} 
  src = {myImg}
  width={imgWidth}
  height={imgHeight}
/> 
  <p>"Cafe Terrace At Night" by Vincent van Gogh</p>
  </div>
 
  </a>

  </div>
   
</div>
    
</Layout>;
export default Index;

/*<div className={SlidesStyle.slider}>
  <Link href="#slide-1" scroll={false}>
      <a>1</a>
    </Link>
    <Link href="#slide-2" scroll={false}>
      <a>2</a>
    </Link>
    <Link href="#slide-3" scroll={false}>
      <a>3</a>
    </Link>
    <Link href="#slide-4" scroll={false}>
      <a>4</a>
    </Link>
    <Link href="#slide-5" scroll={false}>
      <a>5</a>
    </Link>
   <div className={SlidesStyle.slides}>
      <div name="slide-1" id="slide-1">
        <Image className = {SlidesStyle.Images} src={myImg} alt="Picture of the author" />
      </div>
      <div name="slide-2" id="slide-2">
         <Image className = {SlidesStyle.Images} src={myImg1} alt="Picture of the author" />
      </div>
      <div id="slide-3"> <Image className = {SlidesStyle.Images} src={myImg2} alt="Picture of the author" /></div>
      <div id="slide-4"> <Image className = {SlidesStyle.Images} src={myImg3} alt="Picture of the author" /></div>
      <div id="slide-5"> <Image className = {SlidesStyle.Images} src={myImg4} alt="Picture of the author" /></div>
    </div>
  </div>
*/