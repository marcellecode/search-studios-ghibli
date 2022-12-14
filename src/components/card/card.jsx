import './card.css';

const Card = (props) => {
    return(
        <div className="card-container">
            {props.urlImage ? <img src={props.urlImage} alt={props.title} className="card-image" /> : ''}
            <h3 className="card-title">{props.title}</h3>
            {props.subtitle ? <h4 className="card-subtitle"> {props.subtitle} </h4>: ''}
            {props.description ? <h5 className="card-description"> {props.description} </h5>: ''}
        </div>
    );
}

export default Card;