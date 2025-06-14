import { useEffect, useState } from "react";
import { UserService } from "../services/userService";
import {
  HiMail,
  HiUser,
  HiShieldCheck,
  HiCheckCircle,
  HiXCircle,
} from "react-icons/hi";

interface User {
  id: number;
  name: string;
  surname: string;
  role: string;
  course: string;
  email: string;
  active: boolean;
  accepNotifications: boolean;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function call() {
      try {
        const userList = await UserService.getAll();
        setUsers(userList);
      } catch (error) {
        const msg = error instanceof Error ? error.message : "Error desconocido";
        setMessage(msg);
      } finally {
        setLoading(false);
      }
    }
    call();
  }, []);

  if (loading) return <div className="text-center py-10 text-white">Cargando usuarios...</div>;

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      {message && <p className="text-red-500 text-center">{message}</p>}

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-red-600 dark:bg-red-800">
          <tr>
            <th scope="col" className="px-6 py-3">
              <HiUser className="inline mr-1 text-white" />
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">Apellido</th>
            <th scope="col" className="px-6 py-3">
              <HiMail className="inline mr-1 text-white" />
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              <HiShieldCheck className="inline mr-1 text-white" />
              Rol
            </th>
            <th scope="col" className="px-6 py-3 text-center">Activo</th>
            <th scope="col" className="px-6 py-3 text-center">Notificaciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr
              key={user.id}
              className={`${
                idx % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"
              } border-b dark:border-gray-600`}
            >
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                {user.name}
              </th>
              <td className="px-6 py-4">{user.surname}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4 text-center">
                {user.active ? (
                  <HiCheckCircle className="text-green-500 text-lg mx-auto" />
                ) : (
                  <HiXCircle className="text-red-500 text-lg mx-auto" />
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {user.accepNotifications ? (
                  <HiCheckCircle className="text-green-500 text-lg mx-auto" />
                ) : (
                  <HiXCircle className="text-red-500 text-lg mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
