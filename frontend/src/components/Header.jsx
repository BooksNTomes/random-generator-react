import { Link } from 'react-router-dom';
import '../css/index.css';

function Header() {
    return (
    <div className="bg-white shadow border-1 border-black/15 border-t-0">
        <div className="flex m-auto justify-between items-center browser-size">
            <header className="">
            <Link to="/"><h1>Random Generators</h1></Link>
            </header>
            <nav className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/generators">Generators</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    </div>
    )
};

export default Header;