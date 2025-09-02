import '../css/index.css'

function NavCrumbs({navtarget}){
    if (navtarget === ''){
        return (
            <div className='browser-size m-auto pt-5'>
            <h3>Generators</h3>
        </div>
        )
    }
    return (
        <div className='browser-size m-auto pt-5'>
            <h3>Generators &gt; {navtarget}</h3>
        </div>
    )
}

export default NavCrumbs