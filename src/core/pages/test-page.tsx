import {
  Alert,
  Button,
  Container,
  ContentLayout,
  Header,
  SpaceBetween,
} from '@cloudscape-design/components'

import { useNotification } from '@/core/hooks/notification'

interface TestPageProps {
  title: string
}
export const TestPage = ({ title }: TestPageProps) => {
  const setNotification = useNotification()
  const onClick1 = () => {
    setNotification({
      id: 'test1',
      content: 'noti test 1',
      type: 'success',
    })
  }
  const onClick2 = () => {
    setNotification(
      {
        id: 'test2',
        content: 'noti test 2',
        type: 'error',
      },
      3000,
    )
  }
  return (
    <ContentLayout
      header={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            description="This is a generic description used in the header."
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button onClick={onClick1}>Noti 1</Button>
                <Button onClick={onClick2} variant="primary">
                  Noti 2
                </Button>
              </SpaceBetween>
            }
          >
            {title}
          </Header>
          <Alert>This is a generic alert.</Alert>
        </SpaceBetween>
      }
    >
      <Container
        header={<Header description="test page 입니다"> 테스트 </Header>}
      ></Container>
    </ContentLayout>
  )
}
