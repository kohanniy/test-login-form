import { useAppSelector } from '../../app/hooks';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import { withMainLayout } from '../../layouts/MainLayout/MainLayout';
import { userName } from '../../slices/user/userSlice';
import './Profile.scss';

function Profile() {
  const username = useAppSelector(userName);

  return (
    <Container 
      disableGutters 
      component='section'
      className='profile-section'
    >
      <Title>
        {
          username && username
        }
      </Title>
    </Container>

  )
}

export default withMainLayout(Profile)
