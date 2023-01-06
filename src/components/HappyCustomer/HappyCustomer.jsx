import React, { useRef, useState } from "react";

import "./HappyCustomer.css";
// Images
import profile1 from "../../assets/images/profile-pic-1.jpg";
import profile2 from "../../assets/images/profile-pic-2.jpg";
import profile3 from "../../assets/images/profile-pic-3.jpg";

const HappyCustomer = () => {
  const [commentShow1, setCommentShow1] = useState(false);
  const [commentShow2, setCommentShow2] = useState(true);
  const [commentShow3, setCommentShow3] = useState(false);
  // const comment = useRef(null);

  const showComment = (num) => {
    switch (num) {
      case 1:
        setCommentShow1(true);
        setCommentShow2(false);
        setCommentShow3(false);
        console.log("Comment 1");
        break;
      case 2:
        setCommentShow1(false);
        setCommentShow2(true);
        setCommentShow3(false);
        console.log("Comment 2");
        break;
      case 3:
        setCommentShow1(false);
        setCommentShow2(false);
        setCommentShow3(true);
        console.log("Comment 1");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {/* Comments */}
      <div className="comments py-10">
        {/* Comment 1 */}
        <div
          className={`comment-1 transition duration-500 delay-500 ${
            commentShow1 ? "visible opacity-100" : "invisible h-0 opacity-0"
          }`}
        >
          <p className="text-center text-lg px-3 md:px-12 lg:px-32 italic leading-8 text-slate-500 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
            rem. Aut laudantium quis inventore. Velit fuga aspernatur nihil
            ipsa, non quis, facilis quibusdam mollitia aliquid suscipit cumque
            voluptas. Illum similique architecto rerum incidunt perferendis
            temporibus nostrum unde delectus recusandae natus. Tempora harum hic
            molestias dicta obcaecati quaerat dolore illum dolores.
          </p>
        </div>
        {/* Comment 2 */}
        <div
          className={`comment-2 transition duration-500 delay-500 ${
            commentShow2 ? "visible opacity-100" : "invisible h-0 opacity-0"
          }`}
        >
          <p className="text-center text-lg px-3 md:px-12 lg:px-32 italic leading-8 text-slate-500 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae rem necessitatibus aliquam laboriosam dignissimos
            nostrum quae velit et in quasi, illum fuga maxime ducimus. Qui
            laudantium iure sunt assumenda ipsum nam, a voluptas et tempore
            magni veritatis, pariatur, laborum dignissimos exercitationem?
            Itaque optio quos ullam placeat quasi quidem impedit perferendis?
          </p>
        </div>
        {/* Comment 3 */}
        <div
          className={`comment-3 transition duration-500 delay-500 ${
            commentShow3 ? "visible opacity-100" : "invisible h-0 opacity-0"
          }`}
        >
          <p className="text-center text-lg px-3 md:px-12 lg:px-32 italic leading-8 text-slate-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            dolores ad similique ipsam explicabo unde a quia neque, illum aut
            minus voluptate accusamus dolorum nulla consequuntur saepe optio
            laudantium perspiciatis dicta, sed, expedita repudiandae ab dolore.
            Consequuntur dolore perspiciatis quisquam, enim tempora ut sequi quo
            hic ab id perferendis facilis?
          </p>
        </div>
      </div>
      {/* ./Commentes */}
      {/* Profiles */}
      <div className="profiles flex items-center justify-center space-x-5 lg:space-x-8">
        <div className={`profile  flex flex-col items-center cursor-pointer ${commentShow1 && "active"}`}
          onClick={() => showComment(1)}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 relative profile-image">
            <img
              src={profile2}
              alt="avatar"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold pt-3 pb-1 text-sm md:text-base">Roger Edwards</p>
            <span className="text-sm text-slate-500">Book Collector</span>
          </div>
        </div>
        <div
          className={`profile  flex flex-col items-center cursor-pointer ${
            commentShow2 && "active"
          }`}
          onClick={() => showComment(2)}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 relative profile-image">
            <img
              src={profile3}
              alt="avatar"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold pt-3 pb-1  text-sm md:text-base">Amanda Spencer</p>
            <span className="text-sm text-slate-500">Book Lover</span>
          </div>
        </div>
        <div
          className={`profile  flex flex-col items-center cursor-pointer ${
            commentShow3 && "active"
          }`}
          onClick={() => showComment(3)}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 relative profile-image">
            <img
              src={profile1}
              alt="avatar"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold pt-3 pb-1  text-sm md:text-base">Dorothy Bell</p>
            <span className="text-sm text-slate-500">Reader</span>
          </div>
        </div>
      </div>
      {/* ./Profiles */}
    </div>
  );
};

export default HappyCustomer;
