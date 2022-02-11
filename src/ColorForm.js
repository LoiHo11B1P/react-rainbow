import  { useState} from "react";

function ColorForm (props) {

    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // prevent form from submitting
        e.preventDefault()

        // use the function in prop to communicate with parent component
        props.addColor(input)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={ (e) => setInput(e.target.value)}  value={input}/>
                <input type='color' onChange={ (e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm