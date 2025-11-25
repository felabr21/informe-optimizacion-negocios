// PROYECTO: Optimización de Beneficio Empresarial
// MATERIA: Matemáticas I: Negocios Internacionales

// La función G(x) modela el Beneficio Neto en miles de USD.
// G(x) = -x^3 + 6x^2 + 15x - 10
function calcularBeneficio(x) {
    // Math.pow(x, 3) calcula x elevado a la 3
    return -Math.pow(x, 3) + 6 * Math.pow(x, 2) + 15 * x - 10;
}

// Función que se llama cuando el usuario hace clic en el botón
function calcularYMostrarBeneficio() {
    // 1. Obtener el valor de la inversión (x)
    const inputElement = document.getElementById('inversion');
    const x = parseFloat(inputElement.value);

    // 2. Validar la entrada
    if (isNaN(x) || x < 0) {
        document.getElementById('resultado-calculado').innerHTML = 
            'Por favor, ingresa un valor de inversión positivo y numérico.';
        return;
    }

    // 3. Calcular el beneficio (G)
    const G_calculado = calcularBeneficio(x);

    // 4. Formatear y mostrar el resultado
    // Convertir el resultado (G) a dólares reales (G * 1000)
    const G_dolares = G_calculado * 1000;
    // Formato de moneda, sin decimales para simplificar la lectura en el reporte
    const G_dolares_formato = G_dolares.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    
    // 5. Determinar la situación económica
    let situacion = '';
    
    if (x === 5) {
        situacion = '¡Óptimo! Este es el punto de <strong>BENEFICIO MÁXIMO</strong> ($5,000 USD).';
    } else if (x > 0 && x < 5) {
        situacion = '¡Aumentando! La inversión está en el intervalo de **crecimiento**; sugiere <strong>INVERTIR MÁS</strong>.';
    } else if (x > 5) {
        situacion = '¡Disminuyendo! La inversión está en el intervalo de **decrecimiento**; sugiere <strong>DETENER LA INVERSIÓN</strong> adicional.';
    } else { // x=0
        situacion = 'Pérdida por costos fijos sin inversión en publicidad.';
    }

    // Generar el HTML de salida
    const resultadoHTML = `
        <p>Con una Inversión de <strong>$${(x * 1000).toLocaleString('en-US')} USD</strong> (x=${x} miles):</p>
        <p>El Beneficio Neto es de: <strong>$${G_dolares_formato} USD</strong></p>
        <p style="font-size:0.9em; margin-top:10px;">Situación: ${situacion}</p>
    `;

    document.getElementById('resultado-calculado').innerHTML = resultadoHTML;
}

// Llama a la función al cargar la página para mostrar el cálculo inicial con el valor por defecto (5)
document.addEventListener('DOMContentLoaded', calcularYMostrarBeneficio);