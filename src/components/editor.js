
function Editor(props){
    return(
        <div className="container shoe">
        <div className={`productImage ${props.imag}`}> </div>
        <div className="size shoeSize">
            <h4>SIZE</h4>
            <ul>
            <li>9.5</li>
            <li>9</li>
            <li>8</li>
            </ul>
        </div>
        <div className="price shoePrice">
            <h4>PRICE</h4>
            <span>$100</span>
        </div>
        <div className="color shoeColor">
            <h4>COLORS</h4>
            <ul>
            <li><span className="blue"></span></li>
            <li><span className="yellow"></span></li>
            <li><span className="red"></span></li>
            </ul>
        </div>
        <div className="productName shoeName">
            {props.name}
            </div>
        </div>
    );
}
export default Editor;