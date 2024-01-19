import React from "react"
function AccessVar(){
    let count =5;
    return(
        <React.Fragment>
            <h1>{count}</h1>
            <h1>{count*count+count}</h1>

        </React.Fragment>
    )
}

export default AccessVar;