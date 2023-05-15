import Editor from "./editor"
function Shoes(){
    let shoes = [
        {
            imag:"shoeImg",
            name:"Nike Air Max Plus"
        },
        {
            imag:"ye",
            name:"Air Yeezy 2"
        }
    ];
    return(
        <div className='body'>
        {shoes.map(shoe=>
                <Editor imag={shoe.imag} name={shoe.name}></Editor>
        )}</div>
    );
}
export default Shoes;