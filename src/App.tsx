import "./App.css";
// import { Counter } from "./components/Counter";
// import { BasicTypes } from './typescript/BasicTypes'
import { LoginPage } from "./components/LoginPage";
import { UsersPage } from "./components/UsersPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="flex flex-col justify-center items-center h-svh">
          <h1 className="text-4xl mb-5">React + TS</h1>
          {/* <Counter /> */}
        <LoginPage />
        <UsersPage />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
