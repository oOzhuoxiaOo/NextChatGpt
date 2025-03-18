import React from 'react';
import './index.scss';

export default function ChatReply({ content }: Readonly<{ content: string }>) {
  return (
    <div>
      <div
        className="p-3 rounded-lg md-css"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
