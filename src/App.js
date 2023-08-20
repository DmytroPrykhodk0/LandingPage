import { useEffect, useState , useRef } from 'react';
import './App.css';
import NavigationButton from './components/NavigationButton/NavigationButton'
import Navigation from './components/Navigation/Navigation'
import LinkButton from './components/LinkButton/LinkButton'
import StatisticInfo from './components/StatisticInfo/StatisticInfo';
import Question from './components/Question/Question';
import Group from './components/Group/Group';
import Logo from './components/Logo/Logo'
import logo from './assets/logo.png';
import logo2x from './assets/logo@2x.png';
import logo3x from './assets/logo@3x.png';
import processImg1 from './assets/process/processImg1.png';
import processImg2 from './assets/process/processImg2.png';
import processImg3 from './assets/process/processImg3.png';
import processImg1_2x from './assets/process/processImg1@2x.png';
import processImg2_2x from './assets/process/processImg2@2x.png';
import processImg3_2x from './assets/process/processImg3@2x.png';
import processImg1Webp from './assets/process/processImg1.webp';
import processImg2Webp from './assets/process/processImg2.webp';
import processImg3Webp from './assets/process/processImg3.webp';
import processImg1Webp2x from './assets/process/processImg1@2x.webp';
import processImg2Webp2x from './assets/process/processImg2@2x.webp';
import processImg3Webp2x from './assets/process/processImg3@2x.webp';
import selectionImage from './assets/selection/selectionImage.png';
import selectionImage2x from './assets/selection/selectionImage@2x.png';
import selectionImageWebp from './assets/selection/selectionImage.webp';
import selectionImage2xWebp from './assets/selection/selectionImage@2x.webp';
import facebookIcon from './assets/footer/facebook.svg'
import linkedinIcon from './assets/footer/linkedin.svg'
import instagramIcon from './assets/footer/instagram.svg'


const navigation = {
  'Про компанію' : '#',
  'Відгуки' : '#',
  'FAQ' : '#',
  'Контакти' : '#'
}

const navigationFooter = {
  'Про компанію' : '#',
  'Відгуки' : '#',
  'FAQ' : '#',
  'Контакти' : '#',
  'Політика конфіденційності' : '#',
  'Умови використання' : '#'
}

let SecondaryNavStyle = {
   Ul : {
    flexDirection: 'column',
    textAlign:'center',
  },
   Li : {
    margin:'0px',
    marginTop:'45px'
  },
   A : {
    fontSize:'25px'
  },
  Nav : {
    marginTop:'80px'
  }
}

