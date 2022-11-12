const mongoose = require('mongoose');

const vendedor = mongoose.model('vendedor',
  new mongoose.Schema({ idvend: Number,nombre: String, correo: String,totalcomision: Number, })
);

const venta = mongoose.model('venta',
  new mongoose.Schema({ idvend: Number,zona: String, fecha: Date,valorventa: Number, })
);

module.exports = {
  vendedor: vendedor,
  venta: venta
}

// Otra forma más corta:
// module.exports = {
//     vendedor,
//     venta
// }
