const list=document.getElementById("list");
const modal=document.getElementById("modal");
const modalContent=document.getElementById("modalContent");

document.getElementById("countPeople").textContent=PEOPLE.length;

function personById(id){
    return PEOPLE.find(p=>p.id===id)||null;
}

function badgeColor(conf){
    switch(conf){
        case "green": return "green";
        case "yellow": return "yellow";
        case "orange": return "orange";
        default:return "red";
    }
}

function badgeText(conf){
    switch(conf){
        case "green": return "🟢 Подтверждено";
        case "yellow": return "🟡 Косвенно";
        case "orange": return "🟠 Вероятно";
        default:return "🔴 Гипотеза";
    }
}

function render(){

    const q=document
    .getElementById("search")
    .value
    .trim()
    .toLowerCase();

    list.innerHTML="";

    PEOPLE
    .filter(p=>p.name.toLowerCase().includes(q))
    .forEach(p=>{

        list.innerHTML+=`

<div class="person" onclick="openPerson(${p.id})">

<h3>${p.name}</h3>

<div class="role">${p.role}</div>

<div class="life">${p.life}</div>

</div>

`;

    });

}

function relationLink(title,id){

    if(!id)return "";

    const p=personById(id);

    if(!p)return "";

    return `

<div class="link"

onclick="openPerson(${p.id})">

<b>${title}</b><br>

${p.name}

</div>

`;

}

function childrenLinks(ids){

    if(!ids||!ids.length)return "";

    let html="<div class='section'><h4>Дети</h4>";

    ids.forEach(id=>{

        const p=personById(id);

        if(p){

            html+=`

<div class="link"

onclick="openPerson(${p.id})">

${p.name}

</div>

`;

        }

    });

    html+="</div>";

    return html;

}

function siblingsLinks(ids){

    if(!ids||!ids.length)return "";

    let html="<div class='section'><h4>Братья и сестры</h4>";

    ids.forEach(id=>{

        const p=personById(id);

        if(p){

            html+=`

<div class="link"

onclick="openPerson(${p.id})">

${p.name}

</div>

`;

        }

    });

    html+="</div>";

    return html;

}

function sourceList(arr){

    if(!arr||!arr.length)return "";

    return "<ul>"+arr.map(s=>"<li>"+s+"</li>").join("")+"</ul>";

}

function openPerson(id){

    const p=personById(id);

    if(!p)return;

    modal.style.display="flex";

    modalContent.innerHTML=`

<h2>${p.name}</h2>

<p>${p.life}</p>

<br>

<span class="badge ${badgeColor(p.confidence)}">

${badgeText(p.confidence)}

</span>

<div class="section">

<h4>Степень родства</h4>

${p.role}

</div>

<div class="section">

<h4>Биография</h4>

${p.bio||"Нет данных"}

</div>

<div class="section">

<h4>Место рождения</h4>

${p.birthPlace||"Неизвестно"}

</div>

<div class="section">

<h4>Место смерти</h4>

${p.deathPlace||"Неизвестно"}

</div>

<div class="section">

<h4>Родственные связи</h4>

${relationLink("Отец",p.father)}

${relationLink("Мать",p.mother)}

${relationLink("Супруг",p.spouse)}

</div>

${childrenLinks(p.children)}

${siblingsLinks(p.siblings)}

<div class="section">

<h4>Источники</h4>

${sourceList(p.sources)}

</div>

`;

}

function closeModal(){

    modal.style.display="none";

}

window.onclick=function(e){

    if(e.target===modal){

        closeModal();

    }

    if(e.target===treeModal){

        closeTree();

    }

}

render();

