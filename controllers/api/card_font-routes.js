const router = require('express').Router();
const { Font } = require('../../models');

// GET /api/fonts
router.get('/', (req, res) => {
    Font.findAll()
        .then(dbFontData => res.json(dbFontData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/font/1
router.get('/:id', (req, res) => {
    Font.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbFontData => {
        if (!dbFontData) {
            res.status(404).json({ message: 'Please select a valid id' });
            return;
        }
        res.json(dbFontData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/font
router.post('/', (req, res) => {
    Font.create({
        font_name: req.body.font_name,
        font_size: req.body.font_size,
        font_decoration: req.body.font_decoration
    })
        .then(dbFontData => res.json(dbFontData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/fonts/1
router.put('/:id', (req, res) => {
    Font.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbFontData => {
            if (!dbFontData[0]) {
                res.status(404).json({ message: 'Please select a valid font id' });
                return;
            }
            res.json(dbFontData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/fonts/1
router.delete('/:id', (req, res) => {
    Font.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbFontData => {
            if (!dbFontData) {
                res.status(404).json({ message: 'Please select a valid font id' });
                return;
            }
            res.json(dbFontData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;