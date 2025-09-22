
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

export function SelectContainer({name, label, options, onChange, defaultValue="", disabled=false}){
    return (
        <>
            <div className="flex flex-col gap-1">
                <label>{label}</label>
                <select name={name} className="border-1 border-black/30 p-1 rounded min-w-[125px] max-w-[125px] min-h-[30px] max-h-[30px]"
                        onChange={onChange}
                        defaultValue={defaultValue}
                        disabled={disabled}>
                        <option key="SELECT" value="">Select {label}</option>
                    {
                        options.map((options, index) => (
                            <option key={index} value={options.value}>{options.name}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}

export function ListContainer({handler, disabled=false}) {
    return (
        <div className="flex flex-col gap-1">
            <label>List</label>
            <button disabled={disabled} onClick={() => handler()} className="border-1 border-black/30 p-1 rounded min-w-[125px] max-w-[125px] min-h-[30px] max-h-[30px]"></button>
        </div>
    )
}