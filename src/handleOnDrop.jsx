import React from "react";

function handleOnDrop(e, props){
    const widgetType = e.dataTransfer.getData("widgetType");
    console.log("Widget type", widgetType);
    // setWidgets([...widgets, widgetType]);
    
    let items = [...props.widgets];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[props.N]};
    // 3. Replace the property you're intested in
    item = props.widgetType;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, 
    //    but that's why we made a copy first
    items[props.N] = item;
    // 5. Set the state to our new copy
    setWidgets([items]);

    return (
        props.widgets
    )
}

export default handleOnDrop