import React from 'react';

export default function ChatReply({ content }: Readonly<{ content: string }>) {
  return (
    <div>
      <div
        className="p-3 rounded-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
