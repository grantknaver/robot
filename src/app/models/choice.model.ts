export class Choice {
    constructor(
        public choiceTitle: string,
        public choiceImg: string,
        public choiceDescription: string
    ) { }

    public static Translate(responseData: any) {
        return new Choice(
            responseData.choiceTitle,
            responseData.choiceImg,
            responseData.choiceDescription);
    }

}
