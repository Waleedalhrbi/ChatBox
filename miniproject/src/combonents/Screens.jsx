import React, { useState } from 'react';

function Screens(props) {
  const [input, setInput] = useState('');
  const Wallpaper = 'https://i.pinimg.com/564x/7d/0e/70/7d0e709fd2c2555e075ae8b49368fb74.jpg';

  const Addmsg = (e) => {
    setInput(e.target.value);
  };

  const Submit = () => {
    input.trim() && (props.onSendMessage(input), setInput(''));
  };
  
  return (
    <div>
      <div className='pt-7 flex justify-center'>
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div
              className="artboard artboard-demo phone-1 flex flex-col justify-between"
              style={{
                backgroundImage: `url(${Wallpaper})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
            
              <div className="flex items-center p-3 bg-gray-700 w-full" >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    alt="User avatar"
                    src={props.avatar}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-grow p-3 pt-5 overflow-y-auto space-y-4 w-full">
                {props.messages.map((msg, index) => (
                  <div key={index} className={`chat ${msg.sender === props.user ? 'chat-end' : 'chat-start'}`}>
                    <div className="chat-image avatar">
                    </div>
                    <div className="chat-header font-bold">
                      {msg.sender === 'User1' ? 'Waleed' : 'Abdullah'}
                      <time className="text-xs opacity-50 font-bold">{msg.time}</time>
                    </div>
                    <div
                      className={`chat-bubble break-words ${
                        msg.sender === props.user ? 'bg-sky-600 text-white' : 'bg-gray-300 text-black'
                      }`}
                    >
                      {msg.message}
                    </div>
                    <div className="chat-footer opacity-50">Delivered</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center p-3 bg-gray-700  rounded-lg w-full">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 break-words resize-none"
                  placeholder="Write a message"
                  value={input}
                  onChange={Addmsg}
                  rows={1}
                />
                <button className="ml-2 p-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700" onClick={Submit}>
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/fluency/48/filled-sent.png"
                    alt="Send icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screens;
