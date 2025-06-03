import { ModuleProps } from '@hubspot/cms-components';

type ContentTypes =
  | 'BLOG_LISTING'
  | 'BLOG_POST'
  | 'CUSTOMER_PORTAL'
  | 'KNOWLEDGE_BASE'
  | 'LANDING_PAGE'
  | 'MEMBERSHIP'
  | 'QUOTE_TEMPLATE'
  | 'SITE_PAGE'
  | 'SUBSCRIPTION'
  | 'WEB_INTERACTIVE'
  | 'CASE_STUDY';

type Categories =
  | 'blog'
  | 'forms_and_buttons'
  | 'media'
  | 'functionality'
  | 'commerce'
  | 'design'
  | 'body_content'
  | 'text';

type ModuleAsset = {
  path: String;
};

type Placeholder = {
  show_module_icon: Boolean;
  title: String;
  description: String;
};

type ModuleTag = {
  name: String;
  source: String;
};

export type ModuleMeta = {
  label: string;
  content_types: ContentTypes[];
  icon: string;
  categories: Categories[];
  is_available_for_new_content?: Boolean;
  global?: Boolean;
  css_assets?: ModuleAsset[];
  js_assets?: ModuleAsset[];
  placeholder?: Placeholder;
  master_language?: String;
  content_tag?: ModuleTag[];
};

export type ModulePropsType<
  FieldValues extends Record<string, any>,
  HublData extends Record<string, any> = never,
> = Omit<ModuleProps<FieldValues>, 'hublData'> & {
  hublData: HublData;
};

export type HublMenu = {
  activeBranch: boolean;
  activeNode: boolean;
  blogNode: boolean;
  categoryId: number | null;
  children: HublMenu[];
  contentGroupId: number | null;
  contentType: string | null;
  errorMessage: string | null;
  guid: string | null;
  isDeleted: boolean;
  isNonLinkingNode: boolean;
  isPublished: boolean;
  label: string | null;
  level: number | null;
  linkTarget: string | null;
  live: boolean;
  nodeType: number;
  pageId: number | null;
  pageTitle: string | null;
  parentGuid: string | null;
  slug: string | null;
  state: string | null;
  subcategory: string | null;
  topLevelAncestorGuid: string | null;
  url: string | null;
  urlParamStr: string;
  urlWithoutAnchor: string;
};
