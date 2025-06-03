import type { SiteHeaderModuleProps } from '../types';

export default function SiteHeaderLogo(props: SiteHeaderModuleProps) {
  const { fieldValues, hublData } = props;
  const { groupLogo } = fieldValues;

  if (!hublData) {
    return null;
  }

  const { defaultLogo, companyName } = hublData;
  const hublDataLogo = { ...defaultLogo };

  // @see https://github.com/HubSpot/cms-elevate-theme-public/blob/main/src/unified-theme/components/modules/SiteHeader/index.tsx#L218
  // @ts-expect-error I don't know why this is needed
  hublDataLogo.suppress_company_name = groupLogo.logo.suppress_company_name;

  const logoToUse = groupLogo.logo.override_inherited_src
    ? groupLogo.logo
    : hublDataLogo;

  if (!logoToUse.src) {
    return null;
  }

  return (
    <a
      href="/"
      className="h-10 w-max block py-1"
      title={companyName}
      aria-label={companyName}
    >
      <img
        src={logoToUse.src}
        className="object-contain w-auto max-h-full"
        alt={logoToUse.alt}
      />
    </a>
  );
}
