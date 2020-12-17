const { response, request } = require("express");
const { pedidos } = require("../models")
const db = require('../models/index')

const pedidosController = {
    //Create action
    createPedidos: async (req, res) => {
        let productos = []
        if (req.body.estado == null || req.body.total == null || req.body.formaDePago == null || req.body.direccion == null || req.body.productos == null) {
            res.status(400).json({
                isSuccess: false,
                error: "Algunos de los datos solicitados son requeridos"
            });
        }
        try {
            let pedido = await db.pedidos.create({
                estado: req.body.estado, total: req.body.total, formaDePago: req.body.formaDePago, direccion: req.body.direccion
            })
            req.body.productos.forEach(async element => {
                let producto =await db.productos.findOne({
                    where: {
                        id: element.id
                    }
                })
                await pedido.setProductos(producto)
            })
            res.status(201).json();
        }
        catch (error) {
            res.status(500).json({
                isSuccess: false,
                error: error
            })
        }
    },

    //GetPedidos action
    getPedidos: async (req, res) => {
        let pedidos = await db.pedidos.findAll()
        if (pedidos.length > 0)
            res.json(pedidos)
        else
            res.status(204).json()
    },

    //Get by id action
    getById: async (req, res) => {
        let pedido = await db.pedidos.findOne({
            where: {
                id: req.params.id
            }
        })
        if (pedido !== null)
            res.json(pedido)
        else
            res.status(404).json()
    },

    //Update action
    updatePedidos: async (req, res) => {
        let pedido = await db.pedidos.findOne({
            where: {
                id: req.params.id
            }
        })
        if (pedido == null)
            res.status(404).json()
        await pedido.update({
            estado: req.body.estado,
            total: req.body.total,
            formaDePago: req.body.formaDePago,
            direccion: req.body.direccion
        })
        res.status(204).json()
    },

    //Delete action
    deletePedidos: async (req, res) => {
        let pedido = await db.pedidos.findOne({
            where: {
                id: req.params.id
            }
        })
        if (pedido == null)
            res.status(404).json()
        await pedido.destroy()
        res.status(204).json()
    }
}



module.exports = pedidosController

// Detalle de Pedido Particular: 
// Detalle: [Producto, precio, total]
// Estados: nuevo, confirmado, preparando, enviando, entregado
// Forma de Pago: Efectivo
// Direccion:
// Datos de usuario: nombre y apellido, usuario, mail y telefono

//Lista de Pedidos: 7 columnas: ESTADO | HORA | NUMERO (de pedido) | DESCRIPCION (Productos) | PAGO (monto) | USUARIO (usuario) | DIRECCION