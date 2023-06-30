import { FrameWrapper, FrameHeader, FrameFilter, Label, Select, BtnInput} from "./styles/FilterFrame.styled";
import Counter from "./Counter";
import { Button } from "./styles/Button.styled";

export default function FilterFrame() {
    return (  
        <FrameWrapper>
            <FrameHeader>
                <p>Buy</p>
                <p>Rent</p>
            </FrameHeader>
            <FrameFilter>
                <div style={{ width:"25vw",}}>
                    <Label style={{display: 'block'}}>Location</Label>
                    <Select name="platforms" id="platforms">
                        <option value="none" selected disabled hidden>Select one</option>
                        <option value="lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Oyo">Oyo</option>
                    </Select>
                </div>

                <Counter />
                
                <div style={{ width:"25vw", }}>
                    <Label style={{display: 'block'}}>Property type</Label>
                    <Select name="platforms">
                        <option value="none" selected disabled hidden>Select one</option>
                        <option value="lagos">Terrace</option>
                        <option value="Abuja">Semi-detached duplex</option>
                        <option value="Rivers">Fully detached duplex</option>
                        <option value="Ekiti">Flat</option>
                        <option value="Oyo">Studio apartment</option>
                    </Select>
                </div>
            </FrameFilter>

            <div style={{ width:"80vw",}}>
                <Label className='label'>Budget</Label>
                <BtnInput style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width:'80%' }} >
                    <input type='button' value='$25k - $50k'/>
                    <input type='button' value='$50k - $100k'/>
                    <input type='button' value='$100k - $300k'/>
                    <input type='button' value='$300k - $1m'/>
                    <input type='button' value='$1m+'/>
                </BtnInput>
            </div>

            <Button bg='#15B86C'>Search</Button>

        </FrameWrapper>
    );
}
