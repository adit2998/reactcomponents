function ProfileCard(props){
    return (
        <div className="card">
            <div className="card-image">
                <figure class="image is-1by1">
                    <img
                        src={props.image}
                        alt="Placeholder image"
                    />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                
                    <div class="media-content">
                        <p class="title is-4">Hero: {props.superhero}</p>
                        <p class="subtitle is-6">Identity: {props.identity}</p>
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