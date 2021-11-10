import React from "react";
import {Story, Meta} from "@storybook/react";

import TextInput, { TextInputProps } from "../src/components/TextInput";

export default {
    title: "Components/TextInput",
    component: TextInput
} as Meta;

const Template:Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "name",
}

export const Label = Template.bind({});
Label.args = {
    label: "label",
}

export const Placeholder = Template.bind({});
Placeholder.args = {
    placeholder: "you@exemple.com",
}

export const Error = Template.bind({});
Error.args = {
    error: true,
    errorMessage: "Your password must be less than 4 characters.",
}

export const Optional = Template.bind({});
Optional.args = {
    optional: true,
}

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    readonly: true,
}
