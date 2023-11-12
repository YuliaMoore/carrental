import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseUrl = "https://64bc43077b33a35a444727f9.mockapi.io/adverts";

export const fetchCars = createAsyncThunk(
  "advert/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("./adverts");
      console.log(fetchCars);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
