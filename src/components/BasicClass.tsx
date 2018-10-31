import React, { Component } from "react";

export class BasicClass extends Component<any, any> {
    constructor(args: any) {
        super(args);
        
        this.state = {
            initialText: args.initialText
        }
    }

    render() {
        return <div>{this.state.initialText}</div>
    }
}