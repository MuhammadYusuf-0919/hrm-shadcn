// react import
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components import
import Loadable from '@/components/loadable';
// routes import
import ProtectedRoute from './protected-routes';
// error pages import
import Error404 from '@/pages/not-found';
// layout import
import Login from '@/pages/login';
import AppLayout from '@/layout/app-layout';
import AuthLayout from '@/layout/auth-layout';

// pages with lazy imports
const IssueManager = Loadable(
  React.lazy(() => import('@/pages/issue-manager'))
);
const ProjectManager = Loadable(
  React.lazy(() => import('@/pages/project-manager'))
);
const CrudForm = Loadable(
  React.lazy(() => import('@/modules/crud-module/crud-form'))
);
const DayOff = Loadable(React.lazy(() => import('@/pages/day-off')));
const Profile = Loadable(React.lazy(() => import('@/pages/profile')));
const YourWork = Loadable(React.lazy(() => import('@/pages/your-work')));
const Dashboard = Loadable(React.lazy(() => import('@/pages/dashboard')));
const WorkReport = Loadable(React.lazy(() => import('@/pages/work-report')));
const UserManager = Loadable(React.lazy(() => import('@/pages/user-manager')));
const TaskManager = Loadable(React.lazy(() => import('@/pages/task-manager')));

const protectedRoutes = [
  { path: '/', component: Dashboard },
  { path: '/day-off', component: DayOff },
  { path: '/profile', component: Profile },
  { path: '/users', component: UserManager },
  { path: '/your-work', component: YourWork },
  { path: '/work-report', component: WorkReport },
  { path: '/:entity/:crud', component: CrudForm },
  { path: '/projects', component: ProjectManager },
  { path: '/projects/:id/tasks', component: TaskManager },
  { path: '/projects/:id/issues', component: IssueManager },
];

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sign-in"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />

        {/* Protected Routes */}
        {protectedRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <AppLayout>
                <ProtectedRoute component={Component} />
              </AppLayout>
            }
          />
        ))}

        {/* Error Routes */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
