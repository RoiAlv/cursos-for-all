import { useEffect, useState } from "react";
import { UserService } from "../services/userService";
import User from "../models/User";
import {
  HiMail,
  HiUser,
  HiUserCircle,
  HiShieldCheck,
  HiBell,
  HiCheckCircle,
} from "react-icons/hi";

function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    UserService.getProfile()
      .then(setUser)
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Error desconocido");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-all">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
        <HiUserCircle className="text-4xl text-white" />
        Perfil de Usuario
      </h2>

      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p className="text-gray-700 dark:text-gray-300">Cargando...</p>
      ) : (
        user && (
          <div className="space-y-4">
            <InfoItem label="Nombre" value={user.name} icon={<HiUser className="text-white" />} />
            <InfoItem label="Apellidos" value={user.surname || ""} icon={<HiUser className="text-white" />} />
            <InfoItem label="Correo Electrónico" value={user.email} icon={<HiMail className="text-white" />} />
            <InfoItem label="Rol" value={user.role} icon={<HiShieldCheck className="text-white" />} />
            <InfoItem
              label="Activado"
              value={user.active ? "Sí" : "No"}
              icon={<HiCheckCircle className="text-white" />}
            />
            <InfoItem
              label="Recibe notificaciones por email"
              value={user.accepNotifications ? "Sí" : "No"}
              icon={<HiBell className="text-white" />}
            />
          </div>
        )
      )}
    </div>
  );
}

function InfoItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-xl">{icon}</div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
}

export default Profile;
