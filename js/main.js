const canvasRectangulo                = document.getElementById("canvasRectangulo");
const canvasTriangulo                 = document.getElementById("canvasTriangulo");
const canvasMover_pluma               = document.getElementById("canvasMover_pluma");
const canvasLineas                    = document.getElementById("canvasLineas");
const canvasCirculo                   = document.getElementById("canvasCirculo");
const canvasCurvas_cuadraticas_Bezier = document.getElementById("canvasCurvas_cuadraticas_Bezier");
const canvasCurvas_cubicas_Bezier     = document.getElementById("canvasCurvas_cubicas_Bezier");
const canvasCombinaciones             = document.getElementById("canvasCombinaciones");
const canvasPath2D                    = document.getElementById("canvasPath2D");

function drawRectangulo(){
    const ctx = canvasRectangulo.getContext("2d")
    if(canvasRectangulo.getContext){
        ctx.fillStyle = "green";
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}

function drawTriangulo() {
    const ctx = canvasTriangulo.getContext("2d")
    if (canvasTriangulo.getContext) {
      ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.moveTo(25, 100);
      ctx.lineTo(125, 100);
      ctx.lineTo(75, 25);
      ctx.fill();
    }
  }
  
function drawMover_pluma() {
    const ctx = canvasMover_pluma.getContext("2d");
  if (canvasMover_pluma.getContext) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "pink";
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
    ctx.stroke();
  }
}

