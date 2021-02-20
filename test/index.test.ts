import { EdmV2, EdmV4 } from "../src";
describe('OData Primitive Types Test Suite', () => {

  it("should support import Edm Primitive Types objects", () => {
    expect(EdmV2).not.toBeUndefined();
    expect(EdmV4).not.toBeUndefined();

  });


});