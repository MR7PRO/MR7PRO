/* WebSec Lab v2.0 - entirely local educational app. No analytics or outbound requests. */
'use strict';
const english = {
  labnav:'INTERACTIVE LEARNING',navHome:'Overview',navSqli:'SQL Injection Lab',navCrypto:'Encryption Lab',navHash:'Password Safety',navQuiz:'Knowledge Challenge',navAbout:'About the Project',localPrivacy:'Local only · no data sent',breadcrumb:'WEB SECURITY / INTERACTIVE LEARNING',offline:'⚡ Offline-friendly',heroTag:'From lecture to hands-on learning',heroTitle:'Understand the attack.<br><span>Practice the defense.</span>',heroDesc:'An interactive learning lab for Web Security students. Compare vulnerable and protected code, try real encryption, and check your understanding — locally, without an account.',startLab:'Open SQL Lab →',startQuiz:'Start Challenge',noAccount:'No account required',noData:'No data is transmitted',arEn:'Arabic / English',chooseTrack:'PICK YOUR LEARNING PATH',learningUnits:'3 hands-on labs',handsOn:'Practice, not memorization',sqliCard:'See how the same inputs behave in an intentionally vulnerable and a protected model.',cryptoCard:'Encrypt a real message, decrypt it with the correct key, and see why salt and IV matter.',hashCard:'Learn why plain SHA-256 is not for password storage, and how bcrypt differs.',tryDemo:'Try the simulation →',tryEncryption:'Try encryption →',exploreHash:'Explore hashing →',nextTitle:'Ready to test your knowledge?',nextDesc:'Short challenges with instant feedback and a score report.',goQuiz:'Take the challenge →',sqliHeading:'How does SQL Injection happen?',sqliIntro:'Use the same input in two educational models: one concatenates user input into SQL, the other keeps SQL syntax separate using parameters.',simBadge:'Educational simulation only',simNote:'No database or external targets are involved. This is a limited model of the included examples, not a real SQL engine.',inputs:'Try an input',inputsHint:'All user accounts are fictional.',username:'Username',password:'Demo password',quickExamples:'Sample scenarios',validLogin:'Correct login',wrongLogin:'Wrong password',injection:'Simulated injection',runCompare:'Compare both approaches →',comparison:'Side-by-side results',comparisonHint:'Identical input, different query handling.',unsafeCode:'Vulnerable query',safeCode:'Parameterized query',whatHappened:'What happened and why?',reasoningHint:'Explanation changes with the selected scenario.',realRule:'Production coding pattern:',cryptoHeading:'Real encryption in your browser',cryptoIntro:'Write a sample message, encrypt it using AES-256-GCM in your browser, and try decrypting with the correct or incorrect passphrase.',cryptoNote:'This demo uses authenticated AES-GCM. Your course also covers AES-256-CBC; an optional local PHP AES-CBC + HMAC lab is included.',encrypt:'Encrypt a message',encryptHelp:'Do not enter real secrets into a classroom demo.',plainText:'Plaintext',passphrase:'Example passphrase',keyRule:'At least 8 characters. Key derived using PBKDF2 + random salt.',doEncrypt:'Encrypt with AES →',decrypt:'Decrypt a message',decryptHelp:'Paste ciphertext here or use the latest output automatically.',cipherText:'Ciphertext (Base64)',doDecrypt:'Decrypt →',decryptedMessage:'Recovered text',waiting:'Waiting for your action...',factKey:'Derived from the passphrase; not sent to a server.',factIv:'Fresh random 12-byte nonce for each GCM encryption.',factSalt:'Fresh random 16-byte salt for key derivation.',hashHeading:'Passwords are not encrypted messages',hashIntro:'Encryption is reversible with a key. Password storage needs purpose-built, deliberately slow hashing such as bcrypt or Argon2id.',fastHash:'Too fast: they make mass guessing practical. Do not use unsalted or plain MD5/SHA-256 for passwords.',slowHash:'Password-specific algorithms with per-password salt and cost. Argon2id is often preferred for new systems when supported.',hashExperiment:'Educational hashing comparison',hashCaution:'SHA-256 is used here only to visualize salt differences, NOT as a password storage method.',samplePassword:'Fictional example password',runSalt:'Generate two differently salted values',hashPlaceholder:'Press the button to compare two hashes of the same string.',phpReal:'Live PHP demonstration (included)',phpRealHelp:'The optional local PHP page uses real password_hash() and password_verify().',phpStep1:'Run the local PHP development server.',phpStep2:'Open php-labs/password-demo.php.',phpStep3:'Notice how hashes differ each run but verification succeeds.',openPhp:'Open bcrypt PHP lab (PHP required)',bigDifference:'The crucial distinction',passwordRule:'Encryption → original data can be recovered with the key. Password hashing → no decrypt operation; check guesses with verification. Weak passwords can still be guessed.',quizHeading:'Test your Web Security knowledge',quizIntro:'8 questions based on the course topics, with immediate explanations. No account, tracking or server-side grading.',readyQuiz:'Ready for the challenge?',readyQuizDesc:'Choose an answer and read the explanation. Your final results can be saved locally.',eightQuestions:'8 questions',instantFeedback:'Instant feedback',noTracking:'No tracking',beginNow:'Start now →',nextQuestion:'Next question →',completed:'COMPLETED',retry:'Try again',saveResults:'Save score as TXT',aboutHeading:'Learn by trying, not just watching',aboutIntro:'A student-built educational bonus project for Web Security. It makes lecture concepts tangible through short interactive demos and accessible mini-challenges.',objectives:'Learning objectives',obj1:'Explain how concatenation of user input can change SQL query logic.',obj2:'Show how prepared statements separate instructions and input values.',obj3:'Perform real authenticated encryption and decryption.',obj4:'Distinguish encryption, hashing and the purpose of salts.',obj5:'Use short formative questions with immediate feedback.',scope:'Scope and privacy',scope1:'Attack demonstration uses fictional data only; no real sites are probed.',scope2:'Cryptography runs locally using the browser Web Crypto API.',scope3:'No user accounts, advertisements, analytics or API calls.',scope4:'Optional PHP files are included to reflect practical lectures.',scope5:'This self-assessment is not a university-certified grade.',localFirst:'Designed for unstable connections',localFirstDesc:'The core product is a static website, with no cloud backend and no required hosting.',backHome:'Back to Overview',refText:'Course basis: Web Security Overview, Encryption & Decryption, Encrypted Password, SQL Injection (supplied lecture materials).',footerNote:'For training and authorized test environments only.',
  quizTopicLabel:"Topic",
  quizLevelLabel:"Difficulty",
  quizLengthLabel:"Number of questions",
  topicAll:"All topics",
  topicBasics:"Web fundamentals",
  topicSqli:"SQL Injection",
  topicCrypto:"Encryption",
  topicPasswords:"Password security",
  topicSessions:"Sessions and HTTPS",
  topicPentest:"Penetration testing",
  levelAll:"All difficulties",
  levelEasy:"Beginner",
  levelMedium:"Intermediate",
  levelHard:"Advanced",
  lengthAll:"All available questions",
  quizReviewTitle:"Answer review",
  phpAvailability:"Real bcrypt PHP exercise is included for local use. Netlify does not execute PHP.",
  quizIntro:"72 questions based on course lectures. Pick a topic, difficulty and test size; get instant explanations. No account or server-side scoring.",
  eightQuestions:"72-question bank",
  readyQuizDesc:"Customize your practice by topic and difficulty, then get immediate feedback and a downloadable result."
};
const arDyn = {
  granted:'تم قبول الدخول',denied:'تم رفض الدخول',vuln:'تجاوز غير مصرح به في المحاكاة!',protected:'النموذج المحمي رفض محاولة الحقن.',normal:'بمدخلات صحيحة، كلا النموذجين يقبل الحساب الوهمي. لكن الاستعلام غير الآمن يبقى قابلًا لمشكلة الحقن لأنه يدمج النص داخل الكود، بينما Prepared Statements تفصل البيانات عن بناء الاستعلام.',wrong:'عند كلمة مرور خاطئة، كلا النموذجين يرفض الدخول في هذا المثال. ظهور الرفض وحده لا يعني أن الكود آمن؛ المهم طريقة بناء الاستعلام.',attack:'تم إدخال نص يشبه جزءًا من استعلام SQL. النموذج الضعيف التعليمي يفسّر التعبير الدائم الصحة مع التعليق كأنه غيّر شرط الاستعلام، فيتجاوز التحقق. أما Prepared Statements فتعامل الإدخال كنص حرفي؛ لذلك ترفضه. هذه محاكاة مخصصة لهذا المثال، وليست تنفيذًا على قاعدة بيانات.',other:'يُظهر هذا المثال أن إدخال قيم غير مطابقة لا يسمح بالدخول. في التطبيق الحقيقي استخدم Prepared Statements مع password_verify بدل وضع كلمات المرور في شرط SQL.',sqlReady:'اختر مثالًا ثم اضغط تشغيل المقارنة.',cryptoSuccess:'✓ تم تشفير الرسالة بنجاح محليًا. أُنشئ Salt وIV عشوائيان جديدان.',decryptSuccess:'✓ تم التحقق من سلامة الرسالة وفك تشفيرها.',cryptoBadKey:'تعذر فك التشفير: تأكد من عبارة المرور والبيانات المشفرة. تعديل بايت واحد يجعل التحقق يفشل.',cryptoEmpty:'اكتب رسالة وعبارة مرور تجريبية (8 أحرف على الأقل).',cryptoMissing:'ضع قيمة Base64 مشفرة أولًا.',cryptoUnsupported:'Web Crypto غير متاح في هذا السياق. افتح التطبيق في Chrome/Edge حديث أو عبر localhost.',hashEmpty:'اكتب نصًا تجريبيًا أولًا.',hashWarning:'هذه قيم SHA-256 مع Salt للتوضيح فقط؛ ليست bcrypt وغير مناسبة لتخزين كلمة المرور.',answerRight:'✓ إجابة صحيحة',answerWrong:'✕ إجابة غير صحيحة',quizCount:'السؤال',of:'من',quizDone:'نتيجتك',quizExcellent:'ممتاز! لديك فهم قوي لهذه الأساسيات.',quizGood:'جيد جدًا! راجع الشرح في المختبرات لتثبيت المفاهيم.',quizAgain:'محاولة جيدة! جرّب المختبرات مرة أخرى ثم أعد الاختبار.',correct:'الإجابة الصحيحة',youChose:'اخترت',firstHash:'Salt + SHA-256 (التجربة 1)',secondHash:'Salt + SHA-256 (التجربة 2)',quizReport:'تقرير تحدي WebSec Lab',result:'النتيجة',noAccess:'تعذر حفظ الملف محليًا.',
  quizAvailable:"سؤال متاح بهذا الاختيار",
  quizNoQuestions:"لا توجد أسئلة مطابقة. غيّر التصنيف.",
  quizChosen:"الأسئلة المختارة"
};
const enDyn = {
  granted:'Login accepted',denied:'Login denied',vuln:'Unauthorized bypass in the simulation!',protected:'Parameterized model rejected the injection.',normal:'With correct fictional credentials both models succeed. However, concatenating input is still unsafe. Prepared statements keep values separate from query syntax.',wrong:'A wrong password is rejected by both models here. Rejecting this example does not prove a query is secure; safe query construction matters.',attack:'The input contains syntax resembling SQL logic plus a comment. The deliberately unsafe toy model treats it as changing the query condition and bypasses a check. The parameterized model treats it as an ordinary string and rejects it. This is a limited simulation, NOT an actual database execution.',other:'These values do not match a fictional user. In a real application, use prepared statements and password_verify instead of matching plaintext passwords in a SQL clause.',sqlReady:'Choose an example and compare the models.',cryptoSuccess:'✓ Message encrypted locally. Fresh random salt and nonce generated.',decryptSuccess:'✓ Authentication passed and message decrypted.',cryptoBadKey:'Decryption failed. Check the passphrase and ciphertext. Tampering causes authentication to fail.',cryptoEmpty:'Enter a sample message and a passphrase of at least 8 characters.',cryptoMissing:'Provide Base64 ciphertext first.',cryptoUnsupported:'Web Crypto is not available in this context. Use a modern Chrome/Edge browser or serve on localhost.',hashEmpty:'Enter a sample string first.',hashWarning:'These are SHA-256 hashes with salt for demonstration only. They are NOT bcrypt and must not be used to store passwords.',answerRight:'✓ Correct',answerWrong:'✕ Incorrect',quizCount:'Question',of:'of',quizDone:'Your score',quizExcellent:'Excellent understanding of the fundamentals!',quizGood:'Great job. Review the explanations to make the ideas stick.',quizAgain:'Keep practicing! Revisit the labs and take the challenge again.',correct:'Correct answer',youChose:'Your choice',firstHash:'Salt + SHA-256 (demo 1)',secondHash:'Salt + SHA-256 (demo 2)',quizReport:'WebSec Lab Challenge Report',result:'Score',noAccess:'Could not save the file on your device.',
  quizAvailable:"questions available for this selection",
  quizNoQuestions:"No matching questions. Change filters.",
  quizChosen:"selected questions"
};
const arabicOriginal = new Map();
let lang = 'ar';
let quizState = {questions:[], index:0, score:0, selected:null, history:[]};
const $ = id => document.getElementById(id);
const td = key => (lang === 'en' ? enDyn[key] : arDyn[key]) || key;
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function rememberOriginal(){ document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => arabicOriginal.set(el, el.hasAttribute('data-i18n-html') ? el.innerHTML : el.textContent)); }
function setLanguage(next){
  lang = next;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el=>{
    const key = el.dataset.i18n || el.dataset.i18nHtml;
    const val = lang === 'en' ? english[key] : arabicOriginal.get(el);
    if (val === undefined) return;
    if(el.hasAttribute('data-i18n-html')) el.innerHTML = val; else el.textContent=val;
  });
  $('languageToggle').textContent = lang==='ar'?'EN':'عربي';
  $('languageToggle').setAttribute('aria-label', lang==='ar'?'Switch to English':'التبديل إلى العربية');
  try{localStorage.setItem('websec-lang',lang);}catch(_e){}
  runSql();
  if(quizState.questions.length && !$('quizPlaying').hidden) renderQuizQuestion();
  updateQuizAvailability();
}
function navigate(page){
  if(!$(page)) page='home';
  document.querySelectorAll('.page').forEach(x=>{x.hidden=x.id!==page;x.classList.toggle('active',x.id===page)});
  document.querySelectorAll('[data-go]').forEach(b=>{if(b.classList.contains('nav-link')){b.classList.toggle('active',b.dataset.go===page);if(b.dataset.go===page)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');}});
  if(location.hash!=='#'+page) history.replaceState(null,'','#'+page);
  window.scrollTo({top:0,behavior:'instant'});
}
const DEMO_USERS = [{username:'student',password:'demo123'},{username:'admin',password:'StrongPass#9'}];
function runSql(){
  const username=$('sqlUsername').value, password=$('sqlPassword').value;
  $('unsafeQuery').textContent=`SELECT id, username FROM users\nWHERE username='${username}'\nAND password='${password}'`;
  const exact=DEMO_USERS.some(u=>u.username===username && u.password===password);
  const injection=/(?:'|\")\s*OR\s+(?:'?1'?|"?1"?)\s*=\s*(?:'?1'?|"?1"?)/i.test(username) && /(?:#|--(?:\s|$))/.test(username);
  const unsafe=exact||injection;
  const safe=exact;
  const bad=$('unsafeResult'),good=$('safeResult');
  bad.textContent=(unsafe?'✓ ':'✕ ')+td(unsafe?'granted':'denied')+(injection?' — '+td('vuln'):'');
  good.textContent=(safe?'✓ ':'✕ ')+td(safe?'granted':'denied')+(injection?' — '+td('protected'):'');
  bad.className='result-status '+(injection?'is-bad':unsafe?'is-good':'');
  good.className='result-status '+(safe?'is-good':'');
  $('sqlExplanation').textContent=td(injection?'attack':exact?'normal':username==='student'&&password!=='demo123'?'wrong':'other');
}
function sqlPreset(kind){
  const presets={valid:['student','demo123'],wrong:['student','not-the-password'],attack:["student' OR 1=1 #",'wrong-password']};
  [$('sqlUsername').value,$('sqlPassword').value]=presets[kind];
  runSql();
}
function webCrypto(){return !!(globalThis.crypto && globalThis.crypto.subtle && globalThis.TextEncoder);}
function toBase64(bytes){let result='';for(let i=0;i<bytes.length;i+=8192)result+=String.fromCharCode(...bytes.subarray(i,i+8192));return btoa(result)}
function fromBase64(s){const bin=atob(s.replace(/\s/g,'')),a=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);return a}
async function aesKey(pass,salt){
  const passKey=await crypto.subtle.importKey('raw',new TextEncoder().encode(pass),'PBKDF2',false,['deriveKey']);
  return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:150000,hash:'SHA-256'},passKey,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
}
function cryptoStatus(message,isError=false){$('cryptoStatus').textContent=message;$('cryptoStatus').classList.toggle('error',isError);}
async function encryptText(){
  if(!webCrypto()){cryptoStatus(td('cryptoUnsupported'),true);return;}
  const plain=$('plainText').value,pass=$('cryptoKey').value;
  if(!plain || pass.length<8){cryptoStatus(td('cryptoEmpty'),true);return;}
  $('encryptRun').disabled=true;
  try{
    const salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12));
    const key=await aesKey(pass,salt);
    const ciphertext=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},key,new TextEncoder().encode(plain)));
    const output=new Uint8Array(1+salt.length+iv.length+ciphertext.length);
    output[0]=1;output.set(salt,1);output.set(iv,17);output.set(ciphertext,29);
    $('cipherText').value=toBase64(output);$('decryptedText').textContent=lang==='ar'?'اضغط فك التشفير للتأكد.':'Click Decrypt to verify.';
    cryptoStatus(td('cryptoSuccess'));
  }catch(e){cryptoStatus(lang==='ar'?'فشلت عملية التشفير. تحقق من المتصفح.':'Encryption failed; check browser support.',true);}
  finally{$('encryptRun').disabled=false;}
}
async function decryptText(){
  if(!webCrypto()){cryptoStatus(td('cryptoUnsupported'),true);return;}
  const b64=$('cipherText').value.trim(),pass=$('cryptoKey').value;
  if(!b64){cryptoStatus(td('cryptoMissing'),true);return;}
  $('decryptRun').disabled=true;
  try{
    const input=fromBase64(b64);
    if(input.length<46 || input[0]!==1 || input.length>16000) throw Error('Invalid payload');
    const salt=input.slice(1,17),iv=input.slice(17,29),ciphertext=input.slice(29);
    const key=await aesKey(pass,salt);
    const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv},key,ciphertext);
    $('decryptedText').textContent=new TextDecoder('utf-8',{fatal:true}).decode(plain);
    cryptoStatus(td('decryptSuccess'));
  }catch(_e){$('decryptedText').textContent='—';cryptoStatus(td('cryptoBadKey'),true);}
  finally{$('decryptRun').disabled=false;}
}
async function saltedHash(){
  const plain=$('hashInput').value;
  if(!plain){$('hashOutput').textContent=td('hashEmpty');return;}
  if(!webCrypto()){$('hashOutput').textContent=td('cryptoUnsupported');return;}
  const out=$('hashOutput');out.textContent='...';
  try{
    const result=[];
    for(let i=0;i<2;i++){
      const salt=crypto.getRandomValues(new Uint8Array(16));
      const combined=new Uint8Array(salt.length+new TextEncoder().encode(plain).length);
      combined.set(salt);combined.set(new TextEncoder().encode(plain),salt.length);
      const digest=new Uint8Array(await crypto.subtle.digest('SHA-256',combined));
      result.push({salt:Array.from(salt,b=>b.toString(16).padStart(2,'0')).join(''),hash:Array.from(digest,b=>b.toString(16).padStart(2,'0')).join('')});
    }
    out.replaceChildren();
    result.forEach((v,i)=>{
      const label=document.createElement('span');label.className='hash-label';label.textContent=td(i?'secondHash':'firstHash');out.append(label);
      const s=document.createElement('code');s.textContent='salt: '+v.salt+'\nhash: '+v.hash;out.append(s);
    });
    const warning=document.createElement('p');warning.className='muted';warning.textContent=td('hashWarning');out.append(warning);
  }catch(_e){out.textContent=td('cryptoUnsupported');}
}
const bank=[
 {ar:'ما سبب حدوث SQL Injection غالبًا؟',en:'What commonly causes SQL Injection?',a:['استخدام Prepared Statements','دمج مدخلات المستخدم داخل نص الاستعلام مباشرة','استخدام HTTPS','تخزين الصور'],e:['Using prepared statements','Concatenating user input directly into SQL','Using HTTPS','Storing images'],c:1,why:'عندما يصبح إدخال المستخدم جزءًا من صياغة SQL، قد يتغير من بيانات إلى تعليمة.',ex:'When user input is concatenated into SQL, it can alter the query syntax.'},
 {ar:'ماذا تفعل Prepared Statements؟',en:'What do prepared statements achieve?',a:['تجعل SQL أسرع دائمًا','تشفّر كلمات المرور','تفصل بناء الاستعلام عن قيم المستخدم','توقف الإنترنت'],e:['Always make SQL faster','Encrypt passwords','Separate SQL structure from input values','Disconnect the internet'],c:2,why:'تُرسل القيم كبيانات منفصلة فلا تغيّر منطق الاستعلام.',ex:'Input values are bound separately so they cannot change the query structure.'},
 {ar:'أي اختيار مناسب لتخزين كلمة مرور في PHP ضمن مادة المساق؟',en:'Which method is suitable for storing passwords in course PHP examples?',a:['md5($password)','base64_encode($password)','password_hash($password, PASSWORD_BCRYPT)','openssl_encrypt فقط'],e:['md5($password)','base64_encode($password)','password_hash($password, PASSWORD_BCRYPT)','openssl_encrypt alone'],c:2,why:'bcrypt مصممة لتخزين كلمات المرور وتتضمن Salt وعامل كلفة.',ex:'bcrypt is designed for password hashing and includes a salt and cost factor.'},
 {ar:'هل يمكن فك Hash كلمة المرور الأصلي مثل النص المشفر؟',en:'Can password hashes be decrypted like ciphertext?',a:['نعم باستخدام IV','لا، بل نتحقق من التخمين عبر verify','نعم باستخدام Base64','نعم باستخدام Salt'],e:['Yes, with an IV','No; a password guess is verified instead','Yes, with Base64','Yes, with the salt'],c:1,why:'لا توجد عملية decrypt للـHash؛ يتم التحقق من التطابق دون استعادة الأصل.',ex:'There is no decrypt operation for password hashes; guesses are verified.'},
 {ar:'ما الهدف من Salt العشوائي؟',en:'What is the purpose of a random salt?',a:['توحيد نتائج Hash','جعل المدخلات المتطابقة تنتج نتائج مختلفة','تسريع التخمين','تحويل Hash إلى تشفير'],e:['Make hashes identical','Make equal inputs produce different stored hashes','Speed up guessing','Turn hashing into encryption'],c:1,why:'Salt مختلف لكل كلمة مرور يجعل Hash لكلمتين متطابقتين مختلفًا.',ex:'A unique salt gives different hashes even for identical passwords.'},
 {ar:'أي وصف صحيح لـAES؟',en:'Which description of AES is correct?',a:['تشفير متماثل','تجزئة غير قابلة للعكس','تشفير بمفتاح عام وخاص','ترميز نصي'],e:['Symmetric encryption','Irreversible hashing','Public/private-key encryption','Text encoding'],c:0,why:'AES يستخدم مفتاحًا سريًا واحدًا للتشفير وفك التشفير.',ex:'AES uses a shared secret key to encrypt and decrypt data.'},
 {ar:'ما الفرق بين Base64 والتشفير؟',en:'How does Base64 differ from encryption?',a:['Base64 يضيف سرية قوية','Base64 ترميز قابل للفك دون مفتاح','Base64 يحمي كلمة المرور','لا فرق'],e:['Base64 provides strong secrecy','Base64 is reversible encoding without a secret key','Base64 protects stored passwords','No difference'],c:1,why:'Base64 طريقة تمثيل للبايتات وليست وسيلة سرية.',ex:'Base64 is just an encoding of bytes, not a confidentiality mechanism.'},
 {ar:'لماذا نحتاج IV/Nonce مناسبًا في التشفير؟',en:'Why does encryption need an appropriate IV/nonce?',a:['لإظهار كلمة السر للمستخدم','لتجنب إعادة استخدام نفس حالة التشفير مع نفس المفتاح','لتخزين رقم هوية','لتسريع الشبكة فقط'],e:['To reveal a password','To avoid reusing the same encryption state with a key','To store a user ID','Only to speed up networks'],c:1,why:'تكرار nonce مع نفس المفتاح في بعض الأنماط مثل GCM قد يهدد الأمان بشدة.',ex:'Reusing a nonce with a GCM key can catastrophically undermine security.'},
 {ar:'أي الخيارين يحدد خصوصية البيانات أثناء النقل بالويب؟',en:'Which protects data confidentiality during web transport?',a:['HTTP دون TLS','HTTPS باستخدام TLS','Base64 في الرابط','حفظها في Cookie عادي'],e:['HTTP without TLS','HTTPS using TLS','Base64 in a URL','An ordinary cookie'],c:1,why:'TLS يحمي الاتصال من القراءة أو التعديل من أطراف على المسار بحسب نموذج الثقة.',ex:'TLS helps protect the connection from interception and tampering.'},
 {ar:'ما مشكلة تخزين كلمة المرور كنص صريح؟',en:'Why is storing plaintext passwords dangerous?',a:['لا توجد مشكلة','كشفها فور تسريب قاعدة البيانات','يزيد أمان الجلسة','يمنع التخمين'],e:['No problem','Database leaks reveal passwords directly','Makes sessions safer','Prevents guessing'],c:1,why:'تسريب قاعدة البيانات يعرّض كلمات المرور الأصلية فورًا.',ex:'If the database leaks, plaintext credentials are immediately exposed.'},
 {ar:'ماذا تعني قيمة تحقق password_verify() = true؟',en:'What does password_verify() returning true mean?',a:['تم فك hash','كلمة المرور المقدمة تطابق hash المخزن','قاعدة البيانات آمنة تمامًا','نجح أي مستخدم تلقائيًا'],e:['The hash was decrypted','The supplied password matches the stored hash','The database is perfectly secure','Any user is authenticated'],c:1,why:'تُقارن كلمة المرور بالهاش المخزن، دون فك تشفير.',ex:'It checks a password against a stored hash without decrypting anything.'},
 {ar:'هل اختبار ثغرات موقع غير مملوك لك يحتاج إذنًا؟',en:'Does security testing of a third-party site require authorization?',a:['لا أبدًا','نعم، نلتزم بالتصريح ونطاق الاختبار','فقط لو كان HTTPS','فقط بعد نشر النتائج'],e:['Never','Yes; obtain authorization and stay within scope','Only if it has HTTPS','Only after publishing findings'],c:1,why:'يُجرى اختبار الاختراق ضمن نطاق مُصرّح به؛ لهذا يستخدم المختبر محاكاة فقط.',ex:'Penetration testing must stay within authorized scope, so this lab uses a simulation.'}

];
const TOPICS_FOR_ORIGINAL=['sqli','sqli','passwords','passwords','passwords','crypto','crypto','crypto','sessions','passwords','passwords','pentest'];
bank.forEach((q,i)=>{q.id='core'+(i+1);q.topic=TOPICS_FOR_ORIGINAL[i];q.level=i%4===0?'easy':'medium';});
bank.push(...(window.WEBSEC_EXTRA_QUESTIONS||[]));
const questionCount=bank.length;
function shuffle(items){const arr=[...items];for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}
function selectedPool(){const topic=$('quizTopic').value,level=$('quizLevel').value;return bank.filter(q=>(topic==='all'||q.topic===topic)&&(level==='all'||q.level===level));}
function updateQuizAvailability(){const avail=selectedPool().length,requested=$('quizLength').value;
  const show= Math.min(requested==='all'?avail:Number(requested),avail);
  $('quizAvailable').textContent=avail?`${avail} ${td('quizAvailable')} · ${show} ${td('quizChosen')}`:td('quizNoQuestions');
  $('quizBegin').disabled=!avail;
}
function startQuiz(){
  const candidates=shuffle(selectedPool()), count=$('quizLength').value==='all'?candidates.length:Math.min(Number($('quizLength').value),candidates.length);
  quizState={questions:candidates.slice(0,count).map(q=>({...q,order:shuffle([0,1,2,3])})),index:0,score:0,selected:null,history:[],topic:$('quizTopic').value,level:$('quizLevel').value};
  $('quizStart').hidden=true;$('quizFinished').hidden=true;$('quizPlaying').hidden=false;
  renderQuizQuestion();
}
function renderQuizQuestion(){
  const s=quizState,q=s.questions[s.index];if(!q)return;
  $('quizIndex').textContent=`${td('quizCount')} ${s.index+1} ${td('of')} ${s.questions.length}`;
  $('quizCounter').textContent=`${s.score} / ${s.questions.length}`;
  $('quizProgress').style.width=`${(s.index/s.questions.length)*100}%`;
  $('questionTitle').textContent=lang==='ar'?q.ar:q.en;
  $('answerOptions').replaceChildren();$('answerFeedback').hidden=s.selected===null;$('quizNext').hidden=s.selected===null;
  q.order.forEach((originalIndex,idx)=>{
    const txt=(lang==='ar'?q.a:q.e)[originalIndex];
    const button=document.createElement('button');button.type='button';button.className='answer-choice';
    const label=document.createElement('span');label.textContent=txt;const letter=document.createElement('span');letter.className='answer-letter';letter.textContent='ABCD'[idx];button.append(label,letter);
    if(s.selected!==null){button.disabled=true;if(originalIndex===q.c)button.classList.add('right');if(idx===s.selected)button.classList.add(originalIndex===q.c?'selected-right':'selected-wrong');}
    else button.addEventListener('click',()=>selectAnswer(idx));
    $('answerOptions').append(button);
  });
  if(s.selected!==null){
    const right=q.order[s.selected]===q.c;$('answerFeedback').className='answer-feedback'+(right?'':' wrong');
    $('answerFeedback').textContent='';const mark=document.createElement('strong');mark.textContent=td(right?'answerRight':'answerWrong');
    $('answerFeedback').append(mark,document.createTextNode(' — '+(lang==='ar'?q.why:q.ex)));
    $('quizNext').textContent=s.index===s.questions.length-1?(lang==='ar'?'عرض النتيجة ←':'Show score →'):lang==='ar'?'السؤال التالي ←':'Next question →';
  }
}
function selectAnswer(idx){
  if(quizState.selected!==null)return;
  const q=quizState.questions[quizState.index];quizState.selected=idx;const chosen=q.order[idx];const correct=chosen===q.c;
  if(correct)quizState.score++;
  quizState.history.push({questionAr:q.ar,questionEn:q.en,selectedAr:q.a[chosen],selectedEn:q.e[chosen],correctAr:q.a[q.c],correctEn:q.e[q.c],why:q.why,ex:q.ex,right:correct});renderQuizQuestion();
}
function nextQuiz(){
  quizState.index++;
  if(quizState.index===quizState.questions.length){finishQuiz();return;}
  quizState.selected=null;renderQuizQuestion();
}
function finishQuiz(){
  $('quizPlaying').hidden=true;$('quizFinished').hidden=false;
  $('quizScore').textContent=`${td('quizDone')}: ${quizState.score} / ${quizState.questions.length}`;
  const ratio=quizState.score/quizState.questions.length;$('quizVerdict').textContent=td(ratio>=.85?'quizExcellent':ratio>=.60?'quizGood':'quizAgain');
  $('quizSummary').replaceChildren();
  quizState.history.forEach((x,i)=>{
    const box=document.createElement('div');box.className='review-item'+(x.right?' review-right':' review-wrong');
    const h=document.createElement('strong');h.textContent=(x.right?'✓ ':'✕ ')+(i+1)+'. '+(lang==='ar'?x.questionAr:x.questionEn);box.append(h);
    const chosen=document.createElement('p');chosen.textContent=(lang==='ar'?'إجابتك: ':'Your answer: ')+(lang==='ar'?x.selectedAr:x.selectedEn);box.append(chosen);
    if(!x.right){const right=document.createElement('p');right.textContent=(lang==='ar'?'الصحيح: ':'Correct: ')+(lang==='ar'?x.correctAr:x.correctEn);box.append(right);}
    const reason=document.createElement('small');reason.textContent=lang==='ar'?x.why:x.ex;box.append(reason);$('quizSummary').append(box);
  });
}
function saveQuiz(){
  const rows=[td('quizReport'),new Date().toLocaleString(lang==='ar'?'ar':'en'),`${td('result')}: ${quizState.score}/${quizState.questions.length}`,'',
    ...quizState.history.map((h,i)=>`${i+1}. ${lang==='ar'?h.questionAr:h.questionEn}\n${td('youChose')}: ${lang==='ar'?h.selectedAr:h.selectedEn}\n${td('correct')}: ${lang==='ar'?h.correctAr:h.correctEn}\n${lang==='ar'?h.why:h.ex}\n`)];
  try{const url=URL.createObjectURL(new Blob(['\uFEFF'+rows.join('\n')],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='WebSec-Lab-Quiz-Result.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);}
  catch(e){alert(td('noAccess'));}
}

function install(){
  rememberOriginal();
  document.querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();navigate(el.dataset.go);}));
  document.querySelectorAll('[data-sql-preset]').forEach(el=>el.addEventListener('click',()=>sqlPreset(el.dataset.sqlPreset)));
  $('sqlRun').addEventListener('click',runSql);$('encryptRun').addEventListener('click',encryptText);$('decryptRun').addEventListener('click',decryptText);$('hashRun').addEventListener('click',saltedHash);
  ['quizTopic','quizLevel','quizLength'].forEach(id=>$(id).addEventListener('change',updateQuizAvailability));
  $('quizBegin').addEventListener('click',startQuiz);$('quizAgain').addEventListener('click',startQuiz);$('quizNext').addEventListener('click',nextQuiz);$('quizSave').addEventListener('click',saveQuiz);
  $('languageToggle').addEventListener('click',()=>setLanguage(lang==='ar'?'en':'ar'));
  $('themeToggle').addEventListener('click',()=>{
    document.body.classList.toggle('light');$('themeToggle').textContent=document.body.classList.contains('light')?'☾':'☀';
    try{localStorage.setItem('websec-theme',document.body.classList.contains('light')?'light':'dark');}catch(_e){}
  });
  try{if(localStorage.getItem('websec-theme')==='light'){document.body.classList.add('light');$('themeToggle').textContent='☾';}}catch(_e){}
  let savedLang='ar';try{savedLang=localStorage.getItem('websec-lang')==='en'?'en':'ar';}catch(_e){}
  setLanguage(savedLang);navigate(location.hash.substring(1)||'home');
  addEventListener('hashchange',()=>navigate(location.hash.substring(1)||'home'));
  if('serviceWorker' in navigator && location.protocol!=='file:' && (location.hostname==='localhost'||location.hostname==='127.0.0.1'||location.protocol==='https:'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
}
document.addEventListener('DOMContentLoaded',install);