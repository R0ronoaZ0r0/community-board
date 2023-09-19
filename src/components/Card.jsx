/* eslint-disable react/prop-types */


const Card = (props) => {
    return(
        <div className="card">
            <a href={props.videoLink}>
                <img src={props.image} alt="img not found"/>
            </a>
            <h3>{props.name}</h3>
            <h3>{props.description}</h3>
        </div>
    );
};

export default Card;