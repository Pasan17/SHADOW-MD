const _0x2c8bd2=_0x5af2;function _0x5af2(_0x512bbb,_0x527939){const _0x8d4bbc=_0x8d4b();return _0x5af2=function(_0x5af2c7,_0x3ee732){_0x5af2c7=_0x5af2c7-0x186;let _0x56352d=_0x8d4bbc[_0x5af2c7];return _0x56352d;},_0x5af2(_0x512bbb,_0x527939);}function _0x8d4b(){const _0xf4e3a7=['readdirSync','includes','quotedMessage','application/pdf','text','511200PKQfWS','videoMessage','@s.whatsapp.net','groups','close','137852WXOwMM','messages','fromMe','501526jABeYO','key','video','25VmBFjg','sendMessage','stringify','function','express','commands','join','trim','sticker','endsWith','/auth_info_baileys/','listen','statusCode','Session\x20downloaded\x20✅','map','reactionMessage','[PLUGIN\x20ERROR]\x20','ephemeralMessage','94767910958','send','./command','fromURL','755532eNfbKo','react','headers','sendFileUrl','imageMessage','1032192iABHnh','participant','audio/mpeg','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','Sin\x20Nombre','209516zBiaOV','SHADOW-MD\x20connected\x20successful\x20🤖✅\x0a\x0aPREFIX:\x20','Connecting\x20SHADOW\x20MD\x20BOT\x20🤖...','startsWith','pattern','find','./lib/msg','video/mp4','forEach','SESSION_ID','extendedTextMessage','participants','error','writeFile','3YyzWSe','https://telegra.ph/file/8f0d6b5f0f741277f4ef8.jpg','image','download','contextInfo','output','log','groupMetadata','MODE','env','head','.js','toLowerCase','content-type','slice','message','/auth_info_baileys/creds.json','PORT','🤴\x20Installing','true','Bot\x20connected\x20to\x20whatsapp\x20✅','remoteJid','@g.us','status@broadcast','get','existsSync','alias','user','axios','silent','2540pojBtF','495iIZKil','macOS','stickerMessage','Message','connection.update','https://mega.nz/file/','caption','catch','./lib/functions','hey,\x20shadow\x20started✅','length','./config','Server\x20listening\x20on\x20port\x20http://localhost:','split'];_0x8d4b=function(){return _0xf4e3a7;};return _0x8d4b();}(function(_0x16f81a,_0x409353){const _0x2cd060=_0x5af2,_0x24e0b3=_0x16f81a();while(!![]){try{const _0x377f71=parseInt(_0x2cd060(0x1b2))/0x1+parseInt(_0x2cd060(0x1b5))/0x2*(parseInt(_0x2cd060(0x1e6))/0x3)+-parseInt(_0x2cd060(0x1d8))/0x4*(parseInt(_0x2cd060(0x1b8))/0x5)+parseInt(_0x2cd060(0x1ce))/0x6+-parseInt(_0x2cd060(0x1d3))/0x7+parseInt(_0x2cd060(0x1ad))/0x8+parseInt(_0x2cd060(0x19a))/0x9*(-parseInt(_0x2cd060(0x199))/0xa);if(_0x377f71===_0x409353)break;else _0x24e0b3['push'](_0x24e0b3['shift']());}catch(_0x51d761){_0x24e0b3['push'](_0x24e0b3['shift']());}}}(_0x8d4b,0x25dec));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require('@whiskeysockets/baileys'),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x2c8bd2(0x1a2)),fs=require('fs'),P=require('pino'),config=require(_0x2c8bd2(0x1a5)),qrcode=require('qrcode-terminal'),util=require('util'),{sms,downloadMediaMessage}=require(_0x2c8bd2(0x1de)),axios=require(_0x2c8bd2(0x197)),{File}=require('megajs'),prefix='.',ownerNumber=[_0x2c8bd2(0x1ca)];if(!fs[_0x2c8bd2(0x194)](__dirname+_0x2c8bd2(0x18b))){if(!config[_0x2c8bd2(0x1e1)])return console[_0x2c8bd2(0x1ec)](_0x2c8bd2(0x1d6));const sessdata=config[_0x2c8bd2(0x1e1)],filer=File[_0x2c8bd2(0x1cd)](_0x2c8bd2(0x19f)+sessdata);filer[_0x2c8bd2(0x1e9)]((_0x3acb28,_0x139f01)=>{const _0x4bfcf8=_0x2c8bd2;if(_0x3acb28)throw _0x3acb28;fs[_0x4bfcf8(0x1e5)](__dirname+'/auth_info_baileys/creds.json',_0x139f01,()=>{const _0x4539c8=_0x4bfcf8;console[_0x4539c8(0x1ec)](_0x4539c8(0x1c5));});});}const express=require(_0x2c8bd2(0x1bc)),app=express(),port=process[_0x2c8bd2(0x1ef)][_0x2c8bd2(0x18c)]||0x1f40;async function connectToWA(){const _0x2e9c29=_0x2c8bd2;console[_0x2e9c29(0x1ec)](_0x2e9c29(0x1da));const {state:_0x3a5b62,saveCreds:_0x124f4d}=await useMultiFileAuthState(__dirname+_0x2e9c29(0x1c2));var {version:_0x2f1ab2}=await fetchLatestBaileysVersion();const _0x1d89f2=makeWASocket({'logger':P({'level':_0x2e9c29(0x198)}),'printQRInTerminal':![],'browser':Browsers[_0x2e9c29(0x19b)]('Firefox'),'syncFullHistory':!![],'auth':_0x3a5b62,'version':_0x2f1ab2});_0x1d89f2['ev']['on'](_0x2e9c29(0x19e),_0x1b75ec=>{const _0x3bdca0=_0x2e9c29,{connection:_0x317b8d,lastDisconnect:_0x16a60e}=_0x1b75ec;if(_0x317b8d===_0x3bdca0(0x1b1))_0x16a60e[_0x3bdca0(0x1e4)][_0x3bdca0(0x1eb)][_0x3bdca0(0x1c4)]!==DisconnectReason['loggedOut']&&connectToWA();else{if(_0x317b8d==='open'){console[_0x3bdca0(0x1ec)](_0x3bdca0(0x18d));const _0xb88f55=require('path');fs[_0x3bdca0(0x1a8)]('./plugins/')[_0x3bdca0(0x1e0)](_0x8be261=>{const _0x21f95d=_0x3bdca0;_0xb88f55['extname'](_0x8be261)[_0x21f95d(0x187)]()==_0x21f95d(0x186)&&require('./plugins/'+_0x8be261);}),console['log']('Plugins\x20installed\x20successful\x20✅'),console[_0x3bdca0(0x1ec)](_0x3bdca0(0x18f));let _0x31c674=_0x3bdca0(0x1d9)+prefix;_0x1d89f2[_0x3bdca0(0x1b9)](ownerNumber+'@s.whatsapp.net',{'image':{'url':_0x3bdca0(0x1e7)},'caption':_0x31c674});}}}),_0x1d89f2['ev']['on']('creds.update',_0x124f4d),_0x1d89f2['ev']['on']('messages.upsert',async _0x1bdf02=>{const _0x496464=_0x2e9c29;_0x1bdf02=_0x1bdf02[_0x496464(0x1b3)][0x0];if(!_0x1bdf02['message'])return _0x1bdf02[_0x496464(0x18a)]=getContentType(_0x1bdf02['message'])==='ephemeralMessage'?_0x1bdf02[_0x496464(0x18a)][_0x496464(0x1c9)][_0x496464(0x18a)]:_0x1bdf02[_0x496464(0x18a)];_0x1bdf02[_0x496464(0x1b6)]&&_0x1bdf02['key'][_0x496464(0x190)]===_0x496464(0x192)&&config['AUTO_READ_STATUS']===_0x496464(0x18e)&&await _0x1d89f2['readMessages']([_0x1bdf02[_0x496464(0x1b6)]]);const _0x377f05=sms(_0x1d89f2,_0x1bdf02),_0x249d21=getContentType(_0x1bdf02[_0x496464(0x18a)]),_0x371845=JSON[_0x496464(0x1ba)](_0x1bdf02['message']),_0x299c37=_0x1bdf02['key']['remoteJid'],_0x2e62bb=_0x249d21==_0x496464(0x1e2)&&_0x1bdf02[_0x496464(0x18a)]['extendedTextMessage'][_0x496464(0x1ea)]!=null?_0x1bdf02[_0x496464(0x18a)]['extendedTextMessage']['contextInfo'][_0x496464(0x1aa)]||[]:[],_0x1a41e9=_0x249d21==='conversation'?_0x1bdf02[_0x496464(0x18a)]['conversation']:_0x249d21===_0x496464(0x1e2)?_0x1bdf02['message'][_0x496464(0x1e2)][_0x496464(0x1ac)]:_0x249d21==_0x496464(0x1d2)&&_0x1bdf02[_0x496464(0x18a)][_0x496464(0x1d2)][_0x496464(0x1a0)]?_0x1bdf02[_0x496464(0x18a)][_0x496464(0x1d2)][_0x496464(0x1a0)]:_0x249d21==_0x496464(0x1ae)&&_0x1bdf02['message'][_0x496464(0x1ae)][_0x496464(0x1a0)]?_0x1bdf02[_0x496464(0x18a)]['videoMessage']['caption']:'',_0x1d644a=_0x1a41e9[_0x496464(0x1db)](prefix),_0x17c5fe=_0x1d644a?_0x1a41e9[_0x496464(0x189)](prefix[_0x496464(0x1a4)])[_0x496464(0x1bf)]()[_0x496464(0x1a7)]('\x20')['shift']()[_0x496464(0x187)]():'',_0x164de0=_0x1a41e9[_0x496464(0x1bf)]()['split'](/ +/)[_0x496464(0x189)](0x1),_0x5c92c6=_0x164de0[_0x496464(0x1be)]('\x20'),_0x5985e3=_0x299c37[_0x496464(0x1c1)](_0x496464(0x191)),_0x4efcc6=_0x1bdf02[_0x496464(0x1b6)][_0x496464(0x1b4)]?_0x1d89f2[_0x496464(0x196)]['id']['split'](':')[0x0]+_0x496464(0x1af)||_0x1d89f2[_0x496464(0x196)]['id']:_0x1bdf02[_0x496464(0x1b6)][_0x496464(0x1d4)]||_0x1bdf02[_0x496464(0x1b6)][_0x496464(0x190)],_0x58aede=_0x4efcc6[_0x496464(0x1a7)]('@')[0x0],_0x1b4945=_0x1d89f2[_0x496464(0x196)]['id'][_0x496464(0x1a7)](':')[0x0],_0x3cae36=_0x1bdf02['pushName']||_0x496464(0x1d7),_0x2ecd7b=_0x1b4945[_0x496464(0x1a9)](_0x58aede),_0x44962b=ownerNumber[_0x496464(0x1a9)](_0x58aede)||_0x2ecd7b,_0x50c7d5=await jidNormalizedUser(_0x1d89f2[_0x496464(0x196)]['id']),_0x38506f=_0x5985e3?await _0x1d89f2[_0x496464(0x1ed)](_0x299c37)[_0x496464(0x1a1)](_0x3dbc2c=>{}):'',_0x4cd4ea=_0x5985e3?_0x38506f['subject']:'',_0x37f34b=_0x5985e3?await _0x38506f[_0x496464(0x1e3)]:'',_0x32df37=_0x5985e3?await getGroupAdmins(_0x37f34b):'',_0x3cc6fe=_0x5985e3?_0x32df37[_0x496464(0x1a9)](_0x50c7d5):![],_0x58f5f9=_0x5985e3?_0x32df37['includes'](_0x4efcc6):![],_0x164f20=_0x377f05[_0x496464(0x18a)][_0x496464(0x1c7)]?!![]:![],_0x1a9ec2=_0x50aa03=>{const _0x25eac4=_0x496464;_0x1d89f2[_0x25eac4(0x1b9)](_0x299c37,{'text':_0x50aa03},{'quoted':_0x1bdf02});};_0x1d89f2[_0x496464(0x1d1)]=async(_0x1565e1,_0x5467f2,_0xc4bf67,_0x59b036,_0x10478e={})=>{const _0x444691=_0x496464;let _0x3819b4='',_0x4ba5e6=await axios[_0x444691(0x1f0)](_0x5467f2);_0x3819b4=_0x4ba5e6[_0x444691(0x1d0)][_0x444691(0x188)];if(_0x3819b4[_0x444691(0x1a7)]('/')[0x1]==='gif')return _0x1d89f2[_0x444691(0x1b9)](_0x1565e1,{'video':await getBuffer(_0x5467f2),'caption':_0xc4bf67,'gifPlayback':!![],..._0x10478e},{'quoted':_0x59b036,..._0x10478e});let _0x30068e=_0x3819b4[_0x444691(0x1a7)]('/')[0x0]+_0x444691(0x19d);if(_0x3819b4===_0x444691(0x1ab))return _0x1d89f2['sendMessage'](_0x1565e1,{'document':await getBuffer(_0x5467f2),'mimetype':_0x444691(0x1ab),'caption':_0xc4bf67,..._0x10478e},{'quoted':_0x59b036,..._0x10478e});if(_0x3819b4['split']('/')[0x0]===_0x444691(0x1e8))return _0x1d89f2['sendMessage'](_0x1565e1,{'image':await getBuffer(_0x5467f2),'caption':_0xc4bf67,..._0x10478e},{'quoted':_0x59b036,..._0x10478e});if(_0x3819b4[_0x444691(0x1a7)]('/')[0x0]===_0x444691(0x1b7))return _0x1d89f2['sendMessage'](_0x1565e1,{'video':await getBuffer(_0x5467f2),'caption':_0xc4bf67,'mimetype':_0x444691(0x1df),..._0x10478e},{'quoted':_0x59b036,..._0x10478e});if(_0x3819b4[_0x444691(0x1a7)]('/')[0x0]==='audio')return _0x1d89f2['sendMessage'](_0x1565e1,{'audio':await getBuffer(_0x5467f2),'caption':_0xc4bf67,'mimetype':_0x444691(0x1d5),..._0x10478e},{'quoted':_0x59b036,..._0x10478e});};if(!_0x44962b&&config[_0x496464(0x1ee)]==='private')return;if(!_0x44962b&&_0x5985e3&&config[_0x496464(0x1ee)]==='inbox')return;if(!_0x44962b&&!_0x5985e3&&config[_0x496464(0x1ee)]===_0x496464(0x1b0))return;const _0x1b0d8a=require(_0x496464(0x1cc)),_0x4cbada=_0x1d644a?_0x1a41e9[_0x496464(0x189)](0x1)[_0x496464(0x1bf)]()[_0x496464(0x1a7)]('\x20')[0x0][_0x496464(0x187)]():![];if(_0x1d644a){const _0x2317fa=_0x1b0d8a[_0x496464(0x1bd)][_0x496464(0x1dd)](_0x3fec75=>_0x3fec75[_0x496464(0x1dc)]===_0x4cbada)||_0x1b0d8a[_0x496464(0x1bd)][_0x496464(0x1dd)](_0xbf098f=>_0xbf098f[_0x496464(0x195)]&&_0xbf098f['alias'][_0x496464(0x1a9)](_0x4cbada));if(_0x2317fa){if(_0x2317fa[_0x496464(0x1cf)])_0x1d89f2[_0x496464(0x1b9)](_0x299c37,{'react':{'text':_0x2317fa[_0x496464(0x1cf)],'key':_0x1bdf02[_0x496464(0x1b6)]}});try{_0x2317fa['function'](_0x1d89f2,_0x1bdf02,_0x377f05,{'from':_0x299c37,'quoted':_0x2e62bb,'body':_0x1a41e9,'isCmd':_0x1d644a,'command':_0x17c5fe,'args':_0x164de0,'q':_0x5c92c6,'isGroup':_0x5985e3,'sender':_0x4efcc6,'senderNumber':_0x58aede,'botNumber2':_0x50c7d5,'botNumber':_0x1b4945,'pushname':_0x3cae36,'isMe':_0x2ecd7b,'isOwner':_0x44962b,'groupMetadata':_0x38506f,'groupName':_0x4cd4ea,'participants':_0x37f34b,'groupAdmins':_0x32df37,'isBotAdmins':_0x3cc6fe,'isAdmins':_0x58f5f9,'reply':_0x1a9ec2});}catch(_0x324632){console[_0x496464(0x1e4)](_0x496464(0x1c8)+_0x324632);}}}_0x1b0d8a[_0x496464(0x1bd)][_0x496464(0x1c6)](async _0x484539=>{const _0x173bcc=_0x496464;if(_0x1a41e9&&_0x484539['on']==='body')_0x484539[_0x173bcc(0x1bb)](_0x1d89f2,_0x1bdf02,_0x377f05,{'from':_0x299c37,'l':l,'quoted':_0x2e62bb,'body':_0x1a41e9,'isCmd':_0x1d644a,'command':_0x484539,'args':_0x164de0,'q':_0x5c92c6,'isGroup':_0x5985e3,'sender':_0x4efcc6,'senderNumber':_0x58aede,'botNumber2':_0x50c7d5,'botNumber':_0x1b4945,'pushname':_0x3cae36,'isMe':_0x2ecd7b,'isOwner':_0x44962b,'groupMetadata':_0x38506f,'groupName':_0x4cd4ea,'participants':_0x37f34b,'groupAdmins':_0x32df37,'isBotAdmins':_0x3cc6fe,'isAdmins':_0x58f5f9,'reply':_0x1a9ec2});else{if(_0x1bdf02['q']&&_0x484539['on']===_0x173bcc(0x1ac))_0x484539[_0x173bcc(0x1bb)](_0x1d89f2,_0x1bdf02,_0x377f05,{'from':_0x299c37,'l':l,'quoted':_0x2e62bb,'body':_0x1a41e9,'isCmd':_0x1d644a,'command':_0x484539,'args':_0x164de0,'q':_0x5c92c6,'isGroup':_0x5985e3,'sender':_0x4efcc6,'senderNumber':_0x58aede,'botNumber2':_0x50c7d5,'botNumber':_0x1b4945,'pushname':_0x3cae36,'isMe':_0x2ecd7b,'isOwner':_0x44962b,'groupMetadata':_0x38506f,'groupName':_0x4cd4ea,'participants':_0x37f34b,'groupAdmins':_0x32df37,'isBotAdmins':_0x3cc6fe,'isAdmins':_0x58f5f9,'reply':_0x1a9ec2});else{if((_0x484539['on']===_0x173bcc(0x1e8)||_0x484539['on']==='photo')&&_0x1bdf02['type']===_0x173bcc(0x1d2))_0x484539[_0x173bcc(0x1bb)](_0x1d89f2,_0x1bdf02,_0x377f05,{'from':_0x299c37,'l':l,'quoted':_0x2e62bb,'body':_0x1a41e9,'isCmd':_0x1d644a,'command':_0x484539,'args':_0x164de0,'q':_0x5c92c6,'isGroup':_0x5985e3,'sender':_0x4efcc6,'senderNumber':_0x58aede,'botNumber2':_0x50c7d5,'botNumber':_0x1b4945,'pushname':_0x3cae36,'isMe':_0x2ecd7b,'isOwner':_0x44962b,'groupMetadata':_0x38506f,'groupName':_0x4cd4ea,'participants':_0x37f34b,'groupAdmins':_0x32df37,'isBotAdmins':_0x3cc6fe,'isAdmins':_0x58f5f9,'reply':_0x1a9ec2});else _0x484539['on']===_0x173bcc(0x1c0)&&_0x1bdf02['type']===_0x173bcc(0x19c)&&_0x484539[_0x173bcc(0x1bb)](_0x1d89f2,_0x1bdf02,_0x377f05,{'from':_0x299c37,'l':l,'quoted':_0x2e62bb,'body':_0x1a41e9,'isCmd':_0x1d644a,'command':_0x484539,'args':_0x164de0,'q':_0x5c92c6,'isGroup':_0x5985e3,'sender':_0x4efcc6,'senderNumber':_0x58aede,'botNumber2':_0x50c7d5,'botNumber':_0x1b4945,'pushname':_0x3cae36,'isMe':_0x2ecd7b,'isOwner':_0x44962b,'groupMetadata':_0x38506f,'groupName':_0x4cd4ea,'participants':_0x37f34b,'groupAdmins':_0x32df37,'isBotAdmins':_0x3cc6fe,'isAdmins':_0x58f5f9,'reply':_0x1a9ec2});}}});});}app[_0x2c8bd2(0x193)]('/',(_0x1e24d8,_0x2bfd03)=>{const _0x26e365=_0x2c8bd2;_0x2bfd03[_0x26e365(0x1cb)](_0x26e365(0x1a3));}),app[_0x2c8bd2(0x1c3)](port,()=>console[_0x2c8bd2(0x1ec)](_0x2c8bd2(0x1a6)+port)),setTimeout(()=>{connectToWA();},0xfa0);
