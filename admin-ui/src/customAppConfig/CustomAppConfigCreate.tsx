import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CustomAppConfigCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="logo" source="logo" />
        <TextInput label="name" source="name" />
        <TextInput label="primaryColor" source="primaryColor" />
        <TextInput label="secondaryColor" source="secondaryColor" />
        <TextInput label="tertiaryColor" source="tertiaryColor" />
      </SimpleForm>
    </Create>
  );
};
