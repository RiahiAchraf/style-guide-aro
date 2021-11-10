import React from "react";
import { Meta, Story } from "@storybook/react";

import Button, { ButtonProps } from "../src/components/Button"

export default {
    title: "Components/Button",
    component: Button
} as Meta;

const Template:Story<ButtonProps> = (args) => <Button{...args} />

export const Primary = Template.bind({});
Primary.args = {
    buttonType: "primary",
    buttonSize: "large",
}

export const Secondary = Template.bind({});
Secondary.args = {
    buttonType: "secondary",
    buttonSize: "large",
}

export const White = Template.bind({});
White.args = {
    buttonType: "white",
    buttonSize: "large"
}

export const Round = Template.bind({});
Round.args = {
    buttonType: "round",
    buttonSize: "large"
}