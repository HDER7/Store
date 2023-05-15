import { useState } from "react"
export default function Menu() {
        const [isOpen, setIsOpen] = useState(false)
        return(
            <div className="navbar">
                <div className="nav_logo"><a href="/" to="/"><img src="https://static.thenounproject.com/png/44686-200.png" alt="logo" className="brand-name"/></a></div>
                <div className={`nav_items ${isOpen && "open"}`}>
                    <a href="/" to="/">Home</a>
                    <a href="/e" to="/e">Shoes</a>
                    <a href="/t" to="/t">T-shirt</a>
                    <a href="/c" to="/c">Clients</a>
                </div>
                <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
}