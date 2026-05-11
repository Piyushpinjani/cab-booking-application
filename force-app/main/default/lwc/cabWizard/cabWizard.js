import { LightningElement } from 'lwc';

export default class CabWizard extends LightningElement {
    currentStep='1';//Instance variable
    handleclick(event)
    {
        this.currentStep=event.target.value;
        console.log(this.currentStep);
    }

    get isStepOne()
    {
        return this.currentStep === "1";
    }

    get isStepTwo()
    {
        return this.currentStep === "2";
    }

    get isStepThree()
    {
        return this.currentStep === "3";
    }

    handleBackClick()
    {
        if(this.currentStep=="3")
        {
            this.currentStep="2";
        }

        else if(this.currentStep=="2")
        {
            this.currentStep="1";
        }
    }

    handleNextClick()
    {
        if(this.currentStep=="1")
        {
            this.currentStep="2";
        }

        else if(this.currentStep=="2")
        {
            this.currentStep="3";
        }

    }

    handleFinishClick()
    {
         if(this.currentStep=="3")
        {
            this.currentStep="1";
        }

    }

    get handleBack()
    {
        return this.currentStep!='1';

    }

      get handleNext()
    {
        return this.currentStep!='3';

    }

      get handleFinish()
    {
        return this.currentStep==='3';
    }
}