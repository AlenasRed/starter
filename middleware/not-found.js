const notFound = (req, res) => res.status(404).send('Ruta ne postoji')

module.exports = notFound