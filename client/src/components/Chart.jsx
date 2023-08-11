import React, { useEffect, useRef } from 'react';

const Chart = ({ gananciasUltimos7Dias }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    drawChart();
  }, [gananciasUltimos7Dias]);

  const drawChart = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Tamaño del gráfico
    const chartWidth = canvas.width - 40;
    const chartHeight = canvas.height - 40;

    // Número máximo de ganancias para calcular la escala en el eje Y
    const maxGanancias = Math.max(...gananciasUltimos7Dias);

    // Escala en el eje Y
    const scaleY = chartHeight / maxGanancias;

    // Ancho de cada barra en el gráfico
    const barWidth = chartWidth / gananciasUltimos7Dias.length;

    // Dibujar las barras en el gráfico
    gananciasUltimos7Dias.forEach((ganancia, index) => {
      const x = 20 + index * barWidth;
      const barHeight = ganancia * scaleY;
      const y = chartHeight - barHeight + 20;

      ctx.fillStyle = 'rgba(245, 158, 11, 0.7)';
      ctx.fillRect(x, y, barWidth - 10, barHeight);
    });

    // Dibujar la línea de avance
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(30, 41, 59)';
    ctx.lineWidth = 2;

    gananciasUltimos7Dias.forEach((ganancia, index) => {
      const x = 20 + index * barWidth + barWidth / 2;
      const y = chartHeight - ganancia * scaleY + 20;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();
  };

  return <canvas className='max-h-80' ref={canvasRef} width="400" height="200" />;
};

export default Chart;
