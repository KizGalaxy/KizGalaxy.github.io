var _0x2e8a78=_0xf34a;(function(_0x20e8d3,_0x226eee){var _0x41e5cf=_0xf34a,_0x5286a8=_0x20e8d3();while(!![]){try{var _0x2af56b=-parseInt(_0x41e5cf(0x18c))/0x1*(-parseInt(_0x41e5cf(0x16c))/0x2)+-parseInt(_0x41e5cf(0x178))/0x3+-parseInt(_0x41e5cf(0x174))/0x4+parseInt(_0x41e5cf(0x18e))/0x5+-parseInt(_0x41e5cf(0x177))/0x6*(-parseInt(_0x41e5cf(0x17e))/0x7)+-parseInt(_0x41e5cf(0x176))/0x8*(-parseInt(_0x41e5cf(0x181))/0x9)+parseInt(_0x41e5cf(0x167))/0xa*(-parseInt(_0x41e5cf(0x182))/0xb);if(_0x2af56b===_0x226eee)break;else _0x5286a8['push'](_0x5286a8['shift']());}catch(_0x126933){_0x5286a8['push'](_0x5286a8['shift']());}}}(_0x53df,0x78ead));var lastRenderTime=0x0,speed=0x5;const snake=[{'x':0xb,'y':0xb},{'x':0xc,'y':0xb},{'x':0xd,'y':0xb}];function _0xf34a(_0x2772f3,_0x228107){var _0x53df17=_0x53df();return _0xf34a=function(_0xf34ac7,_0x7a1d13){_0xf34ac7=_0xf34ac7-0x167;var _0x4de000=_0x53df17[_0xf34ac7];return _0x4de000;},_0xf34a(_0x2772f3,_0x228107);}var game=document[_0x2e8a78(0x188)]('game'),input={'x':0x0,'y':0x0},lastInput={'x':0x0,'y':0x0},newSegments=0x0,snakeX=0x1,snakeY=0x1,foodX=Math[_0x2e8a78(0x180)](Math[_0x2e8a78(0x17d)]()*0x14)+0x1,foodY=Math['floor'](Math[_0x2e8a78(0x17d)]()*0x14)+0x1,specialfoodX=-0xc8,specialfoodY=-0xc8,gameOver=![],score=0x0,specialTime=!![],classhead='snakehead';function main(_0x1ffb21){var _0x8f334=_0x2e8a78;window[_0x8f334(0x16e)](main);var _0x2311b9=(_0x1ffb21-lastRenderTime)/0x3e8;if(_0x2311b9<0x1/speed)return;lastRenderTime=_0x1ffb21,update(),render();}function _0x53df(){var _0x88e193=['ArrowRight','div','add','score','snake','1606184KilCwq','Score:\x20','1072koOhMj','606AMHsYI','452937gkCDmI','innerHTML','ArrowUp','specialfood','snakehead4','random','22295YhyrUX','classList','floor','63333jlqafA','22yIzxYA','createElement','snakehead','appendChild','length','keydown','getElementById','addEventListener','snakehead3','reload','15667KwfeHn','undefined','1087330dFmmkV','2249870oIybCm','gridRowStart','style','gridColumnStart','food','2KfjrMO','ArrowDown','requestAnimationFrame'];_0x53df=function(){return _0x88e193;};return _0x53df();}window[_0x2e8a78(0x16e)](main);function update(){var _0x4f9403=_0x2e8a78;gameOver&&location[_0x4f9403(0x18b)]();var _0x1a63c3=getInput();for(let _0x3e189f=snake['length']-0x2;_0x3e189f>=0x0;_0x3e189f--){snake[_0x3e189f+0x1]={...snake[_0x3e189f]};}snake[0x0]['x']+=_0x1a63c3['x'],snake[0x0]['y']+=_0x1a63c3['y'];if(snakeX==foodX&&snakeY==foodY){score=score+0xa,document[_0x4f9403(0x188)](_0x4f9403(0x172))[_0x4f9403(0x179)]=_0x4f9403(0x175)+score,newSegments++;while(foodX==snakeX&&foodY==snakeY||foodX==specialfoodX&&foodY==specialfoodY){foodX=Math[_0x4f9403(0x180)](Math['random']()*0x14)+0x1,foodY=Math[_0x4f9403(0x180)](Math['random']()*0x14)+0x1;}}snakeX==specialfoodX&&snakeY==specialfoodY&&(score=score+0x64,document[_0x4f9403(0x188)]('score')[_0x4f9403(0x179)]=_0x4f9403(0x175)+score,specialfoodX=-0xc8,specialfoodY=-0xc8),addSegments(),outsideGrid();}function render(){var _0x30a15=_0x2e8a78;game[_0x30a15(0x179)]='';const _0x317dba=document[_0x30a15(0x183)](_0x30a15(0x170));_0x317dba[_0x30a15(0x169)]['gridRowStart']=snake[0x0]['x'],snakeX=snake[0x0]['x'],_0x317dba[_0x30a15(0x169)][_0x30a15(0x16a)]=snake[0x0]['y'],snakeY=snake[0x0]['y'],game[_0x30a15(0x185)](_0x317dba),snake['forEach'](_0x15b8d3=>{var _0x129bcb=_0x30a15;const _0x15f11c=document[_0x129bcb(0x183)](_0x129bcb(0x170));_0x15f11c[_0x129bcb(0x169)]['gridRowStart']=_0x15b8d3['x'],_0x15f11c[_0x129bcb(0x169)][_0x129bcb(0x16a)]=_0x15b8d3['y'],snakeX==_0x15b8d3['x']&&snakeY==_0x15b8d3['y']?_0x15f11c['classList'][_0x129bcb(0x171)](classhead):_0x15f11c['classList'][_0x129bcb(0x171)](_0x129bcb(0x173)),game[_0x129bcb(0x185)](_0x15f11c);});const _0xa3676=document[_0x30a15(0x183)](_0x30a15(0x170));_0xa3676[_0x30a15(0x169)][_0x30a15(0x168)]=foodX,_0xa3676[_0x30a15(0x169)][_0x30a15(0x16a)]=foodY,_0xa3676[_0x30a15(0x17f)][_0x30a15(0x171)](_0x30a15(0x16b)),game[_0x30a15(0x185)](_0xa3676);const _0x199ade=document[_0x30a15(0x183)](_0x30a15(0x170));_0x199ade[_0x30a15(0x169)][_0x30a15(0x168)]=specialfoodX,_0x199ade['style']['gridColumnStart']=specialfoodY,_0x199ade[_0x30a15(0x17f)][_0x30a15(0x171)](_0x30a15(0x17b)),game[_0x30a15(0x185)](_0x199ade),specialTime==!![]&&(specialTime=![],timeout=setTimeout(function(){var _0x2c37c=_0x30a15;specialfoodX=Math[_0x2c37c(0x180)](Math[_0x2c37c(0x17d)]()*0x14)+0x1,specialfoodY=Math['floor'](Math[_0x2c37c(0x17d)]()*0x14)+0x1;},0x7530),setTimeout(function(){specialfoodX=-0xc8,specialfoodY=-0xc8,specialTime=!![];},0x88b8));}window[_0x2e8a78(0x189)](_0x2e8a78(0x187),_0x3aff01=>{var _0x412fcf=_0x2e8a78;switch(_0x3aff01['key']){case _0x412fcf(0x17a):case'w':if(lastInput['x']!==0x0)break;classhead=_0x412fcf(0x184),input={'x':-0x1,'y':0x0};break;case _0x412fcf(0x16d):case's':if(lastInput['x']!==0x0)break;classhead=_0x412fcf(0x18a),input={'x':0x1,'y':0x0};break;case'ArrowLeft':case'a':if(lastInput['y']!==0x0)break;classhead=_0x412fcf(0x17c),input={'x':0x0,'y':-0x1};break;case _0x412fcf(0x16f):case'd':if(lastInput['y']!==0x0)break;classhead='snakehead2',input={'x':0x0,'y':0x1};break;}});function getInput(){return lastInput=input,input;}function addSegments(){var _0x37d599=_0x2e8a78;for(var _0x1a14b6=0x0;_0x1a14b6<newSegments;_0x1a14b6++){snake['push']({...snake[snake[_0x37d599(0x186)]-0x1]});}newSegments=0x0;}function outsideGrid(_0x3b001b){var _0x55b0e5=_0x2e8a78;(snakeX<=0x0||snakeX>=0x15||snakeY<=0x0||snakeY>=0x15)&&(gameOver=!![]);if(snake['length']>=0x5)for(var _0x248fd2=0x2;_0x248fd2<=snake[_0x55b0e5(0x186)];_0x248fd2++){typeof snake[_0x248fd2]!==_0x55b0e5(0x18d)&&(snake[_0x248fd2]['x']==snakeX&&snake[_0x248fd2]['y']==snakeY&&(gameOver=!![]));}}