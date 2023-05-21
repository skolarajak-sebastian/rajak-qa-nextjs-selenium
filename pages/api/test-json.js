
export default (req, res) => {

    const odgovor = {
            bitnaInformacija: 'Ovo je bitna informacija',
            id: 1,
            queryParam: req.query,
    };

    return res.status(200).json(odgovor);
};