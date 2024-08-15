import PropTypes from 'prop-types'

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

Die.propTypes = {
    key: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.number,
    isHold: PropTypes.bool,
    holdDice: PropTypes.func
}