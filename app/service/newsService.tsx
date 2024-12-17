import { News } from '@/components/Contenido/Contenido';
import axiosClient from './axiosNews';

export const allNewsPage = async (page: number, size: number) => {
    const respuesta = await axiosClient.get(`/news/page`, {
        params: { page, size},
    });
    return respuesta.data;
};

export const getNewsByUUID = async (request: string): Promise<News> => {
    try {
      console.log(request, "request xd")
      const response = await axiosClient.get<News>(`/news/uuid`, {
        params: { request }, // Agrega el parámetro de consulta 'title'
      });
      console.log(response.data)
      return response.data; // Ajusta según la estructura de tu respuesta
    } catch (err) {
      console.error(
        `Error al obtener las noticias con título "${request}":`,
        err
      );
      throw new Error(
        `No se pudieron cargar las noticias con título "${request}".`
      );
    }
  };