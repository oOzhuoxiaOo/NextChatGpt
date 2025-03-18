'use client';
import ChatAsk from '@/components/chat/Ask';
import ChatReply from '@/components/chat/Reply';
import { Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import './page.css';
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
      content: `<div class="p-3 rounded-lg md-css"><p><code>Promise.then</code> 是 JavaScript 中用于处理异步操作的核心方法之一。它允许你在 Promise 对象的状态变为 <code>fulfilled</code> 或 <code>rejected</code> 时执行相应的回调函数。下面是一个简单的 <code>Promise.then</code> 的手写实现：</p>
<pre><code class="language-javascript"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf" tabindex="0"><code class="language-javascript"><span class="line"><span style="color:#C678DD">class</span><span style="color:#E5C07B"> MyPromise</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">  constructor</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">executor</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">state</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> 'pending'</span><span style="color:#ABB2BF">; </span><span style="color:#7F848E;font-style:italic">// Promise 的初始状态</span></span>
<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">value</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> undefined</span><span style="color:#ABB2BF">; </span><span style="color:#7F848E;font-style:italic">// Promise 的最终值</span></span>
<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">reason</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> undefined</span><span style="color:#ABB2BF">; </span><span style="color:#7F848E;font-style:italic">// Promise 的拒绝原因</span></span>
<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">onFulfilledCallbacks</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> []; </span><span style="color:#7F848E;font-style:italic">// 成功回调函数队列</span></span>
<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">onRejectedCallbacks</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> []; </span><span style="color:#7F848E;font-style:italic">// 失败回调函数队列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD">    const</span><span style="color:#61AFEF"> resolve</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">value</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">      if</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">state</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> 'pending'</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#E5C07B">        this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">state</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> 'fulfilled'</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#E5C07B">        this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">value</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> value</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#E5C07B">        this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">onFulfilledCallbacks</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">forEach</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">callback</span><span style="color:#C678DD"> =&gt;</span><span style="color:#61AFEF"> callback</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">value</span><span style="color:#ABB2BF">));</span></span>
<span class="line"><span style="color:#ABB2BF">      }</span></span>
<span class="line"><span style="color:#ABB2BF">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD">    const</span><span style="color:#61AFEF"> reject</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">reason</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">      if</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">state</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> 'pending'</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#E5C07B">        this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">state</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> 'rejected'</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#E5C07B">        this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">reason</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> reason</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#E5C07B">        this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">onRejectedCallbacks</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">forEach</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">callback</span><span style="color:#C678DD"> =&gt;</span><span style="color:#61AFEF"> callback</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">reason</span><span style="color:#ABB2BF">));</span></span>
<span class="line"><span style="color:#ABB2BF">      }</span></span>
<span class="line"><span style="color:#ABB2BF">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD">    try</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#61AFEF">      executor</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">resolve</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">reject</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">    } </span><span style="color:#C678DD">catch</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#61AFEF">      reject</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">    }</span></span>
<span class="line"><span style="color:#ABB2BF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF">  then</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">onFulfilled</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">onRejected</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#C678DD">    const</span><span style="color:#E5C07B"> promise2</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> MyPromise</span><span style="color:#ABB2BF">((</span><span style="color:#E06C75;font-style:italic">resolve</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">reject</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">      if</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">state</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> 'fulfilled'</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#61AFEF">        setTimeout</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">          try</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">            const</span><span style="color:#E5C07B"> x</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> onFulfilled</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">value</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#61AFEF">            resolvePromise</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">promise2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">x</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">resolve</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">reject</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">          } </span><span style="color:#C678DD">catch</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#61AFEF">            reject</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">          }</span></span>
<span class="line"><span style="color:#ABB2BF">        }, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">      } </span><span style="color:#C678DD">else</span><span style="color:#C678DD"> if</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">state</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> 'rejected'</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#61AFEF">        setTimeout</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">          try</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">            const</span><span style="color:#E5C07B"> x</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> onRejected</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">reason</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#61AFEF">            resolvePromise</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">promise2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">x</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">resolve</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">reject</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">          } </span><span style="color:#C678DD">catch</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#61AFEF">            reject</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">          }</span></span>
<span class="line"><span style="color:#ABB2BF">        }, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">      } </span><span style="color:#C678DD">else</span><span style="color:#C678DD"> if</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">state</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> 'pending'</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#E5C07B">        this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">onFulfilledCallbacks</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">push</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#61AFEF">          setTimeout</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">            try</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">              const</span><span style="color:#E5C07B"> x</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> onFulfilled</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">value</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#61AFEF">              resolvePromise</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">promise2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">x</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">resolve</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">reject</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">            } </span><span style="color:#C678DD">catch</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#61AFEF">              reject</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">            }</span></span>
<span class="line"><span style="color:#ABB2BF">          }, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B">        this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">onRejectedCallbacks</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">push</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#61AFEF">          setTimeout</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">            try</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">              const</span><span style="color:#E5C07B"> x</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> onRejected</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">reason</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#61AFEF">              resolvePromise</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">promise2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">x</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">resolve</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">reject</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">            } </span><span style="color:#C678DD">catch</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#61AFEF">              reject</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">            }</span></span>
<span class="line"><span style="color:#ABB2BF">          }, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">        });</span></span>
<span class="line"><span style="color:#ABB2BF">      }</span></span>
<span class="line"><span style="color:#ABB2BF">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD">    return</span><span style="color:#E06C75"> promise2</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#ABB2BF">  }</span></span>
<span class="line"><span style="color:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD">function</span><span style="color:#61AFEF"> resolvePromise</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">promise2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">x</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">resolve</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">reject</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#C678DD">  if</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">promise2</span><span style="color:#56B6C2"> ===</span><span style="color:#E06C75"> x</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#C678DD">    return</span><span style="color:#61AFEF"> reject</span><span style="color:#ABB2BF">(</span><span style="color:#C678DD">new</span><span style="color:#61AFEF"> TypeError</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">'Chaining cycle detected for promise'</span><span style="color:#ABB2BF">));</span></span>
<span class="line"><span style="color:#ABB2BF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> called</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#C678DD">  if</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">x</span><span style="color:#56B6C2"> !==</span><span style="color:#D19A66"> null</span><span style="color:#56B6C2"> &amp;&amp;</span><span style="color:#ABB2BF"> (</span><span style="color:#C678DD">typeof</span><span style="color:#E06C75"> x</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> 'object'</span><span style="color:#56B6C2"> ||</span><span style="color:#C678DD"> typeof</span><span style="color:#E06C75"> x</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> 'function'</span><span style="color:#ABB2BF">)) {</span></span>
<span class="line"><span style="color:#C678DD">    try</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">      const</span><span style="color:#E5C07B"> then</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> x</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">then</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#C678DD">      if</span><span style="color:#ABB2BF"> (</span><span style="color:#C678DD">typeof</span><span style="color:#E06C75"> then</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> 'function'</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#E5C07B">        then</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">call</span><span style="color:#ABB2BF">(</span></span>
<span class="line"><span style="color:#E06C75">          x</span><span style="color:#ABB2BF">,</span></span>
<span class="line"><span style="color:#E06C75;font-style:italic">          y</span><span style="color:#C678DD"> =&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">            if</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">called</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">return</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#E06C75">            called</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#61AFEF">            resolvePromise</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">promise2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">y</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">resolve</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">reject</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">          },</span></span>
<span class="line"><span style="color:#E06C75;font-style:italic">          r</span><span style="color:#C678DD"> =&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#C678DD">            if</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">called</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">return</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#E06C75">            called</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#61AFEF">            reject</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">r</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">          }</span></span>
<span class="line"><span style="color:#ABB2BF">        );</span></span>
<span class="line"><span style="color:#ABB2BF">      } </span><span style="color:#C678DD">else</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#61AFEF">        resolve</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">x</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">      }</span></span>
<span class="line"><span style="color:#ABB2BF">    } </span><span style="color:#C678DD">catch</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#C678DD">      if</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">called</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">return</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#E06C75">      called</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#61AFEF">      reject</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">    }</span></span>
<span class="line"><span style="color:#ABB2BF">  } </span><span style="color:#C678DD">else</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#61AFEF">    resolve</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">x</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">  }</span></span>
<span class="line"><span style="color:#ABB2BF">}</span></span></code></pre></code></pre>
<h3>解释</h3>
<ol>
<li>
<p><strong>MyPromise 类</strong>:</p>
<ul>
<li><code>state</code>: 表示 Promise 的当前状态，可以是 <code>pending</code>、<code>fulfilled</code> 或 <code>rejected</code>。</li>
<li><code>value</code>: 当 Promise 成功时，存储的值。</li>
<li><code>reason</code>: 当 Promise 失败时，存储的原因。</li>
<li><code>onFulfilledCallbacks</code> 和 <code>onRejectedCallbacks</code>: 分别存储成功和失败的回调函数队列。</li>
</ul>
</li>
<li>
<p><strong>resolve 和 reject</strong>:</p>
<ul>
<li><code>resolve</code>: 当 Promise 成功时调用，将状态改为 <code>fulfilled</code>，并执行所有成功回调。</li>
<li><code>reject</code>: 当 Promise 失败时调用，将状态改为 <code>rejected</code>，并执行所有失败回调。</li>
</ul>
</li>
<li>
<p><strong>then 方法</strong>:</p>
<ul>
<li><code>then</code> 方法返回一个新的 Promise 对象 <code>promise2</code>。</li>
<li>根据当前 Promise 的状态，决定是立即执行回调还是将回调放入队列中等待执行。</li>
<li>使用 <code>setTimeout</code> 来模拟异步执行，确保回调函数在事件循环的下一个 tick 中执行。</li>
</ul>
</li>
<li>
<p><strong>resolvePromise 函数</strong>:</p>
<ul>
<li>用于处理 <code>then</code> 方法返回的 Promise 对象。</li>
<li>如果 <code>x</code> 是一个 Promise 对象，则递归调用 <code>resolvePromise</code> 直到 <code>x</code> 不再是一个 Promise。</li>
<li>如果 <code>x</code> 是一个普通值，则直接调用 <code>resolve</code>。</li>
</ul>
</li>
</ol>
<h3>使用示例</h3>
<pre><code class="language-javascript"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf" tabindex="0"><code class="language-javascript"><span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> promise</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> MyPromise</span><span style="color:#ABB2BF">((</span><span style="color:#E06C75;font-style:italic">resolve</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">reject</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#61AFEF">  setTimeout</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#61AFEF">    resolve</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">'Success!'</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">  }, </span><span style="color:#D19A66">1000</span><span style="color:#ABB2BF">);</span></span>
<span class="line"><span style="color:#ABB2BF">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B">promise</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">then</span><span style="color:#ABB2BF">((</span><span style="color:#E06C75;font-style:italic">value</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#E5C07B">  console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">value</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// 1秒后输出 "Success!"</span></span>
<span class="line"><span style="color:#C678DD">  return</span><span style="color:#98C379"> 'Another Success!'</span><span style="color:#ABB2BF">;</span></span>
<span class="line"><span style="color:#ABB2BF">}).</span><span style="color:#61AFEF">then</span><span style="color:#ABB2BF">((</span><span style="color:#E06C75;font-style:italic">value</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=&gt;</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#E5C07B">  console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">value</span><span style="color:#ABB2BF">); </span><span style="color:#7F848E;font-style:italic">// 输出 "Another Success!"</span></span>
<span class="line"><span style="color:#ABB2BF">});</span></span></code></pre></code></pre>
<p>这个手写实现是一个简化版的 <code>Promise</code>，实际 JavaScript 中的 <code>Promise</code> 实现要复杂得多，并且遵循了 <a href="https://promisesaplus.com/">Promises/A+</a> 规范。</p>
</div>`,
    },
  ]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  async function handleSend() {
    setLoading(true);
    const resp = await fetch(`http://localhost:8000/api/v1?content=${keyword}`);
    const reader = resp.body!.getReader();
    const decoder = new TextDecoder();

    let originText = '';
    setData((prev) => {
      return [
        ...prev,
        { id: prev.length, type: 'req', content: keyword },
        {
          id: prev.length + 1,
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

      // console.log('txt', txt);
    }
    setLoading(false);
    setKeyword('');

    // console.log(keyword);
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center leading-6 text-left ">
        <div className="flex flex-col items-center w-full pb-16">
          <div className="w-full overflow-y-auto h-170">
            <div className="flex flex-col items-center justify-center max-w-3xl gap-8 pt-3 pb-3 ml-auto mr-auto main-box min-w-xl ">
              {data.map((item) => {
                return item.type === 'req' ? (
                  <div key={item.id} className="flex ml-auto max-w-3/5">
                    <ChatAsk content={item.content}></ChatAsk>
                  </div>
                ) : (
                  <div key={item.id} className="flex mr-auto">
                    <ChatReply content={item.content}></ChatReply>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full input-box ">
            <div className="flex flex-col items-center max-w-3xl gap-3 p-5 pt-8 pb-8 ml-auto mr-auto min-w-xl rounded-2xl bg-[#404045]">
              <TextArea
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="请输入内容"
                className="c-a-textarea"
                autoSize={{ minRows: 3, maxRows: 3 }}
                style={{
                  fontSize: '1rem',
                  background: 'none',
                  boxShadow: 'none',
                  border: 'none',
                  color: 'white',
                }}
              />
              <Button
                onClick={handleSend}
                className="ml-auto"
                loading={loading}
              >
                Send
              </Button>
            </div>
            -
          </div>
        </div>
      </div>
    </div>
  );
}
