import axios from "axios";

const API_TASK_URL = "https://wedev-api.sky.pro/api/kanban/";
const API_USER_URL = "https://wedev-api.sky.pro/api/user/";

export async function getTasks({ token }) {
  try {
    const data = await axios.get(API_TASK_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    //console.log(tasks.filter((data) => data.status === "В работе"));
    //console.log(data.data.tasks);
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getTask({ token, id }) {
  try {
    const data = await axios.get(API_TASK_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.task;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postTask({ token, task }) {
  try {
    const data = await axios.post(API_TASK_URL, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function editTask({ token, id, task }) {
  try {
    const data = await axios.put(API_TASK_URL + id, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteTask({ token, id }) {
  try {
    const data = await axios.delete(API_TASK_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUsers() {
  try {
    const data = await axios.get(API_USER_URL);
    return data.data.users;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signUp(user) {
  try {
    const data = await axios.post(API_USER_URL, user, {
      headers: {
        "Content-Type": "text/html",
      },
    });
    return data.data.user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signIn(user) {
  try {
    const data = await axios.post(API_USER_URL + "login", user, {
      headers: {
        "Content-Type": "text/html",
      },
    });
    return data.data.user;
  } catch (error) {
    throw new Error(error.message);
  }
}
