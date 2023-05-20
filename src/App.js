import logo from './logo.svg';
import './App.css';
import HomePage from './homePage/homePage';
import ProccessPage from './proccessPage/proccessPage'
import TeaserPage from './teaserPage/teaserPage';
import WhosPage from './whosPage/whosPage';
import ThanksPage from './thanksPage/thanksPage'
import QuestionsPage from './questionsPage/questionsPage'
import ContactPage from './ContactPage/ContactPage';
import AboutPage from './AboutPage/AboutPage'

function App() {
  return (
    <>
      <HomePage></HomePage>
      <TeaserPage></TeaserPage>
      <ProccessPage></ProccessPage>
      <ThanksPage></ThanksPage>
      <WhosPage></WhosPage>
      <AboutPage></AboutPage>
      <ContactPage></ContactPage>
      <QuestionsPage></QuestionsPage>
    </>
  );
}

export default App;
