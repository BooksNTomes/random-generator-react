import '../../css/index.css';
import Card from './Card';

// Todos
// onclick -> open update generator modal
// onclick delete -> open delete generator modal
// Different Card altogether

export default function GeneratorManagerCard ({generator}){
    return (
    <>
        <button onClick={() => console.log("WELLL!")}>
            <Card 
                image={generator.image}
                name={generator.name}
                description={generator.description}>
            </Card>
        </button>
        <button onClick={() => console.log("CLICKED!")}>Delete</button>
    </>
    )
}