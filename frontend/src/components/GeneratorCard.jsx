import { Link } from 'react-router-dom';
import '../css/index.css'
import Card from './Card';

function GeneratorCard ({link, image, name, description}){
    return (
    <Link to={link}>
        <Card 
            image={image}
            name={name}
            description={description}>
        </Card>
    </Link>
    )
}

export default GeneratorCard;