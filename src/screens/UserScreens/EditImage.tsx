import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Dimensions,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Rating } from "react-native-ratings";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { updateEditingProfile } from "../../redux/slices/userSlice";
import { colors } from "../../constants/palette";

export default function EditImage({ navigation }) {
  const user = useSelector((state) => state?.user);
  const [image, setImage] = useState(null);
  const [imagestr, setImagestr] = useState(null);

  const editImage = async () => {
    if (image == null) {
      return alert("Add Image");
    }
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/edit-imagebase64`,
        {
          image: imagestr,
        },
        {
          headers: {
            Authorization: "bearer " + user.userProfile.token,
            Accept: "application / json",
          },
        }
      );
      if (res.data.hasOwnProperty("status")) {
        console.log(res.data);
        alert("Image Edited");
        store.dispatch(
          updateEditingProfile({
            editingProfile: {
              edited: "image",
            },
          })
        );

        navigation.pop();
      } else {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setImagestr(result.base64);
      console.log(image);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.fabookButton]}
        onPress={editImage}
      >
        <View style={styles.socialButtonContent}>
          <Text style={styles.loginText}>Edit Photo</Text>
        </View>
      </TouchableOpacity>

      <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
        color="#000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginText: {
    color: "white",
  },
  fabookButton: {
    backgroundColor: colors.blue,
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
