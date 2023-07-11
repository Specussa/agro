// start navbar
const bodyoverlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__nav');
const menu_c = document.querySelector('.header__consultation');
const menu_v = document.querySelector('.header__career');
const menu_s = document.querySelector('.header__say');
const burger = document.querySelector('.header__burger');
const burger_c = document.querySelector('.header__project');
const burger_v = document.querySelector('.career__button');
const burger_s = document.querySelector('.say__button');
const burgernav = document.querySelector('.header__nav_burger');
const burgernav_c = document.querySelector('.header__consultation_burger');
const burgernav_v = document.querySelector('.header__career_burger');
const burgernav_s = document.querySelector('.header__say_burger');

// кнопка header__burger
document.querySelector('.header__burger').addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    if(!menu_v){} else {menu_v.classList.remove("active");}
    if(!burger_v){} else {burger_v.classList.remove("active");}
    if(!burgernav_v){} else {burgernav_v.classList.remove("active");}
    if(!menu_s){} else {menu_s.classList.remove("active");}
    if(!burger_s){} else {burger_s.classList.remove("active");}
    if(!burgernav_s){} else {burgernav_s.classList.remove("active");}
  } else {
    bodyoverlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    if(!menu_v){} else {menu_v.classList.remove("active");}
    if(!burger_v){} else {burger_v.classList.remove("active");}
    if(!burgernav_v){} else {burgernav_v.classList.remove("active");}
    if(!menu_s){} else {menu_s.classList.remove("active");}
    if(!burger_s){} else {burger_s.classList.remove("active");}
    if(!burgernav_s){} else {burgernav_s.classList.remove("active");}
  }
  if (burger_c.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  }
})
// кнопка header__project
document.querySelector('.header__project').addEventListener('click', function() {
  if (burger_c.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
    menu.classList.remove("active");
    burger.classList.remove("active");
    if(!menu_v){} else {menu_v.classList.remove("active");}
    if(!burger_v){} else {burger_v.classList.remove("active");}
    if(!burgernav_v){} else {burgernav_v.classList.remove("active");}
    if(!menu_s){} else {menu_s.classList.remove("active");}
    if(!burger_s){} else {burger_s.classList.remove("active");}
    if(!burgernav_s){} else {burgernav_s.classList.remove("active");}
  } else {
    bodyoverlay.classList.add("active");
    menu_c.classList.add("active");
    burger_c.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    menu.classList.remove("active");
    burger.classList.remove("active");
    if(!menu_v){} else {menu_v.classList.remove("active");}
    if(!burger_v){} else {burger_v.classList.remove("active");}
    if(!burgernav_v){} else {burgernav_v.classList.remove("active");}
    if(!menu_s){} else {menu_s.classList.remove("active");}
    if(!burger_s){} else {burger_s.classList.remove("active");}
    if(!burgernav_s){} else {burgernav_s.classList.remove("active");}
  }
  if (burgernav_c.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  } else {
    bodyoverlay.classList.add("active");
    menu_c.classList.add("active");
    burgernav_c.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
})
// кнопка закрыть для header__project
document.querySelector('.header__consultation_burger').addEventListener('click', function() {
  if (burgernav_c.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  }
})
// end navbar

// start navbar
const formsuccess = document.querySelector('.formsuccess');
const formsuccessb = document.querySelector('.formsuccess__burger');
if(!formsuccess){} else {
  formsuccessb.addEventListener('click', function() {
    if (formsuccess.classList.contains("active")) {
      formsuccess.classList.remove("active");
    }
  })
}
// end career

// start career
if(!burger_v){} else {
  // кнопка career__button
  burger_v.addEventListener('click', function() {
    if (burger_v.classList.contains("active")) {
      bodyoverlay.classList.remove("active");
      menu_v.classList.remove("active");
      burger_v.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
      menu.classList.remove("active");
      burger.classList.remove("active");
      menu_c.classList.remove("active");
      burger_c.classList.remove("active");
      burgernav_c.classList.remove("active");
      if(!menu_s){} else {menu_s.classList.remove("active");}
      if(!burger_s){} else {burger_s.classList.remove("active");}
      if(!burgernav_s){} else {burgernav_s.classList.remove("active");}
    } else {
      bodyoverlay.classList.add("active");
      menu_v.classList.add("active");
      burger_v.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      menu.classList.remove("active");
      burger.classList.remove("active");
      menu_c.classList.remove("active");
      burger_c.classList.remove("active");
      burgernav_c.classList.remove("active");
      if(!menu_s){} else {menu_s.classList.remove("active");}
      if(!burger_s){} else {burger_s.classList.remove("active");}
      if(!burgernav_s){} else {burgernav_s.classList.remove("active");}
    }
    if (burgernav_v.classList.contains("active")) {
      bodyoverlay.classList.remove("active");
      menu_v.classList.remove("active");
      burgernav_v.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
    } else {
      bodyoverlay.classList.add("active");
      menu_v.classList.add("active");
      burgernav_v.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
  })
  // кнопка закрыть для career__button
  burgernav_v.addEventListener('click', function() {
    if (burgernav_v.classList.contains("active")) {
      bodyoverlay.classList.remove("active");
      menu_v.classList.remove("active");
      burger_v.classList.remove("active");
      burgernav_v.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
    }
  })
}
// закрыть все оверлеии при нажатии на nav menu
bodyoverlay.addEventListener('click', function(event) {
  if (burger.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  }
  if (burger_c.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    burgernav_c.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  }
  if(!burgernav_v){} else {
    if (burgernav_v.classList.contains("active")) {
      bodyoverlay.classList.remove("active");
      menu_v.classList.remove("active");
      burger_v.classList.remove("active");
      burgernav_v.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
    }
  }
  if(!burgernav_s){} else {
    if (burgernav_s.classList.contains("active")) {
      bodyoverlay.classList.remove("active");
      menu_s.classList.remove("active");
      burger_s.classList.remove("active");
      burgernav_s.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
    }
  }
})
// end career

// start say
if(!burger_s){} else {
  // кнопка say__button
  burger_s.addEventListener('click', function() {
    if (burger_s.classList.contains("active")) {
      bodyoverlay.classList.remove("active");
      menu_s.classList.remove("active");
      burger_s.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
      menu.classList.remove("active");
      burger.classList.remove("active");
      menu_c.classList.remove("active");
      burger_c.classList.remove("active");
      burgernav_c.classList.remove("active");
      if(!menu_v){} else {menu_v.classList.remove("active");}
      if(!burger_v){} else {burger_v.classList.remove("active");}
      if(!burgernav_v){} else {burgernav_v.classList.remove("active");}
    } else {
      bodyoverlay.classList.add("active");
      menu_s.classList.add("active");
      burger_s.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      menu.classList.remove("active");
      burger.classList.remove("active");
      menu_c.classList.remove("active");
      burger_c.classList.remove("active");
      burgernav_c.classList.remove("active");
      if(!menu_v){} else {menu_v.classList.remove("active");}
      if(!burger_v){} else {burger_v.classList.remove("active");}
      if(!burgernav_v){} else {burgernav_v.classList.remove("active");}
    }
    if (burgernav_s.classList.contains("active")) {
      bodyoverlay.classList.remove("active");
      menu_s.classList.remove("active");
      burgernav_s.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
    } else {
      bodyoverlay.classList.add("active");
      menu_s.classList.add("active");
      burgernav_s.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
  })
  // кнопка закрыть для say__button
  burgernav_s.addEventListener('click', function() {
    if (burgernav_s.classList.contains("active")) {
      bodyoverlay.classList.remove("active");
      menu_s.classList.remove("active");
      burger_s.classList.remove("active");
      burgernav_s.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "100%";
    }
  })
}
// end say

// start select
const SELECT = '[data-select]'
const SELECT_LIST = '[data-select-list]'
const SELECT_ARROW = '[data-select-arrow]'
const SELECT_ACTION = '[data-select-action]'
const SELECT_TITLE = '[data-select-title]'
const SELECT_INPUT = '[data-select-input]'
const SELECT_ITEM = 'selectItem'
const OPEN_SELECT = 'selectOpen'

class Select {
  static attach() {
    document.querySelectorAll(SELECT)
      .forEach(select => new Select().init(select))
  }

  init(select) {
    if (this.findSelect(select)) {
      this.applyListener()
    }
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = this.select.contains(e.target) && e.target.closest(SELECT_ACTION)

      if (this.isCallSelectElement(element)) {
        if (this.isOpened()) {
          this.closeSelectList();
        } else {
          this.openSelectList()
        }
      }

      if (this.isCallSelectItemElement(element)) {
        this.addSelectedValue(element)
      }

      if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
        this.closeSelectList()
      }
    })
  }

  isCallSelectElement(element, target) {
    return element && OPEN_SELECT in element.dataset
  }

  isCallSelectItemElement(element, target) {
    return element && SELECT_ITEM in element.dataset
  }

  findSelect(select) {

    if (select) {
      this.select = select
      this.selectList = this.select.querySelector(SELECT_LIST)
      this.selectArrow = this.select.querySelector(SELECT_ARROW)
      this.selectTitle = this.select.querySelector(SELECT_TITLE)
      this.selectInput = this.select.querySelector(SELECT_INPUT)
      return true
    }
    return false
  }

  isOpened() {
    return this.selectList.classList.contains('header__select_list_opened')
  }

  openSelectList() {
    this.selectList.classList.add('header__select_list_opened')
    this.selectArrow.classList.add('header__select_arrow_rotate')
  }

  closeSelectList() {
    this.selectList.classList.remove('header__select_list_opened')
    this.selectArrow.classList.remove('header__select_arrow_rotate')
  }

  addSelectedValue(element) {
    this.selectTitle.innerHTML = element.innerHTML;
    this.selectInput.value = element.innerHTML;
    this.selectInput.setAttribute('value', this.selectInput.value);
  }

  selectOverlayIsClickedElement(element, target) {
    return element && 'select' in element.dataset
  }
}

