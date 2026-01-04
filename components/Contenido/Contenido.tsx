"use client";
import React, { useState, useEffect } from "react";
import Noticia from "../Noticia/Noticia";
import { Pagination } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";

export interface News {
  uuid: string;
  title: string;
  body: string;
  image: string;
  author: string;
}

// Datos de ejemplo estáticos (reemplaza esto con tus datos reales)
const MOCK_NEWS: News[] = [
  {
    uuid: "1",
    title: "Noticia de ejemplo 1",
    body: "Esta es una noticia de ejemplo. Reemplaza estos datos con tus noticias reales.",
    image: "/contenido.jpg",
    author: "Jóvenes en Acción"
  },
  {
    uuid: "2",
    title: "Noticia de ejemplo 2",
    body: "Esta es otra noticia de ejemplo. Puedes agregar más noticias a este array.",
    image: "/contenido.jpg",
    author: "Jóvenes en Acción"
  },
  // Agrega más noticias según necesites
];

export default function PaginationNews() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [news, setNews] = useState<News[]>([]);
  const [pageActual, setpageActual] = useState<number>(currentPage);
  const [totalPages, settotalPages] = useState<number>(0);
  const tamanoPage = 8;

  useEffect(() => {
    // Obtiene el valor de "page" y actualiza el estado
    const page = searchParams.get("page");
    if (page && !isNaN(Number(page))) {
      setCurrentPage(Number(page));
    }
  }, [searchParams]);
  
  useEffect(() => {
    // Simula la carga de noticias desde datos estáticos
    const loadNews = () => {
      try {
        // Calcula la paginación
        const startIndex = pageActual * tamanoPage;
        const endIndex = startIndex + tamanoPage;
        const paginatedNews = MOCK_NEWS.slice(startIndex, endIndex);
        
        setNews(paginatedNews);
        settotalPages(Math.ceil(MOCK_NEWS.length / tamanoPage));
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : "Error desconocido";
        console.error("Error al cargar noticias:", message);
      }
    };

    loadNews();
  }, [pageActual]);

  const changePage = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setpageActual(newPage);
      router.push(`/news?page=${newPage + 1}`);
    }
  };

  return (
    <div className="relative w-full bg-cover bg-center bg-fixed min-h-screen bg-vision">
      <div className="bg-cyan-50 bg-opacity-95 w-full h-full absolute"></div>

      <div className="relative w-full h-full">
        <h2 className="text-5xl select-none text-gray-700 m-4 font-bold">
          <span className="text-customCyan">| </span>
          Noticias recientes
        </h2>
        
        {news.length === 0 ? (
          <div className="text-center p-8">
            <p className="text-gray-600 text-xl">No hay noticias disponibles</p>
          </div>
        ) : (
          <>
            {/* Grilla de noticias */}
            <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
              {news.map((newsItem) => (
                <li key={newsItem.uuid} className="flex justify-center">
                  <Noticia
                    uuid={newsItem.uuid}
                    titulo={newsItem.title}
                    descripcion={newsItem.body}
                    image={newsItem.image}
                    author={newsItem.author}
                  />
                </li>
              ))}
            </ul>

            <div className="items-center justify-center flex mt-20">
              <Pagination>
                <Pagination.Prev
                  disabled={pageActual === 0}
                  onClick={() => changePage(pageActual - 1)}
                >
                  Anterior
                </Pagination.Prev>
                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    key={index}
                    active={index === pageActual}
                    onClick={() => changePage(index)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  disabled={pageActual === totalPages - 1}
                  onClick={() => changePage(pageActual + 1)}
                >
                  Siguiente
                </Pagination.Next>
              </Pagination>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
