import { Navigate, Outlet, Route, Routes as Switch } from 'react-router-dom'
import { useAuth } from 'modules/auth/context'
import { Action, Auth, Home } from 'pages'
import Game from 'pages/home/game'

const Routes = () => {
  const { isAuthenticated, user } = useAuth()


  return (
    <Switch>
      <Route path="" element={isAuthenticated ? <Outlet /> : <Navigate to="/auth" />}>
        <Route index element={<Home />} />
        <Route path="game" element={user ? <Game /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>

      <Route path="auth" element={isAuthenticated ? <Navigate to="/" /> : <Outlet />}>
        <Route path="login" element={<Auth.Login />} />
        <Route path="register" element={<Auth.Register />} />
        <Route path="forgot-password" element={<Auth.ForgotPassword />} />
        <Route path="reset-password" element={<Auth.ResetPassword />} />
        <Route path="*" index element={<Navigate to="/auth/login" />} />
      </Route>

      <Route path="action" element={<Action />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Switch>
  )
}

export default Routes
