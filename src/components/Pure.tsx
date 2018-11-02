import React from "react"

export class PureClass extends React.PureComponent<any, any> {
    constructor(args: any) {
        super(args);
    }

    render() {
        return <div>{this.props.text}</div>
    }
}