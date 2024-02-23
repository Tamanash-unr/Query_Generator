import "./Group.css";
import { useEffect, useState } from "react";
import { GlobalData } from "../../App";
import Rule from "../RuleComponent/Rule";

function Group(props){
    const { updateFinalExpression, baseExpFormat } = GlobalData();
    const [groupCount, setGroupCount] = useState(0);
    const [groupObj, setGroupObj] = useState(baseExpFormat);
    let { updateParent, parentId, childId } = props;

    useEffect(()=>{
        if(childId >= 0){
            const tempObj = {...groupObj};
            tempObj.key = childId;
            setGroupObj(tempObj);
        }
    },[])

    useEffect(()=>{
        console.log(groupObj);
    },[groupObj]);

    function updateExpression(evt){
        const newExp = {...groupObj};
        newExp.combinator = evt.target.value;
        setGroupObj(newExp);
    }

    function getGroups(){
        let compArr = [];

        for(let i=0; i<groupCount ; i++){

            compArr.push(<Group key={i} parentId={childId} childId={i} />);
        }

        return compArr;
    }

    return (
        <div className="group">
            <select onChange={(evt) => updateExpression(evt)}>
                <option value="and">AND</option>
                <option value="or">OR</option>
            </select>
            <button onClick={() => setGroupCount(groupCount + 1)}>Group</button>
            <button>Rule</button>
            <Rule />
            {
                getGroups()
            }
        </div>
    );
}

export default Group;