const Index = ({wines, setMode, selectedWine, setSelectedWine}) => {

    const loaded = () => {
        return wines.map( (wine, index) => 
            <div key={wine._id} className='wine' 
                onClick={() => {setSelectedWine(index); setMode('show')}}>
                <img className={selectedWine === index && 'selected' } src={wine.image} alt={wine.image} />
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section className="index-section">
            <div className="index-container">
                <div className="wine-shelf">            
                    {wines ? loaded() : loading()}
                    <div className="logo add">
                        <div className="add" onClick={() => {setSelectedWine(null); setMode('create')}}>+</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index