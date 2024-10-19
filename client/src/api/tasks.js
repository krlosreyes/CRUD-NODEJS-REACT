import axios from "./axios";

export const getTasksRequest = async () => axios.get("/tasks");

export const createTaskRequest = async (task) => axios.post("/tasks", task);

export const updateTaskRequest = async (id, task) => {
  if (!task || !task._id) {
      throw new Error("El objeto 'task' debe contener un '_id' válido.");
  }
  try {
      const response = await axios.put(`/tasks/${id}`, task);
      return response.data; // Retorna solo los datos relevantes
  } catch (error) {
      console.error("Error al actualizar la tarea:", error);
      throw error; // Lanza el error para que pueda ser manejado por quien llama a esta función
  }
};

export const deleteTaskRequest = async (id) => axios.delete(`/tasks/${id}`);

export const getTaskRequest = async (id) => axios.get(`/tasks/${id}`);