function showTimeline(){

modal.style.display="flex";

modalContent.innerHTML=`

<h2>📜 История рода</h2>

<div class="section">

<h4>1865</h4>

<p>Родился Тимофей Степанович Герасимов.</p>

</div>

<div class="section">

<h4>1889</h4>

<p>Родился Иван Иванович Девятков.</p>

</div>

<div class="section">

<h4>1916</h4>

<p>Родился Даниил Тимофеевич Герасимов.</p>

</div>

<div class="section">

<h4>1920</h4>

<p>Родился Юрий Иванович Девятков.</p>

</div>

<div class="section">

<h4>1937</h4>

<p>Иван Иванович и Алексей Иванович Девятковы были репрессированы и расстреляны.</p>

</div>

<div class="section">

<h4>1941–1945</h4>

<p>Юрий Иванович Девятков участвовал в Великой Отечественной войне, дошел до Берлина.</p>

</div>

<div class="section">

<h4>1950</h4>

<p>Родился Владимир Юрьевич Девятков.</p>

</div>

<div class="section">

<h4>1954</h4>

<p>Родилась Ольга Данииловна Герасимова.</p>

</div>

<div class="section">

<h4>1976</h4>

<p>Родился Данил Владимирович Девятков.</p>

</div>

<div class="section">

<h4>1986</h4>

<p>Родился Юрий Владимирович Девятков.</p>

</div>

`;

}

function showAbout(){

modal.style.display="flex";

modalContent.innerHTML=`

<h2>📖 О проекте</h2>

<p>

Этот цифровой архив создается для сохранения истории семьи Девятковых и Герасимовых.

</p>

<br>

<p>

Проект объединяет архивные документы, фотографии, биографии, сведения о военной службе, семейные воспоминания и результаты генеалогических исследований.

</p>

<br>

<p>

Главная цель — передать накопленные знания следующим поколениям в удобной, понятной и долговечной форме.

</p>

`;

}

const treeModal =
document.getElementById("treeModal");

const treeContainer =
document.getElementById("treeContainer");

let treeRootId = 1;

function collectAncestors(ids, level, levels){

    if(!ids.length) return;

    const unique=[...new Set(ids)];

    levels[level]=(levels[level]||[]).concat(unique);

    let parents=[];

    unique.forEach(id=>{

        const p=personById(id);

        if(p){

            if(p.father) parents.push(p.father);

            if(p.mother) parents.push(p.mother);

        }

    });

    if(parents.length) collectAncestors(parents, level-1, levels);

}

function collectDescendants(ids, level, levels){

    if(!ids.length) return;

    const unique=[...new Set(ids)];

    levels[level]=(levels[level]||[]).concat(unique);

    let children=[];

    unique.forEach(id=>{

        const p=personById(id);

        if(p && p.children && p.children.length) children=children.concat(p.children);

    });

    if(children.length) collectDescendants(children, level+1, levels);

}

function buildLevels(rootId){

    const levels={};

    levels[0]=[rootId];

    const p=personById(rootId);

    if(p){

        let parents=[];

        if(p.father) parents.push(p.father);

        if(p.mother) parents.push(p.mother);

        if(parents.length) collectAncestors(parents, -1, levels);

        if(p.children && p.children.length) collectDescendants(p.children, 1, levels);

    }

    return levels;

}

function treeNodeHtml(id, rootId){

    const p=personById(id);

    if(!p) return "";

    const isRoot = id===rootId ? " root" : "";

    return `

<div class="tree-node${isRoot}">

<div class="tree-node-main" onclick="renderTree(${id})">

<div class="tree-node-name">${p.name}</div>

<div class="tree-node-life">${p.life||""}</div>

</div>

<button class="tree-node-info" onclick="event.stopPropagation(); openPerson(${id})">ⓘ</button>

</div>

`;

}

function renderTree(rootId){

    treeRootId=rootId;

    const levels=buildLevels(rootId);

    const keys=Object.keys(levels).map(Number).sort((a,b)=>a-b);

    let html="";

    keys.forEach(lvl=>{

        const ids=[...new Set(levels[lvl])];

        html+=`<div class="tree-row">`;

        ids.forEach(id=>{

            html+=treeNodeHtml(id, rootId);

        });

        html+=`</div>`;

    });

    html+=`<div class="tree-hint">Клик по карточке — сделать её центром древа. Значок ⓘ — открыть подробную карточку.</div>`;

    treeContainer.innerHTML=html;

}

function showTree(){

renderTree(treeRootId);

treeModal.style.display="flex";

}

function closeTree(){

treeModal.style.display="none";

}
