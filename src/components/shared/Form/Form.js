import React, { useState } from "react";
import InputType from "./InputType";

const Form = ({submitBtn,formTitle}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  return (
    <div>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <InputType
          labelText={"email"}
          labelFor={"forEmail"}
          inputType={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name={"email"}
        />
        <InputType
          labelText={"password"}
          labelFor={"forPassword"}
          inputType={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name={"password"}
        />
       <div className="d-flex">
        <button className="btn btn-primary" type="submit">{submitBtn}</button>
       </div>
      </form>
    </div>
  );
};

export default Form;
