import '../css/index.css';

function Header() {
    return (
    <div className="bg-white shadow border-1 border-black/15">
        <div className="flex m-auto justify-between items-center browser-size">
            <header className="">
            <a href="/"><h1>Random Generators</h1></a>
            </header>
            <nav className="">
            <ul className="flex gap-4">
                <li><a href="/">Home</a></li>
                <li><a href="">Generators</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            </nav>
        </div>
    </div>
    )
};

export default Header;