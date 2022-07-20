import { darkThemeColors } from "../../Extras/color";
import { defaultFont } from "../../Extras/fonts";

export const styles = {
  todoMain: {
    flexDirection: "row",
    minHeight: "100vh",
  },
  paperStyles: {
    width: "85%",
    padding: ".5em",
    marginTop: "1em",
    backgroundColor: darkThemeColors.darkGray,
    height: "150px",
    boxShadow: `2.5px 2.5px 12px ${darkThemeColors.shadowGray}`,
  },
  paperTitle: {
    color: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
    margin: "0 .65em .15em",
    fontFamily: defaultFont.secondary,
  },
  listStack: {
    alignItems: "center",
  },
  stack: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "7px",
    width: 450,
    height: "400px",

    boxShadow: `5px 5px 10px ${darkThemeColors.shadowGray}`,
    " & .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
      borderRadius: "7px",
    },
  },
  modalBox: {
    backgroundColor: darkThemeColors.sideBar,
    borderRadius: "7px",
    height: "400px",
  },
  modalStack: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "0 1em",
  },
  dividerColor: {
    bgcolor: darkThemeColors.gray,
  },
  listBox: {
    backgroundColor: darkThemeColors.hover,
    margin: "1.9em",
    width: "30%",
    borderRadius: "7px",
    paddingBottom: "1em",
    boxShadow: `2.5px 2.5px 10px ${darkThemeColors.shadowGray}`,
  },
  headingTypography: {
    fontFamily: defaultFont.teritary,
    color: darkThemeColors.heading,
    fontSize: "1.2em",
    fontWeight: "600",
    padding: ".75em 0 .5em",
    textShadow: `5px 5px 10px ${darkThemeColors.shadowGray}`,
  },
  addButton: {
    margin: "7px",
    bgcolor: darkThemeColors.hover,
    boxShadow: `.5px .5px 2.5px ${darkThemeColors.shadowGray}`,
  },
  closeButton: {
    margin: "7px",
    backgroundColor: darkThemeColors.sideBar,
  },
  itemButton: {
    margin: "5px",
    backgroundColor: darkThemeColors.darkGray,
    padding: "2px",
  },
  textfield: {
    width: "100%",
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
    width: "100%",
    marginTop: "2em",
    boxShadow: `.5px 5px 15px ${darkThemeColors.shadowGray}`,

    "&:hover": {
      background: darkThemeColors.gray,
    },
  },
  emptyTypo: {
    fontFamily: defaultFont.secondary,
    color: darkThemeColors.heading,
    fontSize: "1.2em",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "2em",
  },
  todoStack: {
    padding: "2em",
    alignItems: "center",
    justifyContent: "center",
    height: "75%",
  },
};
