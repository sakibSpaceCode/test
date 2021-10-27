import React, { useState, useEffect } from "react";

import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from "@material-ui/core";
import CustomInput from "../../components/CustomInput";
import CustomSelect from "../../components/CustomSelect";
import DatePicker from "../../components/CustomDate/date-picker.container";
// import MultipleSelect from "components/multiSelection";
// import { DatePicker } from "common";
// import CustomInput from "components/inputfeild";
// import SelectOption from "components/select";
// import { useDispatch, useSelector } from 'react-redux';
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TestTransferList from "../../components/transferList";
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

const AddEmployeeForm = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }

  function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }

  function union(a, b) {
    return [...a, ...not(b, a)];
  }
  const onFormChange = (e) => {
    console.log(e.target.value);
  };
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };
  const customList = (title, items) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid>
      <Grid container spacing={5} justify={"space-between"} alignItems="center">
        <Grid item md={6} className={classes.inputField}>
          <Typography variant="body2" style={{ fontWeight: 700 }}>
            Username
          </Typography>
          <CustomInput
            onChange={onFormChange}
            name="projectManager"
            value={formData.projectManager}
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
          <Typography variant="body2" style={{ fontWeight: 700 }}>
            Password
          </Typography>
          <div style={{ marginTop: "10px" }}>
            <div>
              <span style={{ fontWeight: 600 }}> algorithm : </span>
              <span>pbkdf_sha256</span>{" "}
              <span style={{ fontWeight: 600 }}>iteration :</span>{" "}
              <span>260000</span>{" "}
              <span style={{ fontWeight: 600 }}>salt :</span>{" "}
              <span>rGd1WQ</span>
            </div>
            <div>
              <span style={{ fontWeight: 600 }}>hash :</span>{" "}
              <span>QUoJc4********************************</span>
            </div>
          </div>
        </Grid>
        <Grid item md={12}>
          <Typography variant="subtitle">Personal Info</Typography>
        </Grid>
        <Grid item md={4} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>First Name</InputLabel>
          <CustomInput
            onChange={onFormChange}
            name="projectName"
            value={formData.projectName}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size="sm"
          />
        </Grid>

        <Grid item md={4} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Last Name</InputLabel>
          <CustomInput
            onChange={onFormChange}
            name="clientName"
            value={formData.clientName}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size="sm"
          />
        </Grid>

        <Grid item md={4} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Email Address</InputLabel>
          <CustomInput
            onChange={onFormChange}
            name="clientContact"
            value={formData.clientContact}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size="sm"
          />
        </Grid>
        <Grid item md={12}>
          {" "}
          <Typography variant="subtitle">User Permission</Typography>
        </Grid>
        <Grid item md={12}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            className={classes.root}
          >
            <Grid item xs>
              {/* <Grid item>{customList("Choices", left)}</Grid>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  aria-label="move selected right"
                >
                  &gt;
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label="move selected left"
                >
                  &lt;
                </Button>
              </Grid>
            </Grid>
            <Grid item>{customList("Chosen", right)}</Grid> */}
              <TestTransferList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddEmployeeForm;
