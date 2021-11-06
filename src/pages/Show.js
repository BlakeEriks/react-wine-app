const Show = ({wine}) => {
    return (
        <div className="content-container">
            <div className="wine-show">
                <div className="info">
                    <h1>{wine.name}</h1>
                    <h2>{wine.countryOfOrigin}</h2>
                    <p>{wine.description}</p>
                </div>
                <img src={wine.image} alt={wine.image} />
            </div>
        </div>
    )
}

export default Show