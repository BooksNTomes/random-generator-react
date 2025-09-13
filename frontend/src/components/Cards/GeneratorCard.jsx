import { Link } from 'react-router-dom';
import '../../css/index.css';
import Card from './Card';

export default function GeneratorCard ({generator}){
    return (
    <Link to={`/generators/${generator._id}`}>
        <Card 
            image={generator.image}
            name={generator.name}
            description={generator.description}>
        </Card>
    </Link>
    )
}