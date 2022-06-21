import React from 'react'
import "./TextError.css"
function TextError({children}) {
    return (
        <div className="textError">
            {children}
        </div>
    )
}

export default TextError