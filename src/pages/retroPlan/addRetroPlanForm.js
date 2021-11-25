import React, { useState, useEffect } from "react";

import { Grid, InputLabel, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../components/CustomInput";
import CustomSelect from "../../components/CustomSelect";
import DatePicker from "../../components/CustomDate/date-picker.container";
import AutoComplete from "../../components/Autcomplete";

const useStyles = makeStyles((theme) => ({
  inputLabel: {
    marginBottom: 8,
    color: "#000",
  },
  inputField: {
    "& .MuiFormLabel-root": {
      fontSize: "0.9rem",
    },
  },
  root: {
    margin: "auto",
    zIndex: 999999999,
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

const AddRetroPlanForm = (props) => {
  const { setFormData, formData } = props;
  const classes = useStyles();
  const { options } = useSelector((state) => state.getDropdown);
  const onFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDateChange = (e, date) => {
    setFormData({ ...formData, [e]: date });
  };
  console.log(options);
  const handleAutocompleteChnage = (e, newValue) => {
    
    setFormData({ ...formData, [e]: newValue?._id });
  };

  return (
    <Grid>
      <Grid container spacing={5} justify={"space-between"} alignItems="center">
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Job No.</InputLabel>
          <CustomInput
            onChange={onFormChange}
            name="name"
            value={formData.Job ?? ''}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size="sm"
          />
        </Grid>

        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Name</InputLabel>
          <CustomInput
            onChange={onFormChange}
            name="name"
            value={formData.name ?? ''}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size="sm"
          />
        </Grid>

        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Survey</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.survey ?? ''}
            handleDate={(date) => handleDateChange("survey", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Drawing Start</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.drawing_start ?? ''}
            handleDate={(date) => handleDateChange("drawing_start", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>First Revision</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.first_revision ?? ''}
            handleDate={(date) => handleDateChange("first_revision", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>First MR</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.first_mr ?? ''}
            handleDate={(date) => handleDateChange("first_mr", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Procurement First MR
          </InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.procurement_first_mr ?? ''}
            handleDate={(date) =>
              handleDateChange("procurement_first_mr", date)
            }
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Drawing Approvel
          </InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.drawing_approvel ?? ''}
            handleDate={(date) => handleDateChange("drawing_approvel", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Second MR</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.Second_mr ?? ''}
            handleDate={(date) => handleDateChange("Second_mr", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Procurement Second MR
          </InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.procurement_second_mr ?? ''}
            handleDate={(date) =>
              handleDateChange("procurement_second_mr", date)
            }
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Sub Assembly</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.sub_assembly ?? ''}
            handleDate={(date) => handleDateChange("sub_assembly", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Structure Inspection
          </InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.structure_inspection ?? ''}
            handleDate={(date) =>
              handleDateChange("structure_inspection", date)
            }
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Paint</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.paint ?? ''}
            handleDate={(date) => handleDateChange("paint", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Paint Inspection
          </InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.paint_inspection ?? ''}
            handleDate={(date) => handleDateChange("paint_inspection", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            First Final Inspection
          </InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.first_final_inspection ?? ''}
            handleDate={(date) =>
              handleDateChange("first_final_inspection", date)
            }
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Second Final Inspection
          </InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.second_final_inspection ?? ''}
            handleDate={(date) =>
              handleDateChange("second_final_inspection", date)
            }
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Dispatch</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.dispatch ?? ''}
            handleDate={(date) => handleDateChange("dispatch", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Final Assembly Start Date
          </InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.final ?? ''}
            handleDate={(date) => handleDateChange("final", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Packing</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.packing ?? ''}
            handleDate={(date) => handleDateChange("packing", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Delivery</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.delivery ?? ''}
            handleDate={(date) => handleDateChange("delivery", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Hoarding</InputLabel>
          <CustomInput
            onChange={onFormChange}
            name="hoarding"
            value={formData.hoarding ?? ''}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size="sm"
          />
        </Grid>

        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Install</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.Install ?? ''}
            handleDate={(date) => handleDateChange("Install", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Handover</InputLabel>
          <DatePicker
            inputVariant="outlined"
            format="dd-MM-yyyy"
            placeholder="DD-MM-YYYY"
            fullWidth
            width={"100%"}
            height={50}
            value={formData.handover ?? ''}
            handleDate={(date) => handleDateChange("handover", date)}
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Project Manager
          </InputLabel>
          <CustomInput
            onChange={onFormChange}
            name="project"
            value={formData.project ?? ''}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size="sm"
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Civil MEP Works
          </InputLabel>
          <CustomInput
            onChange={onFormChange}
            name="civil_mep_works"
            value={formData.civil_mep_works ?? ''}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size="lg"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddRetroPlanForm;
