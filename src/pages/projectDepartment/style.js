import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    gap: 5,

    "& .MuiGrid-grid-xs-3": {
      maxWidth: "23%",
      flexBasis: "23%",
      marginTop: "50px",
    },
  },
  cardContainer: {
    position: "relative",
    background: "#FFFFFF",
    border: "1px solid #E4E4E4",
    boxSizing: "border-box",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
    "& .MuiGrid-grid-xs-3": {
      maxWidth: "23%",
      flexBasis: "23%",
    },
  },
  img: {
    margin: "0 auto",
    marginTop: "-30px",
    width: "60px",
  },
  projectName: {
    textAlign: "center",
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "15px",
    color: "#303030",
    paddingBottom: "10px",
  },
  jobId: {
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "1px",
    fontWeight: "700",
    fontSize: "14px",
    color: "#303030",
  },
  managerName: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "12px",
    fontWeight: "600",
    color: " #5B5B5B",
  },
  progress: {
    width: "60%",
    margin: "0 auto",
  },
  days: {
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "30px",
    fontSize: "11px",
    fontWeight: "600",
    color: " #5B5B5B",
  },
}));
