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
});
