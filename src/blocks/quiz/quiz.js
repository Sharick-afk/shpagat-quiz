document.addEventListener("DOMContentLoaded", function (event) {
  const quizItems = document.querySelectorAll(".quiz-item"),
    quizItemsBtns = document.querySelectorAll(".quiz-item__next-button");
  quizItemsBtns.forEach(function (item) {
    item.addEventListener("click", function () {
      if (isNextContentAcsess) {
        for (var i = 0; i < quizItems.length - 1; i++) {
          if (quizItems[i].classList.contains("active")) {
            quizItems[i].classList.remove("active");
            quizItems[i + 1].classList.add("active");
            isNextContentAcsess = false;
            break;
          }
        }
      }
    });
  });
  var isNextContentAcsess = true,
    flag = true;
  var onInputsAutoClick = function (quizNum) {
    document
      .querySelectorAll(".quiz-item--" + quizNum + " input")
      .forEach(function (item) {
        item.addEventListener("click", function (item) {
          setTimeout(() => {
            document
              .querySelector(
                ".quiz-item--" + quizNum + " .quiz-item__next-button"
              )
              .click();
          }, 100);
        });
      });
  };

  onInputsAutoClick("2");
  onInputsAutoClick("3");
  onInputsAutoClick("4");
  onInputsAutoClick("5");
  onInputsAutoClick("6");
  onInputsAutoClick("7");
  onInputsAutoClick("8");
  onInputsAutoClick("9");
  onInputsAutoClick("10");
  onInputsAutoClick("11");

  document.querySelector(".quiz").addEventListener("click", function () {
    var checkContent = function (content) {
      let currentbutton = content.querySelector(".quiz-item__next-button");
      if (content.querySelector("input[type='radio']")) {
        if (content.querySelector("input[type='radio']:checked")) {
          currentbutton.disabled = false;
          isNextContentAcsess = true;
        } else {
          isNextContentAcsess = false;
          currentbutton.disabled = true;
        }
      } else if (content.querySelector("input[type='number']")) {
        if (content.querySelector("input[type='number']").value) {
          currentbutton.disabled = false;
          isNextContentAcsess = true;
        } else {
          isNextContentAcsess = false;
          currentbutton.disabled = true;
        }
      }
    };
    quizItems.forEach(function (item, index) {
      if (item.classList.contains("active")) {
        var CurrentContent = item;
        checkContent(CurrentContent);
        if (index === 10) {
          CurrentContent.querySelector("input").addEventListener(
            "input",
            function () {
              checkContent(CurrentContent);
            }
          );
          CurrentContent.querySelector("input").addEventListener(
            "change",
            function () {
              checkContent(CurrentContent);
            }
          );
        }
        if (index === 11 && flag === true) {
          let loadValue = document.querySelector(".js-load-result"),
            phrases = [
              "Анализируем ваши ответы",
              "Оцениваем ваш потенциал",
              "Составляем программу тренировок",
              "Почти готово",
            ],
            phrasesWrapper = document.querySelector(".js-load-text"),
            loadProgress = document.querySelector(".js-load-progress"),
            counterCurrenteValue = Number(0),
            counterFinaleValue = Number(100),
            counterStart = () => {
              if (counterCurrenteValue < counterFinaleValue) {
                counterCurrenteValue += 1;
                loadValue.innerHTML = counterCurrenteValue + "%";
                loadProgress.style = `width:${counterCurrenteValue}%`;
                if (counterCurrenteValue === 1) {
                  phrasesWrapper.innerHTML = phrases[0];
                }
                if (counterCurrenteValue === 30) {
                  phrasesWrapper.innerHTML = phrases[1];
                }
                if (counterCurrenteValue === 60) {
                  phrasesWrapper.innerHTML = phrases[2];
                }
                if (counterCurrenteValue === 90) {
                  phrasesWrapper.innerHTML = phrases[3];
                }
                setTimeout(() => {
                  counterStart();
                }, 50);
              } else {
                CurrentContent.querySelector("input").click();
                CurrentContent.querySelector(".quiz-item__next-button").click();
              }
            };
          counterStart();
          flag = false;
        }
      }
    });
  });

  document.querySelectorAll(".quiz-item__prev-button").forEach(function (item) {
    item.addEventListener("click", function () {
      quizItems.forEach(function (item, index) {
        if (item.classList.contains("active")) {
          quizItems[index - 1].classList.add("active");
          item.classList.remove("active");
        }
      });
    });
  });
});