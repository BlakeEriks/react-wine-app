import { useEffect, useState } from "react"

const Show = ({wine, updateWine, deleteWine}) => {

    const [mode, setMode] = useState('show')
    const [editForm, setEditForm] = useState(wine)

    useEffect( () => {
        setEditForm(wine)
        setMode('show')
    }, [wine])

    const handleChange = event => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        updateWine(editForm)
    }

    const renderShow = () => {
        return (
            <div className="content-container">
                <div className="wine-show">
                    <div className="info">
                        <h1>{wine.name}</h1>
                        <h2>{wine.countryOfOrigin}</h2>
                        <p>{wine.description}</p>
                    </div>
                    <div className='display'>
                        <img src={wine.image} alt={wine.image} />
                        <div className="buttons">
                            <button onClick={() => setMode('edit')}>Edit</button>
                            <button onClick={() => deleteWine(wine)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderEdit = () => {
        return (
            <div className="content-container">
                <form onSubmit={handleSubmit} className="wine-show">
                    <div className="info">
                        <h1>
                            <input type="text" value={editForm.name} name="name" placeholder="Name" onChange={handleChange} />
                        </h1>
                        <h2>
                            <input type="text" value={editForm.countryOfOrigin} name="countryOfOrigin" placeholder="Country of Origin" onChange={handleChange} />
                        </h2>
                        <textarea type="text" value={editForm.description} name="description" placeholder="Description" onChange={handleChange} />
                        <p>
                            <input type="text" value={editForm.image} name="image" placeholder="Image" onChange={handleChange} />
                        </p>
                        <button type="submit" >Update</button>
                    </div>
                </form>
            </div>
        )
    }

    return mode === 'edit' ? renderEdit() : renderShow()
}

export default Show