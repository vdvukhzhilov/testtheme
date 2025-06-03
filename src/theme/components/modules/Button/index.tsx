import {
  ChoiceField,
  LinkField,
  ModuleFields,
  TextField,
} from "@hubspot/cms-components/fields";
import { ModuleProps } from "@hubspot/cms-components";
import ButtonFieldsType from "./fields.type.js";
import { Link } from "../../ui/kit/Button/index.js";

export function Component(props: ModuleProps<ButtonFieldsType>) {
  const { fieldValues } = props;

  return (
    <Link
      variant={fieldValues.variant}
      size={fieldValues.size}
      href={fieldValues.href.url?.href}
    >
      {fieldValues.text}
    </Link>
  );
}

export const meta = {
  label: "Button",
  noWrapper: true,
};

export const contentFields = (
  <>
    <TextField name="text" label="Label" default="Button" required />
    <LinkField
      label="Link"
      name="href"
      supportedTypes={[
        "EXTERNAL",
        "CONTENT",
        "EMAIL_ADDRESS",
        "CALL_TO_ACTION",
      ]}
      required
      default={{
        open_in_new_tab: false,
      }}
    />
    <ChoiceField
      label="Variant"
      name="variant"
      display="select"
      choices={[
        ["primary", "Primary"],
        ["secondary", "Secondary"],
        ["link", "Link"],
      ]}
      required
      default="primary"
    />
    <ChoiceField
      label="Size"
      name="size"
      display="select"
      required
      choices={[
        ["sm", "Small"],
        ["md", "Medium"],
        ["lg", "Large"],
        ["xl", "Extra Large"],
        ["2xl", "2X Large"],
      ]}
      default="md"
    />
  </>
);

export const fields = <ModuleFields>{contentFields}</ModuleFields>;
