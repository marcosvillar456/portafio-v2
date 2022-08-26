import configs from './config';
import './index.scss';

export const Menu = () => {
  const { options, logo } = configs;
  const onClick = (id) => {
    const span = document.getElementById(id);
    if (span.className.includes('active')) {
      span.className = 'menu__options';
    } else {
      span.className = 'menu__options active';
    }
  };
  return (
    <header role='menu'>
      <nav className='menu'>
        <a>
          <div className='menu__logo'>
            <img src={logo.src} alt={logo.alt} />
            <span>{logo.title}</span>
          </div>
        </a>
        <span
          className='menu__mobile'
          id='menu__mobile'
          onClick={() => onClick('menu__options')}
        >
          <svg
            stroke='currentColor'
            fill='none'
            stroke-width='2'
            viewBox='0 0 24 24'
            stroke-linecap='round'
            stroke-linejoin='round'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='18' x2='21' y2='18'></line>
          </svg>
        </span>
        <ul className='menu__options' id='menu__options'>
          {options.map(({ title }) => {
            return (
              <li className='option' key={title}>
                <a>{title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
