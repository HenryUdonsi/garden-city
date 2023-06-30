import { Wrapper, RightAlignedBtn } from "./styles/Input.styled";
import Icon from "../images/Icon.svg";
import { Button } from "./styles/Button.styled";

const Input = props => {
    return (  
        <Wrapper>
            <img src={Icon}/>
            <input placeholder={props.placeholder} />
            <RightAlignedBtn>
                <Button bg = '#15B86C'>Submit</Button>
            </RightAlignedBtn>

            
        </Wrapper>

    );
}

export default Input;