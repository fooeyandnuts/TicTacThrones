var gameApp = angular.module('gameApp', []);
gameApp.controller('GameController', function($scope){
	$scope.board = [" "," "," "," "," "," "," "," "," "];
	$scope.watchMoves = [];
	var counter = 0;
	var player;

// winNum = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];

     $scope.clicker = function (cellIndex){
          if ($scope.board[cellIndex] === " "){
               if (counter % 2 === 0){
                         $scope.board[cellIndex]= "player1";
                         // player = "house1";
                         console.log($scope.board[cellIndex]);
                    }

               else {
                    $scope.board[cellIndex]= "player2";
                    // player = "house2";
                    console.log($scope.board[cellIndex]);
                    }
                             
                    counter++;
                    console.log(player);
               }
          $scope.winFunction();
          };
     $scope.winFunction = function (){
          if (($scope.board[0]==="player1") && ($scope.board[1]==="player1") && ($scope.board[2]=="player1")){
               console.log("player 1 wins");
               }
          else if (($scope.board[3]==="player1") && ($scope.board[4]==="player1") && ($scope.board[5]=="player1")){
               console.log("player 1 wins");
          }
          else if (($scope.board[6]==="player1") && ($scope.board[7]==="player1") && ($scope.board[8]=="player1")){
               console.log("player 1 wins");
          }
          else if (($scope.board[0]==="player1") && ($scope.board[3]==="player1") && ($scope.board[6]=="player1")){
               console.log("player 1 wins");
          }
          else if (($scope.board[1]==="player1") && ($scope.board[4]==="player1") && ($scope.board[7]=="player1")){
               console.log("player 1 wins");
          }
          else if (($scope.board[2]==="player1") && ($scope.board[5]==="player1") && ($scope.board[8]=="player1")){
               console.log("player 1 wins");
          }
          else if (($scope.board[0]==="player1") && ($scope.board[4]==="player1") && ($scope.board[8]=="player1")){
               console.log("player 1 wins");
          }
          else if (($scope.board[2]==="player1") && ($scope.board[4]==="player1") && ($scope.board[6]=="player1")){
               console.log("player 1 wins");
          }
          else if (($scope.board[0]==="player2") && ($scope.board[1]==="player2") && ($scope.board[2]=="player2")){
               console.log("player 2 wins");
          }
          else if (($scope.board[3]==="player2") && ($scope.board[4]==="player2") && ($scope.board[5]=="player2")){
               console.log("player 2 wins");
          }
          else if (($scope.board[6]==="player2") && ($scope.board[7]==="player2") && ($scope.board[8]=="player2")){
               console.log("player 2 wins");
          }
          else if (($scope.board[0]==="player2") && ($scope.board[3]==="player2") && ($scope.board[6]=="player2")){
               console.log("player 2 wins");
          }
          else if (($scope.board[1]==="player1") && ($scope.board[4]==="player1") && ($scope.board[7]=="player1")){
               console.log("player 1 wins");
          }
          else if (($scope.board[2]==="player2") && ($scope.board[5]==="player2") && ($scope.board[8]=="player2")){
               console.log("player 2 wins");
          }
          else if (($scope.board[0]==="player2") && ($scope.board[5]==="player2") && ($scope.board[8]=="player2")){
               console.log("player 2 wins");
          }
          else if(($scope.board[2]==="player2") && ($scope.board[5]==="player2") && ($scope.board[6]=="player2")){
               console.log("player 2 wins");
          }
     };
     //STOP THE MADNESS!!
          
         
          // for (var i = 0; i < 8; i++){
          //      console.log(winNum[i]);
          //      //this compares the index WITHIN the array winNum and checks to see whether they are all equal to each other with regards to the board. So -- if [0 == 1 == 2], this translates as being part of the array winNum.
          //      if ($scope.board[winNum[i][0]] == $scope.board[winNum[i][1]] && $scope.board[winNum[i][1]] == $scope.board[winNum[i][2]])
          //      //this checks to see if the board is currently not empty
          //      if($scope.board[winNum[i][0]] != " ") {
          //           alert('what?');
          // }
});
     