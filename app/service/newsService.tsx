import axios from "axios";
import { News } from "@/components/Contenido/Contenido";
import axiosClient from "./axiosNews";

export const allNewsPage = async (page: number, size: number) => {
  const respuesta = await axiosClient.get(`/news/page`, {
    params: { page, size },
  });
  return respuesta.data;
};

export const getNewsByUUID = async (request: string): Promise<News> => {
  try {
    const response = await axiosClient.get<News>(`/news/uuid`, {
      params: { request },
    });

    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(
        `Error al obtener las noticias con título "${request}":`,
        err.message,
        err.response?.status
      );
    } else if (err instanceof Error) {
      console.error(
        `Error al obtener las noticias con título "${request}":`,
        err.message
      );
    } else {
      console.error(
        `Error al obtener las noticias con título "${request}":`,
        "Error desconocido"
      );
    }

    throw new Error(
      `No se pudieron cargar las noticias con título "${request}".`
    );
  }
};
