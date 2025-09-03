import NavCrumbs from '../components/NavCrumbs'
import '../css/index.css'

function Generator({generator}) {
    return(
        <div className='pb-20 full-bottom browser-size m-auto'>
            <NavCrumbs navtarget={''}></NavCrumbs>
            <div>
                <h2>{generator.name}</h2>
                <p>{generator.description}</p>
            </div>
            
            <></>

        </div>
    )
}

export default Generator