const {useState} = React;

let MyBtn = () => {
    let [val, setVal] = useState(27)
    let [color, setColor] = useState('white')
    let clickHandler = ()=> {
        setVal(val+1)
        if (val%3 == 0){
            setColor('red')
        }else if (val%2 == 0){
            setColor('green')
        }else{
            setColor('orange')
        }
    }
    return(
        <div style={{backgroundColor: color, height:'100vh'}} className="text-center">
            <h2 >Click Me</h2>
            <button className={`btn btn-lg btn-primary p-${val%5}`} onClick={clickHandler} autoFocus>{val}</button>
            <h3 style={{position:'absolute',bottom:'0'}}>Warning: Do Not Press & Hold Enter </h3>
        </div>
    )
}
let root = ReactDOM.createRoot(document.getElementById('mydiv'))
root.render(<MyBtn/>)