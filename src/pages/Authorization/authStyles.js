import { darkThemeColors } from "../../Extras/color";
import { defaultFont } from "../../Extras/fonts";

export const styles = {
  mainStack: {
    minHeight: "100vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  subStcak: {
    background: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "16px",
    boxShadow: `2.5px 2.5px 12px ${darkThemeColors.shadowGray}`,
    background: darkThemeColors.hover,
    padding: "2em",
  },
  image: {
    width: "40%",
    height: "500px",
  },
  contentBox: {
    width: "50%",
    borderRight: `2px solid ${darkThemeColors.heading}`,
    alignItems: "center",
  },
  headingTypography: {
    textAlign: "center",
    fontSize: "2em",
    margin: "1em 0 .5em",
    color: darkThemeColors.heading,
    fontWeight: "600",
    fontFamily: defaultFont.secondary,
  },
  textfield: {
    width: "70%",
    boxShadow: `1px 1px 10px ${darkThemeColors.shadowGray}`,

    marginTop: "2em",
    "& input": {
      color: "white",
    },
    "& textarea": {
      color: "white",
    },
    "& .MuiInputLabel-root": { color: darkThemeColors.heading },
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { border: `1.25px solid ${darkThemeColors.heading}` },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: darkThemeColors.heading,
      },
      color: darkThemeColors.heading,
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        border: `2.5px solid ${darkThemeColors.heading}`,
      },
    },
  },
  buttonStyles: {
    fontFamily: defaultFont.teritary,
    background: darkThemeColors.heading,
    fontWeight: "bold",
    color: darkThemeColors.sideBar,
    width: "70%",
    marginTop: "2em",
    boxShadow: `.5px 5px 15px ${darkThemeColors.shadowGray}`,

    "&:hover": {
      background: darkThemeColors.gray,
    },
  },
  redirectText: {
    color: darkThemeColors.gray,
    fontFamily: defaultFont.secondary,
    fontSize: "1em",
    fontWeight: "600",
    textDecoration: "underline",
    width: "100%",
    margin: "1.5em",
    cursor: "pointer",
    "&:hover": {
      color: darkThemeColors.heading,
    },
  },
  editUserContent: {
    width: "75%",
    alignItems: "center",
  },
};
