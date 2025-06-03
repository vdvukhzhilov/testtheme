import {
  Root as RadixNavMenuRoot,
  List as RadixNavMenuList,
  Item as RadixNavMenuItem,
  Trigger as RadixNavMenuTrigger,
  Content as RadixNavMenuContent,
  Link as RadixNavMenuLink,
  Viewport as RadixNavMenuViewport,
} from '@radix-ui/react-navigation-menu';
import { ComponentProps, ReactNode } from 'react';
import { Button, Link as ButtonLink } from '../Button';
import { ChevronDown } from '../icons/arrows/ChevronDown';

function NavigationMenu(
  props: ComponentProps<typeof RadixNavMenuRoot> & {
    viewport?: boolean;
  },
) {
  const { children, viewport, ...rest } = props;
  return (
    <RadixNavMenuRoot
      {...rest}
      data-viewport={viewport || undefined}
      className="group/navigation-menu"
    >
      {children}
      {viewport && <RadixNavMenuViewport />}
    </RadixNavMenuRoot>
  );
}

function FirstLevel(props: ComponentProps<typeof RadixNavMenuList>) {
  return (
    <RadixNavMenuList
      {...props}
      className="group flex shrink data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:gap-7 data-[orientation=vertical]:flex-col"
    />
  );
}

function FirstLevelItem(props: {
  href?: string;
  active?: boolean;
  children?: ReactNode;
  label: string;
}) {
  const { href, active, label, children } = props;

  if (href) {
    return (
      <RadixNavMenuItem>
        <RadixNavMenuLink active={active} href={href} asChild>
          <ButtonLink
            variant="link"
            size="lg"
            className="data-[active]:text-primary-900"
          >
            {label}
          </ButtonLink>
        </RadixNavMenuLink>
      </RadixNavMenuItem>
    );
  }

  if (children) {
    return (
      <RadixNavMenuItem className="relative">
        <RadixNavMenuTrigger
          className="data-[state=open]:[&_svg]:rotate-180"
          asChild
        >
          <Button
            size="lg"
            variant="link"
            className="group-data-[orientation=vertical]:w-full"
            trailingIcon={<ChevronDown className="transition-transform fg-quinary-400" />}
          >
            {label}
          </Button>
        </RadixNavMenuTrigger>
        {children}
      </RadixNavMenuItem>
    );
  }
}

function SecondLevel(props: ComponentProps<typeof RadixNavMenuContent>) {
  const { children, ...rest } = props;
  const horizontalClasses = `
    data-[orientation=horizontal]:absolute
    data-[orientation=horizontal]:top-8
    data-[orientation=horizontal]:left-0
    group-data-[viewport=true]/navigation-menu:w-[var(--radix-navigation-menu-viewport-width)]
    group-data-[viewport=true]/navigation-menu:h-[var(--radix-navigation-menu-viewport-height)]
    data-[orientation=horizontal]:allure-popover
    data-[orientation=horizontal]:p-0 
    data-[orientation=horizontal]:z-10`;

  return (
    <RadixNavMenuContent {...rest} className={horizontalClasses}>
      <div className="flex flex-col gap-0.5 px-1.5 p-0 py-0">{children}</div>
    </RadixNavMenuContent>
  );
}

function SecondLevelItem(
  props: ComponentProps<typeof RadixNavMenuLink> & {
    icon?: ReactNode;
    description?: string;
  },
) {
  const { href, children, icon, description, ...rest } = props;

  return (
    <RadixNavMenuLink
      href={href}
      className={`first-of-type:mt-1
        last-of-type:mb-1
        p-2.5
        hover:allure-bg-primary_hover
        hover:text-secondary-700_hover
        text-secondary-700
        rounded-sm
        typography-text-sm-medium
        data-[active=true]:font-bold
        `}
      {...rest}
    >
      {icon && <div className="flex items-center gap-2">{icon}</div>}
      {children}
    </RadixNavMenuLink>
  );
}

function Viewport(props: ComponentProps<typeof RadixNavMenuViewport>) {
  return <RadixNavMenuViewport {...props} />;
}

FirstLevel.displayName = 'NavigationMenu.FirstLevel';
FirstLevelItem.displayName = 'NavigationMenu.FirstLevelItem';
SecondLevel.displayName = 'NavigationMenu.SecondLevel';
SecondLevelItem.displayName = 'NavigationMenu.SecondLevelItem';

NavigationMenu.FirstLevel = FirstLevel;
NavigationMenu.FirstLevelItem = FirstLevelItem;
NavigationMenu.SecondLevel = SecondLevel;
NavigationMenu.SecondLevelItem = SecondLevelItem;
NavigationMenu.Viewport = Viewport;

export { NavigationMenu };
