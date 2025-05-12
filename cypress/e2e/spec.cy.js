import {LoginMethods} from './pages/login/login.methods';
import { Logger } from "./util/logger";

describe('template spec', () => {
  it('passes', () => {
    
    const usuario = "random01";
    const password = "random01"

    Logger.stepNumber(1)
    Logger.step("Navigate to Demoblaze page")
    cy.visit("https://www.demoblaze.com/cart.html")

    Logger.stepNumber(2)
    Logger.step("Click on Login link")
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
    Logger.step(`Login with this credentials: "${usuario}/${password}"`)
    LoginMethods.login(usuario, password)
    Logger.verification(`The Home should show "Welcome ${usuario}" text`)

    cy.get('a#nameofuser').should('contain.text', usuario)
  })
})