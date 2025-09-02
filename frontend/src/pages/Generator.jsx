import NavCrumbs from '../components/NavCrumbs'
import '../css/index.css'

function Generator({generator}) {
    return(
        <div className='pb-20'>
            <NavCrumbs navtarget={''}></NavCrumbs>
            <div className="browser-size m-auto">
                <h2>{generator.name}</h2>
                <p>{generator.description}</p>
            </div>
        </div>
    )
}

export default Generator