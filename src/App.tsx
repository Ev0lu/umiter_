import './App.css'
import about_python from '/about_python.png'
import about_terrarium from '/about_terrarium.png'
import adv1 from '/advantages1.png'
import adv2 from '/advantages2.png'
import adv3 from '/advantages3.png'
import adv_4 from '/advantages4.png'
import adv_5 from '/advantages5.png'
import download from '/download.png'
import adv_vec_bottom from '/adv_vec_bottom.png'
import adv_vec from '/adv_vec.png'
import advantages_iguana from '/advantages_iguana.png'

import footer_logo from '/footer_logo.svg'
import footer_tel from '/footer_tel.svg'
import footer_tg from '/footer_tg.svg'
import header_logo from '/header_logo.svg'
import main_logo from '/main_logo.svg'
import main_vector from '/main_vector.svg'
import smi_1 from '/smi_1.png'
import smi_2 from '/smi_2.png'

function App() {
  return (
              <div className="body_wrapper">
                  <header className="header">
                      <div className="container">
                          <div className="header_inner">
                              <div className="header_logo">
                                  <img src={header_logo} alt=""/>
                              </div>
                              <nav className="header_menu">
                                  <li><a href="#about">о проекте</a></li>
                                  <li><a href="#achievements">сотрудничество</a></li>
                                  <li><a href="#footer">контакты</a></li>
                              </nav>
                          </div>
                      </div>
                  </header>
                  <section className="main">
                      <div className="container">
                          <div className="main_inner">
                              <div className="main_logo">
                                  <img src={main_logo} alt="" />
                              </div>
                              <div className="main_vector">
                                  <img src={main_vector} alt="" />
                              </div>
                          </div>
                      </div>
                  </section>
                  <section id="about" className="about">
                      <div className="container">
                          <div className="about_inner">
                              <div className="about_python">
                                  <img src={about_python} alt="" />
                              </div>                
                              <div className="about_terrarium">
                                  <img src={about_terrarium} alt="" />
                              </div>
                              <div className="about_description">
                                  <div className="about_description_title">
                                      <h1>О ПРОЕКТЕ</h1>
                                  </div>
                                  <div className="about_description_text">
                                      <p>Проект "УМИТЕР" — это <span>инновационные умные</span> террариумы для домашних животных. Они обеспечивают идеальные условия для жизни и развития вашего питомца, а также помогают вам ухаживать за ним <span>легко и эффективно.</span></p>
                                      <p>Это новый шаг в развитии террариумистики в России. Мы разрабатываем уникальный продукт, сочетающий в себе современные технологии и многолетний опыт специалистов, полностью закрывающий потребности <span>экзотических питомцев</span> и их владельцев.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section className="advantages">
                      <div className="container">
                          <div className="advantages_inner">
                              <div className="advantages_iguana">
                                  <img src={advantages_iguana} alt="error" />
                              </div>
                              <div className="advantages_title">
                                  <h1>ПРЕИМУЩЕСТВА</h1>
                              </div>
                              <div className="advantages_lists">
                                  <div className="left_list">
                                        <ul>
                                          <li>экологичный корпус</li>
                                          <li>цельносварной металлический каркас</li>
                                          <li>каленое стекло</li>
                                          <li>уникальный дизайн вентиляции</li>
                                          <li>подъемный механизм двери</li>
                                          <li>водоотталкивающие материалы внутри террариума</li>
                                          <li>получение консультаций герпетолога</li>
                                        </ul>
                                  </div>
                                  <div className="right_list">
                                      <ul>
                                        <li>встраиваемые стеклопакеты, поставка в разобранном виде</li>
                                        <li>съемная задняя стенка, сменяемый декор</li>
                                        <li>фиксатор двери</li>
                                        <li>полная автоматизация</li>
                                        <li>Настройка условий одним кликом</li>
                                        <li>Удаленный доступ</li>
                                        <li>Сбор статистики</li>
                                      </ul>
                                </div>
                                  
                              </div>
                          </div>
                      </div>
                  </section>
                  <section id="achievements" className="achievements">
                    
                  <div className="container">
                          <div className="achievements_inner">
                              <div className="achievements_top_vec">
                                  <img src={adv_vec} alt="" />
                              </div>
                              
                              <div className="card">
                              <div className="card_item_1">
                                      <div className="card_inner">
                                          <div className="card_image">
                                              <img src={adv1} alt="" />
                                          </div>
                                          <div className="card_text">
                                              <p>ПРОЕКТ ПОДДЕРЖАН ФОНДОМ СОДЕЙСТВИЯ ИННОВАЦИЯМ. ПОБЕДИТЕЛЬ КОНКУРСА "СТУДЕНЧЕСКИЙ СТАРТАП"</p>
                                          </div>
                                      </div>
                              </div>
                              <div className="card_item_2">
                                      <div className="card_inner">
                                          <div className="card_images">
                                             <div className="card_image_both">
                                                <img src={adv2} alt=""/>
                                             </div>
                                             <div className="card_image_both">
                                                <img src={adv3} alt=""/>
                                             </div>
                                          </div>
                                          <div className="card_text">
                                              <p>СОТРУДНИЧЕСТВО С ВЕТЕРИНАРНЫМИ ЦЕНТРАМИ "ПРАЙД" И "СИТИВЕТ"</p>
                                          </div>
                                    </div>
                              </div>
                              <div className="card_item_3">
                                      <div className="card_inner">
                                          <div className="card_image">
                                              <img src={adv_4} alt="" />
                                          </div>
                                          <div className="card_text">
                                              <p>ФИНАЛИСТЫ КОНКУРСА СТАРТАП-СПБГУ 2022</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="card_item_4">
                                      <div className="card_inner">
                                          <div className="card_image">
                                              <img src={adv_5} alt="" />
                                          </div>
                                          <div className="card_text">
                                              <p>СОБСТВЕННОЕ ПРОИЗВОДСТВО ПОЛНОГО ЦИКЛА</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="card_item_5">
                                      <div className="card_inner">
                                        <div className="card_image">
                                              <img src={download} alt="" />
                                          </div>
                                          <div className="card_text">
                                              <p>Входит в ТОП-200 Университетских стартапов России</p>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                              <div className="achievements_bottom_vec">
                                  <img src={adv_vec_bottom} alt="" />
                              </div>
                          </div>
                      </div>
                  </section>
                  <section className="smi">
                      <div className="container">
                          <div className="smi_inner">
                              <div className="smi_title">
                                  <h1>СМИ О НАС</h1>
                              </div>
                              <div className="smi_cards">
                                  <div className="smi_item">
                                      <div className="smi_image">
                                          <img src={smi_1} alt="" />
                                      </div>
                                      <div className="smi_text">
                                          <a href="https://tvspb.ru/news/2023/05/25/v-spbgu-vyberut-avtorov-luchshih-biznes-idej-sredi-studentov-i-molodyh-uchenyh">https://tvspb.ru/news/2023/05/25/v-spbgu-vyberut-avtorov-luchshih-biznes-idej-sredi-studentov-i-molodyh-uchenyh</a>
                                      </div>
                                  </div>
                                  <div className="smi_item">
                                      <div className="smi_image">
                                          <img src={smi_2} alt="c" />
                                      </div>
                                      <div className="smi_text">
                                          <a href="https://spbu.ru/news-events/novosti/umnyy-terrarium-i-virtualnye-laboratorii-proekty-finalistov-konkursa-start">https://spbu.ru/news-events/novosti/umnyy-terrarium-i-virtualnye-laboratorii-proekty-finalistov-konkursa-start</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  <footer id="footer" className="footer">
                      <div className="container">
                          <div className="footer_inner">
                              <div className="footer_left">
                                  <div className="footer_logo">
                                      <img src={footer_logo} alt="" />
                                  </div>
                                  <div className="footer_contacts">
                                      <div className="footer_contacts-text">
                                              <p>Контакты</p>
                                      </div>
                                      <div className="footer_contacts_item">
                                          <div className="footer_contacts_item__pic">
                                              <img src={footer_tel} alt="" /> 
                                          </div>
                                          <div className="footer_contacts_item__text">
                                              <p>+7 (981) 197-50-51</p>
                                          </div>

                                      </div>
                                      <div className="footer_contacts_item">
                                          <div className="footer_contacts_item__pic">
                                              <img src={footer_tg} alt="" /> 
                                          </div>
                                          <div className="footer_contacts_item__text">
                                              <p>inna_marketing</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="footer_right">
                                  <div className="footer_right_title">
                                      <h1>МЫ ВАС ЖДЕМ:</h1>
                                  </div>
                                  <div className="footer_right_list">
                                      <ul>
                                          <li>ветеринарные центры</li>
                                          <li>СМИ и блоггеры</li>
                                          <li>розничные магазины</li>
                                          <li>заводчики</li>
                                      </ul>
                                  </div>
                                  <div className="footer_right_text">
                                      <p>Партнерство по агентскому договору на выгодных условиях</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </footer>
              </div>
  )
}

export default App
