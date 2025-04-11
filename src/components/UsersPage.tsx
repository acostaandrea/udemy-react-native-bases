import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow"

export const UsersPage = () => {
    const {users} = useUsers();
    console.log(users)
  return (
    <>    
    <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Correo</th>                
            </tr>
        </thead>
        <tbody>
            <UserRow/>
            <UserRow/>
        </tbody>
    </table>
    <div className="flex justify-between w-[500px] mt-2">
        <button className="p-2 bg-blue-500 text-white rounded-md">Anteriores</button>
        <button className="p-2 bg-blue-500 text-white rounded-md">Siguientes</button>
    </div>
    </>
  )
}
