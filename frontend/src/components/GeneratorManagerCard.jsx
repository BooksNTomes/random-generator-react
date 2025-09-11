import { Link } from 'react-router-dom';
import '../css/index.css'
import Card from './Card';

export default function GeneratorManagerCard ({link, image, name, description}){
    return (
    <Link to={link}>
        <Card 
            image={image}
            name={name}
            description={description}>
        </Card>
        <button>Delete</button>
    </Link>
    )
}