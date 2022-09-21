import { useEffect, useState } from 'react';
import { z } from 'zod';

const Response = z
  .object({
    count: z.number(),
    results: z
      .array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      )
      .nonempty(),
  })
  .nullable();

type Response = z.infer<typeof Response>;

export type GetAPIUrl = (page: number, pageSize: number) => string;

const usePaginationFetch = (getUrl: GetAPIUrl) => {
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<Response>(null);
  const PAGE_SIZE = 10;

  useEffect(() => {
    fetch(getUrl(page, PAGE_SIZE))
      .then((response) => response.json())
      .then((data) => {
        const parsedData = Response.parse(data);
        setResponse(parsedData);
        setLoading(false);
      });
  }, [page, getUrl]);

  const nextPage = () => setPage(page + 1);
  const previousPage = () => setPage(Math.max(0, page - 1));

  return { response, loading, page, setPage, nextPage, previousPage };
};

export default usePaginationFetch;
