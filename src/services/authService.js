export const handleLogin = (e,email,password,role) =>{
e.preventDefault();
try {
    if(!role || !email || !password ){
        alert("please provide all fields")
    }
    console.log("login",e,email,password,role);
} catch (error) {
    console.log(error);
}
}



export const handleRegister = (e,name,role,email,password,organization,hospital,website,address,phone) =>{
    e.preventDefault();
    try {
        if(!role || !email || !password){
            alert("please provide all fields")
        }
    console.log("register",e,name,role,email,password,organization,hospital,website,address,phone);
    } catch (error) {
        console.log(error);
    }
}