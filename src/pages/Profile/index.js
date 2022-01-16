import { Card, Grid, InputLabel } from "@material-ui/core";
import React, { useRef } from "react";
import ImageUploader from "react-images-upload";
import CustomButton from "../../components/button";
import CustomInput from "../../components/CustomInput";
import BorderPaper from "../../components/BorderPaper";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPassChangeResponse,
  postUserImage,
  updatePassword,
} from "../../redux/actions/commonFormActions";
import Alert from "../../components/alert/alert.container";

const ProfilePage = () => {
  const [image, setImage] = React.useState(null);
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const dispatch = useDispatch();
  const [alert, setAlert] = React.useState(false);
  const [alert1, setAlert1] = React.useState(false);
  const { imageUploadResponse, imageUploadError } = useSelector(
    (state) => state.postImage
  );
  const ref = useRef();
  const { updatePasswordResponse, updatePasswordError } = useSelector(
    (state) => state.postUpdatePassword
  );
  React.useEffect(() => {
    if (updatePasswordError || updatePasswordResponse?.success) {
      ref?.current?.focus();
      setNewPassword("");
      setOldPassword("");
      setAlert(true);
    }
    console.log(updatePasswordError);
  }, [updatePasswordResponse, updatePasswordError]);
  const onDrop = (e) => {
    setImage(e?.[0]);
  };

  const handleImage = () => {
    let formData = new FormData();
    formData.append("profile", image);
    dispatch(postUserImage(formData));
  };
  const handlePassword = () => {
    dispatch(updatePassword(JSON.stringify({ oldPassword, newPassword })));
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <BorderPaper>
          <div
            style={{
              padding: 20,
              borderRadius: 20,
              backgroundColor: "#fff",
              minHeight: 400,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Update Profile Picture</h1>
            <ImageUploader
              withIcon={false}
              label={"Max file size: 5mb, accepted: jpg | png "}
              buttonText="Choose image"
              onChange={onDrop}
              imgExtension={[".jpg", ".png"]}
              maxFileSize={5242880}
              singleImage={true}
              accept="image/*"
              withPreview={true}
            />
            {image && (
              <div style={{ marginLeft: 200 }}>
                <CustomButton onClick={handleImage} color="primary">
                  Submit
                </CustomButton>
              </div>
            )}
          </div>
        </BorderPaper>
      </Grid>
      <Grid item xs={4}>
        <BorderPaper>
          <div
            style={{
              padding: 20,
              borderRadius: 20,
              backgroundColor: "#fff",
              minHeight: 400,
            }}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <h1 style={{}}>Update Password</h1>
              </Grid>
              <Grid item md={12}>
                <InputLabel style={{ marginBottom: 7 }}>
                  Old Password
                </InputLabel>
                <CustomInput
                  onChange={(e) => setOldPassword(e.target.value)}
                  name="oldPass"
                  value={oldPassword}
                  autoFocus
                  fullWidth
                  style={{ width: 300 }}
                  inputRef={ref}
                  // className={classes.textField}
                  // size={input.bigInput ? "lg" : "md"}
                />
              </Grid>
              <Grid item md={12}>
                <InputLabel style={{ marginBottom: 7 }}>
                  New Password
                </InputLabel>
                <CustomInput
                  onChange={(e) => setNewPassword(e.target.value)}
                  name="oldPass"
                  value={newPassword}
                  fullWidth
                  style={{ width: 300 }}
                  // className={classes.textField}
                  // size={input.bigInput ? "lg" : "md"}
                />
              </Grid>
              <Grid item md={6}>
                <CustomButton onClick={handlePassword} color="primary">
                  Submit
                </CustomButton>
              </Grid>
            </Grid>
          </div>
        </BorderPaper>
      </Grid>
      {alert && (
        <Alert
          open={alert}
          message={
            updatePasswordResponse?.success
              ? "Updated Successfully"
              : updatePasswordError
          }
          duration={2000}
          onClose={() => {
            setAlert(false);
            dispatch(clearPassChangeResponse());
          }}
          vertical={"bottom"}
          horizontal={"center"}
          severity={updatePasswordResponse?.success ? "success" : "error"}
          actions={false}
        />
      )}
    </Grid>
  );
};

export default ProfilePage;
