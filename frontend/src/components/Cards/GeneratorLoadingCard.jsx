import { Link } from 'react-router-dom';
import '../css/index.css'
import Card from './Card';

export default function GeneratorLoadingCard (){
    return (
    <Link to={``}>
        <Card 
            image={''}
            name={''}
            description={''}>
        </Card>
    </Link>
    )
}