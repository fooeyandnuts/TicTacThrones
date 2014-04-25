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
          if (winner == false) {
          if ($scope.game.board[cellIndex] === " "){

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
          }
     };

     var winner = false;
     $scope.winFunction = function (){
          if (($scope.game.board[0]==="Stark") && ($scope.game.board[1]==="Stark") && ($scope.game.board[2]=="Stark")){
               console.log("Stark wins");
               winner = true;
               }
          else if (($scope.game.board[3]==="Stark") && ($scope.game.board[4]==="Stark") && ($scope.game.board[5]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.game.board[6]==="Stark") && ($scope.game.board[7]==="Stark") && ($scope.game.board[8]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.game.board[0]==="Stark") && ($scope.game.board[3]==="Stark") && ($scope.game.board[6]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.game.board[1]==="Stark") && ($scope.game.board[4]==="Stark") && ($scope.game.board[7]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.game.board[2]==="Stark") && ($scope.game.board[5]==="Stark") && ($scope.game.board[8]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.game.board[0]==="Stark") && ($scope.game.board[4]==="Stark") && ($scope.game.board[8]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.game.board[2]==="Stark") && ($scope.game.board[4]==="Stark") && ($scope.game.board[6]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.game.board[0]==="Lannister") && ($scope.game.board[1]==="Lannister") && ($scope.game.board[2]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if (($scope.game.board[3]==="Lannister") && ($scope.game.board[4]==="Lannister") && ($scope.game.board[5]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if (($scope.game.board[6]==="Lannister") && ($scope.game.board[7]==="Lannister") && ($scope.game.board[8]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if (($scope.game.board[0]==="Lannister") && ($scope.game.board[3]==="Lannister") && ($scope.game.board[6]=="Lannister")){
               console.log("Lannister wins");
          }
          else if (($scope.game.board[1]==="Lannister") && ($scope.game.board[4]==="Lannister") && ($scope.game.board[7]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if (($scope.game.board[2]==="Lannister") && ($scope.game.board[5]==="Lannister") && ($scope.game.board[8]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if (($scope.game.board[0]==="Lannister") && ($scope.game.board[5]==="Lannister") && ($scope.game.board[8]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if(($scope.game.board[2]==="Lannister") && ($scope.game.board[4]==="Lannister") && ($scope.game.board[6]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          $scope.game.$save();
     };
});
     