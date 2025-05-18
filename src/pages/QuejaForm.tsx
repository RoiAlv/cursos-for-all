import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import InputForm from '../components/InputForm';
import TextAreaInputForm from '../components/TextAreaInputForm';
import { FeedbackService } from '../services/queja.services';
import { useAuth } from '../contexts/AuthContext';

function QuejaForm() {
  const { user } = useAuth(); // Obtener el usuario autenticado
  const [form, setForm] = useState({
    title: '',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      FeedbackService.getById(Number(id))
        .then(data => setForm({
          title: data.title,
          description: data.description,
        }))
        .catch(error => setErrors({ message: error.message }))
        .finally(() => setLoading(false));
    }
  }, [id]);

  // Validación del formulario
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.title) newErrors.title = 'El título es obligatorio';
    if (!form.description) newErrors.description = 'La descripción es obligatoria';
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      setLoading(true);
      setErrors({});
      e.preventDefault();

      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      const formData = {
        title: form.title,
        description: form.description,
        idUser: user?.id || 0, // Enviar el ID del usuario autenticado
      };

      if (id) {
        await FeedbackService.update(Number(id), formData);
      } else {
        await FeedbackService.create(formData);
      }

      toast.success('Queja/sugerencia enviada correctamente!');
      navigate('/feedbackList');
    } catch (error) {
      toast.error('Error al enviar la queja/sugerencia!');
      setErrors({ message: error instanceof Error ? error.message : 'Error desconocido' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="text-white flex flex-col">
      <h2 className="text-4xl font-extrabold dark:text-white">{id ? 'Editar Queja/Sugerencia' : 'Nueva Queja/Sugerencia'}</h2>
      <form className="max-w-sm mx-auto min-w-sm" onSubmit={handleSubmit}>
        <InputForm
          text="Título"
          name="title"
          value={form.title}
          handleChange={handleChange}
          error={errors.title}
        />
        <TextAreaInputForm
          rows={6}
          text="Descripción"
          name="description"
          value={form.description}
          handleChange={handleChange}
          error={errors.description}
        />
        {errors.message && <p className="text-center mt-4 text-red-500">{errors.message}</p>}
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default QuejaForm;