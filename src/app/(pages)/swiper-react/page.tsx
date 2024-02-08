'use client'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper'

export default function Page() {
    const data = Array.from({length: 20}, (v, i) => i)

    return <Swiper
    navigation={{
        prevEl: '.custom-prev-button',
        nextEl: '.custom-next-button',
    }}
    spaceBetween={10}
    slidesPerView={5}
    slidesPerGroup={5}
    freeMode={true}
    pagination={{
        clickable: true,
    }}
    modules={[Pagination, Navigation]}
    className='mySwiper'>
        {data.map(item => (
            <SwiperSlide key={item}>
                <p style={{width: '100%', height: '50px', color: 'black', backgroundColor: 'pink'}}>{item}</p>
            </SwiperSlide>
        ))}
    </Swiper>
}