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
            <form onSubmit={handleSubmit} className="wine-show">
                <div className="info">
                    <h1>
                        <input type="text" value={form.name} name="name" placeholder="Name" onChange={handleChange} />
                    </h1>
                    <h2>
                        <input type="text" value={form.countryOfOrigin} name="countryOfOrigin" placeholder="Country of Origin" onChange={handleChange} />
                    </h2>
                    <textarea type="text" value={form.description} name="description" placeholder="Description" onChange={handleChange} />
                    <p>
                        <input type="text" value={form.image} name="image" placeholder="Image" onChange={handleChange} />
                    </p>
                    <button type="submit" >Add Wine</button>
                </div>
            </form>
        </div>
    )
}

export default Create