
import { Button,styled ,ButtonGroup} from "@mui/material"
import { useState } from "react";
const Component=styled(ButtonGroup)`
margin-top:30px;`

const StyledButton=styled(Button)`
border-radius:50%;`

const GroupedButton=({quantity})=>{
    const [intial,finalquantity]=useState(quantity);
    const Increment=()=>{
        finalquantity(intial+1);
    }
    const Decrement=()=>{
        finalquantity(intial-1);
    }
    return(<Component>
        <StyledButton onClick={()=>Decrement()}>
            -
        </StyledButton>
        <StyledButton>
            {intial}
        </StyledButton>
        <StyledButton onClick={()=>Increment()}>
            +
        </StyledButton>

    </Component>)
}
export default GroupedButton;