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
      const themeStyles = selectedTheme[type];
      const stylesList = Object.keys(themeStyles);

      for (let i = 0; i < stylesList.length; i++) {
        el.style[stylesList[i]] = themeStyles[stylesList[i]];
      }
    }
  );
  el.__role_unwatch__ = unwatch;
};
