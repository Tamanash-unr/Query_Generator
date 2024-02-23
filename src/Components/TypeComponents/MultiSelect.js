function MultiSelect(props){
    const {data} = props;

    return (
        <div className="type">
            <select>
            {   
                data.operators &&
                data.operators.map((operator) => {
                    return <option key={`${data.key}.${operator}`} value={operator}>{operator}</option>
                })
            }
           </select>
            {   
                data.options &&
                data.options.map((option) => {
                    return (
                        <>
                            <input type="checkbox" id={`${data.key}.${option}`} value={option} />
                            <label htmlFor={`${data.key}.${option}`}>{option}</label>
                        </>
                    )
                })
            }
        </div>
    )
}

export default MultiSelect;