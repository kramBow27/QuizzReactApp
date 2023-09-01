import '../styles/home/home-styles.css'
import Header from '../components/shared/Header';
import Navbar from '../components/shared/Navbar';
import PerformanceCardComponent from '../components/HomeScreenComponents/PerformanceCardComponent';
import { Content, Div, Index, Overlap } from '../styles/home/HomeStyledComponents';
import PopularQuizComponent from '../components/HomeScreenComponents/PopularQuizComonent';
import RecentQuizComponent from '../components/HomeScreenComponents/RecentQuizComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';

export const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  let itemList: any[] = [];
  console.log("LAST TWO QUIZZES", user.lastTwoQuizzesThemes)

    return (
        <Index>
      <Div>
        <Header 
        imagem1= {user.profileImage || "https://randomuser.me/api/portraits/women/72.jpg"}
        nome={user.username || "Jessica"}      
        imagem2="https://anima-uploads.s3.amazonaws.com/projects/64e2a09d2fd2ed85515d1f82/releases/64e4ea9b030914fbf1dff3ba/img/group@2x.png"
      />
        <Overlap>
          <Navbar/>
            <Content>
              <Link to="/details">
                <PerformanceCardComponent performance="75%" />
              </Link>
              
         
                 <RecentQuizComponent/>
  
                
           <PopularQuizComponent/>
        
          </Content>
        </Overlap>
      </Div>
    </Index>
    )
};
        
