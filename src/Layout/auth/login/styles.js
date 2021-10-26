import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  backImage: {
    backgroundSize: "cover ",

    height: "100vh",
    //s backdropFilter: "blur(8px)",

    backdropFilter: "blur(2px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    background: "#E8E6E6",
    border: "3px solid #000000",
    height: 50,
    padding: "10px 20px",
    width: 310,

    borderRadius: "25px",
  },
  blackimage: {
    height: 95,
  },
  btn: {
    background: "#303030",
    boxShadow: "0px 10px 45px rgba(0, 0, 0, 0.5)",
    borderRadius: "25px",
    padding: "13px 20px",
    width: "180px",
    color: "#fff",
    fontSize: "18px",
    marginTop: "-70px",
    position: "relative",
    cursor: "pointer",
  },
  whiteLogo: {
    "& .blur": {
      filter: "blur(0px)",
    },

    width: "600px",
    height: "150px",
    zIndex: 1000,
    // marginTop: "-20px",
  },
  welcomeContainer: {
    background: "#303030",
    border: "3px solid #303030",

    boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.45)",
    borderRadius: "0 35px 35px 0",
    width: "180px",
    marginTop: "80px",
    color: "#fff",
    padding: "10px 20px ",
  },
  welTypo: {
    fontSize: "18px",
    fontWeight: "600",
    textAlign: "center",
  },
}));
