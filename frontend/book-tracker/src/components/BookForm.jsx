import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { saveBook, updateBook } from "../utils/librosApi";
import { optionSelect } from "../utils/ApiUrl";

function BookForm({ defaultValues = null, onUpdate = null }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Precargar datos si se va a editar
  useEffect(() => {
    if (defaultValues) {
      Object.entries(defaultValues).forEach(([key, value]) => {
        if (key !== "id") setValue(key, value);
      });
    }
  }, [defaultValues, setValue]);

  const onSubmit = async (data) => {
    if (defaultValues) {
      await updateBook(defaultValues.id, data);
      Swal.fire("Actualizado", "Libro actualizado con éxito.", "success");
    } else {
      await saveBook(data);
      Swal.fire("Agregado", "Libro agregado correctamente.", "success");
    }

    reset();
    if (onUpdate) onUpdate();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <input
        placeholder="Título del libro"
        {...register("libro", { required: true })}
        className="border p-2 rounded"
      />
      {errors.libro && (
        <span className="text-red-500 text-sm">Este campo es requerido</span>
      )}

      <input
        placeholder="Autor"
        {...register("autor", { required: true })}
        className="border p-2 rounded"
      />
      <input
        placeholder="Género"
        {...register("genero", { required: true })}
        className="border p-2 rounded"
      />
      <input
        placeholder="Año"
        type="number"
        {...register("año", { required: true })}
        className="border p-2 rounded"
      />

      <select
        {...register("estado", { required: true })}
        className="border p-2 rounded"
      >
        <option value="">Seleccione estado</option>
        {optionSelect.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
      >
        {defaultValues ? "Actualizar libro" : "Agregar libro"}
      </button>
    </form>
  );
}

export default BookForm;
