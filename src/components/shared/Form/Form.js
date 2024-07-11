import React, { useState } from "react";
import InputType from "./InputType";
import RoleRadio from "./RoleRadio";

const Form = ({submitBtn,formTitle,formType}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [role,setRole] = useState('')
  const [name,setName] = useState('')
  const [organization,setOrganization] = useState('')
  const [hospital,setHospital] = useState('')

  const [website,setWebsite] = useState('')
  const [address,setAddress] = useState('')
  const [phone,setPhone] = useState('')
  return (
    <div>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
      {/* switch statement for login and register forms */}
      <div className="d-flex">
        <RoleRadio role="donar" setRole={setRole} lableInput="Donar" id="donarRadio" htmlFor="donarRadio" defaultChecked/>
        <RoleRadio role="admin" setRole={setRole} lableInput="Admin" id="adminRadio" htmlFor="adminRadio"/>
        <RoleRadio role="organization" setRole={setRole} lableInput="Organization" id="organizationRadio" htmlFor="organizationRadio"/>
        <RoleRadio role="hospital" setRole={setRole} lableInput="Hospital" id="hospitalRadio" htmlFor="hospitalRadio"/>
      </div>
        {(()=>{
          switch(true){
            case formType === 'login':{
              return (
                <>
                <InputType
          labelText={"Email"}
          labelFor={"forEmail"}
          inputType={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name={"email"}
        />
        <InputType
          labelText={"Password"}
          labelFor={"forPassword"}
          inputType={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name={"password"}
        />
        </>
      )}
            case formType === 'register' : {
              return (
                <>
           {
            (role === "admin" || role === "donar" )&& (
              <InputType
          labelText={"Name"}
          labelFor={"forName"}
          inputType={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          name={"name"}
        />
            )
           }
                <InputType
          labelText={"Email"}
          labelFor={"forEmail"}
          inputType={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name={"email"}
        />
        <InputType
          labelText={"Password"}
          labelFor={"forPassword"}
          inputType={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name={"password"}
        />
        {
          role === 'organization' &&  <InputType
          labelText={"Organization Name"}
          labelFor={"forOrganization"}
          inputType={"text"}
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          name={"organization"}
        />
        }
       {
        role === 'hospital' && <InputType
          labelText={"Hospital Name"}
          labelFor={"forHospital"}
          inputType={"text"}
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
          name={"hospital"}
        />
       }
        
        <InputType
          labelText={"Website"}
          labelFor={"forWebsite"}
          inputType={"text"}
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          name={"website"}
        />
        <InputType
          labelText={"Address"}
          labelFor={"forAddress"}
          inputType={"text"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          name={"address"}
        />
        <InputType
          labelText={"Phone"}
          labelFor={"forPhone"}
          inputType={"text"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name={"phone"}
        />

                </>
              )
            }
            default : {
              return (
                <div>error in loading form</div>
              )
            }
          }
        })()}
              <div className="d-flex">
        <button className="btn btn-primary" type="submit">{submitBtn}</button>
       </div>
      </form>
    </div>
  );
};

export default Form;
