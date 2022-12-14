import './styles.scss';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer-basic">
            <footer className="footer">
                <div className="social"><a href="#">
                    <i className="fa fa-facebook"></i></a><a href="#">
                        <i className='fa fa-twitter'></i></a><a href="#">
                        <i className="fa fa-snapchat"></i></a><a href="#">
                        <i className="fa fa-instagram"></i></a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Home</a></li>
                    <li className="list-inline-item"><NavLink to="/contact">Contact</NavLink></li>
                    <li className="list-inline-item"><a href="#">About</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                    <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                </ul>
                <p className="copyright">Company Name © 2018</p>
            </footer>
        </div>
    )
}