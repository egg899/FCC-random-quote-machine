import React from 'react';


function Button(props){

    return(
        <button onClick={()=>props.changeQuote()}>
            {props.title}
        </button>
    )


}

export default Button;