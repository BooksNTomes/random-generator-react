import RogelementCard from "../components/RogelementCard";

function Rogelements({rogelements}){
    const listRogelements = rogelements.map(rogelement => 
        <li><RogelementCard>{rogelement}</RogelementCard></li>
    )

    return (
        <>
            <ul>{listRogelements}</ul>
        </>
        )
}

export default Rogelements;