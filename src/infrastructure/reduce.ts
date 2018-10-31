import { IAction } from "../types/ForRedux"
import { Root } from '../types/Root'
import { Splash } from "../types/Splash";

function computeChanges(prev: Root, action: IAction): any {
    if (action.type === "change-splash") {
        return {
            splash: new Splash(action.args)
        };
    }

    return {};
}

export function reduce(prev: Root, action: any): Root {
    if (!prev) return Root.default();

    const prevRoot = Root.make(prev);

    const changes = computeChanges(prevRoot, action)

    const newRoot = prevRoot.cloneWith(changes);

    return newRoot;
}