function App() {
  const [ButtonState, setButtonState] = useState(false)
  const [isShowNav, setShowNav] = useState(true)
  const [isShowForm, setShowForm] = useState(false)
  const [nameForm, setformName] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')
  
  let menuRef = useRef()
  let formRef = useRef()
  let questionRef = useRef()
 
  useEffect(() => {
    let items = document.querySelectorAll('.question__item')
    let containers = document.querySelectorAll('.question__container')
    let titles = document.querySelectorAll('.question__item-title')
    const item = (e) => {
      let target = e.target;
      for(let i = 0;i < items.length;i++)
      {
        if(items[i] === target || titles[i] === target)
        {
            for(let j = 0;j < containers.length;j++)
            {
              if(i === j)
              {
              containers[j].classList.toggle('question__container--active')
              items[i].classList.toggle('question__item--active')    
              }
              else{
                containers[j].classList.remove('question__container--active')      
              }  
        
            }
        }
        else {
          items[i].classList.remove('question__item--active')        
        }
    }
  };


function hide(e){
      if (!e.target.classList.contains('question__item') && !e.target.classList.contains('question__item-title')) {
        for(let i = 0;i < items.length;i++)
        {
          for(let j = 0;j < containers.length;j++)
          {
            containers[j].classList.remove('question__container--active');
            items[i].classList.remove('question__item--active') 
          }
        }
      }
  }

    document.addEventListener('click', hide);
    questionRef.current.addEventListener('click', item);

    return () => {
      questionRef.current.removeEventListener('click', item);
    }
  },[])


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target) && !e.target.classList.contains('header__button')) {
        setButtonState(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })


  function formSubmit(e){
    e.preventDefault()
    console.log(`Ім'я: ${nameForm}`)
    console.log(`Електронна адреса: ${email}`)
    console.log(`Повідомлення: ${message}`)
  }


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target) && !e.target.classList.contains('header__button')) {
        setButtonState(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })


  useEffect(() => {
    const hideForm = (e) => {
      if (!formRef.current.contains(e.target)) {
        setShowForm(false);
      }
    };
    document.addEventListener('mousedown', hideForm);

    return () => {
      document.removeEventListener('mousedown', hideForm);
    }
  })

  
  useEffect(() => {
    const handle = () => {
      window.matchMedia("(max-width: 768px)").matches ? setShowNav(false) : setShowNav(true)
      }
    if(!ButtonState){
      document.querySelector('.header__button').classList.remove('active')
    }
    window.addEventListener('resize', handle);

    return () => {
      window.addEventListener('resize', handle);
    }
  })

   return (
    <>
    <div className="wrapper">
      <header className='header'>
        <div className="header__container container">
          <Logo logo={logo} logo2x={logo2x} logo3x={logo3x}/>
          <div className="header__navigation" style={{ display: isShowNav ? 'block' : 'none' }} >
          <Navigation data={navigation} />
          </div>
          <NavigationButton setButtonState={setButtonState} ButtonState={ButtonState}/>  
          <div ref={menuRef} className={`header__navigation-secondary ${ButtonState ? 'header__navigation-secondary--active' : ''}`}>
            <Navigation data={navigation} StyleUl={SecondaryNavStyle.Ul} StyleNav={SecondaryNavStyle.Nav} StyleLi={SecondaryNavStyle.Li} StyleA={SecondaryNavStyle.A}/>
          </div>
        </div>
      </header>
      <main className='content'>
        <div className="container">
        <section className='introduce'>
          <h1 className='introduce__title'>Покращення самопочуття починається з одного повідомлення</h1>
          <span className='introduce__subtitle'>Яку підтримку ви шукаєте?</span>
          <div className="introduce__group">
            <LinkButton title="Для себе"/>
            <LinkButton title="Для пари"/>
            <LinkButton title="Для дитини"/>
          </div>
        </section>
        <section className='statistic'>
          <div className="statistic__row">
            <div className="statistic__col">
              <div className="statistic__wrap">
                <h2 className='statistic__title'>Терапевтичний сервіс</h2>
                <span className='statistic__subtitle'>100% онлайн</span>
              </div>
            </div>
            <div className="statistic__col">
                  <StatisticInfo number="6 069 617" description="Повідомлень, чатів, відеодзвінків"/>
                  <StatisticInfo number="2 345" description="Кваліфікованих спеціалістів"/>
                  <StatisticInfo number="305 784" description="Осіб, яким ми допомогли"/>
            </div>
          </div>
        </section>
        <section className='process'>
              <h3 className='process__title'>Як ми працюємо?</h3>
              <div className="process__wrap">
                  <Group image={processImg1} image2x={processImg1_2x} imageWebp={processImg1Webp} imageWebp2x={processImg1Webp2x} width={'191px'} height={'222px'} title="Коротке опитування" subtitle="Щоб зрозуміти ваш запит" step="Крок 1"/>
                  <Group image={processImg2} image2x={processImg2_2x} imageWebp={processImg2Webp} imageWebp2x={processImg2Webp2x} width={'224px'} height={'248px'} title="Підбір спеціаліста" subtitle="Персональний підбір фахівця" step="Крок 2"/>
                  <Group image={processImg3} image2x={processImg3_2x} imageWebp={processImg3Webp} imageWebp2x={processImg3Webp2x} width={'268px'} height={'263px'} title="Терапія" subtitle="Початок співпраці у зручному для вас форматі" step="Крок 3"/>
              </div>
        </section>
        <section className='article'>
          <div className="article__quote-wrap">
            <blockquote className='article__quote'>Я справді бачу прогрес у своєму психічному здоров’ї, чого я не могла сказати за останні 2 роки років, і це все завдяки моїй терапевтці.</blockquote>
          </div>
          <article className='article__comment'>
            <img className='article__comment-image' src="" alt="" />
              <div className="article__text-wrap">
                <span className="article__comment-title">Відгук клієнта для терапевтки</span>
                <span className="article__comment-subtitle">Марини Коваленко (КПТ, схематерапія)</span>
              </div>
          </article>
          <div className="article__item-group item-group">
            <span className='item-group__item'></span>
            <span className='item-group__item'></span>
            <span className='item-group__item'></span>
          </div>
          <div className="article__link">
            <LinkButton title="До всіх відгуків" background={"transparent"} border={"1px solid #fff"} color={"#fff"} selectionMarginTop={'-7px'}/>
          </div>
        </section>
        <section className='question'>
          <h4 className='question__title'>Часті запитання</h4>
          <div ref={questionRef} className="question__wrap">
            <Question title="Скільки коштує терапія?"/>
            <Question title="Як дізнатись, чи мені це підходить?"/>
            <Question title="Скільки часу потрібно для підбору спеціаліста?"/>
            <Question title="Як проходять сесії?"/>
            <Question title="Як я буду комунікувати з терапевтом?"/>
            <Question title="Чи така ж ефективна онлайн терапія як офлайн?"/>
            <Question title="Як визначити, що терапія ефективна?"/>
          </div>
          <a href='#' className='question__text'>Дізнатись більше</a>
        </section>
        <section className='selection'>
          <div className="selection__row">
            <div className="selection__col">
              <h5 className='selection__title'>Професійні терапевти, яким ви можете довіряти</h5>
              <span className='selection__subtitle'>З нашими терапевтами ви отримуєте той самий професіоналізм та якість, що й від терапевта, який працює в офісі, але з можливістю спілкуватися, коли і як вам зручно.</span>
              <LinkButton title="Підібрати спеціаліста" selectionMarginTop={'48px'} selectionMarginLeft={'0px'}/>
            </div>
            <div className="selection__col">
              <div className="selection__image-wrap">
            <picture className='selection__image'>
                  <source type='image/webp' srcSet={`${selectionImageWebp} 1x, ${selectionImage2xWebp} 2x`}/>
                  <img src={selectionImage} srcSet={`${selectionImage2x} 2x`} alt="Контекстна картинка" /> 
            </picture>
            </div>
            </div>
          </div>
          <div className="selection__text-wrap">
            <span className="selection__text">Якщо ви перебуваєте в ситуації, що загрожує вашому життю, зателефонуйте <span>0 800 123 4567</span>, щоб отримати негайну допомогу.</span>
          </div>
        </section>
        </div>
      </main>
     <footer className='footer'>
        <div className="container">
          <div className="footer-wrap">
          <div className="footer__col">
              <div className="footer__logo-wrap">
                <Logo logo={logo} logo2x={logo2x} logo3x={logo3x}/>
              </div>
            </div>
            <div className="footer__col">
              <Navigation data={navigationFooter} marginRight={'-15px'} />
            </div>
            <div className="footer__col">
              <div className="footer__social-media social-media">
                <a href="#" className='social-media__link'><img className='social-media__item' src={facebookIcon} alt="Іконка фейсбуку" /></a>
                <a href="#" className='social-media__link'><img className='social-media__item' src={linkedinIcon} alt="Іконка лінкедіна" /></a>
                <a href="#" className='social-media__link'><img className='social-media__item' src={instagramIcon} alt="Іконка інстаграма" /></a>
              </div>
            </div>
        </div>
        </div>
      </footer>
      </div>
      <form ref={formRef} className={`form ${isShowForm ? 'form--active' : ''}`}>
        <div onClick={() => setShowForm(!isShowForm)} className="form__item">Зворотній зв'язок</div>
        <fieldset>
          <legend>Форма зворотнього зв'язку</legend>
          <label htmlFor="name">Ім'я:</label>
          <input onChange={(e)=>setformName(e.target.value)} type="text" id="name" name="name"placeholder="Ім'я"  value={nameForm} />
          <label htmlFor="email">Електронна адреса:</label>
          <input onChange={(e)=>setemail(e.target.value)} type="email" id="email" name="email" placeholder="Електронна адреса"  value={email}/>
          <label htmlFor="message">Ваше повідомлення:</label>
          <textarea onChange={(e)=>setmessage(e.target.value)} id='message' name="message" placeholder="Ваше повідомлення..." value={message}></textarea>
        </fieldset>
        <button onClick={formSubmit} type="submit">Відправити</button>
      </form> 
      </>
  );
}

export default App;
