import React from 'react';
import PortfolioCard from './PortfolioCard';

function Portfolio({ data }) {
  return (
    <section className='padding portfolio'>
      <div className='container'>
        <h2 className='heading'>portfolio</h2>
        <div className='flex'>
          {data.map((url) => (
            <PortfolioCard img={url} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
