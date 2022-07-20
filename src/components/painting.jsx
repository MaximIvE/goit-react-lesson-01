import defaultimage from '../image.png';
function Painting(
  {
  url=defaultimage, 
  title, 
  price, 
  authorUrl, 
  authorTag='не известно'
}){
    return (
    <div>
    <img src={url} alt={title} width='480' />
    <h2>{title}</h2>
    <p>
      Автор: <a href={authorUrl}>{authorTag}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type='button'>Добавить в корзину</button>
  </div>
    );
};

export default Painting;