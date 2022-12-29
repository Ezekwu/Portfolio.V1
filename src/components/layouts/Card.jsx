const Card = ({ name, img}) => {
    return (
        <div className="card">
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    )
}

export default Card