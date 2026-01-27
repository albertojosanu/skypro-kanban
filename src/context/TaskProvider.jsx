import { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "./AuthContext.js";
import { TaskContext } from "./TaskContext.js";
import { getTasks, postTask, editTask, deleteTask } from "../services/api.js";

const TaskProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const { user } = useContext(AuthContext);

  const updateTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTasks({
        token: user?.token,
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addNewTask = async ( task ) => {
    try {
      const newTasks = await postTask({ token: user?.token, task });
      setTasks(newTasks);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateTask = async ( task, id ) => {
    try {
      const newTasks = await editTask({ token: user?.token, id, task });
      setTasks(newTasks);
    } catch (err) {
      setError(err.message);
    }
  };

  const removeTask = async ( id ) => {
    try {
      const newTasks = await deleteTask({ token: user?.token, id });
      setTasks(newTasks);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        loading,
        tasks,
        setTasks,
        error,
        setError,
        updateTasks,
        addNewTask,
        updateTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
