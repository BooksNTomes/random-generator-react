import { useState } from "react"

export default function usePopup(){
    const [activePopup, setActivePopup] = useState();
    
    useEffect(() => {

    }, [activePopup])

    return {activePopup, setActivePopup}
}