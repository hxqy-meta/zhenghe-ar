import './index.css';
import ICP from './ICP';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerContent'>
                <Copyright />
                <ICP />
            </div>
        </footer>
    )
};

export default Footer;