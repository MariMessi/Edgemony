import "./index.css";


const Header = () => {
    return (
        <div className = "Header">
            <div className="listDiv">
            <ul className="list">
                <li> <a href ="https://www.google.com/webhp?hl=it&sa=X&ved=0ahUKEwjjn-OXu7j9AhU2X_EDHdHtASkQPAgI" className="anchor">Google</a></li>
                <li> <a href = "https://www.youtube.com/" className="anchor">YouTube</a></li>
                <li><a href = "https://it-it.facebook.com/" className="anchor">Facebook</a></li>
            </ul>
            </div>
        </div>
    );
};


export default Header;