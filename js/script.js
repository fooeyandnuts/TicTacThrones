var gameApp = angular.module('gameApp', ["firebase"]);
//var blankBoard = [" "," "," "," "," "," "," "," "," "];
//add this to remove from lastGame.set
gameApp.controller('GameController', function($scope, $firebase){
	$scope.board = [" "," "," "," "," "," "," "," "," "];
	var counter = 0; //will this need to be added to the firebase gameset
	var player;

//change $scope.board to $scope.game.board!


// winNum = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];

     $scope.clicker = function (cellIndex){
          if (winner == false) {
          if ($scope.board[cellIndex] === " "){

               if (counter % 2 === 0){
                         $scope.board[cellIndex]= "Stark";
                         console.log($scope.board[cellIndex]);
                    }

               else {
                    $scope.board[cellIndex]= "Lannister";
                    console.log($scope.board[cellIndex]);
                    }
                             
                    counter++;
                    console.log(player);
               }

          $scope.winFunction();
          //$scope.game.$save(); totes necessary to save data!
          }
     };

     var winner = false;
     $scope.winFunction = function (){
          if (($scope.board[0]==="Stark") && ($scope.board[1]==="Stark") && ($scope.board[2]=="Stark")){
               console.log("Stark wins");
               winner = true;
               }
          else if (($scope.board[3]==="Stark") && ($scope.board[4]==="Stark") && ($scope.board[5]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.board[6]==="Stark") && ($scope.board[7]==="Stark") && ($scope.board[8]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.board[0]==="Stark") && ($scope.board[3]==="Stark") && ($scope.board[6]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.board[1]==="Stark") && ($scope.board[4]==="Stark") && ($scope.board[7]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.board[2]==="Stark") && ($scope.board[5]==="Stark") && ($scope.board[8]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.board[0]==="Stark") && ($scope.board[4]==="Stark") && ($scope.board[8]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.board[2]==="Stark") && ($scope.board[4]==="Stark") && ($scope.board[6]=="Stark")){
               console.log("Stark wins");
               winner = true;
          }
          else if (($scope.board[0]==="Lannister") && ($scope.board[1]==="Lannister") && ($scope.board[2]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if (($scope.board[3]==="Lannister") && ($scope.board[4]==="Lannister") && ($scope.board[5]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if (($scope.board[6]==="Lannister") && ($scope.board[7]==="Lannister") && ($scope.board[8]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if (($scope.board[0]==="Lannister") && ($scope.board[3]==="Lannister") && ($scope.board[6]=="Lannister")){
               console.log("Lannister wins");
          }
          else if (($scope.board[1]==="Lannister") && ($scope.board[4]==="Lannister") && ($scope.board[7]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if (($scope.board[2]==="Lannister") && ($scope.board[5]==="Lannister") && ($scope.board[8]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if (($scope.board[0]==="Lannister") && ($scope.board[5]==="Lannister") && ($scope.board[8]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
          else if(($scope.board[2]==="Lannister") && ($scope.board[5]==="Lannister") && ($scope.board[6]=="Lannister")){
               console.log("Lannister wins");
               winner = true;
          }
     };

});
     