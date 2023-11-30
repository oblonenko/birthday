import React, {useState} from 'react';
import style from './wishes.module.css'
import ElizImage from '../images/photo_2023-02-16_21-06-07.jpg'
import SeniaPoSkidke from '../images/photo_2023-11-30_15-01-01.jpg'
import autoCar from '../images/photo_2023-11-30_15-22-39.jpg'
import Peeta from '../images/photo_2023-11-30_15-22-44.jpg'
import Coriolan from '../images/photo_2023-11-30_15-22-47.jpg'
import cat from '../images/photo_2023-11-30_16-49-32.jpg'

const initialStore = [
    {
        id: 1,
        image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png',
        isActive: false,
        gift: 'https://otkritochka.net/img/cards_part2/74079-foto-s-dnem-rozhdeniya-liza-prikolnoe.jpg'
    },
    {id: 2, image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png', isActive: false, gift: cat},
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
        gift: SeniaPoSkidke
    },
    {id: 5, image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png', isActive: false, gift: 'video'},
    {
        id: 6,
        image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png',
        isActive: false,
        gift: 'https://lubok.club/uploads/posts/2023-10/thumbs/1696874395_lubok-club-p-kartinki-kotiki-pozdravlyayut-s-dnem-rozhd-6.jpg'
    },
    {id: 7, image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png', isActive: false, gift: autoCar},
    {id: 8, image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png', isActive: false, gift: Peeta},
    {
        id: 9,
        image: 'https://pngicon.ru/file/uploads/chernaja-podarochnaja-korobka.png',
        isActive: false,
        gift: Coriolan
    },
]
const Wishes = () => {

    const [store, setStore] = useState(initialStore)

    const openGift = (gift) => {
        setStore(prev => prev.map(item => item.id === gift.id ? {...item, isActive: true} : item))
    }
    return (
        <div className={style.backGround}>
            <div className={style.eliz}><img src={ElizImage} alt="eliz"/></div>
            {store.map((gift) => <div className={style.giftBlock} key={gift.id}><img
                src={gift.isActive ? gift.gift : gift.image} alt="gift"/>
                <button onClick={() => openGift(gift)} disabled={gift.isActive}>Відкрити</button>
            </div>)}
        </div>
    );
};

export default Wishes;