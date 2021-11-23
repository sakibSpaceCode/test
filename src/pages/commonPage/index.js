import React, { useState, useEffect } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import CustomSearch from "../../components/CustomSearch";
import { useStyles } from "./style";
import BorderPaper from "../../components/BorderPaper";
import CustomTable from "../../components/CustomTable";
import CustomButton from "../../components/button";
import useForm from "../../hooks/useForm";
import FormContainer from "./FormContainer";
import CustomDialog from "../../components/CustomDialog";
import ImportDialog from "./importDialog";
import ExportDialog from "./exportDilog";
import { useDispatch, useSelector } from "react-redux";
import { clearData, getData } from "../../redux/actions/commonGetDataActions";
import {
  clear2ndDiffDropDownResponse,
  clear2ndDropDownResponse,
  clear3rdDropDownResponse,
  clear4thDropDownResponse,
  clear5thDropDownResponse,
  clear6thDropDownResponse,
  clear7thDropDownResponse,
  clear8thDropDownResponse,
  clearDiffDropDownResponse,
  clearDropDownResponse,
  clearPostResponse,
  get2ndDiffDropdown,
  get2ndDropdown,
  get3rdDropdown,
  get4thDropdown,
  get5thDropdown,
  get6thDropdown,
  get7thDropdown,
  get8thDropdown,
  getDiffDropdown,
  getDropdown,
  postFormData,
} from "../../redux/actions/commonFormActions";
import Alert from "../../components/alert/alert.container";
import Loader from "../../components/loader";

const CommonPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data } = props;
  const mData = data.length > 1 ? data[1] : data[0];
  const label = mData.label;
  const urlEndPoint = mData.urlEndPoint.substr(1);
  const apiURL = mData.apiUrl;
  let url = props.path.split("/")[2];

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [rowData, setRowData] = useState({});
  const [secondDropdown, setSecondDropdown] = useState("");
  const [thirdDropdown, setThirdDropdown] = useState("");
  const [fourthDropdown, setFourthDropdown] = useState("");
  const [fifthDropdown, setFifthDropdown] = useState("");
  const [sixthDropdown, setSixthDropdown] = useState("");
  const [eightDropdown, setEightDropdown] = useState("");
  const [seventhDropdown, setSeventhDropdown] = useState("");
  const { loading, error, responseData } = useSelector(
    (state) => state.getData
  );

  const submitCallback = (e) => {
    let object = {};

    mData?.fields?.map((m) => (object[m.name] = m.value));

    let json = JSON.stringify(object);

    dispatch(postFormData(apiURL, json));
  };

  const [
    inputs,
    onFormChange,
    handleEditChange,
    setSubmit,
    resetFormData,
    handleDateChange,
  ] = useForm(mData?.fields, submitCallback);
  console.log(apiURL);
  const handleEditDialog = () => {
    setEditDialogOpen(true);
  };
  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setErrorMessage(null);
    resetFormData();
    setErrorMessage("");
    // dispatch(clearDropDownResponse())
  };
  const handleCompleteButtonClick = () => {
    setSubmit("nextClick");
  };
  const handleImportDialog = () => {
    setImportDialogOpen(true);
  };
  const handleImportDialogClose = () => {
    setImportDialogOpen(false);
  };
  const handleExportDialog = () => {
    setExportDialogOpen(true);
  };
  const handleExportDialogClose = () => {
    setExportDialogOpen(false);
  };
  const { postLoading, postResponse, postError } = useSelector(
    (state) => state.postFields
  );
  useEffect(() => {
    dispatch(getData(apiURL));
    dispatch(getDropdown("job_card"));
    apiURL === "corrective" && dispatch(getDiffDropdown("user"));
    // dispatch(get2ndDiffDropdown("user"));

    return () => {
      dispatch(clearData());
      dispatch(clearDropDownResponse());
      dispatch(clear2ndDropDownResponse());
      dispatch(clear3rdDropDownResponse());
      dispatch(clear4thDropDownResponse());
      dispatch(clear5thDropDownResponse());
      dispatch(clear6thDropDownResponse());
      dispatch(clear7thDropDownResponse());
      dispatch(clear8thDropDownResponse());
      dispatch(clearDiffDropDownResponse());
      dispatch(clear2ndDiffDropDownResponse());
    };
  }, [urlEndPoint]);
  useEffect(() => {
    urlEndPoint === "job-card" &&
      setSecondDropdown(
        JSON.stringify({
          type: "Project_Reference",
          table: "job_card",
        })
      );
    urlEndPoint === "job-card" &&
      setThirdDropdown(
        JSON.stringify({
          type: "Project_type",
          table: "job_card",
        })
      );
    urlEndPoint === "job-card" &&
      setFourthDropdown(
        JSON.stringify({
          type: "Structure_Life_Span",
          table: "job_card",
        })
      );
    urlEndPoint === "job-card" &&
      setFifthDropdown(
        JSON.stringify({
          type: "Material_Specification",
          table: "job_card",
        })
      );
    urlEndPoint === "job-card" &&
      setSixthDropdown(
        JSON.stringify({
          type: "Packaging",
          table: "job_card",
        })
      );
    urlEndPoint === "job-card" &&
      setSeventhDropdown(
        JSON.stringify({
          type: "Post_Delivery",
          table: "job_card",
        })
      );
    urlEndPoint === "job-card" &&
      setEightDropdown(
        JSON.stringify({
          type: "Drawing_References",
          table: "job_card",
        })
      );
    urlEndPoint === "production/status-update" &&
      setSecondDropdown(
        JSON.stringify({
          type: "Status",
          table: "status",
        })
      );
  }, [urlEndPoint]);
  useEffect(() => {
    apiURL === "job_card" &&
      secondDropdown &&
      dispatch(get2ndDropdown(secondDropdown));
    apiURL === "status" &&
      thirdDropdown &&
      dispatch(get2ndDropdown(secondDropdown));
    apiURL === "job_card" &&
      thirdDropdown &&
      dispatch(get3rdDropdown(thirdDropdown));
    apiURL === "job_card" &&
      fourthDropdown &&
      dispatch(get4thDropdown(fourthDropdown));
    apiURL === "job_card" &&
      fifthDropdown &&
      dispatch(get5thDropdown(fifthDropdown));
    apiURL === "job_card" &&
      sixthDropdown &&
      dispatch(get6thDropdown(sixthDropdown));
    apiURL === "job_card" &&
      seventhDropdown &&
      dispatch(get7thDropdown(seventhDropdown));
    apiURL === "job_card" &&
      eightDropdown &&
      dispatch(get8thDropdown(eightDropdown));
  }, [
    apiURL,
    secondDropdown,
    thirdDropdown,
    fourthDropdown,
    fifthDropdown,
    sixthDropdown,
    seventhDropdown,
    eightDropdown,
  ]);
  useEffect(() => {
    postResponse?.success === true && setAlertOpen(true);

    postResponse?.success === true && dispatch(getData(apiURL));
    // if (!nextClick) {
    //   if (isClone) {
    //     postResponse?.success === false && setCloneDialogOpen(true);
    //   } else {
    //     postResponse?.success === false && setOpenAdd(true);
    //   }
    // }
    postResponse?.success === true && resetFormData();
    postResponse?.success === true && setEditDialogOpen(false);
    console.log(postError, "postError");
    postError && dispatch(clearPostResponse());
    postError && setErrorMessage(postError);
    setTimeout(() => {
      dispatch(clearPostResponse());
    }, 3000);
  }, [postResponse, postError]);
  console.log(rowData, "hi");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid
            container
            alignItems="center"
            justify="space-between"
            spacing={8}
          >
            <Grid item xs={6}>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <CustomSearch placeholder={`Search ${label} to view`} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="flex-end" spacing={2}>
                <Grid item>
                  <CustomButton
                    width="150px"
                    variant="outlined"
                    onClick={handleEditDialog}
                  >
                    {label === "Job Card" ? "Add Job Card" : "Add"}
                  </CustomButton>
                </Grid>

                <Grid item>
                  <CustomButton
                    onClick={handleImportDialog}
                    width="150px"
                    variant="outlined"
                  >
                    Import
                  </CustomButton>
                </Grid>
                <Grid item>
                  <CustomButton
                    onClick={handleExportDialog}
                    width="150px"
                    variant="outlined"
                  >
                    Export
                  </CustomButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div style={{ marginTop: 30 }}>
            <BorderPaper>
              <CustomTable
                setRowData={setRowData}
                height={500}
                response={responseData}
              />
            </BorderPaper>
          </div>
          <CustomDialog
            title={`Add ${label}`}
            open={editDialogOpen}
            onClose={handleEditDialogClose}
            onCancelClick={handleEditDialogClose}
            // onNextClick={handleNextClick}
            // onCompleteClick={handleCompleteButtonClick}
            onSaveClick={handleCompleteButtonClick}
            // isSave={isEdit || isClone ? true : false}
            loading={postLoading}
            error={errorMessage}
            // disabled={inputs?.length === 0}>
          >
            <FormContainer
              inputs={inputs}
              urlEndPoint={urlEndPoint}
              onFormChange={onFormChange}
              handleEditChange={handleEditChange}
              rowData={rowData}
              handleDateChange={handleDateChange}
            />
          </CustomDialog>
          <ImportDialog
            open={importDialogOpen}
            onClose={handleImportDialogClose}
            onSaveClick={handleCompleteButtonClick}
          />
          <ExportDialog
            open={exportDialogOpen}
            onClose={handleExportDialogClose}
            onSaveClick={handleCompleteButtonClick}
          />
          {alertOpen && (
            <Alert
              open={alertOpen}
              message={`${label} added successfully.`}
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
export default CommonPage;
