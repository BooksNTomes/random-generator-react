import '../css/index.css'
import Card from './Card';

function GeneratorCard ({link, image, name, description}){
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

export default GeneratorCard;