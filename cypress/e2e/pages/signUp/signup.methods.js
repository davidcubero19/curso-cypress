import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignUpElements } from "./signup.element";

export class SignUpMethods{
    static insertUsername(username){
        SignUpElements.textboxes.username.invoke("val", username)
    }

    static insertPassword(password){
        SignUpElements.textboxes.password.invoke("val", password)
    }

    static clickOnSignupButton(){
        SignUpElements.buttons.signup.click()
    }

    static signup(username, password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignupButton();
    }

    static verifySignUpSuccessfulMessageIsDisplayed(){
        CommonPageMethods.verifyAlert('Sign up successful');
    }

    static verifyThatThisUserAlreadyExistsMessageIsDisplayed(){
        CommonPageMethods.verifyAlert("this user already exis");
    }
}