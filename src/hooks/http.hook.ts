export const useHttp = () => {
  const request = async (
    url: string,
    mode = 'no-cors',
    method = 'GET',
    body = null,
    headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    }
  ) => {
    try {
      const response = await fetch(url, { mode, method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    }
  };
  return {
    request,
  };
};
