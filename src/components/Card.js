import React, { useState } from 'react'

const Card = ({ title, children, size=6, changeBackground }) => {
    const [secondaryBackground, setsecondaryBackground] = useState("")

    const changeBackkground = () => {
        if (changeBackground && secondaryBackground === "") {
            //console.log("Cambiar el background");
            setsecondaryBackground(" bg-secondary")
        }
    }    

    
    return(
        <div className={`col-lg-${size} mb-6`}>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 onMouseOver={changeBackkground} className="m-0 font-weight-bold text-gray-800">{title}</h5>
                </div>
                <div className={"card-body" + secondaryBackground}>
                    {children}
                </div>
            </div>
        </div>
    )
}


// Component.defaultProps = {
//     size: 6
// }

export default Card;