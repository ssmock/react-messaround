import { Splash } from "./Splash";
import { BaseDispatching } from "./ForRedux";

export class Root extends BaseDispatching {
    constructor(public splash?: Splash) {
        super();
    }

    cloneWith(args: any): Root {
        return Object.assign({}, this, args);
    }

    static default(): Root {
        return new Root(
            new Splash("Default splash")
        );
    }

    static make(args: any): Root {
        return Object.assign(new Root(), args);
    }
}