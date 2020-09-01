const router = require('express').Router();
const { User, Font, Background, Icon, Card } = require('../../models');
const { createCode } = require('../../utils/code');

// GET /api/cards
router.get('/', (req, res) => {
    Card.findAll()
        .then(dbCardData => res.json(dbCardData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/cards/1
router.get('/:id', (req, res) => {
    Card.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbCardData => {
        if (!dbCardData) {
            res.status(404).json({ message: 'Please select a valid id' });
            return;
        }
        res.json(dbCardData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/cards
router.post('/', (req, res) => {
    Card.create({
        card_code: createCode(),
        card_title: req.body.card_title,
        user_id: req.body.user_id,
        font_id: req.body.font_id,
        background_id: req.body.background_id,
        icon_id: req.body.icon_id,
        // card_code: req.body.card_code,
        // include: [
        //     {
        //         model: User,
        //         attributes: ['user_id']
        //     }
        // ],
        // include: [
        //     {
        //         model: Font,
        //         attributes: ['font_id']
        //     }
        // ],
        // include: [
        //     {
        //         model: Background,
        //         attributes: ['background_id']
        //     }
        // ],
        // include: [
        //     {
        //         model: Icon,
        //         attributes: ['icon_id']
        //     }
        // ],
        show_first_name: req.body.show_first_name,
        show_last_name: req.body.show_last_name,
        show_nickname: req.body.show_nickname,
        show_home_address: req.body.show_home_address,
        show_business_name: req.body.show_business_name,
        show_business_address: req.body.show_business_address,
        show_position: req.body.show_position,
        show_personal_phone: req.body.show_position,
        show_business_phone: req.body.show_business_phone,
        show_business_phone_ext: req.body.show_business_phone_ext,
        show_personal_email: req.body.show_personal_email,
        show_business_email: req.body.show_business_email,
        show_junk_email: req.body.show_junk_email,
        show_business_url: req.body.show_business_url,
        show_linkedin_url: req.body.show_linkedin_url,
        show_instagram_url: req.body.show_instagram_url,
        show_facebook_url: req.body.show_facebook_url,
        show_twitter_url: req.body.show_twitter_url,
        show_bio: req.body.show_bio,
        show_slogan: req.body.show_slogan
    })
        .then(dbCardData => res.json(dbCardData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/cards/1
router.put('/:id', (req, res) => {
    Card.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbCardData => {
            if (!dbCardData[0]) {
                res.status(404).json({ message: 'Please select a valid id' });
                return;
            }
            res.json(dbCardData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/cards/1
router.delete('/:id', (req, res) => {
    Card.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCardData => {
            if (!dbCardData) {
                res.status(404).json({ message: 'Please select a valid id' });
                return;
            }
            res.json(dbCardData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;