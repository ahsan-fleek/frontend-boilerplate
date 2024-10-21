import Loading from "@/components/Loading"
import { useGetAllUsers } from "@/hooks/use-user.hook"
import { PrivateRoutes } from "@/routes"
import { Link } from "react-router-dom"

function UsersPage() {
  const { users, isLoading, error } = useGetAllUsers()

  return (
    <div>
      {isLoading && <Loading />}
      {error && <div className="text-center text-red-500">Error: {error}</div>}
      <div className="max-w-lg mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Users List</h2>
        <Link to={PrivateRoutes.USERS_CREATE} className='text-blue-500'>
          Go to the create users page
        </Link>
        <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
          {users.map(user => (
            <li key={user.id} className="p-4 hover:bg-gray-100 transition">
              <div className="font-semibold">{user.name}</div>
              <div className="text-gray-600">{user.email}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UsersPage
