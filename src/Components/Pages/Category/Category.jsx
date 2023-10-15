import img from '../../../../public/download.jpg'
import img1 from '../../../../public/images.jpg'

const Category = () => {
    return (
        <div>
            <div>
                <p className='mt-4 mb-4 text-xl font-bold text-center'>About us</p>
                <div>
                    <img className='w-full px-4' src={img} alt="" />
                </div>
                <div>
                    <p className='p-4 text-[15px] md:-[28px]'>Join us for an unforgettable social event that promises an evening of laughter, connection, and pure enjoyment. Whether you're an extrovert or introvert, there's something for everyone at this gathering. Our social event is designed to bring people from all walks of life together to create lasting memories and build new friendships.</p>
                    <p className='p-4 text-[15px] md:-[28px]'>Imagine a beautifully decorated venue with ambient lighting and a welcoming atmosphere. As you step in, you'll be greeted by the warmth of friendly faces and the sound of laughter filling the air. We've curated a delightful menu of food and beverages to tantalize your taste buds, featuring both classic and exotic flavors.

                    The evening's entertainment is a highlight, with live music, games, and engaging activities that encourage mingling and laughter. Whether you're dancing to the rhythm of the music, engaging in lighthearted competition, or simply enjoying great conversation, you're in for a fantastic time.

                    This social event is not just about entertainment; it's about creating connections that can last a lifetime. It's an opportunity to expand your social circle, network, or simply relax and have fun with friends old and new. Don't miss out on this unforgettable night of socializing and enjoyment.

                    Feel free to adapt this description to fit the specific details and theme of your social event.
                    </p>
                    <img className='w-full px-4' src={img1} alt="" />
                    <p className='p-4 text-[15px] md:-[28px]'>The evening's entertainment is a highlight, with live music, games, and engaging activities that encourage mingling and laughter. Whether you're dancing to the rhythm of the music, engaging in lighthearted competition, or simply enjoying great conversation, you're in for a fantastic time.</p>
                    <p className='p-4 text-[15px] md:-[28px]'>This social event is not just about entertainment; it's about creating connections that can last a lifetime. It's an opportunity to expand your social circle, network, or simply relax and have fun with friends old and new. Don't miss out on this unforgettable night of socializing and enjoyment.</p>
                </div>
            </div>
        </div>
    );
};

export default Category;