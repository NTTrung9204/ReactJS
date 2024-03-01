function Square({onClick, index, value}) {
    return (
        <div Square_id={index} className="Square" onClick={onClick}>
            <div ChildSquare_id={index} className={value}></div>
        </div>
    )
}

export default Square;