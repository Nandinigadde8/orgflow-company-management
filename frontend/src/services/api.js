const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getEmployees = async () => {
  const response = await fetch(`${API_BASE_URL}/employees`);
  return response.json();
};