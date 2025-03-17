import React from 'react';

export default function ChatAsk({ content }: Readonly<{ content: string }>) {
  return (
    <div>
      <div className="p-3  rounded-lg bg-slate-500 ">{content}</div>
    </div>
  );
}
