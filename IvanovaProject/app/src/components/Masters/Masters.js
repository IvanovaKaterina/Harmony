import React from 'react';
import './Masters.css';

class Masters extends React.Component {
  render() {
    return (
      <div className="masters">
        <Master 
          title={'Мастер парикмахер'}
          body={'Сделает вашу причёску незабываемой. Все киски обзавидуются!'}
          category={[5, 15, 3763]}
          img={'cat1.jpg'}
        />
        <Master 
          title={'Мастер по коготочкам'}
          body={'Коготочки - визитная карточка любой кисы. Наш мастер освежит ваш образ!'}
          category={[3, 7, 2789]}
          img={'cat3.jpg'}
        />
        <Master 
          title={'Мастер визажист'}
          body={'Квалифицированный визажист подберёт косметику специально для Вас или на Ваш вкус.'}
          category={[1, 3, 1476]}
          img={'cat2.jpg'}
        />
      </div>
    )
  }
}
  
const Master = (props) => {
  const { title, body, category, img } = props;
  return (
    <div className="master">
      <div className="masters-body">
        <div className="masters-title masters-body-text">
          {title}
        </div>
        <div className="masters-text masters-body-text">
          {body}
        </div>
        <div className="masters-category masters-body-text">
          <span>
            Категория: {category[0]} разряд
          </span>
          <span>
            Стаж работы: {category[1]} лет
          </span>
          <span>
            Довольных клиентов: {category[2]}
          </span>
        </div>
      </div>
      <div className="masters-image">
        <img src={img} alt="cat"/>
      </div>
    </div>
  )
}

export default Masters;