Select.attach()
// end select

// start hover menu
var hover = document.querySelector('.header__nav_list'),
elemHover = false;

hover.addEventListener('mouseover', function(e) {
  if(elemHover) return;
  var target = e.target.closest('.header__nav_item');
  if(!target) return;
  elemHover = target;
  var parent = target.closest('.header__nav_list'),
  old = parent.querySelector('.active')
  if(old) old.classList.remove('active')
  target.classList.add('active')
})
hover.addEventListener('mouseout', function(e) {
  if(!elemHover) return
  elemHover = null;
})
// end hover menu

// start dark mode
const btnlight = document.querySelector('.button__light');
const btndark = document.querySelector('.button__dark');
// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
  btndark.classList.add("active");
  btnlight.classList.remove("active");
	document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
  btndark.classList.add("active");
  btnlight.classList.remove("active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btndark.classList.remove("active");
  btnlight.classList.add("active");
  document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
  const newColorScheme = event.matches ? "dark" : "light";
  if (newColorScheme === "dark") {
    btndark.classList.add("active");
    btnlight.classList.remove("active");
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "dark");
  } else {
    btndark.classList.remove("active");
    btnlight.classList.add("active");
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "light");
  }
});

// Включение дневного режима по кнопке
document.querySelector('.button__light').addEventListener('click', function() {
  if (btndark.classList.contains("active")) {
    btndark.classList.remove("active");
    btnlight.classList.add("active");
  }
  document.body.classList.remove("dark");
  localStorage.setItem("darkMode", "light");
})

// Включение ночного режима по кнопке
document.querySelector('.button__dark').addEventListener('click', function() {
  if (btnlight.classList.contains("active")) {
    btnlight.classList.remove("active");
    btndark.classList.add("active");
  }
  document.body.classList.add("dark");
  localStorage.setItem("darkMode", "dark");
})
// end dark mode

