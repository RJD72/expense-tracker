let t;var e,n,s,o,i,a,r,l,c,d,u,h,f,g,p,m,E,C,y,O,_,v,I,N,T=globalThis,S={},w={},A=T.parcelRequire94c2;null==A&&((A=function(t){if(t in S)return S[t].exports;if(t in w){var e=w[t];delete w[t];var n={id:t,exports:{}};return S[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){w[t]=e},T.parcelRequire94c2=A),A.register,(e=f||(f={})).STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object",(n=g||(g={})).LANGUAGE_UNSPECIFIED="language_unspecified",n.PYTHON="python",(s=p||(p={})).OUTCOME_UNSPECIFIED="outcome_unspecified",s.OUTCOME_OK="outcome_ok",s.OUTCOME_FAILED="outcome_failed",s.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=["user","model","function","system"];(o=m||(m={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",o.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",o.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",o.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(i=E||(E={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",i.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",i.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",i.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",i.BLOCK_NONE="BLOCK_NONE",(a=C||(C={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",a.NEGLIGIBLE="NEGLIGIBLE",a.LOW="LOW",a.MEDIUM="MEDIUM",a.HIGH="HIGH",(r=y||(y={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",r.SAFETY="SAFETY",r.OTHER="OTHER",(l=O||(O={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",l.STOP="STOP",l.MAX_TOKENS="MAX_TOKENS",l.SAFETY="SAFETY",l.RECITATION="RECITATION",l.LANGUAGE="LANGUAGE",l.OTHER="OTHER",(c=_||(_={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",c.RETRIEVAL_QUERY="RETRIEVAL_QUERY",c.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",c.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",c.CLASSIFICATION="CLASSIFICATION",c.CLUSTERING="CLUSTERING",(d=v||(v={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",d.AUTO="AUTO",d.ANY="ANY",d.NONE="NONE",(u=I||(I={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",u.MODE_DYNAMIC="MODE_DYNAMIC";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class M extends b{constructor(t,e){super(t),this.response=e}}class x extends b{constructor(t,e,n,s){super(t),this.status=e,this.statusText=n,this.errorDetails=s}}class D extends b{}(h=N||(N={})).GENERATE_CONTENT="generateContent",h.STREAM_GENERATE_CONTENT="streamGenerateContent",h.COUNT_TOKENS="countTokens",h.EMBED_CONTENT="embedContent",h.BATCH_EMBED_CONTENTS="batchEmbedContents";class L{constructor(t,e,n,s,o){this.model=t,this.task=e,this.apiKey=n,this.stream=s,this.requestOptions=o}toString(){var t,e;let n=(null===(t=this.requestOptions)||void 0===t?void 0:t.apiVersion)||"v1beta",s=(null===(e=this.requestOptions)||void 0===e?void 0:e.baseUrl)||"https://generativelanguage.googleapis.com",o=`${s}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}async function U(t){var e;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(t){let e=[];return(null==t?void 0:t.apiClient)&&e.push(t.apiClient),e.push("genai-js/0.21.0"),e.join(" ")}(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let s=null===(e=t.requestOptions)||void 0===e?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(t){throw new D(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${t.message}`)}for(let[t,e]of s.entries()){if("x-goog-api-key"===t)throw new D(`Cannot set reserved header name ${t}`);if("x-goog-api-client"===t)throw new D(`Header name ${t} can only be set using the apiClient field`);n.append(t,e)}}return n}async function F(t,e,n,s,o,i){let a=new L(t,e,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(t){let e={};if((null==t?void 0:t.signal)!==void 0||(null==t?void 0:t.timeout)>=0){let n=new AbortController;(null==t?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),(null==t?void 0:t.signal)&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}(i)),{method:"POST",headers:await U(a),body:o})}}async function H(t,e,n,s,o,i={},a=fetch){let{url:r,fetchOptions:l}=await F(t,e,n,s,o,i);return $(r,l,a)}async function $(t,e,n=fetch){let s;try{s=await n(t,e)}catch(e){!function(t,e){let n=t;throw t instanceof x||t instanceof D||((n=new b(`Error fetching from ${e.toString()}: ${t.message}`)).stack=t.stack),n}(e,t)}return s.ok||await G(s,t),s}async function G(t,e){let n,s="";try{let e=await t.json();s=e.error.message,e.error.details&&(s+=` ${JSON.stringify(e.error.details)}`,n=e.error.details)}catch(t){}throw new x(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${s}`,t.status,t.statusText,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),B(t.candidates[0]))throw new M(`${K(t)}`,t);return function(t){var e,n,s,o;let i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(let e of null===(o=null===(s=t.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)e.text&&i.push(e.text),e.executableCode&&i.push("\n```"+e.executableCode.language+"\n"+e.executableCode.code+"\n```\n"),e.codeExecutionResult&&i.push("\n```\n"+e.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(t)}if(t.promptFeedback)throw new M(`Text not available. ${K(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),B(t.candidates[0]))throw new M(`${K(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),j(t)[0]}if(t.promptFeedback)throw new M(`Function call not available. ${K(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),B(t.candidates[0]))throw new M(`${K(t)}`,t);return j(t)}if(t.promptFeedback)throw new M(`Function call not available. ${K(t)}`,t)},t}function j(t){var e,n,s,o;let i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(let e of null===(o=null===(s=t.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)e.functionCall&&i.push(e.functionCall);return i.length>0?i:void 0}const Y=[O.RECITATION,O.SAFETY,O.LANGUAGE];function B(t){return!!t.finishReason&&Y.includes(t.finishReason)}function K(t){var e,n,s;let o="";if((!t.candidates||0===t.candidates.length)&&t.promptFeedback)o+="Response was blocked",(null===(e=t.promptFeedback)||void 0===e?void 0:e.blockReason)&&(o+=` due to ${t.promptFeedback.blockReason}`),(null===(n=t.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(null===(s=t.candidates)||void 0===s?void 0:s[0]){let e=t.candidates[0];B(e)&&(o+=`Candidate was blocked due to ${e.finishReason}`,e.finishMessage&&(o+=`: ${e.finishMessage}`))}return o}function k(t){return this instanceof k?(this.v=t,this):new k(t)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function W(t){let e=[],n=t.getReader();for(;;){let{done:t,value:s}=await n.read();if(t)return P(function(t){let e=t[t.length-1],n={promptFeedback:null==e?void 0:e.promptFeedback};for(let e of t){if(e.candidates)for(let t of e.candidates){let e=t.index;if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:t.index}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].groundingMetadata=t.groundingMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,t.content&&t.content.parts){n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[]});let s={};for(let o of t.content.parts)o.text&&(s.text=o.text),o.functionCall&&(s.functionCall=o.functionCall),o.executableCode&&(s.executableCode=o.executableCode),o.codeExecutionResult&&(s.codeExecutionResult=o.codeExecutionResult),0===Object.keys(s).length&&(s.text=""),n.candidates[e].content.parts.push(s)}}e.usageMetadata&&(n.usageMetadata=e.usageMetadata)}return n}(e));e.push(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t,e,n,s){return function(t){let[e,n]=(function(t){let e=t.getReader();return new ReadableStream({start(t){let n="";return function s(){return e.read().then(({value:e,done:o})=>{let i;if(o){if(n.trim()){t.error(new b("Failed to parse stream"));return}t.close();return}let a=(n+=e).match(q);for(;a;){try{i=JSON.parse(a[1])}catch(e){t.error(new b(`Error parsing JSON response: "${a[1]}"`));return}t.enqueue(i),a=(n=n.substring(a[0].length)).match(q)}return s()})}()}})})(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(t){return function(t,e,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(t,e||[]),i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(t){o[t]&&(s[t]=function(e){return new Promise(function(n,s){i.push([t,e,n,s])>1||r(t,e)})})}function r(t,e){try{var n;(n=o[t](e)).value instanceof k?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(t){d(i[0][3],t)}}function l(t){r("next",t)}function c(t){r("throw",t)}function d(t,e){t(e),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let e=t.getReader();for(;;){let{value:t,done:n}=yield k(e.read());if(n)break;yield yield k(P(t))}})}(e),response:W(n)}}(await H(e,N.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s))}async function V(t,e,n,s){let o=await H(e,N.GENERATE_CONTENT,t,!1,JSON.stringify(n),s);return{response:P(await o.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){if(null!=t){if("string"==typeof t)return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function z(t){let e=[];if("string"==typeof t)e=[{text:t}];else for(let n of t)"string"==typeof n?e.push({text:n}):e.push(n);return function(t){let e={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,o=!1;for(let i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new b("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new b("No content is provided for sending chat message.");return s?e:n}(e)}function Q(t){let e;return e=t.contents?t:{contents:[z(t)]},t.systemInstruction&&(e.systemInstruction=X(t.systemInstruction)),e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],tt={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},te="SILENT_ERROR";class tn{constructor(t,e,n,s={}){this.model=e,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,(null==n?void 0:n.history)&&(function(t){let e=!1;for(let n of t){let{role:t,parts:s}=n;if(!e&&"user"!==t)throw new b(`First content should be with role 'user', got ${t}`);if(!R.includes(t))throw new b(`Each item should include role field. Got ${t} but valid roles are: ${JSON.stringify(R)}`);if(!Array.isArray(s))throw new b("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new b("Each Content should have at least one part");let o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let t of s)for(let e of Z)e in t&&(o[e]+=1);let i=tt[t];for(let e of Z)if(!i.includes(e)&&o[e]>0)throw new b(`Content with role '${t}' can't contain '${e}' part`);e=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,e={}){var n,s,o,i,a,r;let l;await this._sendPromise;let c=z(t),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),e);return this._sendPromise=this._sendPromise.then(()=>V(this._apiKey,this.model,d,u)).then(t=>{var e;if(t.response.candidates&&t.response.candidates.length>0){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(e=t.response.candidates)||void 0===e?void 0:e[0].content);this._history.push(n)}else{let e=K(t.response);e&&console.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}l=t}),await this._sendPromise,l}async sendMessageStream(t,e={}){var n,s,o,i,a,r;await this._sendPromise;let l=z(t),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),e),u=J(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(t=>{throw Error(te)}).then(t=>t.response).then(t=>{if(t.candidates&&t.candidates.length>0){this._history.push(l);let e=Object.assign({},t.candidates[0].content);e.role||(e.role="model"),this._history.push(e)}else{let e=K(t);e&&console.warn(`sendMessageStream() was unsuccessful. ${e}. Inspect response object for details.`)}}).catch(t=>{t.message!==te&&console.error(t)}),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e,n,s){return(await H(e,N.COUNT_TOKENS,t,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t,e,n,s){return(await H(e,N.EMBED_CONTENT,t,!1,JSON.stringify(n),s)).json()}async function ti(t,e,n,s){let o=n.requests.map(t=>Object.assign(Object.assign({},t),{model:e}));return(await H(e,N.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,e,n={}){this.apiKey=t,this._requestOptions=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=X(e.systemInstruction),this.cachedContent=e.cachedContent}async generateContent(t,e={}){var n;let s=Q(t),o=Object.assign(Object.assign({},this._requestOptions),e);return V(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}async generateContentStream(t,e={}){var n;let s=Q(t),o=Object.assign(Object.assign({},this._requestOptions),e);return J(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}startChat(t){var e;return new tn(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(e=this.cachedContent)||void 0===e?void 0:e.name},t),this._requestOptions)}async countTokens(t,e={}){let n=function(t,e){var n;let s={model:null==e?void 0:e.model,generationConfig:null==e?void 0:e.generationConfig,safetySettings:null==e?void 0:e.safetySettings,tools:null==e?void 0:e.tools,toolConfig:null==e?void 0:e.toolConfig,systemInstruction:null==e?void 0:e.systemInstruction,cachedContent:null===(n=null==e?void 0:e.cachedContent)||void 0===n?void 0:n.name,contents:[]},o=null!=t.generateContentRequest;if(t.contents){if(o)throw new D("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=t.contents}else if(o)s=Object.assign(Object.assign({},s),t.generateContentRequest);else{let e=z(t);s.contents=[e]}return{generateContentRequest:s}}(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),e);return ts(this.apiKey,this.model,n,s)}async embedContent(t,e={}){let n="string"==typeof t||Array.isArray(t)?{content:z(t)}:t,s=Object.assign(Object.assign({},this._requestOptions),e);return to(this.apiKey,this.model,n,s)}async batchEmbedContents(t,e={}){let n=Object.assign(Object.assign({},this._requestOptions),e);return ti(this.apiKey,this.model,t,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t){this.apiKey=t}getGenerativeModel(t,e){if(!t.model)throw new b("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ta(this.apiKey,t,e)}getGenerativeModelFromCachedContent(t,e,n){if(!t.name)throw new D("Cached content must contain a `name` field.");if(!t.model)throw new D("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==e?void 0:e[n])&&t[n]&&(null==e?void 0:e[n])!==t[n]){if("model"===n&&(e.model.startsWith("models/")?e.model.replace("models/",""):e.model)===(t.model.startsWith("models/")?t.model.replace("models/",""):t.model))continue;throw new D(`Different value for "${n}" specified in modelParams (${e[n]}) and cachedContent (${t[n]})`)}let s=Object.assign(Object.assign({},e),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new ta(this.apiKey,s,n)}}var tl=A("8hoa6"),tc=A("ilpIi"),td=A("1GfNc");async function tu(){t=new tr((await (0,tc.getDoc)((0,tc.doc)(tl.db,"apikey","googlegenai"))).data().key).getGenerativeModel({model:"gemini-1.5-flash"}),console.log("Gemini API is ready")}async function th(e){try{let n=(await t.generateContent(e)).response.candidates[0].content.parts[0].text;tm(n)}catch(t){console.error("Error fetching AI response:",t),tm("Sorry, I couldn't process that request")}}async function tf(t){if(t.startsWith("summarize expenses"))return tm(function(){if(0===td.transactions.length)return"No transactions recorded yet.";let t=(0,td.transactions).filter(t=>"expense"===t.type).reduce((t,e)=>t+e.amount,0);return`You have spent a total of ${tE(t)} so far.`}()),!0;if(t.startsWith("show last month"))return tm(function(){if(0===td.transactions.length)return"No transactions recorded yet.";let t=new Date,e=new Date(t.getFullYear(),t.getMonth()-1),n=`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}`,s=(0,td.transactions).filter(t=>"expense"===t.type&&t.date.startsWith(n)).reduce((t,e)=>t+e.amount,0);return`You spent ${tE(s)} in ${n}.`}()),!0;if(t.startsWith("add expense"))return tm(await tg(t,"expense")?"Expense added!":"Invalid expense format. Use: 'Add expense 50 Groceries'"),!0;if(t.startsWith("add income"))return tm(await tg(t,"income")?"Income added!":"Invalid income format. Use: 'Add income 100 Salary'"),!0;if(t.startsWith("total spent on"))return tm(tp(t.replace("total spent on","").trim(),"expense")),!0;else if(t.startsWith("total earned from"))return tm(tp(t.replace("total earned from","").trim(),"income")),!0;return!1}async function tg(t,e){let n=document.getElementById("aiInput"),s=t.match(/add (income|expense) (\d+(\.\d{1,2})?) (.+)/);if(!s)return!1;let o=parseFloat(s[2]),i=s[4].trim();if(!o||!i)return!1;let a=tl.auth.currentUser;if(!a)return tm("You must be logged in to add transactions."),!1;try{return await (0,tc.addDoc)((0,tc.collection)(tl.db,"transactions"),{name:i,amount:o,date:new Date().toISOString(),type:e,userId:a.uid}),await (0,td.loadTransactions)(a),n.value="",!0}catch(t){return console.error("Error adding transaction:",t),tm("Failed to add transaction. Check console for errors."),n.value="",!1}}function tp(t,e){if(0===td.transactions.length)return"No transactions recorded yet.";let n=(0,td.transactions).filter(n=>n.type===e&&n.name.toLowerCase()===t.toLowerCase()).reduce((t,e)=>t+e.amount,0);return n>0?`You have ${"expense"===e?"spent":"earned"} ${tE(n)} on "${t}".`:`No records found for "${t}".`}function tm(t){let e=document.createElement("div");e.textContent=t,e.className="history",document.getElementById("chatHistory").appendChild(e)}function tE(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",signDisplay:"always"}).format(t)}document.getElementById("aiButton").addEventListener("click",async()=>{if(!t){tm("Ai is still initializing, please wait...");return}let e=document.getElementById("aiInput"),n=e.value.trim().toLowerCase();n?await tf(n)||(await th(n),n=""):tm("Please enter a prompt"),e.value=""}),tu();
//# sourceMappingURL=index.ce33c2bd.js.map
