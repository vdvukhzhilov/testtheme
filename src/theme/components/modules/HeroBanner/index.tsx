import {
  ChoiceField,
  FieldGroup,
  ModuleFields,
  TextField,
  RichTextField,
  RepeatedFieldGroup,
} from "@hubspot/cms-components/fields";
import { ModuleProps, RichText } from "@hubspot/cms-components";
import HeroBannerFieldsType from "./fields.type.js";
import { Heading } from "../../ui/kit/Heading";
import { contentFields as buttonFields } from "../../modules/Button";
import { Component as Button } from "../Button";

export function Component(props: ModuleProps<HeroBannerFieldsType>) {
  const { fieldValues } = props;
  const { heading, actions } = fieldValues;

  return (
    <div className="allure-bg-primary container mx-auto py-16">
      <div className="grid grid-cols-[7fr_6fr]">
        <div className="">
          <Heading
            level="h1"
            className="text-primary-900 max-w-[590px]"
            size={heading.size}
            variant={heading.variant}
          >
            {heading.text}
          </Heading>
          <p className="text-secondary-700 max-w-[520px] mt-6">
            <RichText fieldPath="bannerContent.richTextContentHTML" tag="p" />
          </p>
          <div className="flex gap-4 mt-8 empty:hidden">
            {actions.primary.href && (
              <Button
                fieldValues={{ ...actions.primary, variant: "primary" }}
              />
            )}
            {actions.secondary.href && (
              <Button
                fieldValues={{ ...actions.secondary, variant: "secondary" }}
              />
            )}
          </div>
        </div>
        <div className="">
          <img
            src="https://qameta.io/assets/start_screen.a4566c8d.svg"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export const meta = {
  label: "Hero Banner",
  noWrapper: true,
};

export const fields = (
  <ModuleFields>
    <FieldGroup name="heading" label="Heading">
      <TextField
        name="text"
        label="Text"
        default="Full-stack Test Management focused on automation, aligned with DevOps"
        required
      />
      <ChoiceField
        name="size"
        label="Size"
        display="select"
        required
        choices={[
          ["sm", "Small"],
          ["md", "Medium"],
          ["lg", "Large"],
          ["xl", "Extra Large"],
          ["2xl", "2X Large"],
        ]}
        default="lg"
      />
      <ChoiceField
        name="variant"
        label="Variant"
        display="select"
        required
        choices={[
          ["regular", "Regular"],
          ["medium", "Medium"],
          ["semibold", "Semibold"],
          ["bold", "Bold"],
        ]}
        default="bold"
      />
    </FieldGroup>
    <FieldGroup
      name="bannerContent"
      label="Orchestrate and keep control of your manual and automation testing: import any results from any source, integrate seamlessly with any CI platform, track tests, and report failures effortlessly."
    >
      <RichTextField
        name="richTextContentHTML"
        label="Text"
        default=""
        enabledFeatures={["bold", "italic"]}
      />
    </FieldGroup>
    <FieldGroup name="actions" label="Actions">
      <FieldGroup name="primary" label="Primary" required={false}>
        {buttonFields}
      </FieldGroup>
      <FieldGroup name="secondary" label="Secondary" required={false}>
        {buttonFields}
      </FieldGroup>
    </FieldGroup>
  </ModuleFields>
);
