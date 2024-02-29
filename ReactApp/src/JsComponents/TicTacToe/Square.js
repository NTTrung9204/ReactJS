function Square({ onClick, index}) {
    return (
        <div Square_id={index} className="Square" onClick={onClick}>
            <div ChildSquare_id={index} className=""></div>
        </div>
    )
}

export default Square;