// start accordion
var acc = document.getElementsByClassName("accordion__button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function(e) {
    var accordion = this.nextElementSibling;
    var courseAccordion = document.getElementsByClassName("accordion__panel");
    var courseAccordionActive = document.getElementsByClassName("accordion__button active");

    if (accordion.style.maxHeight) {
      accordion.style.maxHeight = null;
      this.classList.remove("active");
      accordion.classList.remove("active");
    } else {
      for (var q = 0; q < courseAccordionActive.length; q++) {
        courseAccordionActive[q].classList.remove("active");
        courseAccordion[q].classList.remove("active");
      }
      for (var p = 0; p < courseAccordion.length; p++) {
        this.classList.remove("active");
        courseAccordion[p].classList.remove("active");
        courseAccordion[p].style.maxHeight = null;
      }
      accordion.style.maxHeight = (accordion.scrollHeight + 40) + "px";
      accordion.classList.add("active");
      this.classList.add("active");
    }
  };
}
// end accordion

// start счетчик для всех листов

const subnav = document.querySelectorAll('.header__subnav_list'); 
[...subnav].forEach(function (li) { 
  for (let [index, elem] of [...li.children].entries()){ 
    elem.style.setProperty('--inc-step', index+1); 
  } 
});

// end счетчик для всех листов

// start filter projects
const filtercategoryone = document.querySelector('.filter__category_one');
const filtervi = document.querySelectorAll('.filter__form ');
if(!filtercategoryone){} else {
	var filterCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
	var clear = document.querySelector("#clear");
  [...filtervi].forEach(function (visible) {let i = 0;for (let [index, elemi] of [...visible.children].entries()){elemi.style.setProperty('--inc-step', elemi.classList.contains("visible")?++i:0);}});
	var filterFunc = function(start=false){
		var selectedFilters = {};
		filterCheckboxes.filter(a=>a.checked).forEach(a=>{
			if (!selectedFilters.hasOwnProperty(a.name)) {
			  selectedFilters[a.name] = [];
			}
			selectedFilters[a.name].push(a.value);
		});
    var pitem = document.querySelectorAll('.projects__item');
    for (var i = 0; i < pitem.length; i++) {
      pitem[i].classList.remove('animate');
      pitem[i].setAttribute("style", "display:none");
    }
    let projects = document.querySelectorAll('.projects__item');
    function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
    let projectopt = {threshold: [0.5] };
    let projectserv = new IntersectionObserver(onEntry, projectopt);
    for (let elm of projects) {projectserv.observe(elm);}
    
		clear.style.display=Object.keys(selectedFilters).length>0?"":"none";
		var filteredResults = Array.from(document.querySelectorAll('.filter__item'));
		Object.entries(selectedFilters).forEach(a=>{
			filteredResults = filteredResults.filter(b=>{
				var matched = false,
				currentFilterValues = b.getAttribute("data-category").split(' ');
				currentFilterValues.forEach(currentFilterValue=>{
					if (a[1].indexOf(currentFilterValue) != -1) {
						matched = true;
						return false;
					}
				});
			  return matched;
			});
		});
		document.querySelectorAll('.filter__item').forEach(a=>a.style.display="none");
		filteredResults.forEach(a=>a.style.display="");
		if(this.tagName){
			document.querySelectorAll(".button__number").forEach(a=>{
				let cl = a.closest(".filter__category");
				if(cl)cl.classList[cl.contains(this)?"add":"remove"]("active");	
			});	
			let th = this.closest(".filter__label");
			if(th)th.classList[this.checked?"add":"remove"]("active");
			filterCheckboxes.forEach(a=>{
				let ob = a.checked;
				a.checked=true;
				let l = a.closest("label"); 
				let r = filterFunc();
				a.dataset.c=r.filter(c=>c.getAttribute("data-category").indexOf(a.value)!=-1).length;
				l.classList[["add","remove"][Number(a.dataset.c>0)]]("hidden");
				l.classList[["remove","add"][Number(a.dataset.c>0)]]("visible");
				l=l.querySelector(".button__number");
				if(l)l.textContent=a.dataset.c;
				a.checked=ob;
				filterFunc();
			}); 
			document.querySelectorAll('.filter__form').forEach(a=>{
				let s = a.previousElementSibling;
				if(s)s=s.querySelector(".button__number");
				if(s)s.textContent=Array.from(a.querySelectorAll("input")).reduce((a, b) => a + parseInt(b.dataset.c), 0);		 
			});
			[...filtervi].forEach(function (visible) {let i = 0;for (let [index, elemi] of [...visible.children].entries()){elemi.style.setProperty('--inc-step', elemi.classList.contains("visible")?++i:0);}});
			let save = {};
			filterCheckboxes.forEach(a=>save[a.id]=a.checked);
			localStorage.setItem("save",JSON.stringify(save));

		}
		return filteredResults;
	}

	filterCheckboxes.forEach(a=>a.addEventListener('change', filterFunc));   
	let cf = ()=>{
		filterCheckboxes.forEach(a=>a.checked=false);
		document.querySelectorAll(".active").forEach(a=>a.classList.remove("active"));
		filterFunc.bind(clear)();
	};
	clear.addEventListener("click",cf);
	let load = JSON.parse(localStorage.getItem('save'));
	for(let a in load){
		let e = document.getElementById(a);
		e.checked=load[a];
		filterFunc.bind(e)();
	}
	let fb = document.querySelectorAll(".filter__button");
	fb.forEach(a=>a.onclick=b=>fb.forEach(c=>c.parentNode.classList[c==b.target?"toggle":"remove"]("selected")));
}
// end filter projects

