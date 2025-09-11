import '../css/index.css'

export default function NavCrumbs({navtarget}){
    if (navtarget === ''){
        return (
            <div className='browser-size m-auto pt-5 mb-5'>
            <h3>Generators</h3>
        </div>
        )
    }
    return (
        <div className='browser-size m-auto pt-5 mb-5'>
            <h3>Generators &gt; {navtarget}</h3>
        </div>
    )
}