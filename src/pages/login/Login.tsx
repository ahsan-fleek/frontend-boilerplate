import { PrivateRoutes } from '@/routes'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div>
      <Link to={PrivateRoutes.USERS} className="text-blue-500 py-4 flex justify-center">
        Go to the users page
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-lg font-bold mb-4">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
