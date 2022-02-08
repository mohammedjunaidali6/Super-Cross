import * as api from "../api";
import swal from "sweetalert";
import { CONTACT_US } from "../constants";

export const contactUs = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.contactUs(formData);
    dispatch({ type: CONTACT_US, data });
    swal({
      text:
        "We have received your message , we will try to get back to you ASAP.", 
      icon: "success",
    });
    history.push("/");
  } catch (e) {
    swal({
      text: e.response?.data.msg,
      icon: "error",
    });
  }
};
