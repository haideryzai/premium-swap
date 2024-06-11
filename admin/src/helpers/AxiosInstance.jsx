import axios from "axios";

const AxiosInstance = async (
  url,
  method = "GET",
  params = {},
  data = {},
  config = {}
) => {
  let responseData;
  let error;
  let loading;
  try {
    loading = true;
    console.log("🚀 ~ file: AxiosInstance.jsx:AxiosInstance ~ loading");
    const response = await axios({
      url,
      method,
      params,
      data,
      ...config,
    });
    loading = false;
    console.log(
      "🚀 ~ file: AxiosInstance.jsx:AxiosInstance ~ response",
      response.data
    );
    responseData = response;
    return { responseData, error, loading };
  } catch (error) {
    loading = false;
    error = error;
    console.log("🚀 ~ file: AxiosInstance.jsx:AxiosInstance ~ error", error);
  }
};

export default AxiosInstance;
