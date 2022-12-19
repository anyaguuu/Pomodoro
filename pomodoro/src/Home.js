import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Page,Title } from './HomeStyles';

export default function Home() {
  return(
    <Page>
      <Title> Pomodoro </Title>
    </Page>
  )

  // return (
  //   <div style={{ color: 'blue', lineHeight : 10}}> 
  //     Inline Styled Component
  //   </div>
  // );
}