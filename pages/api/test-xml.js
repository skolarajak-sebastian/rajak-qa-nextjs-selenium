var builder = require('xmlbuilder');

export default (req, res) => {

    
    const odgovor = {
        root: {
            odgovor: {
                bitnaInformacija: 'Ovo je bitna informacija',
                id: 1,
                queryParam: req.query,
            }
        }
    };

    var xml = builder.create(odgovor).end({ pretty: true});

    return res.status(200).send(xml);
};