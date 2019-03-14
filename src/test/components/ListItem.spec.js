import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow } from "enzyme";
import { ListItem } from "./../../components/ListItem.js";

Enzyme.configure({ adapter: new Adapter() });

describe("testing ListItem component", () => {
    let wrapper;
    test("checking ListItem", () => {
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const wrapper = shallow(<ListItem result={data} />);

        const item = wrapper.find("div").at(0);
        expect(item.text()).toContain("Superman");
    });
});

describe("testing ListItem component", () => {
    let wrapper;
    test("checking deleteButton ", () => {
        const target = { preventDefault: jest.fn(), target: { value: "" } };
        const spy = jest.spyOn(ListItem.prototype, "handleDelete");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(
            <ListItem deleteData={() => {}} result={data} />
        );
        const deleteButton = component.find("button").at(1);
        deleteButton.simulate("click", target);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});

describe("testing ListItem component", () => {
    let wrapper;
    test("checking edit toggle button function call", () => {
        const target = { preventDefault: jest.fn(), target: { value: "" } };
        const spy = jest.spyOn(ListItem.prototype, "toggleEdit");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(<ListItem result={data} />);
        const toggleButton = component.find("button").at(0);
        toggleButton.simulate("click", target);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test("checking edit toggle button state change from true to false", () => {
        const target = { preventDefault: jest.fn(), target: { value: "" } };
        const spy = jest.spyOn(ListItem.prototype, "toggleEdit");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(<ListItem result={data} />);
        const toggleButton = component.find("button").at(0);
        component.setState({ edit: true });
        toggleButton.simulate("click", target);
        expect(component.state().edit).toEqual(false);
    });
    test("checking edit toggle button state change from false to true ", () => {
        const target = { preventDefault: jest.fn(), target: { value: "" } };
        const spy = jest.spyOn(ListItem.prototype, "toggleEdit");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(<ListItem result={data} />);
        const toggleButton = component.find("button").at(0);
        component.setState({ edit: false });
        toggleButton.simulate("click", target);
        expect(component.state().edit).toEqual(true);
    });
});


describe("testing ListItem component", () => {
    let wrapper;
    test("checking input text box state change", () => {
        const event = { preventDefault: jest.fn(), target: { value: "I am Batman" } };
        const spy = jest.spyOn(ListItem.prototype, "handleTextChange");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(
            <ListItem  result={data} />
        );
       
        component.instance().handleTextChange(event)
       expect(component.state().input).toEqual("I am Batman");
    });
});

describe("testing ListItem component", () => {
    let wrapper;
    test("checking enter button to change state edit from true to false", () => {
        const event = { preventDefault: jest.fn(), target: { value: "I am Batman" }, key: "Enter" };
        const spy = jest.spyOn(ListItem.prototype, "handleKeyPress");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(
            <ListItem updateData={() => {}} result={data} />
        );
       
        component.instance().handleKeyPress(event)
       expect(component.state().edit).toEqual(false);
    });
});

describe("testing ListItem component", () => {
    let wrapper;
    test("checking save button to change state edit from true to false", () => {
        const event = { preventDefault: jest.fn(), target: { value: "I am Batman", type: "submit" }, key: "Enter" };
        const spy = jest.spyOn(ListItem.prototype, "handleSave");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(
            <ListItem updateData={() => {}} result={data} />
        );
       
        component.instance().handleSave(event)
       expect(component.state().edit).toEqual(false);
    });
});

describe("testing ListItem component", () => {
    let wrapper;
    test("checking save button to trigger function call", () => {
        const event = { preventDefault: jest.fn(), target: { value: "I am Batman", type: "submit" }, key: "Enter" };
        const spy = jest.spyOn(ListItem.prototype, "handleSave");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(
            <ListItem updateData={() => {}} result={data} />
        );
       
        component.instance().handleSave(event)
       expect(component.state().edit).toEqual(false);
    });

     test("simulating check box function call", () => {
        const event = { preventDefault: jest.fn(), target: { value: "I am Batman", type: "checkbox", checked: true }, key: "Enter" };
        const spy = jest.spyOn(ListItem.prototype, "handleSave");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(
            <ListItem updateData={() => {}} result={data} />
        );
       
        var data= component.instance().handleSave(event)
       expect(data.item.done).toEqual(true);
    });

});

