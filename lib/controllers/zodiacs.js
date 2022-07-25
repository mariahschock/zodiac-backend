const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');
const router = Router();

router
  .get('/:id', (req, res) => {
    console.log('id param:', req.params.id);
    const zodiac = zodiacs.find((zodiac) => zodiac.id === req.params.id);
    res.json(zodiac);
  })
  .get('/', (req, res) => {
    console.log(zodiacs);
    const ids = zodiacs.map((zodiac) => ({ id: zodiac.id, name: zodiac.name }));
    console.log(ids);
    res.json(ids);
  });

module.exports = router;
