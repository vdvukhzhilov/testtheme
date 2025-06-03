import { HublMenu, ModulePropsType } from '../../types/modules';
import SiteHeaderFieldsType from './fields.type';

export type HublData = {
  navigation: HublMenu;
  companyName: string;
  logoLink: string;
  defaultLogo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  isInEditor: boolean;
};

export type SiteHeaderModuleProps = ModulePropsType<
  SiteHeaderFieldsType,
  HublData
>;
