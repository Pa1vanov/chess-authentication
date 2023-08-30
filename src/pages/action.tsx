import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LoadingOverlay } from '@mantine/core'
import queryString from 'query-string'

interface ActionProps {}

interface IAction {
  mode: 'verifyEmail' | 'resetPassword'
  oobCode: string
}

const Action = (props: ActionProps) => {
  const navigate = useNavigate()
  const { mode, oobCode } = queryString.parse(window.location.search) as unknown as IAction

  React.useEffect(() => {
    switch (mode) {
      case 'resetPassword': {
        navigate(`/auth/reset-password?oobCode=${oobCode}`)
        break
      }
      default:
        navigate('/')
    }
  }, [])

  return <LoadingOverlay visible overlayBlur={2} />
}

export default Action
