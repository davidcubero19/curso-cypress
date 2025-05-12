import { HomeElements } from "./home.elements";

export class HomeMethods{
   static clickOnPhonesOption(){
    HomeElements.categories.phone.click();
   } 

   static clickOnPhonesOption(){
    HomeElements.categories.laptops.click();
   } 

   static clickOnPhonesOption(){
    HomeElements.categories.monitors.click();
   } 

   static clickOnPhonesOption(productName){
    HomeElements.product(productName).click();
   } 

}