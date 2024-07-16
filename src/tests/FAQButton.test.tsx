import { fireEvent, render,screen } from "@testing-library/react"
import { FAQ } from "../components/body/FAQ"

describe('Action Button',()=>{
    it('Should show a hidden div',()=>{
        render (<FAQ />)
        const button = screen.getByText(/vocês vendem produtos para pet?/i)
        fireEvent.click(button)
        expect(button).toBeInTheDocument()
            
        const buttonText = screen.getByText(/Sim, oferecemos uma seleção de produtos de alta qualidade/i)
        expect(buttonText).toBeInTheDocument()
    })
})