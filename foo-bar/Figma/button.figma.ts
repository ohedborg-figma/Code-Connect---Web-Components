import figma, { html } from "@figma/code-connect/html"

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  "https://www.figma.com/design/0CEVWnzH4OvQaO1CrIqOxw/Web-Components-Code-Connect?node-id=4-10&m=dev",
  {
    props: {
      namebutton: figma.string("namebutton"),
      imgEnabled: figma.boolean("imgEnabled", {
        true: figma.instance("imgSrc"),
        false: undefined,
      }),

    },
    example: ({namebutton, imgEnabled }) => 
      html`\
      <button>
      ${namebutton}
      <${imgEnabled}>
      </button>`
  },
)