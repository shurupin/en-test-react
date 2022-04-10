const todoistApiConfig = {
  baseUrl: 'https://api.todoist.com/rest/v1',
  headers: {
    'Authorization': 'Bearer 28dd9e14555cc09ff37e9e3fb4b835ef33079fd8',
    'Content-Type': 'application/json'
  }
}

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`error ${res.status}`);
}

export const getProjects = () => {
  return fetch(`${todoistApiConfig.baseUrl}/projects`, {
    headers: todoistApiConfig.headers
  }).then(getResponse)
  .catch((err) => {
    console.log(err);
  });
}

export const getProjectTasks = (projectId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks?project_id=${projectId}`, {
    headers: todoistApiConfig.headers
  }).then(getResponse)
  .catch((err) => {
    console.log(err);
  });
}

export const addTask = (taskText, projectId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks`, {
    method: 'POST',
    headers: todoistApiConfig.headers,
    body: JSON.stringify({
      content: taskText,
      project_id: projectId
    })
  }).then(getResponse)
  .catch((err) => {
    console.log(err);
  });
}

export const deleteTask = (taskId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: todoistApiConfig.headers,
  }).then((res) => {
    if (!res.ok) return Promise.reject(`error ${res.status}`);
  })
  .catch((err) => {
    console.log(err);
  });
}
