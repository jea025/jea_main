"use client";
import { allNewsPage } from "@/app/service/newsService";
import React, { useState, useEffect } from "react";
import Noticia from "../Noticia/Noticia";
import { Pagination } from "react-bootstrap";

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
  const [news, setNews] = useState<News[]>([]);
  const [pageActual, setpageActual] = useState<number>(0);
  const [totalPages, settotalPages] = useState<number>(0);
  const tamanoPage = 10;

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data: NewsResponse = await allNewsPage(pageActual, tamanoPage);
        console.log(data);
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
    }
  };

  return (
    <div className="w-5/6 h-auto mb-24 flex flex-col justify-center gap-10">
      <h2 className="text-4xl select-none">
        <span className="text-customCyan">|</span>
        Noticias recientes
      </h2>
      <ul className="bg-customCyam flex flex-col gap-6 w-full items-center justify-center" >
        {news.map((newsItem) => (
            <Noticia
              key={newsItem.title}
              titulo={newsItem.title}
              descripcion={newsItem.body}
              imgUrl={newsItem.image}
              categoria={newsItem.author}
            />
        ))}
      </ul>

      <div className="items-center justify-center flex">
        <Pagination className="bg-gray-800 shadow-lg rounded-lg">
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
              className="text-customCyan bg-slate-400"
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
  );
}
