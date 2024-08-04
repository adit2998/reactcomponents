function ProfileCard(props){
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img
                        src={props.image}
                        alt="Placeholder image"
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                
                    <div className="media-content">
                        <p className="title is-4">Hero: {props.superhero}</p>
                        <p className="subtitle is-6">Identity: {props.identity}</p>
                    </div>
                </div>                
            </div>
        </div>
        
        // <div>
        //     <img src={props.image} alt="Example" />
        //     <div>Hero: {props.superhero}.</div>
        //     <div>Identity: {props.identity}</div>
        // </div>
    )
}

export default ProfileCard;