import img from '../../assets/color.png';
import './index.scss';

export const AboutMe = () => {
  return (
    <section className='AboutMe' id='AboutMe'>
      <figcaption className='AboutMe__image'>
        <img src={img} />
      </figcaption>
      <div className='AboutMe__container'>
        <div className='AboutMe__container__title'>
          <span></span>
          <h1>Who i am?</h1>
          <span></span>
        </div>
        <p className='AboutMe__container__description'>
          I'am FrontEnd Developer from Argentina, my hobby and "passion" is
          creating web views that are responsive for all devices and cute for
          see, this is something i like since i 14 years old that's why i
          graduated from technical school n4 from{' '}
          <span>technical in programmer</span> and i graduated from Full Stack
          in the bootcamp <span>"Soy Henry"</span> and want start developing my
          career in the tech world.
        </p>
        <p>
          I pleases to receive feedback on my code because this is something
          very important for to grow as a Developer.
        </p>
        <p>Some technologies i am using are :</p>
        <ul className='AboutMe__container__skills'>
          <li>javascript</li>
          <li>React</li>
          <li>Express</li>
          <li>Redux</li>
          <li>SASS</li>
          <li>Node.js</li>
          <li>Redux</li>
        </ul>
      </div>
    </section>
  );
};
