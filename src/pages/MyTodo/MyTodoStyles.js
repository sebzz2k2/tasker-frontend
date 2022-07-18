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
  todoName: {
    overFlow: "hidden",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    wordBreak: " break-word",
    fontSize: "1.2em",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "2px solid #000",
  },
  modalStack: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    padding: ".75em 1.25em .5em",
  },
};
