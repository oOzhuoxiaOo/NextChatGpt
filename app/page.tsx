'use client';
import ChatAsk from '@/components/chat/Ask';
import ChatReply from '@/components/chat/Reply';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';

export default function Home() {
  const [data] = useState([
    {
      id: 0,
      type: 'req',
      content: '你好啊',
    },
    {
      id: 1,
      type: 'res',
      content: 'hello,有什么是我能帮助你的吗？',
    },
    {
      id: 2,
      type: 'req',
      content: '测试问你',
    },
    {
      id: 3,
      type: 'res',
      content:
        '测试是事实事实和啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊？'.repeat(10),
    },
    {
      id: 4,
      type: 'res',
      content:
        '测试是事实事实和啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊？'.repeat(10),
    },
    {
      id: 5,
      type: 'res',
      content:
        '测试是事实事实和啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊？'.repeat(10),
    },
    {
      id: 6,
      type: 'res',
      content:
        '测试是事实事实和啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊？'.repeat(10),
    },
  ]);
  const [keyword, setKeyword] = useState('');
  function handleSend() {
    console.log(keyword);
  }
  return (
    <div>
      <div className=" text-left flex justify-center leading-6 flex-col items-center">
        <div className="pb-16 w-full flex flex-col items-center">
          <div className="h-180 overflow-y-auto w-full">
            <div className="main-box min-w-xl ml-auto mr-auto   max-w-3xl  flex flex-col justify-center items-center pt-3 pb-3 gap-8 ">
              {data.map((item) => {
                return item.type === 'req' ? (
                  <div key={item.id} className="ml-auto flex max-w-3/5">
                    <ChatAsk content={item.content}></ChatAsk>
                  </div>
                ) : (
                  <div key={item.id} className="mr-auto flex">
                    <ChatReply content={item.content}></ChatReply>
                  </div>
                );
              })}
              <div className="ml-auto flex max-w-3/5">
                <ChatAsk content={'你好啊'.repeat(10)}></ChatAsk>
              </div>
              <div className="mr-auto flex">
                <ChatReply content={'你好啊'.repeat(20)}></ChatReply>
              </div>
            </div>
          </div>
          <div className="input-box w-full ">
            <div className="flex flex-col min-w-xl ml-auto mr-auto rounded-2xl   bg-slate-900 max-w-3xl items-center p-5 pt-8 pb-8">
              <TextArea
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />

              <button
                onClick={handleSend}
                className="ml-2 p-2 bg-blue-500 text-white rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
