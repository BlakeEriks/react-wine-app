import { useEffect, useState } from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"
import Create from "./Create"

const Main = () => {

    const [wines, setWines] = useState(null)
    const [mode, setMode] = useState('create')
    const [selectedWine, setSelectedWine] = useState(0)

    const URL = 'https://express-react-wine.herokuapp.com/wines'

    const getWines = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setWines(data)
    }

    const createWine = async (wine) => {
        await fetch(URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(wine)
        })

        getWines()
    }

    useEffect( () => getWines(), [])

    return (
        <main>
            <Index wines={wines} selectedWine={selectedWine} setSelectedWine={setSelectedWine} setMode={setMode}/>
            {mode === 'show' &&
            <Show wine={wines[selectedWine]} />}
            {mode === 'create' &&
            <Create  createWine={createWine}/>
            }
        </main>
    )
}

export default Main