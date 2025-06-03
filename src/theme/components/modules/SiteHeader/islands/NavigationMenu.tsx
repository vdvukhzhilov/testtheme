import { HublMenu } from '../../../types/modules';
import { NavigationMenu } from '../../../ui/kit/NavigationMenu';

export default function NavigationMenuIsland(props: { navigation: HublMenu }) {
  const { navigation } = props;

  if (!navigation) {
    return null;
  }

  if (navigation.children.length === 0) {
    return null;
  }

  return (
    <div className="py-2 h-10">
      <NavigationMenu>
        <NavigationMenu.FirstLevel>
          {navigation.children.map((menuItem) => (
            <NavigationMenu.FirstLevelItem
              active={menuItem.activeNode || menuItem.activeBranch}
              key={menuItem.label}
              label={menuItem.label}
              href={menuItem.children.length > 0 ? undefined : menuItem.url}
            >
              {menuItem.children && (
                <NavigationMenu.SecondLevel>
                  {menuItem.children.map((subMenuItem) => (
                    <NavigationMenu.SecondLevelItem
                      key={subMenuItem.label}
                      href={subMenuItem.url}
                      active={subMenuItem.activeNode}
                    >
                      {subMenuItem.label}
                    </NavigationMenu.SecondLevelItem>
                  ))}
                </NavigationMenu.SecondLevel>
              )}
            </NavigationMenu.FirstLevelItem>
          ))}
        </NavigationMenu.FirstLevel>
      </NavigationMenu>
    </div>
  );
}
