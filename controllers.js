const { vendedor, venta } = require("./models.js");


// ------- vendedorS

exports.readvendedores = (req, res) =>
    vendedor.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readvendedor = (req, res) =>
    vendedor.findOne({ idvend: req.params.idvend }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deletevendedor = (req, res) =>
    vendedor.findOneAndRemove({ idvend: req.params.idvend }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updatevendedor = (req, res) =>
    vendedor.findOneAndUpdate(
        { idvend: req.params.idvend },
        { $set: { idvend: req.body.idvend,nombre: req.body.nombre, correo: req.body.correo,totalcomision: req.body.totalcomision } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createvendedor = (req, res) =>
    new vendedor({ idvend: req.body.idvend,nombre: req.body.nombre, correo: req.body.correo,totalcomision: req.body.totalcomision })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ ARTÍCULOS

exports.readventas = (req, res) =>
    venta.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readventa = (req, res) =>
    venta.findOne({ idvend: req.body.idvend }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteventa = (req, res) =>
    venta.findOneAndRemove({ idvend: req.body.idvend }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updateventa = (req, res) =>
    venta.findOneAndUpdate(
        { idvend: req.body.idvend },
        { $set: { idvend: req.body.idvend,zona: req.body.zona, fecha: req.body.fecha,valorventa: req.body.valorventa } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createventa = (req, res) =>
    new venta({ idvend: req.body.idvend,zona: req.body.zona, fecha: req.body.fecha,valorventa: req.body.valorventa })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

