import { Island } from "@hubspot/cms-components";
import {
  BooleanField,
  FieldGroup,
  LinkField,
  LogoField,
  MenuField,
  ModuleFields,
  TextField,
} from "@hubspot/cms-components/fields";
import SiteHeaderActions from "./islands/Actions?island";
import SiteHeaderLogo from "./islands/Logo?island";
import NavigationMenuIsland from "./islands/NavigationMenu?island";
import type { SiteHeaderModuleProps } from "./types";

export const meta = {
  label: "SiteHeader",
  noWrapper: true,
};

export const hublDataTemplate = `
  {% set hublData = {
      "navigation": menu(module.menu, "site_root"),
      "companyName": branding_company_name,
      "logoLink": brand_settings.logo.link,
      "defaultLogo": {
        "src": brand_settings.logo.src,
        "alt": brand_settings.logo.alt,
        "width": brand_settings.logo.width,
        "height": brand_settings.logo.height
      },
      "isInEditor": is_in_editor
    }
  %}
`;

export function Component(props: SiteHeaderModuleProps) {
  if (!props.hublData) {
    return null;
  }

  return (
    <div className="container flex items-center mx-auto px-8 py-5 min-h-20 allure-bg-primary">
      <Island
        module={SiteHeaderLogo}
        {...props}
        wrapperClassName="mr-auto pr-4"
      />
      <Island
        module={NavigationMenuIsland}
        navigation={props.hublData.navigation}
      />
      <Island
        module={SiteHeaderActions}
        {...props}
        wrapperClassName="ml-auto pl-4"
      />
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <FieldGroup label="Logo" name="groupLogo" display="inline">
      <LogoField label="Logo" name="logo" showLoading={false} />
    </FieldGroup>
    <MenuField label="Menu" name="menu" default="site_root" required />
    <FieldGroup label="Actions" name="groupActions" display="inline">
      <BooleanField
        label="Primary action"
        name="showPrimaryAction"
        display="toggle"
        default={false}
      />
      <FieldGroup
        label="Primary action"
        name="groupPrimaryAction"
        display="inline"
        visibilityRules="ADVANCED"
        advancedVisibility={{
          boolean_operator: "OR",
          criteria: [
            {
              controlling_field_path: "groupActions.showPrimaryAction",
              operator: "EQUAL",
              controlling_value_regex: "true",
            },
          ],
        }}
      >
        <TextField
          label="Text"
          name="primaryActionText"
          required
          default="Try TestOps"
        />
        <LinkField
          label="Link"
          name="primaryActionLink"
          supportedTypes={[
            "EXTERNAL",
            "CONTENT",
            "EMAIL_ADDRESS",
            "CALL_TO_ACTION",
          ]}
          default={{
            open_in_new_tab: false,
          }}
        />
      </FieldGroup>
      <BooleanField
        label="Secondary action"
        name="showSecondaryAction"
        display="toggle"
        default={false}
      />
      <FieldGroup
        label="Secondary action"
        name="groupSecondaryAction"
        display="inline"
        visibilityRules="ADVANCED"
        advancedVisibility={{
          boolean_operator: "OR",
          criteria: [
            {
              controlling_field_path: "groupActions.showSecondaryAction",
              operator: "EQUAL",
              controlling_value_regex: "true",
            },
          ],
        }}
      >
        <TextField
          label="Text"
          name="secondaryActionText"
          required
          default="Contact us"
        />
        <LinkField
          label="Link"
          name="secondaryActionLink"
          supportedTypes={[
            "EXTERNAL",
            "CONTENT",
            "EMAIL_ADDRESS",
            "CALL_TO_ACTION",
          ]}
          default={{
            open_in_new_tab: false,
          }}
        />
      </FieldGroup>
    </FieldGroup>
  </ModuleFields>
);
