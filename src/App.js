import './App.css';
import { useEffect } from 'react';
import closure from './media/vid.mp4';
import wolverine from './media/wolverine.png';
import topM from './media/topM.png';
import topAR from './media/topAR.png';
import topAVL from './media/topAVL.png';
import topEL from './media/topEL.png';
import bottomM from './media/bottomM.png';
import bottomAR from './media/bottomAR.png';
import bottomRVL from './media/bottomRVL.png';
import bottomEL from './media/bottomEL.png';
import guard from './media/guard.jpeg';
import spider from './media/spider.jpeg';
import star from './media/star.jpeg';
import { 
  leftSlide, 
  rightSlide,
  topSlide,
  bottomSlide, 
  scroll, 
  scrollFade,
} from './animations/animations.js';


function App() {
  useEffect(() => {
    leftSlide();
    rightSlide();
    scroll();
    scrollFade();
    topSlide();
    bottomSlide();

    const wolverine = document.querySelector('.wolverine');

    setTimeout(() => {
      wolverine.remove()
    }, 2000); 
  })

  return (
    <>
    <section className="container">
      <div className="flex">
        <img 
          className='slideTop' 
          src={topM} 
          alt={'the top of marvel logo'} 
        />
        <img 
          className='marvelBottom' 
          src={topAR} 
          alt={'the bottom of marvel logo'} 
        />
        <img 
          className='slideBottom' 
          src={topAVL} 
          alt={'the top of marvel logo'} 
        />
        <img 
          className='slideTop' 
          src={topEL} 
          alt={'the bottom of marvel logo'} 
        />
      </div>
      <div>
        <img 
          className='marvelTop' 
          src={bottomM} 
          alt={'the top of marvel logo'} 
        />
        <img 
          className='marvelBottom' 
          src={bottomAR} 
          alt={'the bottom of marvel logo'} 
        />
        <img 
          className='slideBottom' 
          src={bottomRVL} 
          alt={'the top of marvel logo'} 
        />
        <img 
          className='marvelTop' 
          src={bottomEL} 
          alt={'the bottom of marvel logo'} 
        />
      </div>
      <img 
        className='wolverine' 
        src={wolverine} 
        alt={'wolverine'} 
      />
    </section>
    <section id={'section2'}>
      <img 
        id ={'spider'} 
        src={spider} 
        alt={'spiderman comic cover'} 
      />
      <img 
        id ={'guard'} 
        src={guard} 
        alt={'guardians of the galaxy comic cover'} 
      />
      <img 
        id ={'star'} 
        src={star} 
        alt={'star wars comic cover'} 
      /> 
      <img 
        className={'effect2'}
        id ={'spider'} 
        src={spider} 
        alt={'spiderman comic cover'} 
      />
      <img 
        id ={'guard'} 
        src={guard} 
        alt={'guardians of the galaxy comic cover'} 
      />
      <img 
        id ={'star'} 
        src={star} 
        alt={'star wars comic cover'} 
      />
    </section>
    {/* <section id={'section3'}>
     
    </section> */}
    </>
  );
}

export default App;
