import './index.scss';
import img from '../../assets/gifts/test4.gif';
export const Presentation = () => {
  return (
    <section className='presentation' id='presentation'>
      <div className='presentation__container'>
        <p>Hello world! My name is...</p>
        <h1 className='presentation__container__name'>Marcos Villar</h1>
        <p>
          ... I'm a frontend developer that living in Argentina, Buenos Aires
          creating web views dynamics and scalable
        </p>
      </div>
      <figure className='presentation__container__image'>
        <img src={img} />
      </figure>
    </section>
  );
};
