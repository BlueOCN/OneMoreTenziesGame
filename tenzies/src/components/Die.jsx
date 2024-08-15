
function Die(props) {

    return (
        <div 
            className={`die ${props.isHold ? 'selected' : ''}`} 
            onClick={() => props.holdDice(props.id)}
        >
            <h2>{props.value}</h2>
        </div>
    )
}

export default Die