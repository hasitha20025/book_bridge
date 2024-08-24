import { Carousel } from 'antd';
import Image from 'next/image';
import slider_1 from '../../../../public/imges/sliders/sider-1.png';
import slider_2 from '../../../../public/imges/sliders/sider-2.png';
import slider_3 from '../../../../public/imges/sliders/sider-3.png';
import slider_4 from '../../../../public/imges/sliders/sider-4.jpg';

export default function Carousels() {
    //
  return (
    <>
      <section id="carousels">
        <div className="">
          <Carousel autoplay dotPosition="bottom">
            {[slider_1, slider_2, slider_3, slider_4].map((slider, index) => (
              <div key={index} className="w-full h-auto "> 
                <Image
                  src={slider}       
                  alt={`Banner Image`}
                  layout="responsive"
                  width={1600} // Original width of your image
                  height={600} // Original height of your image
                  className="rounded-lg"
                  priority // Optional: for better performance on the first load
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}