// start filter public
const filtercategorytwo = document.querySelector('.filter__category_two');
if(!filtercategorytwo){} else {
	var filterCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
	var clears = document.querySelector("#clears");
  [...filtervi].forEach(function (visible) {let i = 0;for (let [index, elemi] of [...visible.children].entries()){elemi.style.setProperty('--inc-step', elemi.classList.contains("visible")?++i:0);}});
	var filterFunc = function(start=false){
		var selectedFilters = {};
		filterCheckboxes.filter(aa=>aa.checked).forEach(aa=>{
			if (!selectedFilters.hasOwnProperty(aa.name)) {
			  selectedFilters[aa.name] = [];
        // let projectp = document.querySelector('.projects');
        // if(!projectp){} else {
        //   var pitem = document.querySelectorAll('.projects__item');
        //   for (var i = 0; i < pitem.length; i++) {
        //     pitem[i].classList.remove('animate');
        //     pitem[i].setAttribute("style", "display:none");
        //   }
        //   setTimeout(() => {
        //     function onEntryp(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});}
        //     let projectaopt = {threshold: [0.5] };
        //     let projectaserv = new IntersectionObserver(onEntryp, projectaopt);
        //     for (let elm of pitem) {projectaserv.observe(elm);}
        //   }, 700);
        // }
			}
			selectedFilters[aa.name].push(aa.value);
		});
		clears.style.display=Object.keys(selectedFilters).length>0?"":"none";
		var filteredResults = Array.from(document.querySelectorAll('.filter__item'));
		Object.entries(selectedFilters).forEach(aa=>{
			filteredResults = filteredResults.filter(bb=>{
				var matched = false,
				currentFilterValues = bb.getAttribute("data-category").split(' ');
				currentFilterValues.forEach(currentFilterValue=>{
					if (aa[1].indexOf(currentFilterValue) != -1) {
						matched = true;
						return false;
					}
				});
			  return matched;
			});
		});
		document.querySelectorAll('.filter__item').forEach(aa=>aa.style.display="none");
		filteredResults.forEach(aa=>aa.style.display="");
		if(this.tagName){
			document.querySelectorAll(".button__number").forEach(aa=>{
				let cll = aa.closest(".filter__category");
				if(cll)cll.classList[cll.contains(this)?"add":"remove"]("active");	
			});	
			let thh = this.closest(".filter__label");
			if(thh)thh.classList[this.checked?"add":"remove"]("active");
			filterCheckboxes.forEach(aa=>{
				let obb = aa.checked;
				aa.checked=true;
				let ll = aa.closest("label"); 
				let rr = filterFunc();
				aa.dataset.cc=rr.filter(cc=>cc.getAttribute("data-category").indexOf(aa.value)!=-1).length;
				ll.classList[["add","remove"][Number(aa.dataset.cc>0)]]("hidden");
				ll.classList[["remove","add"][Number(aa.dataset.cc>0)]]("visible");
				ll=ll.querySelector(".button__number");
				if(ll)ll.textContent=aa.dataset.cc;
				aa.checked=obb;
				filterFunc();
			}); 
			document.querySelectorAll('.filter__form').forEach(aa=>{
				let ss = aa.previousElementSibling;
				if(ss)ss=ss.querySelector(".button__number");
				if(ss)ss.textContent=Array.from(aa.querySelectorAll("input")).reduce((aa, bb) => aa + parseInt(bb.dataset.cc), 0);		 
			});
			[...filtervi].forEach(function (visible) {let i = 0;for (let [index, elemi] of [...visible.children].entries()){elemi.style.setProperty('--inc-step', elemi.classList.contains("visible")?++i:0);}});
			let saves = {};
			filterCheckboxes.forEach(aa=>saves[aa.id]=aa.checked);
			localStorage.setItem("saves",JSON.stringify(saves));

		}
		return filteredResults;
	}

	filterCheckboxes.forEach(aa=>aa.addEventListener('change', filterFunc));   
	let cff = ()=>{
		filterCheckboxes.forEach(aa=>aa.checked=false);
		document.querySelectorAll(".active").forEach(aa=>aa.classList.remove("active"));
		filterFunc.bind(clears)();
	};
	clears.addEventListener("click",cff);
	let loadd = JSON.parse(localStorage.getItem('saves'));
	for(let aa in loadd){
		let ee = document.getElementById(aa);
		ee.checked=loadd[aa];
		filterFunc.bind(ee)();
	}
	let fbb = document.querySelectorAll(".filter__button");
	fbb.forEach(aa=>aa.onclick=bb=>fbb.forEach(cc=>cc.parentNode.classList[cc==bb.target?"toggle":"remove"]("selected")));
}
// end filter public

// start public slider
const elsliderpublic = document.querySelector('.public__slider');
if(!elsliderpublic){} else {
  const sliderSelector = '.public__slider',
  options = {
    grabCursor: true,
    autoplay: false,
    init: false,
    slidesPerView: 3,
    spaceBetween: 0,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 0,
      slideShadows : false,
    },
    grabCursor: true,
    parallax: true,
    navigation: {
      nextEl: '.public__slider_next',
      prevEl: '.public__slider_prev',
    },
    breakpoints: {
      1199: {
        slidesPerView: 2,
        spaceBetween: 0,
        arrow: false,
      },
      639: {
        slidesPerView: 1,
        spaceBetween: 0,
        arrow: false,
      }
    },
    on: {
      imagesReady: function(){
        this.el.classList.remove('loading');
      }
    }
  };
  const mySwiper = new Swiper(sliderSelector, options);
  mySwiper.init();
}
// end public slider

// start team slider
const elsliderteam = document.querySelector('.team__slider');
if(!elsliderteam){} else {
  const sliderSelector = '.team__slider',
  options = {
    grabCursor: true,
    autoplay: false,
    init: false,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 0,
      slideShadows : false,
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    speed: 700,
    grabCursor: true,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.team__slider_next',
      prevEl: '.team__slider_prev',
    },
    on: {
      imagesReady: function(){
        this.el.classList.remove('loading');
      }
    }
  };
  const mySwiper = new Swiper(sliderSelector, options);
  mySwiper.init();
}
// end team slider

