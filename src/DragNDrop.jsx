import React, {useState} from "react";
// import Bead from "./beadBox";
// import handleOnDrop from "./handleOnDrop";

const Drag = () => {
    const [widgets, setWidgets] = useState([]);
    const [widgets2, setWidgets2] = useState([]);
    const [widgets3, setWidgets3] = useState([]);
    const [widgets4, setWidgets4] = useState([]);
    const [widgets5, setWidgets5] = useState([]);
    const [widgets6, setWidgets6] = useState([]);
    const [widgets7, setWidgets7] = useState([]);
    const [widgets8, setWidgets8] = useState([]);
    const [widgets9, setWidgets9] = useState([]);
    const [widgets10, setWidgets10] = useState([]);
    const [widgets11, setWidgets11] = useState([]);
    const [widgets12, setWidgets12] = useState([]);
    
    function handleOnDrag(e, widgetType){
        e.dataTransfer.setData("widgetType", widgetType);
    }

    function handleOnDrop(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        // console.log(widgetType)
        setWidgets([widgetType]);
    }
    function handleOnDrop2(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        setWidgets2([widgetType]);
    }
    function handleOnDrop3(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        setWidgets3([widgetType]);
    }
    function handleOnDrop4(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        setWidgets4([widgetType]);
    }
    function handleOnDrop5(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        setWidgets5([widgetType]);
    }
    function handleOnDrop6(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        setWidgets6([widgetType]);
    }
    function handleOnDrop7(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        setWidgets7([widgetType]);
    }
    function handleOnDrop8(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        setWidgets8([widgetType]);
    }
    function handleOnDrop9(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        setWidgets9([widgetType]);
    }
    function handleOnDrop10(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        setWidgets10([widgetType]);
    }
    function handleOnDrop11(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        setWidgets11([widgetType]);
    }
    function handleOnDrop12(e){
        const widgetType = e.dataTransfer.getData("widgetType");
        setWidgets12([widgetType]);
    }

    function handleDragOver(e){
        e.preventDefault();
    }

    return (
        <div className="App">
            <div className="placement">
                <div className="braceletPlacement">
                    <img className="bracelet" src="/hemp.jpg" alt="hemp bracelet" />
                </div>
                <div className="beadPlacement">
                    <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver} onDoubleClick={() => setWidgets([])}>
                        {widgets.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page" onDrop={handleOnDrop2} onDragOver={handleDragOver} onDoubleClick={() => setWidgets2([])}>
                        {widgets2.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page" onDrop={handleOnDrop3} onDragOver={handleDragOver} onDoubleClick={() => setWidgets3([])}>
                        {widgets3.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page" onDrop={handleOnDrop4} onDragOver={handleDragOver} onDoubleClick={() => setWidgets4([])}>
                        {widgets4.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page" onDrop={handleOnDrop5} onDragOver={handleDragOver} onDoubleClick={() => setWidgets5([])}>
                        {widgets5.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page" onDrop={handleOnDrop6} onDragOver={handleDragOver} onDoubleClick={() => setWidgets6([])}>
                        {widgets6.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page" onDrop={handleOnDrop7} onDragOver={handleDragOver} onDoubleClick={() => setWidgets7([])}>
                        {widgets7.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page" onDrop={handleOnDrop8} onDragOver={handleDragOver} onDoubleClick={() => setWidgets8([])}>
                        {widgets8.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page" onDrop={handleOnDrop9} onDragOver={handleDragOver} onDoubleClick={() => setWidgets9([])}>
                        {widgets9.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`}  />
                            </div>
                        ))}
                    </div>
                    <div className="page" onDrop={handleOnDrop10} onDragOver={handleDragOver} onDoubleClick={() => setWidgets10([])}>
                        {widgets10.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page" onDrop={handleOnDrop11} onDragOver={handleDragOver} onDoubleClick={() => setWidgets11([])}>
                        {widgets11.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    <div className="page" onDrop={handleOnDrop12} onDragOver={handleDragOver} onDoubleClick={() => setWidgets12([])}>
                        {widgets12.map((widget, i) => (
                            <div className="droppedWidget" key={i}>
                                <img className="beadDropped" src={`/${widget}.jpg`} />
                            </div>
                        ))}
                    </div>
                    {/* <Bead 
                        handleDragOver= {handleDragOver}
                    /> */}
                </div>
                <button onClick={() => {
                    setWidgets([])
                    setWidgets2([])
                    setWidgets3([])
                    setWidgets4([])
                    setWidgets5([])
                    setWidgets6([])
                    setWidgets7([])
                    setWidgets8([])
                    setWidgets9([])
                    setWidgets10([])
                    setWidgets11([])
                    setWidgets12([])
                }}>Reset</button>
            </div>
            <div className="widgets">
                <img className="bead" 
                // draggable
                onDragStart={(e) => handleOnDrag(e, "hematite")}
                // onDrop={() => draggable="false"}
                src="/hematite.jpg"
                alt="hematite bead" />
                <img className="bead" 
                // draggable
                onDragStart={(e) => handleOnDrag(e, "howlite")}
                // onDrop={}
                src="/howlite.jpg"
                alt="howlite bead" />
            </div>

        </div>
    )

}

export default Drag;