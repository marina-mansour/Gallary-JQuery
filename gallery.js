console.log("Gallery ;)");

// var imgArr = ["imgs/1jpeg.jpeg", "imgs/2.jpeg", "imgs/3.jpeg", "imgs/4.jpeg"];
var imgArr = [
  "images/1.avif",
  "images/2.avif",
  "images/3.avif",
  "images/4.avif",
];

var imgIndex;
$("#layer").hide();
$("#photos img").on("click", function () {
  console.log($(this));
  imgIndex = $(this).index();
  console.log(imgIndex);
  var targetImgSrc = $(this).attr("src");
  $("#layer img").attr("src", targetImgSrc);
  console.log($("#layer img").attr("src"));
  $("#layer").show();
});

$("#layer").on("click keydown", function (e) {
  if ($(e.target).hasClass("fa-solid")) {
    if ($(e.target).hasClass("prev") || e.which === 37) {
      console.log(e.which);
      if (imgIndex > 0) {
        imgIndex--;
        $("#layer img").attr("src", imgArr[imgIndex]);
      } else {
        imgIndex = imgArr.length - 1;
        $("#layer img").attr("src", imgArr[imgIndex]);
      }
    }
    if ($(e.target).hasClass("next") || e.which === 39) {
      if (imgIndex < imgArr.length - 1) {
        imgIndex++;
        $("#layer img").attr("src", imgArr[imgIndex]);
      } else {
        imgIndex = 0;
        $("#layer img").attr("src", imgArr[imgIndex]);
      }
      console.log("next");
    }
  } else if (!$(e.target).hasClass("img")) {
    $("#layer").hide();
  }
});
$(document).on("keydown", function (e) {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    if (imgIndex > 0) {
      imgIndex--;
      $("#layer img").attr("src", imgArr[imgIndex]);
    } else {
      imgIndex = imgArr.length - 1;
      $("#layer img").attr("src", imgArr[imgIndex]);
    }
    if (imgIndex > 0) {
      imgIndex--;
      $("#layer img").attr("src", imgArr[imgIndex]);
    } else {
      imgIndex = imgArr.length - 1;
      $("#layer img").attr("src", imgArr[imgIndex]);
    }
  }
});
