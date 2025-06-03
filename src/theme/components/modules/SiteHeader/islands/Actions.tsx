import { Link } from '../../../ui/kit/Button';
import { SiteHeaderModuleProps } from '../types';

function PrimaryAction(
  props: SiteHeaderModuleProps['fieldValues']['groupActions']['groupPrimaryAction'],
) {
  const { primaryActionText, primaryActionLink } = props;

  return (
    <Link size="md" variant="primary" href={primaryActionLink.url?.href}>
      {primaryActionText}
    </Link>
  );
}

function SecondaryAction(
  props: SiteHeaderModuleProps['fieldValues']['groupActions']['groupSecondaryAction'],
) {
  const { secondaryActionText, secondaryActionLink } = props;

  return (
    <Link size="md" variant="secondary" href={secondaryActionLink.url?.href}>
      {secondaryActionText}
    </Link>
  );
}

export default function SiteHeaderActions(props: SiteHeaderModuleProps) {
  const { fieldValues } = props;
  const { groupActions } = fieldValues;

  if (!groupActions) {
    return null;
  }

  const {
    showPrimaryAction,
    showSecondaryAction,
    groupPrimaryAction,
    groupSecondaryAction,
  } = groupActions;

  if (!showPrimaryAction && !showSecondaryAction) {
    return null;
  }

  return (
    <div className="flex flex-row gap-4">
      {showSecondaryAction && <SecondaryAction {...groupSecondaryAction} />}
      {showPrimaryAction && <PrimaryAction {...groupPrimaryAction} />}
    </div>
  );
}
