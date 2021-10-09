import React from 'react';

const MessageMain = () => {
  return (
    <div className='chat-message-list flex flex-col-reverse'>
      <div className='message-row other-message self-start py-3'>
        <div className='message-content'>
          <div className='message-text bg-gray-500 px-3 py-2 rounded-2xl rounded-bl-none text-gray-800'>
            Other message Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus, aliquam possimus vel fugit officiis maxime atque dolore
            cum, minima voluptate placeat alias nesciunt, ab est. Facilis
            blanditiis assumenda quo dolore? Excepturi alias quia ullam tempora,
            iste laudantium eveniet earum et aspernatur aperiam modi! Ipsum
            labore, cupiditate totam voluptate ipsam quas!
          </div>
          <div className='message-time text-xs pt-2 float-left text-gray-400'>
            15 April
          </div>
        </div>
      </div>

      <div className='message-row your-message self-end py-3'>
        <div className='message-content'>
          <div className='message-text bg-gray-800 px-3 py-2 rounded-2xl rounded-br-none text-gray-400'>
            my message Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Corrupti consectetur facilis architecto! Aliquid, excepturi itaque.
            Impedit perferendis laboriosam, veritatis excepturi exercitationem
            quos aut nisi sunt explicabo quisquam provident eveniet maxime
            voluptas ipsa? Praesentium quod nesciunt optio ipsam consequatur
            dolore totam distinctio laboriosam mollitia modi a vitae blanditiis,
            suscipit illum dolorem id quibusdam, temporibus earum at provident.
            Doloribus quisquam incidunt beatae. Voluptas reiciendis deserunt,
            itaque mollitia quibusdam natus cum est ducimus earum quod,
            dignissimos libero iure repudiandae! Repellat assumenda quibusdam
            provident.
          </div>
          <div className='message-time text-xs pt-2 float-right text-gray-400'>
            15 April
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageMain;
