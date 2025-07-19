import { Button, Image, Card, Col, Row, Select, Slider, Spin } from 'antd'
import { useProducts } from '../api/requests';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useFilters, useStoreProject } from '../features/store';
import Product from '../components/Product';
import Search from '../features/Search';

const Home = () => {

    const {data, isLoading, error} = useProducts()
    const {type, setType} = useFilters()
    const { priceFilter, setPriceFilter } = useStoreProject()

    const filteredProducts = data?.products.filter(product =>
        product.price >= priceFilter[0] && product.price <= priceFilter[1]
    )

    if(isLoading) return <Spin />
    if(error) return <p>Произошла ошибка...</p>

    return(
        <div className='home'>

            {/* <Search /> */}

            <Slider 
                range 
                min={0} 
                max={500} 
                defaultValue={[50, 200]}
                onChange={(value) => setPriceFilter(value[0], value[1])}
            />
            {/* <Select
                style={{width: '300px', marginBottom: '100px'}}
                value={type}
                onChange={(value) => setType(value)}
                options={[
                    {label: 'Все', value: 'all'},
                    {label: 'Популярные', value: 'popular'},
                    {label: 'Гаджеты', value: 'gadgets'}
                ]}
            /> */}

            <div>
                <Row gutter={16}>
                    {filteredProducts?.map((product) => (
                        <Col span={6} key={product.id}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>
            </div>
            
            <div style={{marginTop: '100px'}}>
                <h2 style={{fontSize: '50px', fontWeight: 500}}>Популярные товары</h2>
                <Swiper 
                    direction='horizontal' 
                    navigation 
                    modules={[Navigation]} 
                    slidesPerView={3}
                    className='mySwiper'
                >
                    {data.products.slice(0, 5).map((product) => (
                        <SwiperSlide key={product.id}>
                            <Card title={product.title}>
                                <img src={product.thumbnail} alt={product.title} width={"100%"}/>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Home;