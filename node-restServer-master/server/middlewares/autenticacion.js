
const jwt = require('jsonwebtoken');


//===================
//Verificar token
//===================

let verificarToken = (req, res, callback) => {
    let token = req.get('token');
    jwt.verify( token, process.env.SEED, (err, decoded) => {
        if(err){
            return res.status(401).json({
                ok: false,
                err:{
                    message: "token no valido"
                }
            })
        }
        
        req.usuario = decoded.usuario;
        callback();//para que siga ejecutandose el servicio get 
    })

};

//===================
//Verificar Admin_role
//===================

let verificaAdmin_Role = (req, res, callback) => {
    let usuario = req.usuario;
    if(usuario.role === 'ADMIN_ROLE'){
        callback();
    }else{
        return res.json({
            ok: false,
            err:{
                message: "El Usuario no es Admin Role"
            }
        })
    }
}

module.exports = {
    verificarToken,
    verificaAdmin_Role
}