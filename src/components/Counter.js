import React, {useState} from "react";
import { Label, BedroomCount, CountBtn } from "./styles/FilterFrame.styled";

export default function Counter() {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (  
        <div style={{ width:"25vw", }}>
            <Label style={{display: 'block'}}>Bedroom</Label>
            <BedroomCount>
                <CountBtn onClick={decrement}>-</CountBtn>
                <span>{count}</span>
                <CountBtn onClick={increment}>+</CountBtn>
            </BedroomCount>
        </div>
    );
}