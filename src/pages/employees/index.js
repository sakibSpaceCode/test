import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomSearch from "../../components/CustomSearch";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./style";
import BorderPaper from "../../components/BorderPaper";
import CustomTable from "../../components/CustomTable";
import CustomDialog from "../../components/CustomDialog";
import AddEmployeeForm from "./addEmployeeForm";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPostResponse,
  postFormData,
} from "../../redux/actions/commonFormActions";
import { clearData, getData } from "../../redux/actions/commonGetDataActions";
import Loader from "../../components/loader";
import Alert from "../../components/alert/alert.container";
import { set } from "date-fns";
import { getEmployeePermission } from "../../redux/actions/employePermissionActio";

const EmployeesPage = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    is_staff: true,
    is_active: true,
    is_superuser: true,
    permission: [],
  });
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
    setErrorMessage(null);
    setFormData({});
  };
  const handleCompleteButtonClick = () => {
    dispatch(postFormData("user", formData));
  };
  console.log(formData);
  const { loading, error, responseData } = useSelector(
    (state) => state.getData
  );
  const { postLoading, postResponse, postError } = useSelector(
    (state) => state.postFields
  );
  const { permission } = useSelector((state) => state.getPermissionReducer);
  console.log(permission);
  useEffect(() => {
    postResponse?.success === true && setAlertOpen(true);
    postResponse?.success === true && dispatch(getData("user"));
    postResponse?.success === true && setDialogOpen(false);
    postError && dispatch(clearPostResponse());
    postError && setErrorMessage(postError);
    setTimeout(() => {
      dispatch(clearPostResponse());
    }, 3000);
  }, [postResponse, postError]);
  useEffect(() => {
    dispatch(getData("user"));
    dispatch(getEmployeePermission());
    return () => {
      dispatch(clearData());
    };
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid container justify="space-between" spacing={8}>
            <Grid item xs={6}>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <CustomSearch placeholder="Search for employees" />
                </Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={6}>
                      <CustomPaper>
                        <div
                          style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <RemoveIcon fontSize="large" />
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="subtitle1"
                          >
                            Delete User
                          </Typography>
                        </div>
                      </CustomPaper>
                    </Grid>
                    <Grid item xs={6}>
                      <CustomPaper>
                        <div
                          style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onClick={handleOpenDialog}
                        >
                          <AddIcon fontSize="large" />
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="subtitle1"
                            fontWeight="bold"
                          >
                            Add User
                          </Typography>
                        </div>
                      </CustomPaper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="flex-end">
                <Grid item>
                  <Paper className={classes.filterpaper}>
                    <Typography className={classes.filterBy}>
                      Filter By
                    </Typography>
                    <table className={classes.filterTable}>
                      <tr style={{ marginBottom: 10 }}>
                        <td>Employee Status:</td>
                        <td className={classes.firstBtn}>
                          <CustomButton>All</CustomButton>
                        </td>
                        <td>
                          <CustomButton disabled>Yes</CustomButton>
                        </td>
                        <td>
                          <CustomButton disabled>No</CustomButton>
                        </td>
                      </tr>
                      <tr style={{ marginBottom: 10 }}>
                        <td>Superuser Status:</td>
                        <td className={classes.firstBtn}>
                          <CustomButton>All</CustomButton>
                        </td>
                        <td>
                          <CustomButton disabled>Yes</CustomButton>
                        </td>
                        <td>
                          <CustomButton disabled>No</CustomButton>
                        </td>
                      </tr>
                      <tr style={{ marginBottom: 10 }}>
                        <td>Active:</td>
                        <td className={classes.firstBtn}>
                          <CustomButton>All</CustomButton>
                        </td>
                        <td>
                          <CustomButton disabled>Yes</CustomButton>
                        </td>
                        <td>
                          <CustomButton disabled>No</CustomButton>
                        </td>
                      </tr>
                    </table>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div style={{ marginTop: 30 }}>
            <BorderPaper>
              <CustomTable height={420} response={responseData} />
            </BorderPaper>
          </div>
          <CustomDialog
            title={`Add Employee Details`}
            open={dialogOpen}
            onClose={handleDialogClose}
            onCancelClick={handleDialogClose}
            // onNextClick={handleNextClick}
            // onCompleteClick={handleCompleteButtonClick}
            onSaveClick={handleCompleteButtonClick}
            // isSave={isEdit || isClone ? true : false}
            loading={postLoading}
            error={errorMessage}
            // disabled={inputs?.length === 0}>
          >
            <AddEmployeeForm
              permission={permission}
              formData={formData}
              setFormData={setFormData}
            />
          </CustomDialog>
          {alertOpen && (
            <Alert
              open={alertOpen}
              message={`Employee added successfully.`}
              duration={2000}
              onClose={() => setAlertOpen(false)}
              vertical={"bottom"}
              horizontal={"center"}
              severity="success"
              actions={false}
            />
          )}
        </>
      )}
    </>
  );
};
const CustomButton = ({ children, disabled }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.btns}
      disabled={disabled}
      variant="contained"
      color="primary"
    >
      <span className={classes.btnText}>{children}</span>
    </Button>
  );
};
const CustomPaper = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper
      elevation={0}
      className={classes.papers}
      style={{ cursor: "pointer" }}
    >
      {children}
    </Paper>
  );
};

export default EmployeesPage;
