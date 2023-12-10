import { useState, useEffect } from "react";
import axios from "axios";
import { setStarsData } from "../app/feature/starwarSlice";
import { useAppDispatch } from "../app/hooks";
function useFetch(url: string) {
  const dispatch = useAppDispatch();

  const [data, setData] = useState<Character[]|Film[]|Vehicle[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        // this is a general hook to fetch data .but it is used in the components where
        // there is need to set store data.so dispatch is used here
        dispatch(setStarsData(res?.data?.results));
        res.data && setData(res?.data?.results);
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred.");
      });
    return () => {};
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
