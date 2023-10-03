import {
  Button,
  Container,
  ContentLayout,
  Header,
  TextContent,
} from '@cloudscape-design/components'
import { useNavigate } from 'react-router-dom'

import { Link } from '@/core/components/_navigation'

export const Page404 = () => {
  const navigate = useNavigate()

  return (
    <ContentLayout
      header={
        <Header
          variant="h1"
          actions={
            <Link data-testid="go-back" onFollow={() => navigate(-1)}>
              <Button variant="primary" iconName="arrow-left">
                Go back
              </Button>
            </Link>
          }
        >
          404.
        </Header>
      }
    >
      <Container
        header={
          <Header variant="h2">
            The requested resource could not be found.
          </Header>
        }
      >
        <TextContent>
          <p>Please check the URL and try again.</p>
        </TextContent>
      </Container>
    </ContentLayout>
  )
}
