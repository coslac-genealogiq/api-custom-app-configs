import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CustomAppConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="logo" source="logo" />
        <TextInput label="name" source="name" />
        <TextInput label="primaryColor" source="primaryColor" />
        <TextInput label="secondaryColor" source="secondaryColor" />
        <TextInput label="tertiaryColor" source="tertiaryColor" />
      </SimpleForm>
    </Edit>
  );
};
