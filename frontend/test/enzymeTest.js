/**
 * enzymeSimulateTest.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 29 Apr 2016
 */

import React, { Component } from "react";
import { mount } from "enzyme";
import { expect } from "chai";

function IncrementButton(props) {
    return <button onClick={props.onClick}>Increment</button>;
}

class Foo extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <div className={`clicks-${count}`}>
                    {count} clicks
                </div>
                <IncrementButton onClick={() => this.setState({ count: count + 1 })} />
            </div>
        );
    }
}

const wrapper = mount(<Foo />);

expect(wrapper.find(".clicks-0").length).to.equal(1);
wrapper.find("IncrementButton").simulate("click");
expect(wrapper.find(".clicks-1").length).to.equal(1);