// start video
const preview = document.querySelector('.showreel__button');
const showreelvideo = document.getElementById('showreel__video');
const showreelmodal = document.querySelector('.showreel__modal');
const showreelmodalClose = document.querySelector('.showreel__modal_close');
if(!showreelvideo){} else {
  preview.onclick = function(e) {
    e.preventDefault();
    showreelmodal.classList.add('showreel__modal_visible');
    document.querySelector('.spec__overlay').classList.add('is-playing');
    showreelvideo.play();
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    var t;
    window.addEventListener('mousemove', () => {
      if (t) {
        showreelmodal.classList.remove('hide')
        clearTimeout(t)
        t = 0
      }
      t = setTimeout(() => showreelmodal.classList.add('hide'), 1500)
    });
    const progress = document.querySelector('.progress');
    const progressLine = document.querySelector('.progress__line');
    progress.addEventListener('mousemove', (e) => {
      progressLine.style.left = e.offsetX + 'px';
    });
  }
  showreelmodalClose.onclick = function() {
    document.querySelector('.spec__overlay').classList.remove('is-playing');
    showreelmodal.classList.remove('showreel__modal_visible');
    showreelvideo.pause();
    showreelvideo.currentTime = 0;
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  }
}
(function () {
  // helpers
  var regExp = function regExp(name) {
      return new RegExp('(^| )' + name + '( |$)');
  };
  var forEach = function forEach(list, fn, scope) {
      for (var i = 0; i < list.length; i++) {
          fn.call(scope, list[i]);
      }
  };
  // class list object with basic methods
  function ClassList(element) {
      this.element = element;
  }
  ClassList.prototype = {
      add: function add() {
          forEach(arguments, function (name) {
              if (!this.contains(name)) {
                  this.element.className += ' ' + name;
              }
          }, this);
      },
      remove: function remove() {
          forEach(arguments, function (name) {
              this.element.className = this.element.className.replace(regExp(name), '');
          }, this);
      },
      toggle: function toggle(name) {
          return this.contains(name) ? (this.remove(name), false) : (this.add(name), true);
      },
      contains: function contains(name) {
          return regExp(name).test(this.element.className);
      },
      // bonus..
      replace: function replace(oldName, newName) {
          this.remove(oldName), this.add(newName);
      }
  };
  // IE8/9, Safari
  if (!('classList' in Element.prototype)) {
      Object.defineProperty(Element.prototype, 'classList', {
          get: function get() {
              return new ClassList(this);
          }
      });
  }
  // replace() support for others
  if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
      DOMTokenList.prototype.replace = ClassList.prototype.replace;
  }
})();
(function () {
  if (typeof NodeList.prototype.forEach === "function") return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();
// Unfortunately, due to scattered support, browser sniffing is required
function browserSniff() {
  var nVer = navigator.appVersion,
      nAgt = navigator.userAgent,
      browserName = navigator.appName,
      fullVersion = '' + parseFloat(navigator.appVersion),
      majorVersion = parseInt(navigator.appVersion, 10),
      nameOffset,
      verOffset,
      ix;
  // MSIE 11
  if (navigator.appVersion.indexOf("Windows NT") !== -1 && navigator.appVersion.indexOf("rv:11") !== -1) {
      browserName = "IE";
      fullVersion = "11;";
  }
  // MSIE
  else if ((verOffset = nAgt.indexOf("MSIE")) !== -1) {
          browserName = "IE";
          fullVersion = nAgt.substring(verOffset + 5);
      }
      // Chrome
      else if ((verOffset = nAgt.indexOf("Chrome")) !== -1) {
              browserName = "Chrome";
              fullVersion = nAgt.substring(verOffset + 7);
          }
          // Safari
          else if ((verOffset = nAgt.indexOf("Safari")) !== -1) {
                  browserName = "Safari";
                  fullVersion = nAgt.substring(verOffset + 7);
                  if ((verOffset = nAgt.indexOf("Version")) !== -1) {
                      fullVersion = nAgt.substring(verOffset + 8);
                  }
              }
              // Firefox
              else if ((verOffset = nAgt.indexOf("Firefox")) !== -1) {
                      browserName = "Firefox";
                      fullVersion = nAgt.substring(verOffset + 8);
                  }
                  // In most other browsers, "name/version" is at the end of userAgent
                  else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                          browserName = nAgt.substring(nameOffset, verOffset);
                          fullVersion = nAgt.substring(verOffset + 1);
                          if (browserName.toLowerCase() == browserName.toUpperCase()) {
                              browserName = navigator.appName;
                          }
                      }
  // Trim the fullVersion string at semicolon/space if present
  if ((ix = fullVersion.indexOf(";")) !== -1) {
      fullVersion = fullVersion.substring(0, ix);
  }
  if ((ix = fullVersion.indexOf(" ")) !== -1) {
      fullVersion = fullVersion.substring(0, ix);
  }
  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
      fullVersion = '' + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
  }
  return [browserName, majorVersion];
}

var obj = {};
obj.browserInfo = browserSniff();
obj.browserName = obj.browserInfo[0];
obj.browserVersion = obj.browserInfo[1];

wrapPlayers();
var players = document.querySelectorAll('.spec__player');
var iconPlay = '<i class="spec-play"></i>';
var iconPause = '<i class="spec-pause"></i>';
var iconVolumeMute = '<i class="spec-volume-mute"></i>';
var iconVolumeMedium = '<i class="spec-volume-medium"></i>';
var iconVolumeLow = '<i class="spec-volume-low"></i>';
var iconExpand = '<i class="spec-expand"></i>';
var iconCompress = '<i class="spec-compress"></i>';

