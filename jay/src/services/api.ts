import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export const createTodo = async (todo: string) => {
  const response = await axios.post(`${API_BASE_URL}/todo`, { todo });
  return response.data;
};

export const getTodos = async () => {
  const response = await axios.get(`${API_BASE_URL}/todo/all`);
  return response.data[0];
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  const response = await axios.put(`${API_BASE_URL}/todo/${id}`, {
    todo,
    isCompleted,
  });
  return response.data;
};

export const deleteTodo = async (id: number) => {
  await axios.delete(`${API_BASE_URL}/todo/${id}`);
};

export const deleteAllTodos = async () => {
  await axios.delete(`${API_BASE_URL}/todo/all`);
};
