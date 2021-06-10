const { query } = require('express');
const connection = require('../connection/laguConnection');
const Format = require('../tools/format');

module.exports.getLagu = async (req, res) => {
    try {
        console.log("function starting")
        // Query data dari repo
        let lagus = await connection.getLagu(req.query);
        if (!lagus.bindings.length) {
            return res.status(200).json({
                data: [],
                message: "Data tidak ditemukan"
            });
        }

        lagus = lagus.bindings.map((lagudaerah) => Format(lagudaerah));
        if (req.params.id) {
            let lagudaerah = lagus.filter((lagudaerah) => {
                return lagudaerah.id == req.params.id
            });
            res.status(200).json({
                data: lagudaerah[0],
                message: lagudaerah.length ? 'Data lagu berhasil didapatkan' : 'Tidak ada hasil dari pencarian'
            })
        } else {
            res.status(200).json({
                data: lagus,
                message: "Show all lagu"
            })
        }
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
}

module.exports.getAdvancedsearch = async (req, res) => {
    try {
        // Query data dari connection
        let lagus = await connection.getAdvancedsearch(req.query);

        if (!lagus.bindings.length) {
            return res.status(200).json({
                data: [],
                message: "Pencarian data tingkat lanjut tidak ditemukan"
            });
        }

        lagus = lagus.bindings.map((lagudaerah) => Format(lagudaerah));
        res.status(200).json({
            data: lagus,
            message: "Show all lagu"
        })

    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
}