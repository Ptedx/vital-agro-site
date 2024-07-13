import { FunctionComponent } from "react"
import { HiddenDiv1Style, HiddenDiv2Style, HiddenDiv3Style, HiddenDivStyle } from "../../styled-components/body/ServicesStyle"

interface HiddenProps {
    hide: boolean
}

export const HiddenDiv1:FunctionComponent<HiddenProps> = ({hide})=>{

    return(
        <HiddenDivStyle hide={hide}>
            <HiddenDiv1Style>
                <p>Opa bom dia 1</p>
            </HiddenDiv1Style>
        </HiddenDivStyle>
    )
}
export const HiddenDiv2:FunctionComponent<HiddenProps> = ({hide})=>{

    return(
        <HiddenDivStyle hide={hide}>
            <HiddenDiv2Style>
                <p>Opa bom dia 2</p>
            </HiddenDiv2Style>
        </HiddenDivStyle>
    )
}
export const HiddenDiv3:FunctionComponent<HiddenProps> = ({hide})=>{

    return(
        <HiddenDivStyle hide={hide}>            
            <HiddenDiv3Style>
                <p>Opa bom dia 3</p>
            </HiddenDiv3Style>
        </HiddenDivStyle>
    )
}