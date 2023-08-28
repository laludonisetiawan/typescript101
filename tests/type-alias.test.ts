import {Category, Product} from "../src/type-alias";

describe('alias test', () => {
    it('should be alias type typescript', () => {
        const Category : Category = {
            id: "1",
            name: "doni"
        }

        const Product: Product = {
            id: "1",
            name: "redmi 10",
            price: 12000000,
            category: Category
        }

        console.info(Category);
        console.info(Product);
    });
})