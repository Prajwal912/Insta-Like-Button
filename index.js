$(document).ready(function () {
  let container = $("#container");
  let love = $("i");

  container.on("dblclick", () => {
    love.css("transform", "translate(-50%, -50%) scale(1)");
    love.css("opacity", 0.8);

    setTimeout(() => {
        love.css("transform", "translate(-50%, -50%) scale(0)");
      }, 2000);
    setTimeout(() => {
        love.css("opacity", 0);
      }, 1000);
  });
});
