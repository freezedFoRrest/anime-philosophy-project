document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('capacity-form');
  const output = document.getElementById('algorithm-result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const edge = Number(document.getElementById('cube-edge').value);
    const height = Number(document.getElementById('cylinder-height').value);
    const radius = Number(document.getElementById('cylinder-radius').value);
    const liquid = Number(document.getElementById('liquid-volume').value);

    if (![edge, height, radius, liquid].every(Number.isFinite) || edge <= 0 || height <= 0 || radius <= 0 || liquid < 0) {
      output.innerText = 'Ошибка: размеры ёмкостей должны быть положительными, а объём жидкости — неотрицательным.';
      return;
    }

    const cubeCapacity = edge ** 3;
    const cylinderCapacity = Math.PI * radius ** 2 * height;
    

    let conclusion;
    if (cubeCapacity + cylinderCapacity <= liquid) conclusion = 'Можно заполнить обе емкости';
    else if (cubeCapacity <= liquid && cylinderCapacity < liquid) conclusion = 'Можно заполнить обе емкости, но только по отдельности';
    else if (cubeCapacity <= liquid) conclusion = 'Можно заполнить только первую емкость.';
    else if (cylinderCapacity <= liquid) conclusion = 'Можно заполнить только вторую емкость.';
    else conclusion = 'Нельзя заполнить ни одну их емкостей.';

    output.innerText = `Вместимость куба: ${cubeCapacity.toFixed(2)}. Вместимость цилиндра: ${cylinderCapacity.toFixed(2)}. ${conclusion}`;
  });
});
