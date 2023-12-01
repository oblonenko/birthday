import React, {useState} from 'react';
import style from './wishes.module.css'
import AlenaImage from '../images/photo_2023-04-13_17-11-18.jpg'
import popa from '../images/photo_2023-12-01_18-36-42.jpg'

const initialStore = [
    {
        id: 1,
        image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png',
        isActive: false,
        gift: 'https://katerinka.ru/wp-content/uploads/2022/07/den-rozhdenija-alyona-0038.jpg'
    },
    {id: 2, image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png', isActive: false, gift: 'https://4584674.ru/wa-data/public/shop/products/65/82/78265/images/304300/304300.970.jpg'},
    {
        id: 3,
        image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png',
        isActive: false,
        gift: 'https://i.pinimg.com/736x/37/69/16/376916ae9c7b89a56890804b2ccc52ce.jpg'
    },
    {
        id: 4,
        image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png',
        isActive: false,
        gift: "https://ua-news.in.ua/wp-content/uploads/2022/10/pozdravlenie-malchiku-s-dnem-rozhdeniya.jpg"
    },
    {id: 5, image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png', isActive: false, gift: 'video'},
    {
        id: 6,
        image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png',
        isActive: false,
        gift: popa
    },
    {id: 7, image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png', isActive: false, gift:'https://xymogen.com.ua/wp-content/uploads/2020/05/michigan-med-l-liver-basics-1-01.jpg'},
    {id: 8, image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png', isActive: false, gift: 'https://anatomy.help/wp-content/uploads/2022/03/total-shape-ianw4rdvuoo-unsplash-1-scaled.jpg'},
    {
        id: 9,
        image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png',
        isActive: false,
        gift: 'https://knigogid.ru/storage/books/96e/638a8b9859fa507ddcc74ca6baa95d9c.jpg'
    },
]
const Wishes = () => {

    const [store, setStore] = useState(initialStore)

    const openGift = (gift) => {
        setStore(prev => prev.map(item => item.id === gift.id ? {...item, isActive: true} : item))
    }
    return (
        <div className={style.backGround}>
            <div className={style.eliz}><img src={AlenaImage} alt="eliz"/></div>
            {store.map((gift) => <div className={style.giftBlock} key={gift.id}><img
                src={gift.isActive ? gift.gift : gift.image} alt="gift"/>
                <button onClick={() => openGift(gift)} disabled={gift.isActive}>Відкрити</button>
            </div>)}
        </div>
    );
};

export default Wishes;