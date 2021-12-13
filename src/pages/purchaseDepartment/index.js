import { Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import AcrylicLogo from "../../common/Assets/purchashe/purchase.svg";
import { useStyles } from "./style";
import Logo1 from "../../common/Assets/purchaseDepartment/logo1.png";
import Logo2 from "../../common/Assets/purchaseDepartment/logo2.png";
import Logo3 from "../../common/Assets/purchaseDepartment/logo3.png";
import Logo4 from "../../common/Assets/purchaseDepartment/logo4.png";
import Logo5 from "../../common/Assets/purchaseDepartment/logo5.png";
import Logo6 from "../../common/Assets/purchaseDepartment/logo6.png";
import Logo7 from "../../common/Assets/purchaseDepartment/logo7.png";
import Logo8 from "../../common/Assets/purchaseDepartment/logo8.png";
import Logo9 from "../../common/Assets/purchaseDepartment/logo9.png";
import Logo10 from "../../common/Assets/purchaseDepartment/logo10.png";
import Logo11 from "../../common/Assets/purchaseDepartment/logo11.png";
import Logo12 from "../../common/Assets/purchaseDepartment/logo12.png";

const PurchaseDepartment = () => {
  const history = useHistory();
  const classes = useStyles();
  const array = [
    {
      name: "Acrylic Supplier",
      path: "/dashboard/acrylic-supplier",
      logo: Logo1,
      color: "#FFECEC",
    },
    {
      name: "Electrical Supplier",
      path: "/dashboard/electrical-supplier",
      logo: Logo2,
      color: "rgba(189, 66, 248, 0.1)",
    },
    {
      name: "Fabric Supplier",
      path: "/dashboard/fabric-supplier",
      logo: Logo3,
      color: "   rgba(210, 234, 217, 1)",
    },
    {
      name: "Glass Supplier",
      path: "/dashboard/glass-supplier",
      logo: Logo4,
      color: "rgba(252, 215, 184, 0.3)",
    },
    {
      name: "Laminate Supplier",
      path: "/dashboard/laminate-supplier",
      logo: Logo5,
      color: "rgba(27, 207, 218, 0.1)",
    },
    {
      name: "MDF Supplier",
      path: "/dashboard/mdf-supplier",
      logo: Logo6,
      color: "rgba(159, 80, 22, 0.1)",
    },
    {
      name: "Marble Supplier",
      path: "/dashboard/marble-supplier",
      logo: Logo7,
      color: "rgba(105, 68, 255, 0.1)",
    },
    {
      name: "Metal Supplier",
      path: "/dashboard/metal-supplier",
      logo: Logo8,
      color: "    rgba(113, 113, 113, 0.1)",
    },
    {
      name: "Out-Sourced Material",
      path: "/dashboard/outsourced-material",
      logo: Logo9,
      color: "rgba(244, 80, 139, 0.1)",
    },
    {
      name: "Paint Supplier",
      path: "/dashboard/paint-supplier",
      logo: Logo10,
      color: "rgba(253, 203, 74, 0.1)",
    },
    {
      name: "Special Material",
      path: "/dashboard/special-supplier",
      logo: Logo11,
      color: "rgba(33, 169, 177, 0.1)",
    },
    {
      name: "Veneer Supplier",
      path: "/dashboard/veneer-supplier",
      logo: Logo12,
      color: "rgba(92, 252, 204, 0.1)",
    },
  ];
  return (
    <div>
      <Grid container justify="center" style={{ gap: 30 }}>
        {array.map((val) => {
          return (
            <Grid
              item
              xs={3}
              className={classes.card}
              style={{
                maxWidth: "22%",
                flexBasis: "22%",
                cursor: "pointer",
                backgroundColor: val.color,
              }}
              onClick={() => history.push(val.path)}
            >
              <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                spacing={2}
              >
                <Grid item style={{ marginTop: 20 }}>
                  <img src={val.logo} style={{ width: "100px" }} />
                </Grid>
                <Grid item style={{ fontWeight: 500, fontSize: 15 }}>
                  {val.name}
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PurchaseDepartment;
