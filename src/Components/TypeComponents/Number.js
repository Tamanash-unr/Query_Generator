function Number(props){
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
           <input type="number" id={`${data.key}.number`} className="no-spinners" value={0}/>
           {
                data.value_suffix && <label htmlFor={`${data.key}.number`}>{data.value_suffix}</label>
           }
        </div>
    )
}

export default Number;