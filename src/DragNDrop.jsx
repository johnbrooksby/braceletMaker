import React, {useState} from "react";

const Drag = () => {
    const [widgets, setWidgets] = useState([]);
    const [widgets2, setWidgets2] = useState([]);
    const [widgets3, setWidgets3] = useState([]);
    
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
    function handleOnDrop3(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        console.log("Widget type", widgetType);
        // setWidgets2([...widgets2, widgetType]);
        setWidgets3([widgetType]);
    }

    function handleDragOver(e){
        e.preventDefault();
        // console.log("drag over")
    }

    return (
        <div className="App">
            <div className="placement">
                <div className="braceletPlacement">
                    <img className="bracelet" src="/hemp.jpg" alt="hemp bracelet" />
                </div>
                <div className="beadPlacement">
                    <div className="page beadOne" onDrop={handleOnDrop} onDragOver={handleDragOver} onDoubleClick={() => setWidgets([])}>
                        {widgets.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="bead" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page beadTwo" onDrop={handleOnDrop2} onDragOver={handleDragOver} onDoubleClick={() => setWidgets2([])}>
                        {widgets2.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="bead" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page beadThree" onDrop={handleOnDrop3} onDragOver={handleDragOver} onDoubleClick={() => setWidgets3([])}>
                        {widgets3.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="bead" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={() => {
                    setWidgets([])
                    setWidgets2([])
                    setWidgets3([])
                }}>Reset</button>
            </div>
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
            </div>

        </div>
    )

}

export default Drag;