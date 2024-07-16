import { cleanup, render, screen } from "@testing-library/react"
import Menu from "../components/header/Menu"

afterEach(()=>{
    cleanup()
})
const WidthChecker = (width:number)=>{
    window.innerWidth = width
    window.dispatchEvent( new Event('resize'))
}

describe('Action Button',()=>{
    it('Should show "vantagens" on screen on desktop',()=>{
        WidthChecker(769)
        render(<Menu />)
        expect(screen.getByText(/vantagens/i)).toBeVisible()

    })
    it('should not show "vantagens" on screen on mobile',()=>{
        WidthChecker(27)
        render(<Menu />)        
        expect(screen.queryByText(/vantagens/i)).not.toBeVisible()
    })
})