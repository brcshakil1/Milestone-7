import PropTypes from 'prop-types'; 
import './Bottle.css'

const Bottle = ({bottle, handleClickPurchase}) => {
    const {name, img, price} = bottle
    return (
        <div className='bottle'>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={()=>handleClickPurchase(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleClickPurchase: PropTypes.func.isRequired
}

export default Bottle;