import { useState, useEffect } from 'react';

function useFetch() {
  const [url, setUrl] = useState('');
  const [request, setRequest] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [response, setResponse] = useState({});

  useEffect(() => {
    async function customFetch() {
      await setIsLoading(true);
      await setError(null);
      await setResponse(null);

      let res = fetch(request.url ? request.url : url, {
        method: request.method || 'GET',
        body: JSON.stringify(request.body) || null,
        headers: {
          ...request.headers,
          'contentType': 'application/json',
          Accept: 'application/json'
        },
      });

      await setIsLoading(false);

      if (res.status === 200) {

      };
      
    };
  });
}

export default useFetch;
