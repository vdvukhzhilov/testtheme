import {
  ContentOutlets,
  DndModule,
  PageContents,
  TemplateMeta,
} from "@hubspot/cms-components";
import clsx from "clsx";
import "../../styles/main.css";

export const meta = {
  templateType: "page",
  isAvailableForNewContent: true,
  label: "Header and footer",
  noWrapper: true,
} satisfies TemplateMeta;

export const contents = {
  headerDndArea: {
    type: "dndArea",
    // Assigning a className to the dndArea does not work
    className: "",
    fullWidth: true,
    label: "Header",
    children: [
      {
        type: "dndSection",
        fullWidth: true,
        children: [
          {
            type: "dndColumn",
            width: 12,
            children: [
              {
                type: "dndRow",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  footerDndArea: {
    type: "dndArea",
    className: "",
    fullWidth: true,
    label: "Footer",
    children: [
      {
        type: "dndSection",
        fullWidth: true,
        children: [
          {
            type: "dndColumn",
            width: 12,
            children: [
              {
                type: "dndRow",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  mainDndArea: {
    type: "dndArea",
    className: "",
    label: "Page content",
    children: [
      {
        type: "dndSection",
        children: [
          {
            type: "dndColumn",
            width: 6,
            offset: 0,
            children: [
              {
                type: "dndRow",
                children: [],
              },
            ],
          },
          {
            type: "dndColumn",
            width: 6,
            offset: 6,
            children: [
              {
                type: "dndRow",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
} satisfies PageContents;

export const hublDataTemplate = `
  {% set hublData = {
      "pageMeta": page_meta,
      "brandSettings": brand_settings,
      "builtInBodyClasses": builtin_body_classes,
      "htmlLang": html_lang,
      "htmlLangDir": html_lang_dir
    }
  %}`;

export default function Component(props: {
  content: ContentOutlets<typeof contents>;
  hublData: any;
}) {
  const faviconSrc: string | undefined =
    props.hublData.brandSettings?.favicon?.src;
  const htmlTitle = props.hublData.pageMeta?.htmlTitle;
  const metaDescription = props.hublData.pageMeta?.metaDescription;
  const bodyClasses = props.hublData.builtInBodyClasses.trim().split(/\s+/);
  return (
    <html lang={props.hublData.htmlLang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {htmlTitle ? <title>{htmlTitle}</title> : null}
        {faviconSrc ? <link rel="shortcut icon" href={faviconSrc} /> : null}
        <meta name="description" content={metaDescription} />
      </head>
      <body
        className={clsx(
          "body-wrapper",
          ...bodyClasses,
          "theme-overrides",
          "text-primary-900",
          "text-md-regular",
        )}
      >
        <header className="sticky top-0 z-10 empty:hidden">
          {props.content.headerDndArea}
        </header>
        <main className="container mx-auto">{props.content.mainDndArea}</main>
        <footer className="empty:hidden">{props.content.footerDndArea}</footer>
        {/* <pre className="hidden">{JSON.stringify(props, null, 2)}</pre> */}
      </body>
    </html>
  );
}

function buttonModule(props: { text: string; url: string }): DndModule {
  return {
    type: "dndModule",
    path: "@hubspot/button",
    fields: {
      button_text: props.text,
      link: { url: { href: props.url } },
    },
  };
}
