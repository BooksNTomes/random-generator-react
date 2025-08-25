import RogelementCard from "../components/RogelementCard";

function Rogelements({rogelements}){
    const listRogelements = rogelements.map(rogelement => 
        <li><RogelementCard>{rogelement}</RogelementCard></li>
    )

    return (
        <>
            <Header></Header>
            <ul>{listRogelements}</ul>
            <Footer></Footer>
        </>
        )
}

export default Rogelements;