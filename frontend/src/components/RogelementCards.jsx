import '../css/index.css'
import Card from './Card';

function RogelementCard ({link, image, name, description}){
    return (
    <a href={link}>
        <Card 
            image={image}
            name={name}
            description={description}>
        </Card>
    </a>
    )
}

export default RogelementCard;