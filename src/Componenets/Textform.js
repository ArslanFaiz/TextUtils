import React, { useState } from 'react'
export default function Textform(props) {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Enable to UpperCase','success')
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Enable to LowerCase','success')

    }
    const handleClearCase = () => {
        let newText = '';
        setText(newText)
        props.showAlert('Enable to ClearCase','success')

    }
    const removeSpaceCase = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert('Enable to RemoveCase','success')

    }
    const handleOnchange = (e) => {
        setText(e.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container my-2'style={{color:props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control"style={{backgroundColor:props.mode==='dark'?'white':'gray',
                    color:props.mode==='dark'?'black':'white'}} 
                    value={text} onChange={handleOnchange} id="myBox" rows="6"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpperCase}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowerCase}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearCase}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={removeSpaceCase}>Remove Spaces</button>
        </div>
        <div className="container my-2"style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(' ').length} words and {text.length} chracters</p>
            <p>{0.008*text.split(' ').length} words Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter your text'}</p>
        </div>
        </>
    )
}
