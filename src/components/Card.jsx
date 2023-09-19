/* eslint-disable react/prop-types */


const Card = (props) => {
    return(
        <div className="card">
            <a href={props.videoLink}>
                <img src={props.image} width='250' height='200' alt="img not found"/>
            </a>
            <div>{props.name}</div>
        </div>
    );
};

export default Card;