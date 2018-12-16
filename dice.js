  var activePlayer, roundScore, score;
  score = [0, 0];
  roundScore = 0;
  activePlayer = 1;


  function change_dice() {

      target = parseInt(document.querySelector('.target').value);
      var num = Math.floor(Math.random() * 7) + 1;
      document.querySelector('#dice').src = "img/dice-" + num + ".png";
      if (num != 7) {
          var c = document.querySelector('#current-p' + activePlayer);
          roundScore += num;
          c.textContent = roundScore;
      } else {
          ifJoker();
      }
  }
  $(document).ready(function() {
      $(document).keypress(function(event) {
          if (event.keyCode == 32)
              change_dice();
          else if (event.keyCode == 13)
              calcTotal(($(".target").val()));

      });
      $(".data").slideUp();
      $(".keyboard").click(function() {
          $(".data").slideToggle();
      });

  });

  function ifJoker() {
      roundScore = 0;
      document.querySelector('.p' + activePlayer).style.backgroundColor = "rgba(226, 226, 266, 0.5)";
      (activePlayer == 1) ? activePlayer = 2: activePlayer = 1;
      document.querySelector('.p' + activePlayer).style.backgroundColor = "rgba(226, 226, 266, 1)";

      var c = document.querySelector('#current-p' + activePlayer);
      c.textContent = 0;

  }

  function calcTotal(target) {
      tempscore = score[activePlayer - 1];
      x = tempscore + roundScore;
      if (x == target) {
          document.querySelector('.total-p' + activePlayer).textContent = x;
          document.querySelector('.roll').style.display = 'none';
          document.querySelector('.hold').style.display = 'none';
          document.querySelector('.result').innerHTML = document.getElementById('p' + activePlayer).innerHTML + ' Won';
      } else if (x > target) {
          score[activePlayer - 1] = tempscore;
          ifJoker();
      } else {
          score[activePlayer - 1] = x;
          document.querySelector('.total-p' + activePlayer).textContent = score[activePlayer - 1];
          ifJoker();
      }
  }

  function init() {
      document.querySelector('.dice').style.display = "block";
      document.querySelector('.dis-target').innerHTML = document.querySelector('.dis-target').innerHTML + document.querySelector('.target').value;
      document.querySelector('.form').style.display = "none";
  }

  function show() {

      document.querySelector('.cont').style.marginLeft = "4%";
      document.querySelector('.cont').style.opacity = "1";
  }

  function showIns() {

      x = document.querySelector('.ins');
      x.style.marginLeft = "2%";
  }

  function isNum(x) {
      if (isNaN(x) || x == null)
          alert('Enter number')
  }