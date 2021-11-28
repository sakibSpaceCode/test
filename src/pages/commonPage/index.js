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
  clearPutResponse,
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
  putFormData,
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

  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [alertOpen2, setAlertOpen2] = useState(false);
  const [nextClick, setNextClick] = useState(false);
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
  const [search, setSearch] = useState("");
  const [seventhDropdown, setSeventhDropdown] = useState("");
  const { loading, error, responseData } = useSelector(
    (state) => state.getData
  );

  isEdit &&
    mData?.fields?.forEach((field) => {
      let fieldValue = rowData[field.name];
      console.log(field.name, fieldValue);
      if (field.name === "brand_name") {
        field.value = rowData?.Job?.name;
        return;
      } else if (typeof fieldValue === "object" && field.name === "Name") {
        field.value = rowData?.Job?.name;
        return;
      } else if (typeof fieldValue === "object" && fieldValue !== null) {
        if (
          field.name === "Job" ||
          field.name === "previous_designer" ||
          field.name === "Drawing_References" ||
          field.name === "Material_Specification" ||
          field.name === "Packaging" ||
          field.name === "Post_Delivery" ||
          field.name === "Project_Reference" ||
          field.name === "Project_type" ||
          field.name === "Structure_Life_Span" ||
          field.name === "previous_designer" ||
          field.name === "assigned_to" ||
          field.name === "assigned_to"
        ) {
          field.value = fieldValue._id;
        }
      } else {
        field.value = rowData[field?.name];
      }
    });
  const emptyValuesFiltered =
    mData?.fields?.length > 0 &&
    mData?.fields?.filter((v) => v.value !== undefined || v.value !== null);

  const submitCallback = (e) => {
    let object = {};

    emptyValuesFiltered?.map((m) => (object[m.name] = m.value));
    if (isEdit) {
      object._id = rowData._id;
    }
    let json = JSON.stringify(object);
    if (isEdit) {
      dispatch(putFormData(apiURL, json));
    } else {
      dispatch(postFormData(apiURL, json));
    }
  };
  const [
    inputs,
    onFormChange,
    handleEditChange,
    setSubmit,
    resetFormData,
    handleDateChange,
  ] = useForm(mData?.fields, submitCallback, rowData, setRowData, setNextClick);

  const handleAddDialog = () => {
    setAddDialogOpen(true);
  };
  const handleAddDialogClose = () => {
    setAddDialogOpen(false);
    setErrorMessage(null);
    resetFormData();
    setErrorMessage("");
    // dispatch(clearDropDownResponse())
  };
  const handleEditDialog = () => {
    setIsEdit(true);
    setEditDialogOpen(true);
  };
  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setErrorMessage(null);
    resetFormData();
    setErrorMessage("");
    setIsEdit(false);
    // dispatch(clearDropDownResponse())
  };
  const handleCompleteButtonClick = () => {
    setSubmit(nextClick);
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
  const { putLoading, putResponse, putError } = useSelector(
    (state) => state.putFields
  );
  useEffect(() => {
    dispatch(getData(apiURL));
    dispatch(getDropdown("retro_plan"));
    apiURL === "corrective" && dispatch(getDiffDropdown("user"));
    apiURL === "design_detail" && dispatch(getDiffDropdown("user"));
    // dispatch(get2ndDiffDropdown("user"));

    return () => {
      dispatch(clearData());
      setIsEdit(false);
      setErrorMessage("");
      setAlertOpen(false);
      setAlertOpen2(false);
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
  console.log(rowData);
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
    urlEndPoint === "design-department/design-details" &&
      setSecondDropdown(
        JSON.stringify({
          type: "status",
          table: "design_detail",
        })
      );
  }, [urlEndPoint]);
  console.log(urlEndPoint, apiURL);
  useEffect(() => {
    apiURL === "job_card" &&
      secondDropdown &&
      dispatch(get2ndDropdown(secondDropdown));
    apiURL === "status" &&
      secondDropdown &&
      dispatch(get2ndDropdown(secondDropdown));
    apiURL === "design_detail" &&
      secondDropdown &&
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
    if (!nextClick) {
      postResponse?.success === false && setAddDialogOpen(true);
      postResponse?.success === true && setAddDialogOpen(false);
    } else {
      postResponse?.success === false && setAddDialogOpen(true);
      postResponse?.success === true && setAddDialogOpen(true);
    }
    postResponse?.success === true && resetFormData();

    postError && dispatch(clearPostResponse());
    postError && setErrorMessage(postError);
    setTimeout(() => {
      dispatch(clearPostResponse());
    }, 3000);
  }, [postResponse, postError, nextClick]);
  // useEffect(() => {
  //   if (!nextClick) {
  //     postResponse?.success === true && setAddDialogOpen(false);
  //     postResponse?.success === true && setErrorMessage(null);
  //   }
  // }, [postResponse]);
  useEffect(() => {
    putResponse?.success === true && setAlertOpen2(true);
    putResponse?.success === true && dispatch(getData(apiURL));
    putResponse?.success === false && setEditDialogOpen(true);
    putError?.errorMessage && setErrorMessage(putError?.errorMessage);
    putResponse?.success === true && setIsEdit(false);
    putResponse?.success === true && resetFormData();
    putResponse?.success === true && setErrorMessage(null);
    putError?.errorMessage && dispatch(clearPutResponse());
    setTimeout(() => {
      dispatch(clearPutResponse());
    }, 3000);
  }, [putResponse, putError]);
  useEffect(() => {
    putResponse?.success === true && setEditDialogOpen(false);
  }, [putResponse]);
  const handleNextClick = () => {
    setNextClick(true);
  };
  useEffect(() => {
    nextClick && setSubmit(nextClick);
  }, [nextClick]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchClick = () => {
    dispatch(getData(apiURL, search));
  };
  const handleSearchDelete = () => {
    setSearch("");
    dispatch(getData(apiURL));
  };
  // useEffect(() => {
  //   dispatch(getData(apiURL, search));
  // }, [search]);

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
                  <CustomSearch
                    value={search}
                    handleSearchDelete={handleSearchDelete}
                    handleChange={handleSearch}
                    handleSearch={handleSearchClick}
                    placeholder={`Search ${label} to view`}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="flex-end" spacing={2}>
                <Grid item>
                  <CustomButton
                    width="150px"
                    variant="outlined"
                    onClick={handleAddDialog}
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
                setEditDialogOpen={handleEditDialog}
              />
            </BorderPaper>
          </div>
          <CustomDialog
            title={`Add ${label}`}
            open={addDialogOpen}
            onClose={handleAddDialogClose}
            onCancelClick={handleAddDialogClose}
            onNextClick={handleNextClick}
            nextClick={nextClick}
            // onCompleteClick={handleCompleteButtonClick}
            onSaveClick={handleCompleteButtonClick}
            // isSave={isAdd || isClone ? true : false}
            loading={postLoading}
            error={errorMessage}
            isEdit={isEdit}
            apiURL={apiURL}
            setIsEdit={setIsEdit}
            json={JSON.stringify({ _id: rowData?._id })}
            disabled={inputs?.length === 0}
            resetFormData={resetFormData}
            setEditDialogOpen={setEditDialogOpen}
          >
            <FormContainer
              inputs={inputs}
              urlEndPoint={urlEndPoint}
              onFormChange={onFormChange}
              handleEditChange={handleEditChange}
              rowData={rowData}
              handleDateChange={handleDateChange}
              isEdit={isEdit}
            />
          </CustomDialog>
          <CustomDialog
            title={`Edit ${label}`}
            open={editDialogOpen}
            onClose={handleEditDialogClose}
            onCancelClick={handleEditDialogClose}
            onNextClick={handleNextClick}
            nextClick={nextClick}
            setIsEdit={setIsEdit}
            // onCompleteClick={handleCompleteButtonClick}
            onSaveClick={handleCompleteButtonClick}
            // isSave={isAdd || isClone ? true : false}
            loading={putLoading}
            error={errorMessage}
            isEdit={isEdit}
            apiURL={apiURL}
            json={JSON.stringify({ _id: rowData?._id })}
            disabled={inputs?.length === 0}
            resetFormData={resetFormData}
            setEditDialogOpen={setEditDialogOpen}
          >
            <FormContainer
              inputs={inputs}
              urlEndPoint={urlEndPoint}
              onFormChange={onFormChange}
              handleEditChange={handleEditChange}
              rowData={rowData}
              handleDateChange={handleDateChange}
              isEdit={isEdit}
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
          {alertOpen2 && (
            <Alert
              open={alertOpen2}
              message={`${label} updated successfully.`}
              duration={2000}
              onClose={() => setAlertOpen2(false)}
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
