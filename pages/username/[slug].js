import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";

const Profile = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <div className="w-[60vw] mx-auto">
           <div className="profile m-4">
            <div className="flex items-center space-x-2">
              <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-red-600 text-white'>A</div>
              <div><div>{slug}</div><div className='text-gray-700'>@amritpreetsingh012</div></div>
            </div>
           </div>
           <div className='flex justify-start space-x-7'>
            <div className='cursor-pointer p-4 transition-all hover:bg-red-500 hover:text-white'>My Blogs</div>
            <div className='cursor-pointer p-4 transition-all hover:bg-red-500 hover:text-white'>Create Blog</div>
            <div className='cursor-pointer p-4 transition-all hover:bg-red-500 hover:text-white'>Settings</div>
           </div>
           <div className="main">
           <div className="element border p-4 my-3">
                 <div className="title font-bold mb-3 text-2xl">Why to use React.js?</div>
                 <div className="flex items-center space-x-3">
                   <div className="w-[40px] h-[40px] bg-red-500 rounded-full flex justify-center items-center text-white">A</div>
                   <div className="">Amrit</div>
                   <div className="text-gray-500">December 21, 2025</div>
                 </div>
                 <div className="content"> 
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio perspiciatis veniam fuga molestias, sunt provident ullam voluptates repellendus cumque iure? Corrupti cum deleniti, repellat nisi, molestiae sequi culpa praesentium minus facere laudantium impedit, aspernatur quisquam. Deleniti enim quibusdam beatae quasi iure a aperiam, dolores numquam incidunt nesciunt. Dolorem perferendis ullam voluptatibus odio doloremque quisquam excepturi, inventore tempora architecto temporibus? Veniam doloribus id voluptates impedit sapiente ab at, cumque magni autem! Nihil beatae exercitationem itaque at quisquam facilis illum labore voluptatem magni maxime sint odit harum ea molestiae nam commodi enim quidem debitis, aperiam hic dolorum perferendis deleniti officiis. Laudantium nesciunt vero culpa mollitia architecto nostrum quia porro iste ab ad deserunt beatae sequi quos animi, doloribus blanditiis. Mollitia delectus vero ad quidem corrupti facere veniam dolor nemo quis voluptatem sed, iste amet laudantium sapiente error. Repellat, ipsa sint aliquid quam sunt voluptates! Dolor optio nostrum odit sunt temporibus? Commodi, ullam pariatur laborum repellendus porro quod qui, consequatur rerum eum cupiditate odit nesciunt? Minus dignissimos ipsum tempore quod vero, minima, harum molestias natus iure explicabo eum quisquam deleniti fugit nulla dolorem. Quisquam exercitationem, omnis placeat amet quam sequi ratione aut expedita voluptas aliquam ea laboriosam facilis et porro voluptate nostrum sunt! Porro, ducimus ullam quas quam maiores distinctio omnis cum veritatis aliquid consequuntur sed voluptates, nobis tempora. Voluptatem, dicta. Repellendus, ducimus animi! Explicabo voluptate dolorum aut optio nesciunt possimus modi culpa inventore voluptates delectus, mollitia at nulla ut unde reiciendis vel accusantium eos itaque id labore, alias laborum officia quia quasi. Enim exercitationem soluta ipsa magnam consequatur dolorem deserunt ipsam tempore, tempora quae adipisci, vel repudiandae quam recusandae iste nobis reprehenderit assumenda beatae possimus unde sapiente error nemo? Illo tempore deleniti temporibus nobis! Veritatis voluptatum doloribus modi libero ducimus eos perferendis reprehenderit. Alias harum voluptatum hic quo in voluptas temporibus dolores accusantium ad voluptatem quas cupiditate vitae, eos officia. Officiis autem veritatis accusantium voluptas similique. Cupiditate voluptatum molestias quam porro odio iste asperiores eaque mollitia, consectetur commodi consequatur quo, sapiente itaque provident delectus autem corporis ipsam nesciunt ullam distinctio praesentium dicta laudantium molestiae aliquid? Nobis hic minima magni est? Quam voluptatibus dolor sequi. Est pariatur vel, recusandae quae reiciendis fuga provident tempore velit, nihil quas inventore doloremque tenetur corporis dolorem aperiam cupiditate modi magni, ullam exercitationem at. Nemo explicabo provident ad sequi voluptates aspernatur quae, tenetur nulla rem facilis magnam ipsum minima animi sunt enim saepe praesentium, ea eveniet molestiae. Praesentium facilis quos similique labore assumenda minus fugit consequatur, magnam totam reiciendis laboriosam unde ipsam architecto repellendus veniam a maiores. Commodi minus accusantium neque doloribus at non nihil molestiae maiores quo cumque laborum maxime ullam voluptatum ex deserunt excepturi quam suscipit optio, placeat quidem reiciendis assumenda dicta quos? Ipsum quas, iure enim magni magnam consectetur eos possimus natus, id illo culpa laudantium laboriosam error harum quisquam libero sed pariatur vitae accusamus incidunt facilis labore amet neque. Perspiciatis fugiat repellendus omnis qui nostrum commodi sed quas et totam aperiam blanditiis exercitationem vitae impedit delectus, vero facere placeat iusto odio saepe distinctio?
                 </div>
                 <div className="flex mt-3 items-center space-x-3">
                   <div className="flex likes items-center space-x-2">
                 <FaRegHeart className="text-2xl"/>
                 <div>2.4M</div>
                 </div>
                 <div className="flex comment">
                 <MdOutlineComment className="text-2xl"/>
                 </div>
                 </div>
               </div>
            </div>
           </div>

          
        </>
    );
};

export default Profile;
