/* eslint-disable react/prop-types */
import YoutubeThumbnails from "./YoutubeThumbnails";

const Card = (props) => {
    return(
        <div className="card">

            <a href={props.videoLink}>
                <YoutubeThumbnails
                    videoId={props.videoId}
                />
            </a>
            <div>{props.name}</div>
        </div>
    );
};

export default Card;