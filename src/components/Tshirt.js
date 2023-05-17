import Editor from "./editor";
export default function Shirt(){
    let shirts = [
        {
            imag:"t11",
            name:"GAP"
        },
        {
            imag:"t22",
            name:"Fear of God"
        }
    ];
    return(
        <div className='body'>
        {shirts.map(t=>
                <Editor imag={t.imag} name={t.name}></Editor>
        )}</div>
    );
}