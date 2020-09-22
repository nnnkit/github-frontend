import React from 'react';

function About() {
  return (
    <section className='padding about'>
      <div className='container'>
        <h3 className='heading'>about</h3>
        <div className=' wrapper flex'>
          <div className='col-about'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, voluptatum rerum. Eos maxime blanditiis impedit
              perspiciatis temporibus sapiente fugiat iure. Odit autem
              necessitatibus voluptates nostrum animi sapiente molestiae
              excepturi quo?
            </p>
          </div>
          <div className='col-about'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              adipisci, vitae quam, suscipit saepe, maxime corrupti accusamus
              reiciendis repellat quo iure assumenda amet. Voluptas doloribus
              voluptate explicabo earum similique? Laboriosam.
            </p>
          </div>
        </div>
        <div className='text-center'>
          <a href='#'>
            <button className='btn'>apply</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
