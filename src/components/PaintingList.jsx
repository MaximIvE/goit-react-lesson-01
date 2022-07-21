import PropTypes from 'prop-types';
import Painting from './Painting';

function PaintingList({items}){
return (<ul>
{items.map(item=><li key={item.id}>
    <Painting 
        url={item.url}
        title={item.title} 
        price={item.price} 
        authorUrl={item.author.url} 
        authorTag={item.author.tag}
        quantity={item.quantity}
    />

</li>)}
</ul>)
};

PaintingList.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
}

export default PaintingList;