import { BASE_URL } from '@/config/const';

export const todoApi = {
  getToDoList: async () => {
    try {
      const response = await fetch(`${BASE_URL}/todo/all`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return await response;
    } catch (e) {
      console.error(e);
    }
  },

  postToDo: async (todoContent: string) => {
    try {
      const response = await fetch(`${BASE_URL}/todo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ todo: todoContent }),
      });

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
    } catch (e) {
      console.error(e);
    }
  },

  deleteToDo: async (id: number) => {
    try {
      const response = await fetch(`${BASE_URL}/todo/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error(`${response.status}`);
    } catch (e) {
      console.error(e);
    }
  },
};
