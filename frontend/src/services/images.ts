import axios, { AxiosResponse } from "axios";
import { ImageDto } from "./dto/images.dto";

export const getImages = async (): Promise<ImageDto[] | undefined> => {
  try {
    const response = await axios.get<ImageDto[]>('http://localhost:4000/images');

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
