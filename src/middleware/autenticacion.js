const jswtoken = require("jsonwebtoken");
const autenticacion = (req, res, next) => {
    //requerir o capturar 
    const token = req.header("autenticar")?.split(" ")[1]
    if (!token) {
        res.status(401).json({ mensaje: "Acceso no autorizado, no hay token" });
    }

    //verificar con nuestra clave secreta
    jswtoken.verify(token, process.env.JWT_SECRET, (error, usuario) => {
        if (error) {
            res.status(403).json({ Error: "Token inválido" })
    }
    req.usuario = usuario;
    next();
    })
}
    module.exports = autenticacion