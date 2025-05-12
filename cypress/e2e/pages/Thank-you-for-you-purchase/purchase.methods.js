import { ThankYouForYourPurchaseElements } from "./purchase.elements";

export class ThankYouForYourPurchaseMethods{
    static clcikOnOkButton(){
        ThankYouForYourPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed(){
        ThankYouForYourPurchaseElements.icons.greenCheckMark.should("exist");
    }
}