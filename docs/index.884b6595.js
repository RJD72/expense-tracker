let e;var t,n,o,s,i,a,r,l,c,d,u,h,f,m,g,p,E,y,C,O,I,v,_,w,S=globalThis,T={},N={},A=S.parcelRequire94c2;null==A&&((A=function(e){if(e in T)return T[e].exports;if(e in N){var t=N[e];delete N[e];var n={id:e,exports:{}};return T[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){N[e]=t},S.parcelRequire94c2=A),A.register,(t=f||(f={})).STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object",(n=m||(m={})).LANGUAGE_UNSPECIFIED="language_unspecified",n.PYTHON="python",(o=g||(g={})).OUTCOME_UNSPECIFIED="outcome_unspecified",o.OUTCOME_OK="outcome_ok",o.OUTCOME_FAILED="outcome_failed",o.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
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
 */const R=["user","model","function","system"];(s=p||(p={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",s.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",s.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",s.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",s.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(i=E||(E={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",i.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",i.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",i.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",i.BLOCK_NONE="BLOCK_NONE",(a=y||(y={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",a.NEGLIGIBLE="NEGLIGIBLE",a.LOW="LOW",a.MEDIUM="MEDIUM",a.HIGH="HIGH",(r=C||(C={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",r.SAFETY="SAFETY",r.OTHER="OTHER",(l=O||(O={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",l.STOP="STOP",l.MAX_TOKENS="MAX_TOKENS",l.SAFETY="SAFETY",l.RECITATION="RECITATION",l.LANGUAGE="LANGUAGE",l.OTHER="OTHER",(c=I||(I={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",c.RETRIEVAL_QUERY="RETRIEVAL_QUERY",c.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",c.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",c.CLASSIFICATION="CLASSIFICATION",c.CLUSTERING="CLUSTERING",(d=v||(v={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",d.AUTO="AUTO",d.ANY="ANY",d.NONE="NONE",(u=_||(_={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",u.MODE_DYNAMIC="MODE_DYNAMIC";/**
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
 */class b extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class x extends b{constructor(e,t){super(e),this.response=t}}class M extends b{constructor(e,t,n,o){super(e),this.status=t,this.statusText=n,this.errorDetails=o}}class D extends b{}(h=w||(w={})).GENERATE_CONTENT="generateContent",h.STREAM_GENERATE_CONTENT="streamGenerateContent",h.COUNT_TOKENS="countTokens",h.EMBED_CONTENT="embedContent",h.BATCH_EMBED_CONTENTS="batchEmbedContents";class L{constructor(e,t,n,o,s){this.model=e,this.task=t,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",o=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",s=`${o}/${n}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}async function $(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.21.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let o=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(e){throw new D(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${e.message}`)}for(let[e,t]of o.entries()){if("x-goog-api-key"===e)throw new D(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new D(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function U(e,t,n,o,s,i){let a=new L(e,t,n,o,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(i)),{method:"POST",headers:await $(a),body:s})}}async function H(e,t,n,o,s,i={},a=fetch){let{url:r,fetchOptions:l}=await U(e,t,n,o,s,i);return F(r,l,a)}async function F(e,t,n=fetch){let o;try{o=await n(e,t)}catch(t){!function(e,t){let n=e;throw e instanceof M||e instanceof D||((n=new b(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n}(t,e)}return o.ok||await B(o,e),o}async function B(e,t){let n,o="";try{let t=await e.json();o=t.error.message,t.error.details&&(o+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new M(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${o}`,e.status,e.statusText,n)}/**
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
 */function P(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Y(e.candidates[0]))throw new x(`${k(e)}`,e);return function(e){var t,n,o,s;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.text&&i.push(t.text),t.executableCode&&i.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&i.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(e)}if(e.promptFeedback)throw new x(`Text not available. ${k(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Y(e.candidates[0]))throw new x(`${k(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),G(e)[0]}if(e.promptFeedback)throw new x(`Function call not available. ${k(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Y(e.candidates[0]))throw new x(`${k(e)}`,e);return G(e)}if(e.promptFeedback)throw new x(`Function call not available. ${k(e)}`,e)},e}function G(e){var t,n,o,s;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.functionCall&&i.push(t.functionCall);return i.length>0?i:void 0}const j=[O.RECITATION,O.SAFETY,O.LANGUAGE];function Y(e){return!!e.finishReason&&j.includes(e.finishReason)}function k(e){var t,n,o;let s="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)s+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(s+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(o=e.candidates)||void 0===o?void 0:o[0]){let t=e.candidates[0];Y(t)&&(s+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(s+=`: ${t.finishMessage}`))}return s}function K(e){return this instanceof K?(this.v=e,this):new K(e)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */const q=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function W(e){let t=[],n=e.getReader();for(;;){let{done:e,value:o}=await n.read();if(e)return P(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let o={};for(let s of e.content.parts)s.text&&(o.text=s.text),s.functionCall&&(o.functionCall=s.functionCall),s.executableCode&&(o.executableCode=s.executableCode),s.codeExecutionResult&&(o.codeExecutionResult=s.codeExecutionResult),0===Object.keys(o).length&&(o.text=""),n.candidates[t].content.parts.push(o)}}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(o)}}/**
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
 */async function J(e,t,n,o){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function o(){return t.read().then(({value:t,done:s})=>{let i;if(s){if(n.trim()){e.error(new b("Failed to parse stream"));return}e.close();return}let a=(n+=t).match(q);for(;a;){try{i=JSON.parse(a[1])}catch(t){e.error(new b(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(i),a=(n=n.substring(a[0].length)).match(q)}return o()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(e,t||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(e){s[e]&&(o[e]=function(t){return new Promise(function(n,o){i.push([e,t,n,o])>1||r(e,t)})})}function r(e,t){try{var n;(n=s[e](t)).value instanceof K?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function l(e){r("next",e)}function c(e){r("throw",e)}function d(e,t){e(t),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield K(t.read());if(n)break;yield yield K(P(e))}})}(t),response:W(n)}}(await H(t,w.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o))}async function V(e,t,n,o){let s=await H(t,w.GENERATE_CONTENT,e,!1,JSON.stringify(n),o);return{response:P(await s.json())}}/**
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
 */function X(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function z(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},o=!1,s=!1;for(let i of e)"functionResponse"in i?(n.parts.push(i),s=!0):(t.parts.push(i),o=!0);if(o&&s)throw new b("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new b("No content is provided for sending chat message.");return o?t:n}(t)}function Q(e){let t;return t=e.contents?e:{contents:[z(e)]},e.systemInstruction&&(t.systemInstruction=X(e.systemInstruction)),t}/**
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
 */const Z=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],ee={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},et="SILENT_ERROR";class en{constructor(e,t,n,o={}){this.model=t,this.params=n,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:o}=n;if(!t&&"user"!==e)throw new b(`First content should be with role 'user', got ${e}`);if(!R.includes(e))throw new b(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(R)}`);if(!Array.isArray(o))throw new b("Content should have 'parts' property with an array of Parts");if(0===o.length)throw new b("Each Content should have at least one part");let s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of o)for(let t of Z)t in e&&(s[t]+=1);let i=ee[e];for(let t of Z)if(!i.includes(t)&&s[t]>0)throw new b(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,o,s,i,a,r;let l;await this._sendPromise;let c=z(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>V(this._apiKey,this.model,d,u)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=k(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,o,s,i,a,r;await this._sendPromise;let l=z(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=J(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(et)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=k(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==et&&console.error(e)}),u}}/**
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
 */async function eo(e,t,n,o){return(await H(t,w.COUNT_TOKENS,e,!1,JSON.stringify(n),o)).json()}/**
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
 */async function es(e,t,n,o){return(await H(t,w.EMBED_CONTENT,e,!1,JSON.stringify(n),o)).json()}async function ei(e,t,n,o){let s=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await H(t,w.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o)).json()}/**
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
 */class ea{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=X(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let o=Q(e),s=Object.assign(Object.assign({},this._requestOptions),t);return V(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}async generateContentStream(e,t={}){var n;let o=Q(e),s=Object.assign(Object.assign({},this._requestOptions),t);return J(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}startChat(e){var t;return new en(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let o={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},s=null!=e.generateContentRequest;if(e.contents){if(s)throw new D("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(s)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{let t=z(e);o.contents=[t]}return{generateContentRequest:o}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),t);return eo(this.apiKey,this.model,n,o)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:z(e)}:e,o=Object.assign(Object.assign({},this._requestOptions),t);return es(this.apiKey,this.model,n,o)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return ei(this.apiKey,this.model,e,n)}}/**
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
 */class er{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new b("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ea(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new D("Cached content must contain a `name` field.");if(!e.model)throw new D("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new D(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let o=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new ea(this.apiKey,o,n)}}var el=A("8hoa6"),ec=A("ilpIi"),el=A("8hoa6"),ec=A("ilpIi"),ed=A("kDiTP");document.getElementById("googleSignInBtn").addEventListener("click",ed.signInUser),document.getElementById("googleSignOutBtn").addEventListener("click",ed.signOutUser);const eu=(0,ec.collection)(el.db,"transactions");let eh=[];const ef=document.getElementById("transactionList"),em=document.getElementById("transactionForm"),eg=document.getElementById("balance"),ep=document.getElementById("income"),eE=document.getElementById("expense");document.getElementById("date").defaultValue=new Date().toISOString().split("T")[0];const ey=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",signDisplay:"always"});async function eC(e){if(!e)return;eh=[];let t=(0,ec.query)(eu,(0,ec.where)("userId","==",e.uid));(await (0,ec.getDocs)(t)).forEach(e=>{eh.push({id:e.id,...e.data()})}),e_(),ev(),eO()}function eO(){let e=document.getElementById("monthly-view-container");e.innerHTML="";let t={};eh.forEach(({date:e,amount:n,name:o,type:s})=>{let i=new Date(e),a=`${i.getFullYear()}-${(i.getMonth()+1).toString().padStart(2,"0")}`;t[a]||(t[a]=[]),t[a].push({name:o,amount:n,type:s,date:i.toDateString()})}),Object.entries(t).forEach(([t,n])=>{let o=document.createElement("div");o.classList.add("month-view");let s=document.createElement("h4");s.textContent=`${t}`,o.appendChild(s);let i=document.createElement("ul");n.forEach(({name:e,amount:t,type:n,date:o})=>{let s=document.createElement("li");s.classList.add("transaction-item"),s.classList.add("amount"),s.classList.add(`${n}`),s.innerHTML=`<strong style='color: black'>${e}:</strong>  ${eI(t*("income"===n?1:-1))} ${o}`,i.appendChild(s)}),o.appendChild(i),e.appendChild(o)})}function eI(e){return 0===e?ey.format(0).replace(/^[+-]/,""):ey.format(e)}function ev(){let e=eh.filter(e=>"income"===e.type).reduce((e,t)=>e+t.amount,0),t=eh.filter(e=>"expense"===e.type).reduce((e,t)=>e+t.amount,0);eg.textContent=eI(e-t).replace(/^\+/,""),ep.textContent=eI(e),eE.textContent=eI(-1*t)}function e_(){ef.innerHTML="",eh.forEach(e=>{let t=function({id:e,name:t,amount:n,date:o,type:s}){let i=document.createElement("li");return i.innerHTML=`
    <div class="name">
      <h4>${t}</h4>
      <p>${new Date(o).toLocaleDateString()}</p>
    </div>
    <div class="amount ${s}">
      <span>${eI(n*("income"===s?1:-1))}</span>
    </div>
  `,i.addEventListener("click",async()=>{confirm("Delete transaction?")&&(await ew(e),eO())}),eO(),i}(e);ef.appendChild(t)})}async function ew(e){await (0,ec.deleteDoc)((0,ec.doc)(el.db,"transactions",e)),eh.splice(eh.findIndex(t=>t.id===e),1),e_(),ev()}async function eS(){e=new er((await (0,ec.getDoc)((0,ec.doc)(el.db,"apikey","googlegenai"))).data().key).getGenerativeModel({model:"gemini-1.5-flash"}),console.log("Gemini API is ready")}async function eT(t){try{let n=(await e.generateContent(t)).response.candidates[0].content.parts[0].text;eb(n)}catch(e){console.error("Error fetching AI response:",e),eb("Sorry, I couldn't process that request")}}async function eN(e){if(e.startsWith("summarize expenses"))return eb(function(){if(0===eh.length)return"No transactions recorded yet.";let e=eh.filter(e=>"expense"===e.type).reduce((e,t)=>e+t.amount,0);return`You have spent a total of ${ex(e)} so far.`}()),!0;if(e.startsWith("show last month"))return eb(function(){if(0===eh.length)return"No transactions recorded yet.";let e=new Date,t=new Date(e.getFullYear(),e.getMonth()-1),n=`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}`,o=eh.filter(e=>"expense"===e.type&&e.date.startsWith(n)).reduce((e,t)=>e+t.amount,0);return`You spent ${ex(o)} in ${n}.`}()),!0;if(e.startsWith("add expense"))return eb(await eA(e,"expense")?"Expense added!":"Invalid expense format. Use: 'Add expense 50 Groceries'"),!0;if(e.startsWith("add income"))return eb(await eA(e,"income")?"Income added!":"Invalid income format. Use: 'Add income 100 Salary'"),!0;if(e.startsWith("total spent on"))return eb(eR(e.replace("total spent on","").trim(),"expense")),!0;else if(e.startsWith("total earned from"))return eb(eR(e.replace("total earned from","").trim(),"income")),!0;return!1}async function eA(e,t){let n=document.getElementById("aiInput"),o=e.match(/add (income|expense) (\d+(\.\d{1,2})?) (.+)/);if(!o)return!1;let s=parseFloat(o[2]),i=o[4].trim();if(!s||!i)return!1;let a=el.auth.currentUser;if(!a)return eb("You must be logged in to add transactions."),!1;try{return await (0,ec.addDoc)((0,ec.collection)(el.db,"transactions"),{name:i,amount:s,date:new Date().toISOString(),type:t,userId:a.uid}),await eC(a),n.value="",!0}catch(e){return console.error("Error adding transaction:",e),eb("Failed to add transaction. Check console for errors."),n.value="",!1}}function eR(e,t){if(0===eh.length)return"No transactions recorded yet.";let n=eh.filter(n=>n.type===t&&n.name.toLowerCase()===e.toLowerCase()).reduce((e,t)=>e+t.amount,0);return n>0?`You have ${"expense"===t?"spent":"earned"} ${ex(n)} on "${e}".`:`No records found for "${e}".`}function eb(e){let t=document.createElement("div");t.textContent=e,t.className="history",document.getElementById("chatHistory").appendChild(t)}function ex(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",signDisplay:"always"}).format(e)}document.addEventListener("DOMContentLoaded",()=>{(0,ed.monitorAuthState)(e=>{e?eC(e):(eh.length=0,document.getElementById("transactionList").innerHTML="",document.getElementById("balance").textContent="$0.00",document.getElementById("income").textContent="$0.00",document.getElementById("expense").textContent="$0.00",document.getElementById("monthly-view-container").innerHTML="")})}),em.addEventListener("submit",async e=>{e.preventDefault();let t=new FormData(em);em.reset();let n=el.auth.currentUser;if(!n){alert("You must be logged in to add a transaction");return}let o={name:t.get("name"),amount:parseFloat(t.get("amount")),date:new Date(t.get("date")).toISOString(),type:"on"===t.get("type")?"expense":"income",userId:n.uid};if(!o.name||isNaN(o.amount)||!o.date){alert("Please fill in all fields correctly.");return}let s=await (0,ec.addDoc)(eu,o);eh.push({id:s.id,...o}),e_(),ev()}),eC(),document.getElementById("aiButton").addEventListener("click",async()=>{if(!e){eb("Ai is still initializing, please wait...");return}let t=document.getElementById("aiInput"),n=t.value.trim().toLowerCase();n?await eN(n)||(await eT(n),n=""):eb("Please enter a prompt"),t.value=""}),eS();
//# sourceMappingURL=index.884b6595.js.map
