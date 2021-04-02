import cls from 'classnames';

import './style.scss';

function HamburgerIcon({ isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={cls('hamburger ', isOpen ? 'open' : 'closed')}
        onClick={handleClick}
      >
        <div></div>
      </div>
    </>
  );
}

export default HamburgerIcon;
