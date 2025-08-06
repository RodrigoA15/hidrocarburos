import { json } from "express";
import  data  from "../../data/data_hidrocarburos.json" with{ type: 'json'}

export const getHidrocarburos = (req, res) => {
  try {
    const response = data;

    if (response.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No se encontraron datos",
      });
    }

    res.status(200).json({
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};
