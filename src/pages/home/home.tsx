import { useNavigate } from 'react-router-dom'
import { Button, Flex } from '@mantine/core'
import { useAuth } from 'modules/auth/context'

import { Navbar } from 'components'

const Home = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const onStart = () => {
    navigate('/game')
  }

  return (
    <Flex direction="column" h="100vh">
      <Navbar />
      <Flex className="container" align="center" justify="center" sx={{ flex: 1 }}>
        <Button color="lime" size="lg" onClick={onStart}>
          Start Chess
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
