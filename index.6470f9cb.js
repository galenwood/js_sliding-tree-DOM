document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent.trim(),e.firstChild.replaceWith(t),t.addEventListener("click",function(){var t=e.querySelector("ul");t&&(t.hidden=!t.hidden)})});
//# sourceMappingURL=index.6470f9cb.js.map
