import './App.css'

import adv1 from './pics/adv1.svg'
import adv2 from './pics/adv2.svg'
import adv3 from './pics/adv3.svg'
import adv_4 from './pics/adv4.svg'
import adv_5 from './pics/adv5.svg'
import footer_logo from '/footer_logo.svg'
import footer_tel from '/footer_tel.svg'
import footer_tg from '/footer_tg.svg'
import header_logo from '/header_logo.svg'
import png_vk from './pics/vk_post.png'
import ach_1 from './pics/Ресурс 3.svg'
import ach_2 from './pics/Ресурс 4.svg'
import ach_3 from './pics/Ресурс 5.svg'
import ach_4 from './pics/Ресурс 6.svg'
import ach_5 from './pics/Ресурс 8.svg'
import ach_6 from './pics/Ресурс 9.svg'
import vk_contacts from './pics/telegram-logo-svgrepo-com 1.svg'
import nameFieldImage from './pics/nameField.svg'
import phoneFieldImage from './pics/phoneField.svg'

import { useEffect, useState } from 'react'
import { getProductById, sendOrderWithDetails } from './shared/api'


function App() {

    const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
    const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
    const [error, setError] = useState('')
    const handleOpenFirstPopup = () => setIsFirstPopupOpen(true);
    const handleCloseFirstPopup = () => setIsFirstPopupOpen(false);
    const handleSend = async () => {
      await sendForm()

    };
    const handleCloseSecondPopup = () => setIsSecondPopupOpen(false);
    const handleChangeName = (event:any) => {
        const sanitizedValue = event.target.value.replace(/[<>%$&!*^`/"',.|#@()\[\]{}0-9]/g, '');
        setName(sanitizedValue);
      };

    /*const handlePhoneChange = (event:any) => {
        const isValidPhone = /^\+/.test(event.target.value)
        if (isValidPhone === true) {
            setCheckIsValidPhone('true')
        } else{
            setCheckIsValidPhone('')
        }
        setPhone(event.target.value);
    };*/

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [more, setMore] = useState<string>('');
    const [checkIsValidPhone,setCheckIsValidPhone] = useState('')


    const [product, setProduct] = useState<any>();



    const [depth, setDepth] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(false);


    const getProduct = async () => {
        const response = await getProductById()
        const data = await response.json()
        setProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    const [isValid, setIsValid] = useState(false);

    const handleChange = (event:any) => {
        const input = event.target.value;
        setPhone(input);
    
        // Проверка на валидный формат телефона
        const phoneRegex = /^\+7\d{10}$/;
        if (phoneRegex.test(input)) {
          setIsValid(true);
          sendForm();
          setCheckIsValidPhone('true')
        } else {
          setIsValid(false);
          setCheckIsValidPhone('')
        }
      };

    const sendForm = async () => {
        const data = {
            "phoneNumber": phone,
            "optionalDetails": {
                "name": name,
                "deliveryAdress": more,
                "height": height,
                "width": width,
                "depth": depth,
                "decor": checked1,
                "fog": checked2
            }
        }

        const response = await sendOrderWithDetails(data)
        if (response.ok) {
            setError('ok')
        }
    }

  return (
              <div className="body_wrapper">
                 {isFirstPopupOpen && (
        <div className="popup">
          <div className="popup_content">
            <h2>Оформление заказа</h2>
            <div className="registrationForm_field">
                        <img className="registrationForm_field_image" src={nameFieldImage}></img>
                        <input value={name}
                        onChange={handleChangeName} className="registrationForm_field__input" placeholder='имя'></input>

                    </div>
                    <div className="registrationForm_field">
                        <img className="registrationForm_field_image" src={phoneFieldImage}></img>
                        <input value={phone}
                        onChange={handleChange} className="registrationForm_field__input" placeholder='номер телефона*'></input>
                        {phone === '' && (<span className="error_message">Пожалуйста, введите телефон</span>)}
                        {phone !== '' && checkIsValidPhone === '' && <span className="error_message">Телефон должен начинаться с +...</span>}
                    </div>
                    <div className="form_options">
                        <select onChange={(e) => setWidth(e.target.value)} id="pet-select">
                                    <option value="">Ширина</option>
                                    {product && product.attributes[0].values.map((item:any) => (
                                        <option value={item}>{item}</option>

                                    ))}
                        </select>
                        <select onChange={(e) => setHeight(e.target.value)}  id="pet-select">
                                    <option value="">Высота</option>
                                    {product && product.attributes[2].values.map((item:any) => (
                                        <option value={item}>{item}</option>

                                    ))}
                        </select>
                        <select onChange={(e) => setDepth(e.target.value)}  id="pet-select">
                                    <option value="">Глубина</option>
                                    {product && product.attributes[1].values.map((item:any) => (
                                        <option value={item}>{item}</option>

                                    ))}
                        </select>
                    </div>
                    <div className="checking">
                        <div className="checked_item">
                            <input type='checkbox' checked={checked1} onChange={() => setChecked1(!checked1)} ></input>
                            <label>Декор</label>
                        </div>
                        <div className="checked_item">
                            <input type='checkbox' checked={checked2} onChange={() => setChecked2(!checked2)}></input>
                            <label>Водяной туман</label>
                        </div>
                    </div>
                    <div className="registrationForm_field">
                        <input value={more}
                        onChange={(e) => setMore(e.target.value)} className="registrationForm_field__input" placeholder='адрес доставки'></input>
                    </div>
            <button onClick={() => {
                if (isValid === true) {
                    handleSend()
                    if (error === 'ok'){
                        setIsFirstPopupOpen(false);
                        setIsSecondPopupOpen(true);
                    }
                }




                }}>Отправить</button>
            <button onClick={handleCloseFirstPopup}>Закрыть</button>
          </div>
        </div>
      )}

      {/* Второй попап */}
      {isSecondPopupOpen && (
        <div className="popup">
          <div className="popup_content">
            <p>Спасибо!
            Мы скоро свяжемся с вами для подтверждения заказа</p>
            <button onClick={handleCloseSecondPopup}>Закрыть</button>
          </div>
        </div>
      )}
                  <header className="header">
                      <div className="container">
                          <div className="header_inner">
                              <div className="header_logo">
                                  <img src={header_logo} alt=""/>
                              </div>
                              <nav className="header_menu">
                                  <li><a href="#new_advantages">о проекте</a></li>
                                  <li><a href="#achievements">сотрудничество</a></li>
                                  <li><a href="#footer">контакты</a></li>
                              </nav>
                          </div>
                      </div>
                  </header>
                  <section className="main">
                      <div className="container">
                          <div className="main_inner">
                              <h1>Умитер</h1>
                              <div className="main_inner_subtitle">
                                    <h2>Террариумы с</h2>
                                    <h2>технологией IOT</h2>
                              </div>
                              <div className="main_inner_description">
                                    <p>Управление через мобильное приложение и автоматическая настройка климата</p>
                              </div>
                              <p>Достаточно выбрать в мобильном приложении животное – а террариум настроит и будет поддерживать необходимые для него условия</p>
                              <button onClick={handleOpenFirstPopup}>Заказать</button>
                          </div>
                      </div>
                  </section>
                  <section id="new_advantages" className="new_advantages">
                      <div className="container">
                          <div className="new_advantages_inner">
                            <div className="new_advantages_inner_image">
                                <img src={png_vk}></img>
                            </div>
                            <div className="advantages_list">
                                <div className="advantages_wrapper">
                                    <div className="advantages_item">
                                        <img src={ach_1}></img>
                                        <h2>Съемные стекла</h2>
                                        <p>не разобьются при транспортировке</p>
                                    </div>
                                    <div className="advantages_item">
                                        <img src={ach_3}></img>
                                        <h2>Встроенные датчики</h2>
                                        <p>мониторинг показателей 24/7                                        </p>
                                    </div>
                                    <div className="advantages_item">
                                        <img src={ach_5}></img>
                                        <h2>Экологичные материалы</h2>
                                        <p>безопасные для животных</p>
                                    </div>
                                    <div className="advantages_item">
                                        <img src={ach_2}></img>
                                        <h2>Технические каналы в корпусе</h2>
                                        <p>эстетичный вид без проводов</p>
                                    </div>                  
                                    <div className="advantages_item">
                                        <img src={ach_4}></img>
                                        <h2>Сменный эксклюзивный декор</h2>                         
                                        <p>возможность дополнительных продаж</p>
                                    </div>

                                    <div className="advantages_item">
                                        <img src={ach_6}></img>
                                        <h2>Запатентованная разработка</h2>
                                        <p>Российское производство</p>
                                    </div>
                                </div>
                                <button onClick={handleOpenFirstPopup} className='main_button'>Заказать</button>
                            </div>
                          </div>
                      </div>
                  </section>
                  <section id="achievements" className="achievements">
                    
                  <div className="container">
                          <div className="achievements_inner">
                              <div className="inner_title">
                                <h1>Наши</h1>
                                <h1>партнеры</h1>
                              </div>
                              
                              <div className="card">
                              <div className="card_item_1">
                                      <div className="card_inner">
                                          <div className="card_image">
                                              <img src={adv1} alt="" />
                                          </div>
                                          <div className="card_text">
                                              <p>ПРОЕКТ ПОДДЕРЖАН ФОНДОМ СОДЕЙТСВИЯ ИННОВАЦИЯМ. ПОБЕДИТЕЛЬ КОНКУРСА "СТУДЕНЧЕСКИЙ СТАРТАП"</p>
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
                                  {/*<div className="card_item_5">
                                      <div className="card_inner">
                                        <div className="card_image">
                                              <img src={download} alt="" />
                                          </div>
                                          <div className="card_text">
                                              <p>Входит в ТОП-200 Университетских стартапов России</p>
                                          </div>
                                      </div>
                                  </div>*/}

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
                                      <div className="footer_contacts_item">
                                          <div className="footer_contacts_item__pic">
                                              <img src={vk_contacts} alt="" /> 
                                          </div>
                                          <div className="footer_contacts_item__text">
                                              <p>umiter_corp</p>
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
