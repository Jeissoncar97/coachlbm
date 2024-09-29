import Logo from '../assets/photosHeader/White_logo.svg'
import '../styles/header.css'

const Header = () => {
  return (
    <>
      <div className='header'>
        <img className='logo_header' src={Logo} alt="" />
        <h1>LEONARDO<span>BRAVO</span></h1>
      </div>
    </>
  )
};

export default Header;