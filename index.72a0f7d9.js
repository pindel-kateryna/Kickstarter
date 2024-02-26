var e=document.querySelector(".slider"),t=document.querySelector(".features__button--prev"),n=document.querySelector(".features__button--next"),s=Array.from(e.querySelectorAll(".slider__slide")),r=s.length,a=0;// Функция для обновления отображения слайдера
function u(){s.forEach(function(e,t){t===a?e.style.display="block":e.style.display="none"}),0===a?(t.classList.add("features__button--prev-disabled"),t.classList.remove("features__button--prev-default")):(t.classList.add("features__button--prev-default"),t.classList.remove("features__button--prev-disabled")),a>=r-1?(n.classList.add("features__button--next-disabled"),n.classList.remove("features__button--next-default")):(n.classList.add("features__button--next-default"),n.classList.remove("features__button--next-disabled")),document.querySelector(".features__count-first-num").textContent="0".concat(a+1)}// Устанавливаем обработчики событий для кнопок
t.addEventListener("click",// Функция для показа предыдущего слайда
function(){// slideIndex = (slideIndex - 1 + slideCount) % slideCount;
(a-=1)<0&&(a=0),u()}),n.addEventListener("click",// Функция для показа следующего слайда
function(){(a+=1)>r-1&&(a=r-1),u()}),u(),function(){for(var e=s[0].innerHeight,t=0;t<s.length;t++)s[t].innerHeight>=e&&(e=s[t].innerHeight);s.forEach(function(t){t.style.height=e})}(),window.innerWidth>1280&&s.forEach(function(e){e.style.display="block"});//# sourceMappingURL=index.72a0f7d9.js.map

//# sourceMappingURL=index.72a0f7d9.js.map
