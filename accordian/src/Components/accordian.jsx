// single selection 
// multiple selection

import { useState } from "react";
import Data from './data'
import './styles.css'

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple,setMultiple]  = useState([]);

    function singleClickHandle(id) {
        console.log(id);
        setSelected(id === selected ? null : id)
    }

    function multiClickHandle(id) {
        if(multiple.indexOf(id)===-1){
            let cpyMultiple = [...multiple,id];
            setMultiple(cpyMultiple)
        }else{
            let removeId = multiple.filter((e)=> {
                if(id!=e){
                    return e
                }
            })
            setMultiple(removeId);
        }
        const indexOfCurrentid = multiple.indexOf(id);
         
        console.log(indexOfCurrentid);
        console.log(multiple)
    }

    return (<>
        <div className="wrapper">
            <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Anable Multi selection </button>

            <div className="accordian">
                {
                    Data && Data.length > 0 ?
                        Data.map(dataItem => {
                            return <div className="item" key={dataItem.id}>
                                <div className="title" onClick={() => enableMultiSelection ? multiClickHandle(dataItem.id) : singleClickHandle(dataItem.id)}>
                                    <h3 >{dataItem.question}</h3>
                                    <span >+</span>
                                </div>
                                
                                {  enableMultiSelection ? (multiple.indexOf(dataItem.id)!==-1 ? <p>{dataItem.answer}</p> :null)  : selected===dataItem.id && <p className="content">{dataItem.answer}</p>}
                            </div>
                        }) :
                        <div>No Data Found</div>

                }
            </div>
        </div>

    </>)

}

export default Accordian; 