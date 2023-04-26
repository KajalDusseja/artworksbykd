import 'bulma/css/bulma.css';

function DisplayTile({image, imageTitle, price}) {
    return (
        <div className="tile is-ancestor">
            <div className="tile is-parent">
                 <article className="tile is-child box">
                    <img src={image} alt={imageTitle}/>
                    <p className="title">{imageTitle}</p>
                    <p className="subtitle">Price: {price}</p>
                </article>
            </div>
        </div>       
    );
}

export default DisplayTile;