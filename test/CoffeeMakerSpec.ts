/* tslint:disable:no-unused-expression */
import {expect} from "chai";
import CoffeeMaker from "../src/CoffeeMaker";
import {CoffeeKind} from "../src/CoffeeMaker";

enum CupSize {
    Small = 200,
    Medium = 400,
    Large = 600,
}

describe("CoffeeMaker", () => {
    let brewer: CoffeeMaker;

    before(() => {
        brewer = new CoffeeMaker();
    });

    it("Should brew a small cup of medium roast coffee", () => {
        let result: any;
        try {
            result = brewer.brew(CupSize.Small, CoffeeKind.Medium);
        } catch (err) {
            result = err;
        } finally {
            expect(result).to.be.undefined;
        }
    });

    it("Should brew a small cup of coffee when a small cup is requested");
    it("Should send a request and turn on refill light if hopper < 30%");
    it("Should construct machine with unique serial number");
    it("Should only refill when machine is not brewing");
    it("Should only allow maintenance when machine is not brewing");
    it("Should not brew when machine is already brewing");
    it("Should turn on maintenance light and send request for maintenance");
});
