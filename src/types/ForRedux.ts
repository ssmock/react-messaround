export interface IAction {
    type: string;
    args?: any;
}

export interface IDispatching {
    dispatch: (arg: IAction) => void;
}

export class BaseDispatching implements IDispatching {
    dispatch(arg: IAction) {
        // Do nothing. This exists solely for type-checking within components.
    }
}