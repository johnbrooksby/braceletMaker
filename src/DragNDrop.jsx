import React, {useState} from "react";

const Drag = () => {
    const [widgets, setWidgets] = useState([]);
    const [widgets2, setWidgets2] = useState([]);

    function handleOnDrag(e, widgetType){
        e.dataTransfer.setData("widgetType", widgetType);
    }

    function handleOnDrop(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        console.log("Widget type", widgetType);
        // setWidgets([...widgets, widgetType]);
        setWidgets([widgetType]);
    }
    function handleOnDrop2(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        console.log("Widget type", widgetType);
        // setWidgets2([...widgets2, widgetType]);
        setWidgets2([widgetType]);
    }

    function handleDragOver(e){
        e.preventDefault();
        // console.log("drag over")
    }

    return (
        <div className="App">
            <div className="widgets">
                <img className="bead" 
                draggable
                onDragStart={(e) => handleOnDrag(e, "hematite")}
                src="/hematite.jpg"
                alt="hematite bead" />
                <img className="bead" 
                draggable
                onDragStart={(e) => handleOnDrag(e, "howlite")}
                src="/howlite.jpg"
                alt="howlite bead" />
                {/* <div className="widget"
                draggable
                onDragStart={(e) => handleOnDrag(e, "Widget A")}
                >Widget A
                </div>
                <div className="widget"
                draggable
                onDragStart={(e) => handleOnDrag(e, "Widget B")}
                >Widget B
                </div>
                <div className="widget"
                draggable
                onDragStart={(e) => handleOnDrag(e, "Widget C")}
                >Widget C
                </div> */}
            </div>
            <div>
                <img className="bracelet" src="/hemp.jpg" alt="hemp bracelet" />
                <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
                    {widgets.map((widget, i) => (
                        // <div className="droppedWidget" key={i}>
                        <img src={`/${widget}.jpg`} />
                        // </div>
                    ))}
                    {/* <div className="droppedWidget">
                        {widgets}
                        </div> */}
                </div>
                <div className="page" onDrop={handleOnDrop2} onDragOver={handleDragOver}>
                    {widgets2.map((widget, i) => (
                        <div className="droppedWidget" key={i}>
                            {/* {widget} */}
                            <img src={`/${widget}.jpg`} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

}

export default Drag;