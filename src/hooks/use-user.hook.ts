import { useEffect, useState } from 'react'

import { ENDPOINTS } from '@/constants'
import type { User } from '@/interfaces'
import { getAllUsers } from '@/services'

const useGetAllUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        const usersData = await getAllUsers(ENDPOINTS.USERS)
        setUsers(usersData)
      } catch (err) {
        setError('Error fetching users :(')
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return { users, isLoading, error }
}

export { useGetAllUsers }
