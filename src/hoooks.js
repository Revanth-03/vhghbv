import { useState } from "react";
export default function useSetValue(initialValue){
    const [value,setValue]=useState(initialValue);
    function handleEvent(e){
        setValue(e.target.value);
    }
    return{
        value,
        onChange:handleEvent,
    }
}