function drawLineas() {
    const ctx = canvasLineas.getContext("2d");
    if (canvasLineas.getContext) {
      // Triángulo relleno
      ctx.fillStyle = "yellow";
    
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(25, 25);
      ctx.lineTo(105, 25);
      ctx.lineTo(27, 105);
      ctx.lineTo(26, 25);
      ctx.strokeStyle = "orange";
      ctx.stroke();
      ctx.fill();
  
      // Triángulo contorneado
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(125, 125);
      ctx.lineTo(125, 45);
      ctx.lineTo(45, 125);
      ctx.closePath();
      ctx.stroke();
    }
  }

  function drawCirculo() {
    const ctx = canvasCirculo.getContext("2d");
    if (canvasCirculo.getContext) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.lineWidth = 2;
          ctx.strokeStyle = "orange";
          ctx.beginPath();
          const x = 25 + j * 50; // Coordenada x
          const y = 25 + i * 50; // Coordenada y
          const radius = 20; // Radio del Arco
          const startAngle = 0; // Punto inicial del Círculo
          const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
          const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario
  
          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  
          if (i > 1) {
            ctx.fillStyle = "yellow";
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
      }
    }
  }
  
  function drawCurvas_cuadraticas_Bezier() {
    const ctx = canvasCurvas_cuadraticas_Bezier.getContext("2d");
    if (canvasCurvas_cuadraticas_Bezier.getContext) {
      // Ejemplo de curvas cuadráticas
      ctx.strokeStyle = "brown";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(75, 25);
      ctx.quadraticCurveTo(25, 25, 25, 62.5);
      ctx.quadraticCurveTo(25, 100, 50, 100);
      ctx.quadraticCurveTo(50, 120, 30, 125);
      ctx.quadraticCurveTo(60, 120, 65, 100);
      ctx.quadraticCurveTo(125, 100, 125, 62.5);
      ctx.quadraticCurveTo(125, 25, 75, 25);
      ctx.stroke();
    }
  }

  function drawCurvas_cubicas_Bezier() {
    const ctx = canvasCurvas_cubicas_Bezier.getContext("2d");
    if (canvasCurvas_cubicas_Bezier.getContext) {
      // Ejemplo de curvas cúbicas
      ctx.fillStyle = "red";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(75, 40);
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
      ctx.fill();
    }
  }
  
  function drawCombinaciones() {
    const canvasCombinaciones = document.getElementById("canvasCombinaciones");
    const ctx = canvasCombinaciones.getContext("2d");
    
    if (canvasCombinaciones.getContext) {
      ctx.lineWidth = 2;
      roundedRect(ctx, 5, 5, 140, 140, 15); //cuadrado externo
      roundedRect(ctx, 10, 10, 130, 130, 9); // cuadrado interno
      roundedRect(ctx, 20, 30, 45, 30, 10); // rectangulo esquina superior izquierda
      roundedRect(ctx, 25, 92, 30, 30, 6); // rectangulo esquina inferior izquierda
      roundedRect(ctx, 90, 30, 40, 40, 10); // rectangulo esquina superior derecha
      roundedRect(ctx, 100, 90, 25, 45, 10); // rectangulo esquina inferior derecha
  
      ctx.beginPath();
      ctx.fillStyle = "yellow";
      ctx.arc(25, 20, 8, Math.PI / 7, -Math.PI / 7, false); //pacman
      ctx.lineTo(14, 20); //margen
      ctx.fill();
  
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = "black";
        ctx.fillRect(40 + i * 12, 20, 2, 2); // linea punteada superior (margen, separacion puntos, altura, largo punto, alto puntos)
      }
  
      for (let i = 0; i < 9; i++) { // cantidad de puntos
        ctx.fillRect(75, 35 + i * 12, 2, 2); // linea punteada columna (margen, altura, separacion puntos,  )
      }
  
      for (let i = 0; i < 10; i++) { //cantidad de puntos
        ctx.fillRect(20 + i * 12, 80, 2, 2); // linea punteada inferior (margen, separacion puntos, altura, largo punto, alto puntos)
      }
  
      ctx.beginPath(); // fantasma
      ctx.fillStyle = "blue";
      ctx.moveTo(60, 105); //primer punta punta 
      ctx.lineTo(60, 90); //curva izquierda 
      ctx.bezierCurveTo(60, 83, 65, 78, 70, 78);
      ctx.bezierCurveTo(75, 78, 80, 83, 80, 90);
      ctx.lineTo(80, 105);
      ctx.lineTo(76, 100);
      ctx.lineTo(72, 105);
      ctx.lineTo(68, 100);
      ctx.lineTo(64, 105);
      ctx.lineTo(60, 100);
      ctx.lineTo(56, 105);
      ctx.fill();
  
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(66, 86);
      ctx.bezierCurveTo(64, 86, 63, 88, 63, 90);
      ctx.bezierCurveTo(63, 92, 64, 94, 66, 94);
      ctx.bezierCurveTo(68, 94, 69, 92, 69, 90);
      ctx.bezierCurveTo(69, 88, 68, 86, 66, 86);
      ctx.moveTo(72, 86);
      ctx.bezierCurveTo(70, 86, 69, 88, 69, 90);
      ctx.bezierCurveTo(69, 92, 70, 94, 72, 94);
      ctx.bezierCurveTo(74, 94, 75, 92, 75, 90);
      ctx.bezierCurveTo(75, 88, 74, 86, 72, 86);
      ctx.fill();
  
      ctx.fillStyle = "black"; // ojos fantasma 
      ctx.beginPath();
      ctx.arc(70, 90, 2, 0, Math.PI * 2, true);
      ctx.fill();
  
      ctx.beginPath();
      ctx.arc(64, 90, 2, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
  
  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }
  
  function drawPath2D() {
    const ctx = canvasPath2D.getContext("2d");
    if (canvasPath2D.getContext) {

      const rectangle = new Path2D();
      rectangle.rect(10, 10, 50, 50);
  
      const circle = new Path2D();
      circle.arc(100, 35, 25, 0, 2 * Math.PI);
  
      ctx.lineWidth = 2;
      ctx.strokeStyle = "gray";
      ctx.stroke(rectangle);
      ctx.fillStyle = "gray";
      ctx.fill(circle);
    }
  }
  

drawRectangulo();
drawTriangulo();
drawMover_pluma();
drawLineas();
drawCirculo();
drawCurvas_cuadraticas_Bezier();
drawCurvas_cubicas_Bezier();
drawCombinaciones();
drawPath2D();
