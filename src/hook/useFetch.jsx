import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () =>{
      setIsPending(true)
      try {
        const req = await fetch(url)

        if(req.status !== 200){
          throw new Error(req.message)
        }
        const data = await req.json()
        setData(data)
        setIsPending(false)
        setError(null)
      } catch (error) {
        console.log(error)
        setError(error)
        setIsPending(false)
      }
    }
    getData()
  }, [url]);

  return {data, isPending, error}
}

export default useFetch;