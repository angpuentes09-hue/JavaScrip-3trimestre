const manejadorErrores = (err, req, res, next) => {
    const codigoEstado = err.codigoEstado || 500;
    const mensaje = err.mensaje || 'Error inesperado !!';
    console.error(`[Error] ${new Date().toISOString()} - ${codigoEstado} - ${mensaje}`);
    //validar informacion 
    if(err.stack){
        console.error(err.stack);
    }
    //respuesta en json 
    res.json({
        error: "ERROR", codigoEstado, mensaje, 
        //dependiendo si estamos en desarrolo o produccion 
        ...process.env.NODE_ENV === 'development' ? { stack: err.stack } : {}
    })
}

module.exports = manejadorErrores;