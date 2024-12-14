"use client";
import { allNewsPage } from "@/app/service/newsService";
import React, { useState, useEffect } from "react";
import Noticia from "../Noticia/Noticia";
import { Pagination } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";

export interface News {
  id?: string;
  title: string;
  body: string;
  image: string;
  author: string;
}

interface NewsResponse {
  news: News[];
  pageActual: number;
  totalPages: number;
  totalItems: number;
}

export default function PaginationNews() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [news, setNews] = useState<News[]>([]);
  const [pageActual, setpageActual] = useState<number>(currentPage);
  const [totalPages, settotalPages] = useState<number>(0);
  const tamanoPage = 10;

  useEffect(() => {
    // Obtiene el valor de "page" y actualiza el estado
    const page = searchParams.get("page");
    if (page && !isNaN(Number(page))) {
      setCurrentPage(Number(page));
    }
  }, [searchParams]);
  
  useEffect(() => {
    const loadNews = async () => {
      try {
        const data: NewsResponse = await allNewsPage(pageActual, tamanoPage);
        setNews(data.news);
        setpageActual(data.pageActual);
        settotalPages(data.totalPages);
      } catch (error) {
        console.error("Error al cargar noticias:", error);
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
      <div className="bg-cyan-50 bg-opacity-95 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-1 p-8">
        <h2 className="text-4xl select-none text-black mb-6">
          <span className="text-customCyan">| </span>
          Noticias recientes
        </h2>
        {/* Grilla de noticias */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {news.map((newsItem) => (
            <li key={newsItem.title} className="flex justify-center">
              <Noticia
                titulo={newsItem.title}
                descripcion={newsItem.body}
                imgUrl={newsItem.image}
                categoria={newsItem.author}
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
      </div>
    </div>
  );
}
