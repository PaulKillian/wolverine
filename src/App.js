import './App.css';
import { useEffect } from 'react';
import closure from './media/vid.mp4';
import wolverine from './media/wolverine.png';
import marvelTop from './media/marvelTop.png';
import marvelBottom from './media/marvelBottom.png';
import guard from './media/guard.jpeg';
import spider from './media/spider.jpeg';
import star from './media/star.jpeg';
import { leftSlide, rightSlide, scroll, scrollFade } from './animations/animations.js';


function App() {
  useEffect(() => {
    leftSlide();
    rightSlide();
    scroll()
    scrollFade()

    const wolverine = document.querySelector('.wolverine');

    setTimeout(() => {
      wolverine.remove()
    }, 2000); 
  })

  return (
    <>
    <section className="container">
      <div className="flex-col">
        <img 
          className='marvelTop' 
          src={marvelTop} 
          alt={'the top of marvel logo'} 
        />
        <img 
          className='marvelBottom' 
          src={marvelBottom} 
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
