import { Choice } from './choice.model';

export class Category {

    constructor(
        public categoryTitle: string,
        public categoryChoices: Choice[],
    ) { }

    public static Translate(responseData: any) {
        return new Category(
            responseData.categoryTitle,
            responseData.categoryChoices);
    }

}
