(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{7348:(e,t,i)=>{Promise.resolve().then(i.bind(i,1955))},1955:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h});var o=i(5155),n=i(1536),a=i(6472),s=i(5683);function r(e){let{text:t,gradient:i="from-blue-400 to-purple-400",className:n=""}=e;return(0,o.jsx)("span",{className:"bg-clip-text text-transparent bg-gradient-to-r ".concat(i," ").concat(n),children:t})}function l(e){let{title:t,highlight:i,subtitle:n,className:s=""}=e;return(0,o.jsxs)(a.P.div,{className:"text-center space-y-4 ".concat(s),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[(0,o.jsxs)("h2",{className:"text-4xl md:text-5xl font-bold",children:[t," ",i&&(0,o.jsx)(r,{text:i})]}),n&&(0,o.jsx)("p",{className:"text-xl text-gray-400",children:n})]})}function c(e){let{children:t,className:i="",delay:n=0,gradient:s="from-blue-600/20 to-purple-600/20",hoverGradient:r="hover:from-blue-500/30 hover:to-purple-500/30"}=e;return(0,o.jsx)(a.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:n},className:"group",children:(0,o.jsxs)("div",{className:"bg-gradient-to-br ".concat(s," ").concat(r," \n                   p-6 rounded-2xl backdrop-blur-lg border border-white/10 \n                   shadow-2xl transition-all duration-300\n                   group-hover:scale-105 group-hover:shadow-3xl ").concat(i),children:[t,(0,o.jsx)("div",{className:"h-1 w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-transparent  transition-all duration-300 mt-4 rounded-full"})]})})}var d=i(5565),u=i(2115);let m=[{title:"Co-op Translator",description:"Redesigned and rebuilt the existing POC version of Co-op Translator into a Python CLI tool. This open-source project helps developers translate their technical documentation into multiple languages by automatically handling markdown files and embedded images.It preserves markdown formatting while translating content and can extract, translate, and replace text from images, making documentation truly accessible worldwide. Currently serving as the main maintainer after successfully transitioning it to Azure Opensource.",icon:n.FSj,gradient:"from-blue-600/20 to-cyan-600/20",hoverGradient:"hover:from-blue-500/30 hover:to-cyan-500/30",links:{github:"https://github.com/Azure/co-op-translator",external:"https://techcommunity.microsoft.com/t5/educator-developer-blog/automate-markdown-and-image-translations-using-co-op-translator/ba-p/4263474"},highlights:["Developed and maintained an automated multilingual translation system using Azure AI services","Integrated Azure OpenAI and Azure Computer Vision for text extraction and translation","Managed the transition of the Co-op Translator project to open source on GitHub"],tags:["Python","Azure OpenAI","Azure Computer Vision"],images:["/images/co-op-translator.png","/images/projects/co-op-translator-demo.png"]},{title:"Inha Bigdata Analysis Society (IBAS) Web Service",description:"Led the development of IBAS's Learning Management System (LMS) backend features. Implemented contest and project board systems with advanced sorting and file management capabilities. Established project structure with code conventions using SpotlessApply and integrated automated checks via GitHub Actions. Created comprehensive project documentation including API specifications, architecture diagrams, and development guidelines. Handled data migration and implemented file classification system for thumbnails, images, and other file types.",icon:n.nBS,gradient:"from-purple-600/20 to-pink-600/20",hoverGradient:"hover:from-purple-500/30 hover:to-pink-500/30",links:{github:"https://github.com/InhaBas",external:"https://www.inhabas.com/"},highlights:["Implemented contest and project board systems with advanced sorting functionality","Created comprehensive project documentation","Established code conventions and integrated SpotlessApply with GitHub Actions","Developed comprehensive file classification system for various file types","Handled data migration"],tags:["Java","Spring Boot","MariaDB","JUnit5"],images:["/images/projects/ibas-architecture.png","/images/projects/ibas-demo.gif"]},{title:"Apache Iceberg Contributions",description:"Contributed to Apache Iceberg by modernizing test frameworks and improving documentation.",icon:n.Z0L,gradient:"from-yellow-600/20 to-orange-600/20",hoverGradient:"hover:from-yellow-500/30 hover:to-orange-500/30",links:{github:"https://github.com/apache/iceberg"},highlights:["Migrated test suites from JUnit4 to JUnit5 across multiple packages","Improved documentation and test coverage","Contributed to core functionality improvements"],tags:["Java","JUnit","Open Source"]},{title:"Microsoft Phi-3 Cookbook Contributions",description:"Major contributor to Microsoft's official Phi-3 Cookbook project, providing comprehensive end-to-end tutorials and improving documentation quality.",icon:n.Z0L,gradient:"from-green-600/20 to-blue-600/20",hoverGradient:"hover:from-green-500/30 hover:to-blue-500/30",links:{github:"https://github.com/microsoft/Phi-3CookBook/"},highlights:["Created end-to-end tutorials for fine-tuning and evaluating Phi-3 models in Azure AI Studio","Implemented automated documentation link validation using GitHub Actions","Added multilingual support in 6 languages using Co-op Translator"],tags:["Azure AI Studio","Phi-3","Documentation"]},{title:"Microsoft Tech Community Knowledge Sharing",description:"Actively contributed to the Microsoft Tech Community by writing comprehensive technical articles about Azure OpenAI and Azure AI Studio. Shared practical implementations, best practices, and solutions for common challenges in AI development. Articles focus on topics like fine-tuning models, prompt engineering, and efficient API usage.",icon:n.Z0L,gradient:"from-green-600/20 to-emerald-600/20",hoverGradient:"hover:from-green-500/30 hover:to-emerald-500/30",links:{external:"https://techcommunity.microsoft.com/users/minseok_song/2076234"},highlights:["Authored 10+ technical articles about Azure AI services","Reached over 150,000 views on Microsoft Tech Community","Helped developers worldwide implement AI solutions effectively"],tags:["Azure OpenAI","Azure AI Studio","Technical Writing"],images:["/images/teach-chatgpt.png","/images/finetune-phi.png","/images/finetune-phi-aistudio.png","/images/eval-phi.png","/images/build-chatbot.png","/images/automate-co-op-translator.png"],blogPosts:[{title:"Teach ChatGPT to Answer Questions: Using Azure AI Search & Azure OpenAI (Lang Chain)",url:"https://techcommunity.microsoft.com/blog/educatordeveloperblog/teach-chatgpt-to-answer-questions-using-azure-ai-search--azure-openai-lang-chain/3969713?wt.mc_id=studentamb_279723",views:42e3},{title:"Teach ChatGPT to Answer Questions: Using Azure AI Search & Azure OpenAI (Semantic Kernel)",url:"https://techcommunity.microsoft.com/blog/EducatorDeveloperBlog/teach-chatgpt-to-answer-questions-using-azure-ai-search--azure-openai-semantic-k/3985395?wt.mc_id=studentamb_279723",views:25e3},{title:"Fine-Tune and Integrate Custom Phi-3 Models with Prompt Flow: Step-by-Step Guide",url:"https://techcommunity.microsoft.com/blog/educatordeveloperblog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow-step-by-step-guide/4178612?wt.mc_id=studentamb_279723",views:31e3},{title:"Fine-Tune and Integrate Custom Phi-3 Models with Prompt Flow in Azure AI Studio",url:"https://techcommunity.microsoft.com/blog/educatordeveloperblog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow-in-azure-ai-studio/4191726?wt.mc_id=studentamb_279723",views:2e4},{title:"Evaluate Fine-tuned Phi-3 / 3.5 Models in Azure AI Studio Focusing on Microsoft's Responsible AI",url:"https://techcommunity.microsoft.com/blog/educatordeveloperblog/evaluate-fine-tuned-phi-3--3-5-models-in-azure-ai-studio-focusing-on-microsofts-/4227850?wt.mc_id=studentamb_279723",views:19e3},{title:"Build a chatbot service to ensure safe conversations: Using Azure Content Safety & Azure OpenAI",url:"https://techcommunity.microsoft.com/blog/educatordeveloperblog/build-a-chatbot-service-to-ensure-safe-conversations-using-azure-content-safety-/4143628?wt.mc_id=studentamb_279723",views:7300},{title:"Automate Markdown and Image Translations Using Co-op Translator: Phi-3 Cookbook Case Study",url:"https://techcommunity.microsoft.com/blog/educatordeveloperblog/automate-markdown-and-image-translations-using-co-op-translator-phi-3-cookbook-c/4263474?wt.mc_id=studentamb_279723",views:1700}]}];function h(){let[e,t]=(0,u.useState)(null);return(0,o.jsxs)("div",{className:"min-h-screen py-20 px-8",children:[(0,o.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,o.jsx)(l,{title:"Featured",highlight:"Projects",subtitle:"A collection of my most impactful work and contributions",className:"mb-16"}),(0,o.jsx)("div",{className:"grid grid-cols-1 gap-8",children:m.map((e,i)=>{let s=e.icon;return(0,o.jsx)(c,{delay:.2*i,gradient:e.gradient,hoverGradient:e.hoverGradient,className:"p-8",children:(0,o.jsxs)("div",{className:"flex flex-col md:flex-row gap-6",children:[(0,o.jsx)("div",{className:"flex-shrink-0",children:(0,o.jsx)("div",{className:"p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300",children:(0,o.jsx)(s,{className:"text-4xl text-white"})})}),(0,o.jsxs)("div",{className:"flex-grow space-y-6",children:[(0,o.jsxs)("div",{className:"flex justify-between items-start",children:[(0,o.jsx)("h2",{className:"text-2xl font-bold",children:e.title}),(0,o.jsxs)("div",{className:"flex gap-4",children:[e.links.github&&(0,o.jsx)(a.P.a,{href:e.links.github,target:"_blank",rel:"noopener noreferrer",className:"text-xl hover:text-blue-400 transition-colors",whileHover:{scale:1.1},children:(0,o.jsx)(n.hL4,{})}),e.links.external&&(0,o.jsx)(a.P.a,{href:e.links.external,target:"_blank",rel:"noopener noreferrer",className:"text-xl hover:text-blue-400 transition-colors",whileHover:{scale:1.1},children:(0,o.jsx)(n.EQc,{})})]})]}),(0,o.jsx)("p",{className:"text-gray-300 text-lg",children:e.description}),e.images&&(0,o.jsx)("div",{className:"mt-4 grid grid-cols-2 ".concat(e.images.length>=4?"md:grid-cols-3 lg:flex lg:flex-row lg:overflow-x-auto":"md:grid-cols-2"," gap-2"),children:e.images.map((i,n)=>(0,o.jsx)("div",{className:"relative w-full ".concat(e.images.length>=4?"h-32 md:h-36 lg:w-40 lg:h-40 lg:flex-shrink-0":"h-48 md:h-48"," rounded-lg overflow-hidden cursor-pointer"),onClick:()=>t(i),children:(0,o.jsx)(d.default,{src:i,alt:"".concat(e.title," screenshot ").concat(n+1),fill:!0,className:"object-contain hover:scale-105 transition-transform duration-300",sizes:e.images.length>=4?"(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw":"(max-width: 768px) 50vw, 50vw"})},n))}),e.highlights&&(0,o.jsx)("ul",{className:"space-y-3",children:e.highlights.map((e,t)=>(0,o.jsxs)(a.P.li,{className:"flex items-start gap-2 text-gray-300",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2*i+.1*t},children:[(0,o.jsx)("span",{className:"text-blue-400 mt-1.5",children:"•"}),e]},t))}),e.blogPosts&&(0,o.jsxs)("div",{className:"mt-6",children:[(0,o.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Featured Articles"}),(0,o.jsx)("div",{className:"grid gap-3",children:e.blogPosts.map((e,t)=>(0,o.jsx)(a.P.a,{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"group px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors",whileHover:{scale:1.02},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:(0,o.jsxs)("div",{className:"flex items-center justify-between",children:[(0,o.jsx)("span",{className:"text-gray-300 group-hover:text-white transition-colors",children:e.title}),(0,o.jsxs)("div",{className:"flex items-center gap-4",children:[(0,o.jsxs)("span",{className:"text-sm text-gray-400",children:[e.views.toLocaleString(),"+ views"]}),(0,o.jsx)(n.EQc,{className:"text-gray-400 group-hover:text-blue-400 transition-colors"})]})]})},t))})]}),(0,o.jsx)("div",{className:"flex flex-wrap gap-3 pt-2",children:e.tags.map((e,t)=>(0,o.jsx)(a.P.span,{className:"px-4 py-2 bg-white/5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.2*i+.1*t},children:e},t))})]})]})},i)})})]}),(0,o.jsx)(s.N,{children:e&&(0,o.jsxs)(a.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",onClick:()=>t(null),children:[(0,o.jsx)(a.P.button,{className:"absolute top-4 right-4 text-white/80 hover:text-white",whileHover:{scale:1.1},whileTap:{scale:.95},onClick:e=>{e.stopPropagation(),t(null)},children:(0,o.jsx)(n.QCr,{className:"text-2xl"})}),(0,o.jsx)("div",{className:"relative w-full max-w-5xl aspect-video",children:(0,o.jsx)(d.default,{src:e,alt:"Full size image",fill:!0,className:"object-contain",quality:95,priority:!0})})]})})]})}},5683:(e,t,i)=>{"use strict";i.d(t,{N:()=>x});var o=i(5155),n=i(2115),a=i(9656),s=i(9234),r=i(7249);class l extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c(e){let{children:t,isPresent:i}=e,a=(0,n.useId)(),s=(0,n.useRef)(null),c=(0,n.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,n.useContext)(r.Q);return(0,n.useInsertionEffect)(()=>{let{width:e,height:t,top:o,left:n}=c.current;if(i||!s.current||!e||!t)return;s.current.dataset.motionPopId=a;let r=document.createElement("style");return d&&(r.nonce=d),document.head.appendChild(r),r.sheet&&r.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(o,"px !important;\n            left: ").concat(n,"px !important;\n          }\n        ")),()=>{document.head.removeChild(r)}},[i]),(0,o.jsx)(l,{isPresent:i,childRef:s,sizeRef:c,children:n.cloneElement(t,{ref:s})})}let d=e=>{let{children:t,initial:i,isPresent:r,onExitComplete:l,custom:d,presenceAffectsLayout:m,mode:h}=e,p=(0,s.M)(u),g=(0,n.useId)(),f=(0,n.useCallback)(e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;l&&l()},[p,l]),x=(0,n.useMemo)(()=>({id:g,initial:i,isPresent:r,custom:d,onExitComplete:f,register:e=>(p.set(e,!1),()=>p.delete(e))}),m?[Math.random(),f]:[r,f]);return(0,n.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[r]),n.useEffect(()=>{r||p.size||!l||l()},[r]),"popLayout"===h&&(t=(0,o.jsx)(c,{isPresent:r,children:t})),(0,o.jsx)(a.t.Provider,{value:x,children:t})};function u(){return new Map}var m=i(4710),h=i(5107);let p=e=>e.key||"";function g(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}var f=i(5403);let x=e=>{let{children:t,exitBeforeEnter:i,custom:a,initial:r=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:u="sync"}=e;(0,h.V)(!i,"Replace exitBeforeEnter with mode='wait'");let x=(0,n.useMemo)(()=>g(t),[t]),v=x.map(p),b=(0,n.useRef)(!0),w=(0,n.useRef)(x),y=(0,s.M)(()=>new Map),[j,A]=(0,n.useState)(x),[k,N]=(0,n.useState)(x);(0,f.E)(()=>{b.current=!1,w.current=x;for(let e=0;e<k.length;e++){let t=p(k[e]);v.includes(t)?y.delete(t):!0!==y.get(t)&&y.set(t,!1)}},[k,v.length,v.join("-")]);let C=[];if(x!==j){let e=[...x];for(let t=0;t<k.length;t++){let i=k[t],o=p(i);v.includes(o)||(e.splice(t,0,i),C.push(i))}"wait"===u&&C.length&&(e=C),N(g(e)),A(x);return}let{forceRender:I}=(0,n.useContext)(m.L);return(0,o.jsx)(o.Fragment,{children:k.map(e=>{let t=p(e),i=x===k||v.includes(t);return(0,o.jsx)(d,{isPresent:i,initial:(!b.current||!!r)&&void 0,custom:i?void 0:a,presenceAffectsLayout:c,mode:u,onExitComplete:i?void 0:()=>{if(!y.has(t))return;y.set(t,!0);let e=!0;y.forEach(t=>{t||(e=!1)}),e&&(null==I||I(),N(w.current),l&&l())},children:e},t)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,382,565,441,517,358],()=>t(7348)),_N_E=e.O()}]);