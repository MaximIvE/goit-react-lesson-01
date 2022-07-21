import PropTypes from 'prop-types';
import defaultimage from '../image.png';

function Painting(
  {
  url=defaultimage, 
  title, 
  price, 
  authorUrl, 
  authorTag='не известно',
  quantity,
}){
    return (
    <div>
    <img src={url} alt={title} width='480' />
    <h2>{title}</h2>
    <p>
      Автор: <a href={authorUrl}>{authorTag}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: {quantity > 5 ? "есть в наличии" : "заканчивается"}</p>
    <button type='button'>Добавить в корзину</button>
  </div>
    );
};

Painting.propTypes = {
  url: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  price: PropTypes.number.isRequired, 
  authorUrl: PropTypes.string.isRequired, 
  authorTag: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default Painting;