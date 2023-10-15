import img from '../../../../public/images (2).jpg';
import img2 from '../../../../public/download (3).jpg';
import img3 from '../../../../public/download (5).jpg';
import img4 from '../../../../public/download (2).jpg';
import img5 from '../../../../public/download (1).jpg';
import img6 from '../../../../public/download (4).jpg';

const About = () => {
    return (
        <div>
            <div>
                <p className='font-bold text-center mt-3 mb-3 md:text-2xl '>WHAT WWE ARE ORGANIZE</p>
            </div>
            <div>
                <img className='px-2 w-full ' src={img} alt="" />
            </div>
            <div>
                <p className='font-bold text-center mt-3 lg:mt-8  md:text-3xl px-2 py-3 bg-blue-600'>BIRTHDAY</p>
                <img className='px-2 w-full' src={img2} alt="" />
            </div>
            <div>
                <p className='font-bold text-center mt-3  md:text-3xl px-2 py-3 lg:mt-8 bg-blue-600'>WEEDING</p>
                <img className='px-2 w-full' src={img3} alt="" />
            </div>
            <div>
                <p className='font-bold text-center mt-3  md:text-3xl px-2 py-3 lg:mt-8 bg-blue-600'>OFFIC PARTY</p>
                <img className='px-2 w-full' src={img4} alt="" />
            </div>
            <div>
                <p className='font-bold lg:mt-8 text-center mt-3  md:text-3xl px-2 py-3 bg-blue-600'>PARTY</p>
                <img className='px-2 w-full' src={img5} alt="" />
            </div>
               
        </div>
    );
};

export default About;