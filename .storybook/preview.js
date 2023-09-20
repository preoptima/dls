import "@/styles/index.css";

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "grey-01",
      values: [
        {
          name: "grey-01",
          value: "#F5F5F5",
        },
        {
          name: "light",
          value: "#FFFFFF",
        },
        {
          name: "dark",
          value: "#1A1A1A",
        },
      ],
    },
  },
};

export default preview;
