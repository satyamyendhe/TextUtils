import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    // useState 
    const [text, newText] = useState("");

    // convert newtext to Upper Case
    const handelUpperCase = () => {
        console.log("UpperCase was clicked");
        let upperCase = text.toUpperCase()
        newText(upperCase)
    }
    // convert newtext to Lower Case
    const handelLowerCase = () => {
        console.log("LowerCase was clicked")
        let lowerCase = text.toLowerCase();
        newText(lowerCase);
    }

    // storing value to newText
    const handelOnChnage = (event) => {
        console.log("Text Update")
        newText(event.target.value);
    }

    // count the words 
    let words = text.split(" ").length

    // clear Text area
    const handelClearText = ()=>{
        console.log("textarea was cleared");
        newText("");
    }



    return (
        <>
            <div className='container my-5'>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    {/* value is what you enter in textarea */}
                    <textarea className="form-control mt-2" value={text} onChange={handelOnChnage} rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handelUpperCase}>UPPERCASE</button>
                <button className='btn btn-primary mx-2' onClick={handelLowerCase}>lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handelClearText}>Clear</button>
            </div>
            <div className="container">
                <h2>Your text Summary</h2>
                <p> <b> words :</b>  {words} <br /> <b>characters : </b>{text.length}</p>
                <p>{0.008*words} minutes read</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
        )

}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};

TextForm.defaultProps = {
    heading: "Enter your heading"
};