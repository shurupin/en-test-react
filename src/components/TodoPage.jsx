import { useEffect, useState, useContext } from "react";
import { getProjects } from "../utils/todoist-api";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import TasksList from "./TasksList";
import { UserContext } from "../utils/UserContext";

const TodoPage = ({ onSignout }) => {
  const user = useContext(UserContext);

  const history = useHistory();
  const [projects, setProjects] = useState([]);
  const match = useRouteMatch("/projects/:projectId");
  const projectId = match?.params?.projectId;

  useEffect(() => {
    getProjects()
      .then((projects) => {
        setProjects(projects);
        history.replace({
          pathname: `/projects/${projects[0].id}`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history]);

  return (
    <UserContext.Provider value={user}>
      <>
        <div className="page">
          <Header email="email" onSignout={onSignout} />
          <section className="todolist">
            <div className="projects">
              <p className="projects__title">Projects: </p>
              <div className="projects__list">
                {projects.map((project) => {
                  // Excellent: using id as a key in a list is a great solution!
                  return (
                    <NavLink
                      key={project.id}
                      to={`/projects/${project.id}`}
                      className="projects__project"
                      activeClassName="projects__project_active"
                    >
                      {project.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            {projectId && <TasksList projectId={projectId} />}
          </section>
        </div>
      </>
    </UserContext.Provider>
  );
};

export default TodoPage;
