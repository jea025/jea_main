import axiosClient from './axiosNews';

export const allNewsPage = async (page: number, size: number) => {
    const respuesta = await axiosClient.get(`/news/page`, {
        params: { page, size},
    });
    return respuesta.data;
};