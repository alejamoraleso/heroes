import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate();

  const logIn = () => {
    navigate("/inicio");
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <button onClick={logIn} className="bg-blue-600 py-2 px-6 rounded-lg font-bold text-white hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        Ingresar 😀
      </button>
    </div>
  )
}
