import { Card, Grid, InputLabel } from "@material-ui/core";
import React from "react";
import ImageUploader from "react-images-upload";
import CustomButton from "../../components/button";
import CustomInput from "../../components/CustomInput";

const ProfilePage = () => {
  const [image, setImage] = React.useState(null);

  const onDrop = (e) => {
    console.log(e?.[0]);
    setImage(e?.[0]);
    // setState({
    //   pictures: state.pictures.concat(
    //     picture
    //   ) /* state.pictures.concat(picture) */
    // });
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <Card
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: "#d0d0d0",
          }}>
          <h1 style={{}}>Update Profile Picture</h1>
          <ImageUploader
            withIcon={true}
            label={"Max file size: 5mb, accepted: jpg | png "}
            buttonText='Choose image'
            onChange={onDrop}
            imgExtension={[".jpg", ".png"]}
            maxFileSize={5242880}
            singleImage={true}
            accept='image/*'
            withPreview={true}
          />
          {image && (
            <div style={{ marginLeft: 200 }}>
              <CustomButton color='primary'>Submit</CustomButton>
            </div>
          )}
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: "#d0d0d0",
          }}>
          <h1 style={{}}>Update Password</h1>
          <Grid container direction='column' spacing={5}>
            <Grid item md={6}>
              <InputLabel>Old Password</InputLabel>
              <CustomInput
                onChange={(e) => console.log(e)}
                name='oldPass'
                value=''
                autoFocus
                fullWidth
                style={{ width: 300 }}
                // className={classes.textField}
                // size={input.bigInput ? "lg" : "md"}
              />
            </Grid>
            <Grid item md={6}>
              <InputLabel>New Password</InputLabel>
              <CustomInput
                onChange={(e) => console.log(e)}
                name='oldPass'
                value=''
                autoFocus
                fullWidth
                style={{ width: 300 }}
                // className={classes.textField}
                // size={input.bigInput ? "lg" : "md"}
              />
            </Grid>
            <Grid item md={6}>
              <CustomButton color='primary'>Submit</CustomButton>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