players.forEach(function (player) {
  var video = player.querySelector('video');
  var skin = attachSkin(video.dataset.spec);
  player.classList.add(skin);
  var overlay = video.dataset.overlay;
  addOverlay(player, overlay);
  var title = showTitle(skin, video.dataset.title);
  if (title) {
      player.insertAdjacentHTML('beforeend', title);
  }
  var html = buildControls(skin);
  player.insertAdjacentHTML('beforeend', html);
  var color = video.dataset.color;
  addColor(player, color);
  var playerControls = player.querySelector('.' + skin + '__controls');
  var progress = player.querySelector('.progress');
  var progressBar = player.querySelector('.progress__filled');
  var toggle = player.querySelectorAll('.toggle');
  var volumeButton = player.querySelector('.volume');
  var fullScreenButton = player.querySelector('.fullscreen');
  if (obj.browserName === "IE" && (obj.browserVersion === 8 || obj.browserVersion === 9)) {
      showControls(video);
      playerControls.style.display = "none";
  }
  video.addEventListener('click', function () {
      togglePlay(this, player);
  });
  video.addEventListener('play', function () {
      updateButton(this, toggle);
  });
  video.addEventListener('pause', function () {
      updateButton(this, toggle);
  });
  video.addEventListener('timeupdate', function () {
      handleProgress(this, progressBar);
  });
  toggle.forEach(function (button) {
      return button.addEventListener('click', function () {
          togglePlay(video, player);
      });
  });
  volumeButton.addEventListener('click', function () {
      toggleVolume(video, volumeButton);
  });
  var mousedown = false;
  progress.addEventListener('click', function (e) {
      scrub(e, video, progress);
  });
  progress.addEventListener('mousemove', function (e) {
      return mousedown && scrub(e, video, progress);
  });
  progress.addEventListener('mousedown', function () {
      return mousedown = true;
  });
  progress.addEventListener('mouseup', function () {
      return mousedown = false;
  });
  fullScreenButton.addEventListener('click', function (e) {
      return toggleFullScreen(player, fullScreenButton);
  });
  addListenerMulti(player, 'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function (e) {
      return onFullScreen(e, player);
  });
});
function showControls(video) {
  video.setAttribute("controls", "controls");
}
function togglePlay(video, player) {
  var method = video.paused ? 'play' : 'pause';
  video[method]();
  video.paused ? player.classList.remove('is-playing') : player.classList.add('is-playing');
}
function updateButton(video, toggle) {
  var icon = video.paused ? iconPlay : iconPause;
  toggle.forEach(function (button) {
      return button.innerHTML = icon;
  });
  const progress = document.querySelector('.progress');
  const progress__time = document.getElementById("progress__time");
  progress.addEventListener('mousemove', (e) => {
    var thours = Math.floor((e.offsetX / progress.offsetWidth * video.duration) / 60 / 60);
    var tminutes = Math.floor((e.offsetX / progress.offsetWidth * video.duration) / 60) - (thours * 60);
    var tseconds = Math.floor((e.offsetX / progress.offsetWidth * video.duration) % 60);
    progress__time.innerHTML = [tminutes,tseconds.toString().padStart(2, '0')].join(':');
  });
  var dhours = Math.floor(video.duration / 60 / 60);
  var dminutes = Math.floor(video.duration / 60) - (dhours * 60);
  var dseconds = Math.floor(video.duration % 60);
  progress__duration.innerHTML = [dminutes,dseconds.toString().padStart(2, '0')].join(':');
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function toggleVolume(video, volumeButton) {
  var level = video.volume;
  var icon = iconVolumeMedium;
  if (level == 1) {
      level = 0;
      icon = iconVolumeMute;
  } else if (level == 0.5) {
      level = 1;
      icon = iconVolumeMedium;
  } else {
      level = 0.5;
      icon = iconVolumeLow;
  }
  video['volume'] = level;
  volumeButton.innerHTML = icon;
}
function handleRangeUpdate() {
  video[this.name] = this.value;
}
function handleProgress(video, progressBar) {
  var percent = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = percent + '%';
  progress__duration = document.getElementById("progress__duration");
  progress__currenttime = document.getElementById("progress__currenttime");
  var chours = Math.floor(video.currentTime / 60 / 60);
  var cminutes = Math.floor(video.currentTime / 60) - (chours * 60);
  var cseconds = Math.floor(video.currentTime % 60);
  progress__currenttime.innerHTML = [cminutes,cseconds.toString().padStart(2, '0')].join(':');
}
function scrub(e, video, progress) {
  var scrubTime = e.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = scrubTime;
}
function wrapPlayers() {
  var videos = document.querySelectorAll('video');
  videos.forEach(function (video) {
      var wrapper = document.createElement('div');
      wrapper.classList.add('spec__player');
      video.parentNode.insertBefore(wrapper, video);
      wrapper.appendChild(video);
  });
}
Number.prototype.lead0 = function(n) {
  var nz = "" + this;
  while (nz.length < n) {
      nz = "0" + nz;
  }
  return nz;
};
function buildControls(skin) {
  var html = [];
  html.push('<button class="' + skin + '__button--big toggle">' + iconPlay + '</button>');
  html.push('<div class="' + skin + '__border"></div>');
  html.push('<div class="' + skin + '__controls spec__controls">');
  html.push('<button class="' + skin + '__button toggle">' + iconPlay + '</button>', '<div class="progress">', '<div class="progress__filled"></div>', '<div class="progress__line"><div id="progress__time"></div></div>', '<div id="progress__duration"></div>', '<div id="progress__currenttime"></div>', '</div>', '<button class="' + skin + '__button volume">' + iconVolumeMedium + '</button>', '<button class="' + skin + '__button fullscreen" title="Full Screen">' + iconExpand + '</button>');
  html.push('</div>');
  return html.join('');
}
function attachSkin(skin) {
  if (typeof skin != 'undefined' && skin != '') {
      return skin;
  } else {
      return 'spec';
  }
}
function showTitle(skin, title) {
  if (typeof title != 'undefined' && title != '') {
      return '<div class="' + skin + '__title">' + title + '</div>';
  } else {
      return false;
  }
}
function addOverlay(player, overlay) {
  if (overlay == 1) {
      player.classList.add('spec__overlay');
  } else if (overlay == 2) {
      player.classList.add('spec__overlay--2');
  } else {
      return;
  }
}
function addColor(player, color) {
  if (typeof color != 'undefined' && color != '') {
      var buttons = player.querySelectorAll('button');
      var progress = player.querySelector('.progress__filled');
      progress.style.background = color;
      buttons.forEach(function (button) {
          return button.style.color = color;
      });
  }
}
function toggleFullScreen(player, fullScreenButton) {
  // let isFullscreen = false;
  if (!document.fullscreenElement && // alternative standard method
  !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      player.classList.add('spec__fullscreen');

      if (player.requestFullscreen) {
          player.requestFullscreen();
      } else if (player.mozRequestFullScreen) {
          player.mozRequestFullScreen(); // Firefox
      } else if (player.webkitRequestFullscreen) {
          player.webkitRequestFullscreen(); // Chrome and Safari
      } else if (player.msRequestFullscreen) {
          player.msRequestFullscreen();
      }
      isFullscreen = true;

      fullScreenButton.innerHTML = iconCompress;
  } else {
      player.classList.remove('spec__fullscreen');

      if (document.cancelFullScreen) {
          document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
      isFullscreen = false;
      fullScreenButton.innerHTML = iconExpand;
  }
}

function onFullScreen(e, player) {
  var isFullscreenNow = document.webkitFullscreenElement !== null;
  if (!isFullscreenNow) {
      player.classList.remove('spec__fullscreen');
      player.querySelector('.fullscreen').innerHTML = iconExpand;
  } else {
      // player.querySelector('.fullscreen').innerHTML = iconExpand;
  }
}

function addListenerMulti(element, eventNames, listener) {
  var events = eventNames.split(' ');
  for (var i = 0, iLen = events.length; i < iLen; i++) {
      element.addEventListener(events[i], listener, false);
  }
}
// end video

// start year
const year = document.querySelector('.footer__year');
if(!year){} else {
const currentYear = new Date().getFullYear();
year.insertAdjacentText('beforebegin', currentYear);
year.remove();
}
// end year

// start index animation
var eldots = document.querySelectorAll('.main__dots_list li a');
let digital = document.querySelector('.digital');
let digitalinfo = document.querySelectorAll('.digital__info');
const digitalsl = document.querySelectorAll('.digital_social_list'); 
if(!digital){} else {
  let digitald = document.querySelectorAll('.digital');
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {
    change.target.classList.add('animate');
    for (var i = 0; i < eldots.length; i++) {
      eldots[i].classList.remove('active');
      document.getElementById('future__dots').classList.add('active');
    }
  }});};
  let digitaldopt = {threshold: [0]};
  let digitaldserv = new IntersectionObserver(onEntry, digitaldopt);
  for (let elm of digitald) {digitaldserv.observe(elm);}

  let digitalopt = {threshold: [0.5]};
  let digitalserv = new IntersectionObserver(onEntry, digitalopt);
  for (let elm of digitalinfo) {digitalserv.observe(elm);}
  const digitalhead = document.querySelectorAll('.digital__head_block'); 
  [...digitalhead].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});

  let digitallopt = {threshold: [0.5]};
  let digitallserv = new IntersectionObserver(onEntry, digitallopt);
  for (let elm of digitalsl) {digitallserv.observe(elm);}
  [...digitalsl].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
}

