import { useState } from "react"

const Create = ({createWine}) => {

    const emptyForm = {name: '', image: '', countryOfOrigin: '', description: ''}

    const [form, setForm] = useState(emptyForm)

    const handleChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        createWine(form)
        setForm(emptyForm)
    }

    return (
        <div className='content-container'>
            <form onSubmit={handleSubmit} className="wine-form">
                <input type="text" value={form.name} name="name" placeholder="Name" onChange={handleChange} />
                <input type="text" value={form.image} name="image" placeholder="Image" onChange={handleChange} />
                <input type="text" value={form.countryOfOrigin} name="countryOfOrigin" placeholder="Country of Origin" onChange={handleChange} />
                <input type="text" value={form.description} name="description" placeholder="Description" onChange={handleChange} />
                <button type="submit" >Add Wine</button>
            </form>
        </div>
    )
}

export default Create