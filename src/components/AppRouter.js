/* eslint-disable array-callback-return */
import { Routes, Route, Redirect} from 'react-router-dom';
import Shop from '../pages/Shop';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
  const isAuth = false;

  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Component}) => {
        <Route key={path} path={path} element={<Component />} exact/>
      })}
      {publicRoutes.map(({path, Component}) => {
        <Route key={path} path={path} element={<Component />} exact/>
      })}
    </Routes>
  );
};

export default AppRouter;