let accreditedlist = document.querySelector('.accredited__list');
let accreditedlists = document.querySelectorAll('.accredited__list');
if(!accreditedlist){} else {
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};
  let accreditedlistopt = {threshold: [0.5]};
  let accreditedlistserv = new IntersectionObserver(onEntry, accreditedlistopt);
  for (let elm of accreditedlists) {accreditedlistserv.observe(elm);}
}

let services = document.querySelector('.services');
let servicessublist = document.querySelectorAll('.services__list');
if(!services){} else {
  let servicesd = document.querySelectorAll('.services');
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {
    change.target.classList.add('animate');
    for (var i = 0; i < eldots.length; i++) {
      eldots[i].classList.remove('active');
      document.getElementById('services__dots').classList.add('active');
    }
  }});};
  let servicesdopt = {threshold: [0]};
  let servicesdserv = new IntersectionObserver(onEntry, servicesdopt);
  for (let elm of servicesd) {servicesdserv.observe(elm);}

  let servicesopt = {threshold: [0.5]};
  let servicesserv = new IntersectionObserver(onEntry, servicesopt);
  for (let elm of servicessublist) {servicesserv.observe(elm);}
}

let project = document.querySelector('.projects');
let projectitem = document.querySelectorAll('.projects__item');
let projectlist = document.querySelectorAll('.projects__block_list');
if(!project){} else {
  let projectd = document.querySelectorAll('.project');
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {
    change.target.classList.add('animate');
    for (var i = 0; i < eldots.length; i++) {
      eldots[i].classList.remove('active');
      document.getElementById('keys__dots').classList.add('active');
    }
  }});};
  let projectdopt = {threshold: [0]};
  let projectdserv = new IntersectionObserver(onEntry, projectdopt);
  for (let elm of projectd) {projectdserv.observe(elm);}

  let projectlistopt = {threshold: [0.5]};
  let projectlistserv = new IntersectionObserver(onEntry, projectlistopt);
  for (let elm of projectlist) {projectlistserv.observe(elm);}
  
  let projectitemopt = {threshold: [0.5]};
  let projectitemserv = new IntersectionObserver(onEntry, projectitemopt);
  for (let elm of projectitem) {projectitemserv.observe(elm);}
  const ptags = document.querySelectorAll('.projects__tags'); 
  [...ptags].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
}

