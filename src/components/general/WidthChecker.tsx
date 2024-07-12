import { useEffect, useState } from "react"


const MobileSize = (size: number)=>{
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < size)

    useEffect(()=>{
        const handleScreen = ()=>{
            setIsMobile(window.innerWidth < size)
        }
        window.addEventListener('resize', handleScreen)

        return(()=>{
            window.removeEventListener('resize', handleScreen)
        })
    },[isMobile, size])

    return(isMobile? true: false)
}

export default MobileSize