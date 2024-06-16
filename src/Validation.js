export const  validateInput = (formInput)=>{
    let error = {};
    let valid = true;

    if(!formInput.name){
        error.name = "This field is required";
        valid = false;
    }
    if(!formInput.email){
        error.email = "This field is required";
        valid = false;
    }else if(!/\S+@\S+\.\S+/.test(formInput.email)){
        
        error.email = "Invalid input";
    }
    if(!formInput.phoneNumber){
        error.phoneNumber = "This field is required";
        valid = false;
    }else if(!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(formInput.phoneNumber)){

        error.phoneNumber = "Invalid input"
    }
    return {error, valid}
};
