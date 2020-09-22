import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';

import './style/style.css';
import About from './components/About';

function Main() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio
          data={[
            'img/media/sc2.jpeg',
            'img/media/image3.png',
            'img/media/image4.jpeg',
            'img/media/image7.jpg',
            'img/media/image8.jpeg',
            'img/media/image9.jpeg',
            'img/media/image3.png',
            'img/media/image4.jpeg',
            'img/media/image7.jpg',
            'img/media/image8.jpeg',
            'img/media/image9.jpeg',
            'img/media/image3.png',
            'img/media/image4.jpeg',
            'img/media/image7.jpg',
            'img/media/image8.jpeg',
            'img/media/image9.jpeg',
            'img/media/image3.png',
            'img/media/image4.jpeg',
            'img/media/image7.jpg',
            'img/media/image8.jpeg',
            'img/media/image9.jpeg',
            'img/media/image3.png',
            'img/media/image4.jpeg',
            'img/media/image7.jpg',
            'img/media/image8.jpeg',
            'img/media/image9.jpeg',
          ]}
        />
        <About />
        <Portfolio
          data={[
            'img/media/sc2.jpeg',
            'img/media/image3.png',
            'img/media/image4.jpeg',
            'img/media/image7.jpg',
            'img/media/image8.jpeg',
            'img/media/image9.jpeg',
          ]}
        />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
