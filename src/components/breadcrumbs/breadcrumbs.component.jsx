import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { breadcrumbsStyles } from "./breadcrumbs.style";
import { Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

const SimpleBreadcrumbsComponent = (props) => {
  const location = useLocation();
  const history = useHistory();
  const classes = breadcrumbsStyles();
  const { pathObj } = props;

  const url = location.pathname.split("/").slice(3);
  const label1 = url[0];
  const label2 = url[1];
  const label3 = url[2];
  const breadScrumbUrl = `/dashboard/${label1}/${label2}`;
  function handleClick() {
    history.push(breadScrumbUrl);
  }
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
      {pathObj?.breadcrumbs ? (
        pathObj?.breadcrumbs?.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.link}
              className={`${item.isDisabled ? classes.disabled : ""}  ${
                classes.breadcrumbNav
              }`}
            >
              <Typography className={classes.typography}>
                {item.label}
              </Typography>
            </Link>
          );
        })
      ) : (
        <div className={classes.div}>
          <Typography className={classes.typographylong}>
            {label1}
            <span className={classes.typographylong3}></span>
          </Typography>
          <Typography onClick={handleClick} className={classes.typographylong2}>
            {label2}
            <span className={classes.typographylong3}>/</span>
          </Typography>
          <Typography className={classes.typographylong}>
            QTA/21/04/03/57
          </Typography>
        </div>
      )}
    </Breadcrumbs>
  );
};

export default SimpleBreadcrumbsComponent;
