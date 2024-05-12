//Declarar variable para definir la clase del bton
var $botonresuelve=$(".js-solve-all-btn"),
$botonnivelfacil = $(".js-generate-board-btn--easy"),
$botonnivelmedio = $(".js-generate-board-btn--medium"),
$botonniveldificil= $(".js-generate-board-btn--hard"),
$botonnivelmuydificil = $(".js-generate-board-btn--very-hard"),
$botonparalimpiarelsudoku = $(".js-clear-board-btn"),
$botonjueganuevo = $(".js-juega"),
$verifica=$(".js-verifica"),

//funcion para pintar por default el board
mySudokuJS = $("#sudoku").sudokuJS({
   });
   
   $botonnivelfacil.on("click", function(){
    mySudokuJS.generateBoard("easy");
   });
$botonnivelmedio.on("click", function(){
 mySudokuJS.generateBoard("medium");
 //alert('hola');
});
$botonniveldificil.on("click", function(){
 mySudokuJS.generateBoard("hard");
 //alert('hola');
});
$botonnivelmuydificil.on("click", function(){
 mySudokuJS.generateBoard("very hard");
 //alert('hola');
});


  // Funcion para detectar el click del bton
  $botonresuelve.on("click", function(){
    mySudokuJS.solveAll();
    
   // $('#myModal').modal('show');


   // alert('hola');
   });
   
   //$botonjueganuevo.on("click", function()
 //  {
      // alert('juega otra vez');
      
     // mySudokuJS.clearBoard();
     // mySudokuJS.generateBoard("easy");
     // console.log('juega otra vez');

   // alert('hola');
   //});

   $verifica.on("click", function() {
      var boardFinished =true
       var boardSize
      for (var i=0; i < boardSize*boardSize; i++){
         if(board[i].val === null)
            { 
               boardFinished=false;

         }
          
      }

      if (boardFinished==true) {
          // El tablero está lleno
          console.log("El tablero está lleno.");
          $('#myModal').modal('show');
      } else {
          // El tablero no está lleno
          console.log("El tablero no está lleno.");
          $('#error').modal('show');
      }
      
      // Abre un modal
     // $('#myModal').modal('show');
      
      // Agrega un mensaje a la consola
     // console.log('juega otra vez');
  });
  