const feed = document.getElementById('feed');

const images = [
'https://i.postimg.cc/fbzTgV1L/aa.jpg',
'https://i.postimg.cc/HWc5tNwW/bb.jpg',
'https://i.postimg.cc/d1zhXq2J/cc.jpg',
'https://i.postimg.cc/kgxSVbGk/25647494-006-7df4.jpg',
'https://i.postimg.cc/02160y5N/31511981-095-015f.jpg',
'https://i.postimg.cc/5tyj2Hgk/40326127-140-c0f7.jpg',
'https://i.postimg.cc/pLNcj4YN/492561029-122207746004082631-3991613181147369274-n.png',
'https://i.postimg.cc/kGQgpWMg/45542261-032-76f1.jpg',
'https://i.postimg.cc/rmJ2ZcjS/615927534-1282345083941997-7462589887860173273-n-Picsart-Ai-Image-Enhancer.jpg',
'https://i.postimg.cc/dt90RRSg/78992867-049-ffc6.jpg',
'https://i.postimg.cc/0Q67c2PX/2453769-a52b2e4.jpg',
'https://i.postimg.cc/SKnNpBQP/83014134-058-de5a.jpg',
'https://i.postimg.cc/90CFzJ89/622035742-893100730142929-8951901723352421687-n-Picsart-Ai-Image-Enhancer.jpg',
'https://i.postimg.cc/1RGRPcPw/89601928-043-49c6.jpg',
'https://i.postimg.cc/xdNYZLtL/2983680-1dd0106-1200x1200.jpg',
'https://i.postimg.cc/G2ssv7xN/70939049-011-8093.jpg',
'https://i.postimg.cc/y6cZdGdb/1565138-1e2eb89.jpg',
'https://i.postimg.cc/3NFNZP4C/19725692-192-29c8.jpg',
'https://i.postimg.cc/hjMNbs4V/571181945-822158374085515-4805300449167608135-n-Picsart-Ai-Image-Enhancer.jpg',
'https://i.postimg.cc/ZRDV5M5q/491966670-122207546252082631-8123553911626498263-n.png'
];

const names = [
'Alexandria xx','Anastasia xx','Valentina xx','Gabriella xx',
'Seraphina xx','Arabella xx','Evangeline xx','Isabella-Rose xx',
'Elizabeth xx','MimQueen xxx','RiyaMoon','JannatX',
'SabrinaLux','LiaaStar','NinaJoy','EmmaLux',
'MiaSky','SophiaX','LunaStar','BellaRose'
];

function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

images.forEach((img,i)=>{
  const post = document.createElement('div');
  post.className='post';
  post.style.backgroundImage=`url('${img}')`;

  post.addEventListener('click',()=>{
    window.location.href='https://quarrybeforehandwillingly.com/vk9pvyw8p?key=6c739a905f40e090a16cfdd6a851e970';
  });

  post.innerHTML=`
    <div class="play-btn"><div class="triangle"></div></div>

    <div class="profile">
      <img src="${img}">
      <div class="username">${names[i]}</div>
      <div class="follow">Follow</div>
    </div>

    <div class="comment-box" contenteditable="true" data-placeholder="Add a comment…"></div>

    <div class="actions">
      <div class="icon">❤<span>${randomNumber(10,100)}k</span></div>
      <div class="icon">💬<span>${randomNumber(1,10)}k</span></div>
      <div class="icon">⤴<span>${randomNumber(1,5)}k</span></div>
      <div class="icon">💾<span>${randomNumber(1,5)}k</span></div>
    </div>
  `;

  feed.appendChild(post);
});
