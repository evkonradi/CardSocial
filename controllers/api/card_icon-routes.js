const router = require('express').Router();
const { Icon } = require('../../models');

// GET /api/icons
router.get('/', (req, res) => {
    Icon.findAll()
        .then(dbIconData => res.json(dbIconData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/icons/1
router.get('/:id', (req, res) => {
    Icon.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbIconData => {
        if (!dbIconData) {
            res.status(404).json({ message: 'Please select a valid id' });
            return;
        }
        res.json(dbIconData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/icons
router.post('/', (req, res) => {
    Icon.create({
        icon_name: req.body.icon_name,
        icon_path: req.body.icon_path
    })
        .then(dbIconData => res.json(dbIconData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/icons/1
router.put('/:id', (req, res) => {
    Icon.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbIconData => {
            if (!dbIconData[0]) {
                res.status(404).json({ message: 'Please select a valid icon id' });
                return;
            }
            res.json(dbIconData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/icons/1
router.delete('/:id', (req, res) => {
    Icon.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbIconData => {
            if (!dbIconData) {
                res.status(404).json({ message: 'Please select a valid icon id' });
                return;
            }
            res.json(dbIconData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;