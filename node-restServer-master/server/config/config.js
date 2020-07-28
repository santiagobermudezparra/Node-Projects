// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;



//============================

//   Entorno

//============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



//============================

//   Vencimiento token
// 60 segundos
//60 minutos
//24 horas
//30 dias
//============================
//process.env.CADUCIDAD_TOKEN =  60 * 60 * 24 * 30;
process.env.CADUCIDAD_TOKEN =  '365d';




//============================

//   Seed autenticacion

//============================
process.env.SEED = process.env.SEED  || 'este-es-el-seed-desarrollo';



//============================

//   Base de datos

//============================
let urlDB; 

if( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URI ;
}


//============================

//   Google client Id

//============================

process.env.CLIENT_ID = process.env.CLIENT_ID || '964321764112-td7eud3i9ssn31bp8jml6ips7q67186d.apps.googleusercontent.com';

process.env.URLDB = urlDB;