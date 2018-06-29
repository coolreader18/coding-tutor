input.addEventListener("input", function(e) {
  out.textContent = main(e.currentTarget.value);
});
out.textContent = main("");
