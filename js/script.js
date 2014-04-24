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
                         $scope.board[cellIndex]= "Stark";
                         // player = "house1";
                         console.log($scope.board[cellIndex]);
                    }

               else {
                    $scope.board[cellIndex]= "Lannister";
                    // player = "house2";
                    console.log($scope.board[cellIndex]);
                    }
                             
                    counter++;
                    console.log(player);
               }
          $scope.winFunction();
          };
     $scope.winFunction = function (){
          if (($scope.board[0]==="Stark") && ($scope.board[1]==="Stark") && ($scope.board[2]=="Stark")){
               console.log("Stark wins");
               return;
               }
          else if (($scope.board[3]==="Stark") && ($scope.board[4]==="Stark") && ($scope.board[5]=="Stark")){
               console.log("Stark wins");
          }
          else if (($scope.board[6]==="Stark") && ($scope.board[7]==="Stark") && ($scope.board[8]=="Stark")){
               console.log("Stark wins");
          }
          else if (($scope.board[0]==="Stark") && ($scope.board[3]==="Stark") && ($scope.board[6]=="Stark")){
               console.log("Stark wins");
          }
          else if (($scope.board[1]==="Stark") && ($scope.board[4]==="Stark") && ($scope.board[7]=="Stark")){
               console.log("Stark wins");
          }
          else if (($scope.board[2]==="Stark") && ($scope.board[5]==="Stark") && ($scope.board[8]=="Stark")){
               console.log("Stark wins");
          }
          else if (($scope.board[0]==="Stark") && ($scope.board[4]==="Stark") && ($scope.board[8]=="Stark")){
               console.log("Stark wins");
          }
          else if (($scope.board[2]==="Stark") && ($scope.board[4]==="Stark") && ($scope.board[6]=="Stark")){
               console.log("Stark wins");
          }
          else if (($scope.board[0]==="Lannister") && ($scope.board[1]==="Lannister") && ($scope.board[2]=="Lannister")){
               console.log("Lannister wins");
          }
          else if (($scope.board[3]==="Lannister") && ($scope.board[4]==="Lannister") && ($scope.board[5]=="Lannister")){
               console.log("Lannister wins");
          }
          else if (($scope.board[6]==="Lannister") && ($scope.board[7]==="Lannister") && ($scope.board[8]=="Lannister")){
               console.log("Lannister wins");
          }
          else if (($scope.board[0]==="Lannister") && ($scope.board[3]==="Lannister") && ($scope.board[6]=="Lannister")){
               console.log("Lannister wins");
          }
          else if (($scope.board[1]==="Lannister") && ($scope.board[4]==="Lannister") && ($scope.board[7]=="Lannister")){
               console.log("Lannister wins");
          }
          else if (($scope.board[2]==="Lannister") && ($scope.board[5]==="Lannister") && ($scope.board[8]=="Lannister")){
               console.log("Lannister wins");
          }
          else if (($scope.board[0]==="Lannister") && ($scope.board[5]==="Lannister") && ($scope.board[8]=="Lannister")){
               console.log("Lannister wins");
          }
          else if(($scope.board[2]==="Lannister") && ($scope.board[5]==="Lannister") && ($scope.board[6]=="Lannister")){
               console.log("Lannister wins");
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
     