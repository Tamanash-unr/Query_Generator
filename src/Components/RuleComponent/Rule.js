import "./Rule.css";
import { useState, useEffect } from "react";
import { GlobalData } from "../../App";
import { Select, MultiSelect, Number } from "../TypeComponents";

function Rule(){
    const [type, setType] = useState(null);
    const [selectedData, setSelectedData] = useState({});
    const { SampleSchema } = GlobalData();
    const schemaArr = Object.keys(SampleSchema);

    useEffect(() => {
    },[selectedData])

    function handleTypeChange(evt){
        const newType = evt.target.value;
        setType(newType);
    }

    function handleTypeSelect(data){
        setSelectedData(data);
    }

    function getTypeComponent(){
        let component = <></>;

        switch (type) {
            case "select":
                component = <Select data={selectedData} key={selectedData.key}/>
                break;
            case "multi_select":
                component = <MultiSelect data={selectedData} key={selectedData.key}/>
                break;
            case "string":
                break;
            case "number":
                component = <Number data={selectedData} key={selectedData.key}/>
                break;
            case "boolean":
                break;
            case "period":
                break;
            case "vintage":
                break;
            default:
                break;
        }
        
        return component;
    }

    return (
        <div className="rule">
            <div className="form-control">
                <select onChange={(evt) => handleTypeChange(evt)}>
                    <option selected disabled>Select Type..</option>
                    {
                        schemaArr.map((item) =>{
                            return (
                                <optgroup label={item}>
                                {
                                    SampleSchema[item].map((itemType)=>{
                                        return <option
                                                    value={itemType.type}
                                                    onClick={() => handleTypeSelect(itemType)}
                                                >
                                                    {itemType.label}
                                                </option>
                                    })
                                }
                                </optgroup>
                            )
                        })
                    }
                </select>
                {
                    getTypeComponent()
                }
            </div>
        </div>
    )
}

export default Rule;