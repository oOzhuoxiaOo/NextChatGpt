'use client';
import ChatAsk from '@/components/chat/Ask';
import ChatReply from '@/components/chat/Reply';
import { Button, Spin } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useRef, useState } from 'react';
import './page.scss';
import markdownIt from 'markdown-it';
import Shiki from '@shikijs/markdown-it';
const md = markdownIt();
md.use(
  await Shiki({
    theme: 'one-dark-pro',
  })
);

export default function Home() {
  const [data, setData] = useState([
    {
      id: 0,
      type: 'req',
      content: '你好',
    },
    {
      id: 1,
      type: 'res',
      content: `<p>深度克隆（Deep Clone）是指创建一个新对象，并将原对象的所有属性（包括嵌套的对象和数组）都复制到新对象中，而不是仅仅复制引用。这样，新对象和原对象是完全独立的，修改新对象不会影响原对象。</p>
    <p>在 JavaScript 中，实现深度克隆有多种方法。以下是几种常见的方式：</p>
    <h3>1. 使用 <code>JSON.parse</code> 和 <code>JSON.stringify</code></h3>
    <p>这是最简单的方法，但有一些限制：</p>
    <ul>
    <li>不能克隆函数、<code>undefined</code>、<code>Symbol</code> 等特殊类型。</li>
    <li>不能克隆循环引用的对象。</li>
    </ul>
    <pre><code class="language-javascript"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf" tabindex="0"><code class="language-javascript"><span class="line"><span style="color:#C678DD">function</span><span style="color:#61AFEF"> deepClone</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">obj</span><span style="color:#ABB2BF">) {</span></span>
    <span class="line"><span style="color:#C678DD">    return</span><span style="color:#E5C07B"> JSON</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">parse</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">JSON</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">stringify</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">obj</span><span style="color:#ABB2BF">));</span></span>
    <span class="line"><span style="color:#ABB2BF">}</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> original</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">a</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">b</span><span style="color:#ABB2BF">: { </span><span style="color:#E06C75">c</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">2</span><span style="color:#ABB2BF"> } };</span></span>
    <span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> cloned</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> deepClone</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">original</span><span style="color:#ABB2BF">);</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">cloned</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// { a: 1, b: { c: 2 } }</span></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">cloned</span><span style="color:#56B6C2"> ===</span><span style="color:#E06C75"> original</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// false</span></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">cloned</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">b</span><span style="color:#56B6C2"> ===</span><span style="color:#E5C07B"> original</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">b</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// false</span></span></code></pre></code></pre>
    <h3>2. 使用递归</h3>
    <p>这种方法可以处理更多类型的对象，并且可以处理循环引用。</p>
    <pre><code class="language-javascript"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf" tabindex="0"><code class="language-javascript"><span class="line"><span style="color:#C678DD">function</span><span style="color:#61AFEF"> deepClone</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">obj</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">hash</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> WeakMap</span><span style="color:#ABB2BF">()) {</span></span>
    <span class="line"><span style="color:#C678DD">    if</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">obj</span><span style="color:#56B6C2"> ===</span><span style="color:#D19A66"> null</span><span style="color:#56B6C2"> ||</span><span style="color:#C678DD"> typeof</span><span style="color:#E06C75"> obj</span><span style="color:#56B6C2"> !==</span><span style="color:#98C379"> 'object'</span><span style="color:#ABB2BF">) {</span></span>
    <span class="line"><span style="color:#C678DD">        return</span><span style="color:#E06C75"> obj</span><span style="color:#ABB2BF">;</span></span>
    <span class="line"><span style="color:#ABB2BF">    }</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#7F848E;font-style:italic">    // 处理循环引用</span></span>
    <span class="line"><span style="color:#C678DD">    if</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">hash</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">has</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">obj</span><span style="color:#ABB2BF">)) {</span></span>
    <span class="line"><span style="color:#C678DD">        return</span><span style="color:#E5C07B"> hash</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">get</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">obj</span><span style="color:#ABB2BF">);</span></span>
    <span class="line"><span style="color:#ABB2BF">    }</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#C678DD">    let</span><span style="color:#E06C75"> clone</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> Array</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">isArray</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">obj</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">?</span><span style="color:#ABB2BF"> [] </span><span style="color:#C678DD">:</span><span style="color:#ABB2BF"> {};</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#E5C07B">    hash</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">set</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">obj</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">clone</span><span style="color:#ABB2BF">);</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#C678DD">    for</span><span style="color:#ABB2BF"> (</span><span style="color:#C678DD">let</span><span style="color:#E06C75"> key</span><span style="color:#C678DD"> in</span><span style="color:#E06C75"> obj</span><span style="color:#ABB2BF">) {</span></span>
    <span class="line"><span style="color:#C678DD">        if</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">obj</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">hasOwnProperty</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">key</span><span style="color:#ABB2BF">)) {</span></span>
    <span class="line"><span style="color:#E06C75">            clone</span><span style="color:#ABB2BF">[</span><span style="color:#E06C75">key</span><span style="color:#ABB2BF">] </span><span style="color:#56B6C2">=</span><span style="color:#61AFEF"> deepClone</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">obj</span><span style="color:#ABB2BF">[</span><span style="color:#E06C75">key</span><span style="color:#ABB2BF">], </span><span style="color:#E06C75">hash</span><span style="color:#ABB2BF">);</span></span>
    <span class="line"><span style="color:#ABB2BF">        }</span></span>
    <span class="line"><span style="color:#ABB2BF">    }</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#C678DD">    return</span><span style="color:#E06C75"> clone</span><span style="color:#ABB2BF">;</span></span>
    <span class="line"><span style="color:#ABB2BF">}</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> original</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">a</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">b</span><span style="color:#ABB2BF">: { </span><span style="color:#E06C75">c</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">2</span><span style="color:#ABB2BF"> } };</span></span>
    <span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> cloned</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> deepClone</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">original</span><span style="color:#ABB2BF">);</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">cloned</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// { a: 1, b: { c: 2 } }</span></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">cloned</span><span style="color:#56B6C2"> ===</span><span style="color:#E06C75"> original</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// false</span></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">cloned</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">b</span><span style="color:#56B6C2"> ===</span><span style="color:#E5C07B"> original</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">b</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// false</span></span></code></pre></code></pre>
    <h3>3. 使用 <code>structuredClone</code></h3>
    <p><code>structuredClone</code> 是浏览器提供的一个原生方法，可以深度克隆对象，并且支持更多类型（如 <code>Map</code>、<code>Set</code>、<code>ArrayBuffer</code> 等）。</p>
    <pre><code class="language-javascript"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf" tabindex="0"><code class="language-javascript"><span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> original</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">a</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">b</span><span style="color:#ABB2BF">: { </span><span style="color:#E06C75">c</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">2</span><span style="color:#ABB2BF"> } };</span></span>
    <span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> cloned</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> structuredClone</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">original</span><span style="color:#ABB2BF">);</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">cloned</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// { a: 1, b: { c: 2 } }</span></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">cloned</span><span style="color:#56B6C2"> ===</span><span style="color:#E06C75"> original</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// false</span></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">cloned</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">b</span><span style="color:#56B6C2"> ===</span><span style="color:#E5C07B"> original</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">b</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// false</span></span></code></pre></code></pre>
    <h3>4. 使用第三方库（如 Lodash）</h3>
    <p>Lodash 提供了一个 <code>cloneDeep</code> 方法，可以方便地进行深度克隆。</p>
    <pre><code class="language-javascript"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf" tabindex="0"><code class="language-javascript"><span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> _</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> require</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">'lodash'</span><span style="color:#ABB2BF">);</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> original</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">a</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">b</span><span style="color:#ABB2BF">: { </span><span style="color:#E06C75">c</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">2</span><span style="color:#ABB2BF"> } };</span></span>
    <span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> cloned</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> _</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">cloneDeep</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">original</span><span style="color:#ABB2BF">);</span></span>
    <span class="line"></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">cloned</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// { a: 1, b: { c: 2 } }</span></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">cloned</span><span style="color:#56B6C2"> ===</span><span style="color:#E06C75"> original</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// false</span></span>
    <span class="line"><span style="color:#E5C07B">console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">cloned</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">b</span><span style="color:#56B6C2"> ===</span><span style="color:#E5C07B"> original</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">b</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// false</span></span></code></pre></code></pre>
    <h3>总结</h3>
    <ul>
    <li>如果对象结构简单且不包含特殊类型，可以使用 <code>JSON.parse</code> 和 <code>JSON.stringify</code>。</li>
    <li>如果需要处理复杂对象或循环引用，可以使用递归方法。</li>
    <li>如果环境支持 <code>structuredClone</code>，可以使用它来进行深度克隆。</li>
    <li>如果项目中已经使用了 Lodash，可以直接使用 <code>_.cloneDeep</code>。</li>
    </ul>
    <p>根据具体需求选择合适的方法来实现深度克隆。</p>`,
    },
  ]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const replayBottom = useRef<HTMLDivElement>(null);
  function scrollToBottom() {
    replayBottom.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }
  useEffect(() => {
    scrollToBottom();
  }, [data]);
  useEffect(() => {});
  async function handleSend() {
    setLoading(true);
    scrollToBottom();
    setData((prev) => {
      return [...prev, { id: prev.length, type: 'req', content: keyword }];
    });
    const resp = await fetch(`http://localhost:8000/api/v1?content=${keyword}`);
    const reader = resp.body!.getReader();
    const decoder = new TextDecoder();
    let originText = '';

    setData((prev) => {
      return [
        ...prev,
        {
          id: prev.length,
          type: 'res',
          content: '',
        },
      ];
    });

    while (1) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      const txt = decoder.decode(value);
      originText += txt;
      const mdHtml = md.render(originText);
      setData((prev) =>
        prev.map((item, idx) => {
          return {
            ...item,
            content: idx === prev.length - 1 ? mdHtml : item.content,
          };
        })
      );
    }
    setLoading(false);
    setKeyword('');

    // console.log(keyword);
  }
  return (
    <div className="h-full">
      <div className="relative flex flex-col items-center h-full leading-6 text-left">
        <div className="flex flex-col items-center w-full">
          <div className="w-full overflow-y-auto h-172">
            <div className="flex flex-col items-center justify-center max-w-3xl gap-8 pt-3 pb-3 ml-auto mr-auto main-box min-w-xl ">
              {data.map((item) => {
                return item.type === 'req' ? (
                  <div key={item.id} className="flex ml-auto max-w-3/5">
                    <ChatAsk content={item.content}></ChatAsk>
                  </div>
                ) : (
                  <div key={item.id} className="flex w-full mr-auto">
                    <ChatReply
                      loading={loading}
                      content={item.content}
                    ></ChatReply>
                  </div>
                );
              })}
            </div>
            <div className="flex w-full max-w-3xl ml-auto mr-auto">
              {loading && <Spin className="mr-auto"></Spin>}
            </div>
            <div className="h-10" ref={replayBottom}></div>
          </div>
        </div>
        <div className="absolute w-full bottom-10 input-box">
          <div className="flex flex-col items-center max-w-[52rem] gap-3 p-5 pt-8 pb-8 ml-auto mr-auto min-w-xl rounded-2xl bg-[#404045]">
            <TextArea
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="请输入内容"
              className="c-a-textarea"
              autoSize={{ minRows: 1, maxRows: 3 }}
              disabled={loading}
              onPressEnter={handleSend}
              style={{
                fontSize: '1rem',
                background: 'none',
                boxShadow: 'none',
                border: 'none',
                color: 'white',
              }}
            />
            <Button onClick={handleSend} className="ml-auto" loading={loading}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