let footer = document.querySelector('.footer');
let footerlist = document.querySelectorAll('.footer__list');
let footerinfo = document.querySelectorAll('.footer__info');
let footercontacts = document.querySelectorAll('.footer__contacts_list');
let footersocial = document.querySelectorAll('.footer__social');
if(!footer){} else {
  let footerd = document.querySelectorAll('.footer');
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {
    change.target.classList.add('animate');
    for (var i = 0; i < eldots.length; i++) {
      eldots[i].classList.remove('active');
      document.getElementById('footer__dots').classList.add('active');
    }
  }});};
  let footerdopt = {threshold: [0]};
  let footerdserv = new IntersectionObserver(onEntry, footerdopt);
  for (let elm of footerd) {footerdserv.observe(elm);}
  
  let footerlistopt = {threshold: [0.5]};
  let footerlistserv = new IntersectionObserver(onEntry, footerlistopt);
  for (let elm of footerlist) {footerlistserv.observe(elm);}
  
  [...footerlist].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
  let footerinfoopt = {threshold: [0.5]};
  let footerinfoserv = new IntersectionObserver(onEntry, footerinfoopt);
  for (let elm of footerinfo) {footerinfoserv.observe(elm);}
  
  [...footersocial].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
  let footercontactsopt = {threshold: [0.5]};
  let footercontactsserv = new IntersectionObserver(onEntry, footercontactsopt);
  for (let elm of footercontacts) {footercontactsserv.observe(elm);}
}

let pfilter = document.querySelector('.projects__filter');
let pfilters = document.querySelectorAll('.projects__filter');
if(!pfilter){} else {
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};
  let pfilteropt = {threshold: [0.5]};
  let pfilterserv = new IntersectionObserver(onEntry, pfilteropt);
  for (let elm of pfilters) {pfilterserv.observe(elm);}
}

let say = document.querySelector('.say');
let says = document.querySelectorAll('.say__flex');
if(!say){} else {
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};
  let sayopt = {threshold: [0.5]};
  let sayserv = new IntersectionObserver(onEntry, sayopt);
  for (let elm of says) {sayserv.observe(elm);}
}

let public = document.querySelector('.public');
let publicinfo = document.querySelectorAll('.public__info');
let publicitem = document.querySelectorAll('.public__item');
let publictags = document.querySelectorAll('.public__tags');
if(!public){} else {
  let publicd = document.querySelectorAll('.public');
  function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('animate');
      for (var i = 0; i < eldots.length; i++) {
        eldots[i].classList.remove('active');
        document.getElementById('public__dots').classList.add('active');
      }
    } else {change.target.classList.remove('animate');}});}
  let publicdopt = {threshold: [0]};
  let publicdserv = new IntersectionObserver(onEntry, publicdopt);
  for (let elm of publicd) {publicdserv.observe(elm);}

  let publicitemopt = {threshold: [0.1]};
  let publicitemerv = new IntersectionObserver(onEntry, publicitemopt);
  for (let elm of publicitem) {publicitemerv.observe(elm);}
  [...publictags].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
}
if(!public){} else {
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {
    change.target.classList.add('animate');
    for (var i = 0; i < eldots.length; i++) {
      eldots[i].classList.remove('active');
      document.getElementById('public__dots').classList.add('active');
    }
  }});};
  
  let publicinfoopt = {threshold: [0.5]};
  let publicinfoerv = new IntersectionObserver(onEntry, publicinfoopt);
  for (let elm of publicinfo) {publicinfoerv.observe(elm);}
}

let team = document.querySelector('.team');
let teamitem = document.querySelectorAll('.team__item');
let teamwitem = document.querySelectorAll('.team__works_item');
if(!team){} else {
  let teamd = document.querySelectorAll('.team');
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {
    change.target.classList.add('animate');
    for (var i = 0; i < eldots.length; i++) {
      eldots[i].classList.remove('active');
      document.getElementById('team__dots').classList.add('active');
    }
  }});};
  let teamdopt = {threshold: [0]};
  let teamdserv = new IntersectionObserver(onEntry, teamdopt);
  for (let elm of teamd) {teamdserv.observe(elm);}

  let teamopt = {threshold: [0.5]};
  let teamserv = new IntersectionObserver(onEntry, teamopt);
  for (let elm of teamitem) {teamserv.observe(elm);}

  let teamwopt = {threshold: [0.5]};
  let teamwserv = new IntersectionObserver(onEntry, teamwopt);
  for (let elm of teamwitem) {teamwserv.observe(elm);}
}

let technologies = document.querySelector('.technologies');
let technologiesinfo = document.querySelectorAll('.technologies__info');
if(!technologies){} else {
  let technologiesd = document.querySelectorAll('.technologies');
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {
    change.target.classList.add('animate');
    for (var i = 0; i < eldots.length; i++) {
      eldots[i].classList.remove('active');
      document.getElementById('technologies__dots').classList.add('active');
    }
  }});};
  let technologiesdopt = {threshold: [0]};
  let technologiesdserv = new IntersectionObserver(onEntry, technologiesdopt);
  for (let elm of technologiesd) {technologiesdserv.observe(elm);}

  let technologiesopt = {threshold: [0.5]};
  let technologiesserv = new IntersectionObserver(onEntry, technologiesopt);
  for (let elm of technologiesinfo) {technologiesserv.observe(elm);}
}

let breadcrumb = document.querySelector('.breadcrumbs__item');
let breadcrumbs = document.querySelectorAll('.breadcrumbs__list');
if(!breadcrumb){} else {
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};
  let breadcrumbopt = {threshold: [0.5]};
  let breadcrumbserv = new IntersectionObserver(onEntry, breadcrumbopt);
  for (let elm of breadcrumbs) {breadcrumbserv.observe(elm);}
  [...breadcrumbs].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
}
// end index animation