const router = require('express').Router();
const { Background } = require('../../models');

// GET /api/backgrounds
router.get('/', (req, res) => {
    Background.findAll()
        .then(dbBackgroundData => res.json(dbBackgroundData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/backgrounds/1
router.get('/:id', (req, res) => {
    Background.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbBackgroundData => {
        if (!dbBackgroundData) {
            res.status(404).json({ message: 'Please select a valid id' });
            return;
        }
        res.json(dbBackgroundData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/backgrounds
router.post('/', (req, res) => {
    Background.create({
        background_name: req.body.background_name,
        background_color: req.body.background_color
    })
        .then(dbBackgroundData => res.json(dbBackgroundData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/backgrounds/1
router.put('/:id', (req, res) => {
    Background.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbBackgroundData => {
            if (!dbBackgroundData[0]) {
                res.status(404).json({ message: 'Please select a valid background id' });
                return;
            }
            res.json(dbBackgroundData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/backgrounds/1
router.delete('/:id', (req, res) => {
    Background.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbBackgroundData => {
            if (!dbBackgroundData) {
                res.status(404).json({ message: 'Please select a valid background id' });
                return;
            }
            res.json(dbBackgroundData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;