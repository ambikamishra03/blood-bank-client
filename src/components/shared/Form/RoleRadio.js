import React from 'react'

const RoleRadio = ({role,setRole,lableInput,id,check}) => {
  return (
    <div>
      <div className="form-check ms-2">
          <input type="radio" className="form-check-input"
           name="role"
           id={id}
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            defaultChecked={check}
           />
           <label htmlFor={id} className="form-check-label">
            {lableInput}
           </label>
        </div>
    </div>
  )
}

export default RoleRadio
