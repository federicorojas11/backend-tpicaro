const memorandumRecModel = require("../models/memorandumRecModel");
const error = require("../common/error");
const exceptions = require("../common/exceptions");

const getAllService = async ({ nombre, estado }) => {
  console.log("getAllService - nombre" + nombre + " - estado: " + estado);
  const where = {};
  if (estado) {
    where.estado = estado;
  }
  if (nombre) {
    where.nombre = nombre;
  }
  const memorandums = await memorandumRecModel.findAll({
    attributes: ["id", "message"],
    where: where,
  });
  console.log("memo return : " + memorandums);
  return memorandums;
};

const getById = async (id) => {
  console.log("getById - id: " + id);
  const memorandum = await memorandumRecModel.findByPk(id);
  if (!memorandum) {
    throw new error.AppError(exceptions.exceptionType.productos.notFound);
  }
  console.log("memo return : " + memorandum);
  return memorandum;
};

/*  Esto va en memorandum sent model */
/* const create = async (data) => {
  const { title, message, estado } = data;
  console.log(
    "Crear producto:" + JSON.stringify({ nombre, precio, categoria, estado })
  );
  const producto = await productosModel.create({
    nombre,
    precio,
    categoria,
    estado,
  });

  return producto.id;
}; */

/* const actualizar = async (id, data) => {
  const { nombre, precio, categoria, estado } = data;
  console.log(
    "actualizar producto:" +
      JSON.stringify({ nombre, precio, categoria, estado })
  );
  const producto = await productosModel.update(
    { estado },
    {
      where: {
        id,
      },
    }
  );
  if (!producto) {
    return false;
  }
  return true;
}; */

module.exports = {
  getAllService,
  getById,
  /* create,
  actualizar, */
};