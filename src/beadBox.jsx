import React from "react";

const beadBox = (props) => {

    
    return (
        <div className="page" onDrop={props.handleOnDrop} onDragOver={props.handleDragOver} onDoubleClick={() => props.setWidgets([])}>
            {props.widgets.map((widget, i) => (
                <div className="droppedWidget" key={i}>
                    <img className="bead" src={`/${props.widget}.jpg`} />
                </div>
            ))}
        </div>
    )
}

export default Bead