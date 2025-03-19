import React, { useEffect, useRef } from 'react';
import './index.scss';

export default function ChatReply({
  content,
  loading,
}: Readonly<{ content: string; loading: boolean }>) {
  const contentBox = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let lastChild: HTMLElement | null = contentBox.current
      ?.lastElementChild as HTMLElement;
    console.log('ccc', contentBox.current);
    console.log('lll', lastChild);
    lastChild = findLastElement(lastChild);
    // 确保 lastChild 是 HTMLElement
    if (lastChild && loading) {
      lastChild.insertAdjacentHTML(
        'beforeend',
        '<span class="input-cursor"></span>'
      );
    }
  }, [content]);

  return (
    <div>
      {content && (
        <div
          ref={contentBox}
          className="prose dark dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </div>
  );
}

function findLastElement(element: HTMLElement): HTMLElement | null {
  if (!element.children.length) {
    return element;
  }
  if (element.tagName === 'UL' || element.tagName === 'OL') {
    const targetEle = element.children[element.children.length - 1];
    if (!targetEle.children.length) {
      return targetEle as HTMLElement;
    }
    if (['OL', 'UL', 'STRONG'].includes(targetEle.children[0].tagName)) {
      return null;
    }
    if (['P'].includes(targetEle.children[0].tagName)) {
      return targetEle.children[0] as HTMLElement;
    }
    return targetEle as HTMLElement;
  }

  if (element.tagName === 'PRE') {
    return null;
  }
  return element;
}
