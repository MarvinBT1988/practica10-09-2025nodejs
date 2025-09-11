exports.protegido = async (req, res) => {
    try {
        res.status(200).json({nombre:"Solo usuario con token permitido tiene acceso"});
    } catch (error) {
        res.status(500).json({ error: 'endpoint protegido' });
    }
};
exports.libre = async (req, res) => {
    try {
        res.status(200).json({nombre:"cualquiera tiene acceso"});
    } catch (error) {
        res.status(500).json({ error: 'endpoint libre' });
    }
};