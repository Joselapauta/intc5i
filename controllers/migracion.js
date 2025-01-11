import config from './../config.js'
import detencion_migracion from '../models/migracion.js'
import { json } from 'sequelize'

export const formmigracion = (req, res) => {

    try {


        res.render("migracion/migracion")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }


}

export const postmigracion = async (req, res) => {
    try {
        const bodydata = req.body;

        const postdata = await detencion_migracion.create({

            amenaza: bodydata.amenaza,
            fecha: bodydata.fecha,
            tipoeventualidad: bodydata.tipoEventualida,
            pais_id: bodydata.paisprocedencia,
            provincia_id: bodydata.provincia,
            institucion_id: bodydata.institucion,
            comandoconjunto_id: bodydata.comandoConjunto,
            cantidad: bodydata.cantidad,
            nacionalidad_id: bodydata.nacionalidad
        })
        return res.status(200).json({
            status: 'success',
            message: 'información agregada correctamente',
            data: postdata
        })
    }
    catch (error) {

        return res.status(500), json({
            status: 'error',
            message: 'Error al registrar la información',
        })

    }

}