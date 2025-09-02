import NavCrumbs from '../components/NavCrumbs'
import '../css/index.css'

function Generator() {
    return(
        <div className='pb-20'>
            <NavCrumbs navtarget={''}></NavCrumbs>
            <div className="browser-size m-auto">
                <h2>generatorName</h2>
                <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and </p>
            </div>
            <div className="flex gap-5 browser-size m-auto p-5 border-1 border-black/15 rounded-[5px] shadow-md">
                <div className="w-1/2">
                    <h2>Config</h2>
                    <div className="p-5 border-1 border-black/5 rounded-[5px] shadow-sm">
                        <h4 className="mb-3 embolden">Algorithm Config:</h4>
                        <div className="ml-5">
                            <h4 className="mb-5">Algorithm: <span>
                                <select className="border-1 border-black/5 rounded-[5px] p-1 hover:bg-black/2">
                                    <option value="default">Default - Math.random()</option>
                                </select>
                            </span></h4>
                        </div>
                        <h4 className="mb-3 embolden">List Config:</h4>
                        <div className="ml-5">
                            <h4 className="mb-5">Min: <span>
                                <select className="border-1 border-black/5 rounded-[5px] p-1 hover:bg-black/2">
                                    <option value="default">1</option>
                                </select>
                            </span></h4>
                            <h5 className="mb-5">Max: <span>
                                <select className="border-1 border-black/5 rounded-[5px] p-1 hover:bg-black/2">
                                    <option value="default">100</option>
                                </select>
                            </span></h5>
                            <h6 className="mb-5">Amount: <span>
                                <select className="border-1 border-black/5 rounded-[5px] p-1 hover:bg-black/2">
                                    <option value="default">1</option>
                                </select>
                            </span></h6>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <h2>Output</h2>
                    <div className="p-5 h-7/10 border-1 border-black/5 rounded-[5px] shadow-sm">
                        <h3>37</h3>
                    </div>
                    <button className="ml-12 p-3 w-4/5 border-1 border-black/25 rounded-[5px] shadow-sm hover:bg-black/2 active:bg-black/4">Generate</button>
                </div>
            </div>
        </div>
    )
}

export default Generator