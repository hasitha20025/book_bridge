import { Carousel } from 'antd';
import Image from 'next/image'
import slider_1 from '../../../../public/imges/sliders/sider-1.png'	
import slider_2 from '../../../../public/imges/sliders/sider-2.png'	
import slider_3 from '../../../../public/imges/sliders/sider-3.png'	
import slider_4 from '../../../../public/imges/sliders/sider-4.jpg'	

export default function Carousels() {
    const width = 2800;
    const height= 1200;
  return (
    <>
        <Carousel autoplay>
            <div>
                <Image
                    src={slider_1}
                    alt="Logo"
                    width={width}
                    height={height}
                    className=''
                />
            </div>
            <div>
                <Image
                    src={slider_2}
                    alt="Logo"
                    width={width}
                    height={height}
                    className=''
                    />
            </div>
            <div>
                <Image
                    src={slider_3}
                    alt="Logo"
                    width={width}
                    height={height}
                    className=''
                />
            </div>
            <div>
                <Image
                    src={slider_4}
                    alt="Logo"
                    width={width}
                    height={height}
                    className=''
                />
            </div>
        </Carousel>
    </>
  )
}
