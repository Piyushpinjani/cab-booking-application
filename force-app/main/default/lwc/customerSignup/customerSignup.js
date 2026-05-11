import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";
export default class CustomerSignup extends NavigationMixin(LightningElement) {
  showForm=false;
   
    handleSuccess(event)
    {

        //forms->default nature->loading
        //stops default form behavior
        event.preventDefault();


    const showToastEvt = new ShowToastEvent({
      title: "Success",
      message:
        "Sign up Successfully !! Welcome to Premium Cab Services",
        variant:"success"
    });

    this.dispatchEvent(showToastEvt);
  
  }

    
    handleSignUp()
    {
        this.showForm=true;
    }

    handleSubmit()
    {

      let cmpDef={componentDef:"c:customerSignin"};
      //convert obj to string
      //btoa->Encodes the JSON String into base 64 format->one.app framework
      
      let encodedDef=btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {

        url:"/one/one.app#"+encodedDef
      }
    });

    }

    
}