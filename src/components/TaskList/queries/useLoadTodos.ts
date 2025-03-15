import { useQuery } from '@tanstack/react-query'
import { loadTodos } from '@src/components/TaskList/requests/get-todos'
import { DATE_CONSTANTS } from '@src/utils/constants/date'

export const useLoadTodos = () => {
  const queryKey = ['todos']

  return useQuery({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await loadTodos({ signal, filters: { _limit: 5 } })
      return data
    },
    refetchInterval: DATE_CONSTANTS.TIME_IN_MILLISECONDS.MINUTE * 20,
    staleTime: DATE_CONSTANTS.TIME_IN_MILLISECONDS.MINUTE * 20,
  })
}
