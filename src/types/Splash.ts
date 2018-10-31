export class Splash {
    constructor(public text?: string) {
        text = text || "DEFAULT";
    }

    static default(): Splash {
        return new Splash("DEFAULT");
    }
}