import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { SignUpMethods } from "../pages/signUp/signup.methods";
import { Logger } from "../util/logger";

const user = CommonPageMethods.generateRandomString(10);
const contra = CommonPageMethods.generateRandomString(7)

describe (CommonPageData.testSuites.registroYAutenticacion, () => {
    it ("Registro de usuario válido", () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en sign up')
        CommonPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar los campos obligatorios con información válida')
        SignUpMethods.insertUsername(user);
        SignUpMethods.insertPassword(contra);

        Logger.stepNumber(4)
        Logger.step('Hacer click en sign up para registrar usuario')
        SignUpMethods.clickOnSignupButton;
        cy.wait(3000)
        Logger.verification("Verificar que se muestre el mensaje de sign up successful")
        SignUpMethods.verifySignUpSuccessfulMessageIsDisplayed();
    });
});

