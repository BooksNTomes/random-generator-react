
export function InputContainer({label, children}){
    return (
        <>
            <div className="flex flex-col mb-5">
                <label>{label}</label>
                {children}
            </div>
        </>
    )
}

export function SelectContainer({label, options, onChange}){
    return (
        <>
            <div className="flex flex-col gap-1">
                <label>{label}</label>
                <select className="border-1 border-black/30 p-1 rounded min-w-[125px] max-w-[125px] min-h-[30px] max-h-[30px]"
                        onChange={onChange}>
                    {
                        options.map((options) => (
                            <option value={options.value}>{options.name}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}

export function ListContainer({handler}) {
    return (
        <div className="flex flex-col gap-1">
            <label>List</label>
            <button onClick={() => handler()} className="border-1 border-black/30 p-1 rounded min-w-[125px] max-w-[125px] min-h-[30px] max-h-[30px]"></button>
        </div>
    )
}