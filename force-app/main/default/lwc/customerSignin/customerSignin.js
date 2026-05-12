import { LightningElement } from 'lwc';
import validateCredentials from '@salesforce/apex/CabCustomerController.validateCredentials';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";

export default class CustomerSignin extends NavigationMixin(LightningElement) {
    usernameValue='';
    passwordValue='';

    handleUserName(event)
    {
        this.usernameValue=event.target.value;

    }
   
    handlepassword(event)
    {
        this.passwordValue=event.target.value;

    }

    handleLogin()
    {
        validateCredentials({username:this.usernameValue,password:this.passwordValue})
        .then(result=>{
            if(result)
            {
                //navigate to component
               
                let cmpDef={componentDef:"c:cabWizard"};
                      //convert obj to string
                      //btoa->Encodes the JSON String into base 64 format->one.app framework
                      
                      let encodedDef=btoa(JSON.stringify(cmpDef));
                        this[NavigationMixin.Navigate]({
                      type: "standard__webPage",
                      attributes: {
                
                        url:"/one/one.app#"+encodedDef
                      }
                    });
                

                     //Display Showtoast msg
                    const showToastEvt = new ShowToastEvent({
                    title: "Success",
                    message:"Sign In Successfully !! Welcome to Premium Cab Services",
                    variant:"success"
                    });

                    this.dispatchEvent(showToastEvt);
                    console.log(result);

            }
            else{
                //Display Showtoast error msg
                console.log(result);
                  const showToastEvt = new ShowToastEvent({
                    title: "Error",
                    message:"Invalid Username or Password",
                    variant:"error"
                    });

                    this.dispatchEvent(showToastEvt);


            }
        })


    }
}