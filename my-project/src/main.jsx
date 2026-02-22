import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js/'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:'/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ) 
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
          <App />
      </RouterProvider>
  </Provider>
  </StrictMode>
)
