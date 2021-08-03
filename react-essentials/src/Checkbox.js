import { useReducer } from "react";


export function Checkbox() {
    const [checked, toggle] = useReducer(
        changeToggle
        ,
        false
      )
    
      function changeToggle(x){
        return !x;
      }

    return(
        <>
            <label htmlFor="checkbox">{checked ? 'checked' : 'not checked'}</label>
           <input type="checkbox" id="checkbox" value={checked} onChange={toggle} />

        </>
    )
}