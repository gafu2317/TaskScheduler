import React, { useEffect, useState } from 'react';

declare var gapi: any;

const CLIENT_ID = 'YOUR_CLIENT_ID';
const API_KEY = 'YOUR_API_KEY';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"];
const SCOPES = "https://www.googleapis.com/auth/tasks.readonly";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    gapi.load('client:auth2', initClient);
  }, []);

  const initClient = () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(() => {
      loadTasks();
    });
  };

  const loadTasks = () => {
    gapi.client.tasks.tasks.list({
      'tasklist': '@default'
    }).then((response: any) => {
      setTasks(response.result.items);
    });
  };

  return (
    <div>
      {tasks.map((task: any) => (
        <div key={task.id}>
          {task.title}
        </div>
      ))}
    </div>
  );
};

export default TodoList;