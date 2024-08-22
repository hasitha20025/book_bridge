import { Carousel } from 'antd';
import Image from 'next/image'
import slider_1 from '../../../../public/imges/sliders/sider-1.png'	

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
                    src={slider_1}
                    alt="Logo"
                    width={width}
                    height={height}
                    className=''
                    />
            </div>
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
                    src={slider_1}
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
