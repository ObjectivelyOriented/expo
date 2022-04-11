import Layout from "../components/Layout";
import IndexStyle from "../styles/Index.module.scss";
import Image from "next/image";
import myImg from './cafe_terrace.jpeg'
import myImg1 from './monalisa.webp'
import myImg2 from './orientalpoppies.jpeg'
import myImg3 from './theoldguitarist.jpeg'
import myImg4 from './creationofadam.jpeg'

const Gallery = () =>
  <Layout>

    <div class = {IndexStyle.artflex}>

    <div className={IndexStyle.dropdown}>
      <p>"The Creation of Adam" by Michelangelo</p>
      <Image className = {IndexStyle.Images2} src = {myImg4}/> 
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/creationofadam">See More</a></div>
      </div>
    </div>
      
    <div className={IndexStyle.dropdown}>
      <p>"Mona Lisa" by Leonardo da Vinci</p>
      <Image className = {IndexStyle.Images2} src = {myImg1}/> 
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/monalisa">See More</a></div>
      </div>
    </div>


    <div className={IndexStyle.dropdown}>
      <p>"The Old Guitarist" by Pablo Picasso</p>
      <Image className = {IndexStyle.Images2} src = {myImg3}/> 
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/oldguitarist">See More</a></div>
      </div>
    </div>

    <div className={IndexStyle.dropdown}>
      <p>"Oriental Poppies" by Georgia O'Keefe</p>
      <Image className = {IndexStyle.Images2} src = {myImg2}/>
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/orientalpoppies">See More</a></div>
      </div>
    </div>
   

    <div className={IndexStyle.dropdown}>
      <p>"Cafe Terrace At Night" by Vincent van Gogh</p>
      <Image className = {IndexStyle.Images2} src = {myImg}/>
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/cafeterrace">See More</a>           </div>
      </div>
    </div>
</div>
    <div class = {IndexStyle.buffer}>
    
    </div>
  </Layout>

export default Gallery;