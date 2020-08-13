const basicDarkStyles = {
  backgroundColor: "black",
  color: "white"
};

const basicLightStyles = {
  backgroundColor: "white",
  color: "black"
};

const theme = {
  dark: {
    text: {
      ...basicDarkStyles
    },
    button: {
      ...basicDarkStyles
    }
  },
  light: {
    text: {
      ...basicLightStyles
    },
    button: {
      ...basicLightStyles
    }
  }
};

export default (store) => (el, { modifiers }) => {
  const type = Object.keys(modifiers)[0];
  const unwatch = store.watch(
    (state) => state.isDarkTheme,
    (isDarkTheme) => {
      const themeType = isDarkTheme ? "dark" : "light";
      const selectedTheme = theme[themeType];
      Object.assign(el.style, selectedTheme[type]);
    }
  );
  el.__role_unwatch__ = unwatch;
};
