import type { User } from '@/interfaces/user.interface'

const getAllUsers = async (url: string): Promise<User[]> => {
  const response = await fetch(url)
  const data: User[] = await response.json()
  return data
}

export { getAllUsers }
