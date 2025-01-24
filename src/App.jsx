import {createBrowserRouter, RouterProvider, useNavigate} from 'react-router-dom';
import { Provider } from 'react-redux';

import styles from './App.module.css'
import LoginPage from './Containers/LoginPage/LoginPage';
import Layout from './Containers/Layout/Layout';
import Home from './Containers/Home/Home';
import CreateBlog from './Containers/CreateBlog/CreateBlog';
import store from './Store'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />
    },
    {
      element: <Layout />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/create',
          element: <CreateBlog />
        }
      ]
    }
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App;