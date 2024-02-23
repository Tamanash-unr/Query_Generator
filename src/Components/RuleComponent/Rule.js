import { useState } from "react";
import { GlobalData } from "../../App";

function Rule(){
    const [type, setType] = useState(null);
    const [selectedData, setSelectedData] = useState({});
    const { SampleSchema } = GlobalData();
    const schemaArr = Object.keys(SampleSchema);

    function handleTypeChange(evt){
        const newType = evt.target.value;
        setType(newType);
    }

    function handleTypeSelect(data){
        setSelectedData(data);
    }

    function getTypeComponent(){
        switch (type) {
            case "select":
                break;
            case "multi-select":
                break;
            case "string":
                break;
            case "number":
                break;
            case "boolean":
                break;
            case "period":
                break;
            case "vintage":
                break;
            default:
                return <></>;
        }
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
                                        return <option value={itemType.type} onClick={() => handleTypeSelect(itemType)}>{itemType.label}</option>
                                    })
                                }
                                </optgroup>
                            )
                        })
                    }
                </select>
                <input type="text" placeholder="Sample"/>
                <input type="text" placeholder="Sample"/>
            </div>
        </div>
    )
}

export default Rule;