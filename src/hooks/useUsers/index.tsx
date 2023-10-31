import { API } from "@/services/axios"
import { AxiosResponse } from "axios"
import { formatDistanceToNow } from "date-fns"
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query"


type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

type GetUsersResponse = {
  totalCount: number
  users: User[]
}

type UsersResponse = {
  users: User[]
  total: number
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const response = await API.get<User[]>('users', {
    params: {
      '_page': page
    }
  })

  const data = response.data
  const totalCount = data.length 

  const users = data.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: formatDistanceToNow(new Date(user.createdAt))
  }))

  return {
    users,
    totalCount,
  }

}

export function useUsers(page: number /*, options: UseQueryOptions */) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10,   // 10 minutes
    // ...options,
  }) // as UseQueryResult<GetUsersResponse, unknown>
}