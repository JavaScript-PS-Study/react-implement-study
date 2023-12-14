import { todoApi } from '@/apis/todo';
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export const useGetTodos = <K = any>(options?: K) => {
  return useQuery({
    queryKey: ['getTodo'],
    queryFn: async () => {
      const result = await todoApi.getToDoList();
      return result?.json();
    },
    staleTime: 36000000,
    ...options,
  });
};

export const usePostTodo = <K = any>(options?: K) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['postTodo'],
    mutationFn: async (todoContent: string) => {
      const result = await todoApi.postToDo(todoContent);
      return result;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['getTodo'] });
    },
  });
};

export const useDeleteTodo = <K = any>(id: number, options?: K) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deleteTodo', { id }],
    mutationFn: async () => {
      await todoApi.deleteToDo(id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['getTodo'] });
    },
  });
};
