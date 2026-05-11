import { LightningElement } from 'lwc';
import Cab_Reservation__c from '@salesforce/schema/Cab_Reservation__c';
import Name from '@salesforce/schema/Cab_Reservation__c.Name';
import CustomerName from '@salesforce/schema/Cab_Reservation__c.Customer_Name__c';
import AadharNumber from '@salesforce/schema/Cab_Reservation__c.Aadhar_Number__c';
import TravelDate from '@salesforce/schema/Cab_Reservation__c.Travel_Date_Time__c';
import Numberoftravelers from '@salesforce/schema/Cab_Reservation__c.Number_of_travelers__c';
import TravelFrom from '@salesforce/schema/Cab_Reservation__c.Travel_From__c';
import TravelTo from '@salesforce/schema/Cab_Reservation__c.Travel_To__c';
import Vehicle from '@salesforce/schema/Cab_Reservation__c.Vehicle__c';
import CustomerEmail from '@salesforce/schema/Cab_Reservation__c.Customer_Email__c';
import Driver from '@salesforce/schema/Cab_Reservation__c.Driver__c';
import DriverEmail from '@salesforce/schema/Cab_Reservation__c.Driver_Email__c';
import PricePerKm from '@salesforce/schema/Cab_Reservation__c.Price_Per_Km__c';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CabReservationForm extends LightningElement {
objectApiName=Cab_Reservation__c;
openModalPopup=false;
recordId;//Instance variable
fields=[Name,CustomerName,AadharNumber,TravelDate,Numberoftravelers,TravelFrom,TravelTo,Vehicle,CustomerEmail,Driver,DriverEmail,PricePerKm];

handleSubmit()
{
    const ShowToastevent = new ShowToastEvent({
      title: "Success",
      message:
        "Cab Booked",
        variant:"success"
    });
    this.dispatchEvent(ShowToastevent);



}
handleSuccess(event)
{

    this.recordId=event.detail.id;
    console.log("ID="+this.recordId);
    this.openModalPopup=true;
}
CloseModal()
{
    this.openModalPopup=false;
}

}