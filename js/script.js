var playerNum;
var gameApp = angular.module('gameApp', ["firebase"]);
gameApp.controller('GameController', function($scope, $firebase){
	var player;
     var playerNum = null;
     var ticTacRef = new Firebase("https://tictacthrones.firebaseio.com/games");
     var lastGame;
     // Ask for all existing game info from firebase
     ticTacRef.once('value', function(gamesSnapshot) {
          // get the actual games data
       var games = gamesSnapshot.val();
          if(games == null)
          {
               // No games at all, so make a new game -- As if we're Areg
               lastGame = ticTacRef.push( {waiting: true} );
               playerNum = 1;
          }
          else // I do have at least one game out there...
          {
            var keys = Object.keys(games);
            var lastGameKey = keys[ keys.length - 1 ];
            var lastGame = games[ lastGameKey ];
               console.log("This person's game: " + lastGameKey);
            if(lastGame.waiting)
            {
               // Currently someone is waiting -- Areg is there and we're Rocky
               // Grab from Firebase its last game object
               lastGame = ticTacRef.child(lastGameKey);
               // Set a new game on this
               lastGame.set( {counter:0, waiting:false, playerTurn: 0, won: false, board: [" "," "," "," "," "," "," "," "," "]} );
               playerNum = 2;
            }
            else
            {
               // Make a new game -- As if we're Areg
               lastGame = ticTacRef.push( {waiting: true} );
               playerNum = 1;
            }
          }
          // Attach the last game to what we're up to
       $scope.game = $firebase(lastGame);
     });



     $scope.clicker = function (cellIndex){
          if ($scope.game.board[cellIndex] == " " && myTurn()) {
          // if ($scope.game.won == false) {
          // if ($scope.game.board[cellIndex] === " "){

               if ($scope.game.counter % 2 === 0){
                         $scope.game.board[cellIndex]= "Stark";
                         console.log($scope.game.board[cellIndex]);
                    }

               else {
                    $scope.game.board[cellIndex]= "Lannister";
                    console.log($scope.game.board[cellIndex]);
                    }
                             
                    $scope.game.counter++;
                    console.log(player);
               }

          $scope.winFunction();
          $scope.game.$save();
     };

     function myTurn(){
          // $scope.game.counter;
          //      playerNum;
               if((playerNum == 1 && $scope.game.counter %2 == 0)||(playerNum == 2 && $scope.game.counter %2 != 0)) {
                         return true;
                    }
                    else {
                         return false;
                    }
     }

     $scope.winFunction = function (){
          // if ($scope.game.board[[0,1,2] || [3,4,5] || [6,7,8] || [0,3,6] || [1,4,7] || [2,5,8] || [0,5,8] || [2,4,6]])==="Stark"){
          //      console.log("Stark wins");
          //      $scope.game.won = true;
          //      }
          // else ($scope.game.board[[0,1,2] || [3,4,5] || [6,7,8] || [0,3,6] || [1,4,7] || [2,5,8] || [0,5,8] || [2,4,6]])==="Lannister"){
          //      console.log("Lannister wins");
          //      $scope.game.won = true;
          //      }
          if (($scope.game.board[0]==="Stark") && ($scope.game.board[1]==="Stark") && ($scope.game.board[2]=="Stark")){
               console.log("Stark wins");
               $scope.game.won = true;
               $scope.gameEnd();
               }
          else if (($scope.game.board[3]==="Stark") && ($scope.game.board[4]==="Stark") && ($scope.game.board[5]=="Stark")){
               alert("Stark wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[6]==="Stark") && ($scope.game.board[7]==="Stark") && ($scope.game.board[8]=="Stark")){
               alert("Stark wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[0]==="Stark") && ($scope.game.board[3]==="Stark") && ($scope.game.board[6]=="Stark")){
               alert("Stark wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[1]==="Stark") && ($scope.game.board[4]==="Stark") && ($scope.game.board[7]=="Stark")){
               alert("Stark wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[2]==="Stark") && ($scope.game.board[5]==="Stark") && ($scope.game.board[8]=="Stark")){
               alert("Stark wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[0]==="Stark") && ($scope.game.board[4]==="Stark") && ($scope.game.board[8]=="Stark")){
               alert("Stark wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[2]==="Stark") && ($scope.game.board[4]==="Stark") && ($scope.game.board[6]=="Stark")){
               alert("Stark wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[0]==="Lannister") && ($scope.game.board[1]==="Lannister") && ($scope.game.board[2]=="Lannister")){
               alert("Lannister wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[3]==="Lannister") && ($scope.game.board[4]==="Lannister") && ($scope.game.board[5]=="Lannister")){
               alert("Lannister wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[6]==="Lannister") && ($scope.game.board[7]==="Lannister") && ($scope.game.board[8]=="Lannister")){
               alert("Lannister wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[0]==="Lannister") && ($scope.game.board[3]==="Lannister") && ($scope.game.board[6]=="Lannister")){
               alert("Lannister wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[1]==="Lannister") && ($scope.game.board[4]==="Lannister") && ($scope.game.board[7]=="Lannister")){
               alert("Lannister wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[2]==="Lannister") && ($scope.game.board[5]==="Lannister") && ($scope.game.board[8]=="Lannister")){
               alert("Lannister wins");
               $scope.game.won = true;
          }
          else if (($scope.game.board[0]==="Lannister") && ($scope.game.board[5]==="Lannister") && ($scope.game.board[8]=="Lannister")){
               alert("Lannister wins");
               $scope.game.won = true;
          }
          else if(($scope.game.board[2]==="Lannister") && ($scope.game.board[4]==="Lannister") && ($scope.game.board[6]=="Lannister")){
               alert("Lannister wins");
               $scope.game.won = true;
          }
          
          $scope.game.$save();

     };

     function gameEnd () {
          if ($scope.game.won == true)
          return;
     }
     // $scope.gameReset = function(){
     //      if ($scope.game.won == true) {
     //           $scope.game.counter=0;
     //           $scope.game.waiting=true;
     //           $scope.game.playerTurn=0;
     //           $scope.game.won=false;

     //           //or set games == null?
     //      }
     // };
});

//winner: [player1: 0, player2: 0]