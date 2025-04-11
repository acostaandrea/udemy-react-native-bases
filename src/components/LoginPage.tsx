import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithMailPassword ,logout, user} =
    useAuthContext();
  if (isChecking) {
    return <h3>Verificando usuario</h3>;
  }
  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <pre>{JSON.stringify(user, null)}</pre>
          <button onClick={logout}
          className="bg-blue-500 p-2 text-white rounded-xl mt-5">Logout</button>
        </>
      ) : (
        <>
          <h3>Ingresar a la aplicacion</h3>
          <button onClick={()=>loginWithMailPassword('andrea', '123456')}
          className="bg-blue-500 p-2 text-white rounded-xl mt-5">
            Login
          </button>
        </>
      )}
    </>
  );
};
