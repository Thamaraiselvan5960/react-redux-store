export const fetchMock = (api) => {
  const fetchMockData = () =>
    api.get("https://jsonplaceholder.typicode.com/todos");
  return {
    fetchMockData
  };
};
