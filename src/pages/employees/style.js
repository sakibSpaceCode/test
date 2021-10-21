import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  filterpaper: {
    width: 500,
    height: 150,
    border: "1px solid #E4E4E4",
    borderRadius: "20px",

    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
  },
  filterBy: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: "20px",
    marginLeft: 25,
    padding: 15,
  },
  filterTable: {
    marginLeft: 40,
    width: 450,
  },
  firstBtn: {
    marginLeft: 28,
  },
  btns: {
    width: 30,
    height: 20,
    borderRadius: 7,
  },
  btnText: {
    textTransform: "capitalize",
    padding: "5px 30px",
  },
  papers: {
    width: 200,
    height: 80,
    borderRadius: 15,
    border: "2px solid #618EFF",
  },
}));
