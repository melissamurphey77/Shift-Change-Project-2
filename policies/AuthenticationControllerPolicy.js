const Joi = require('joi')

module.exports = {
    create(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const { error, value } = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Your password must meet the following criteria
                        <br>
                        1. Only letters & numbers
                        <br>
                        2. At least 8 characters
                        <br>
                        3. At most 32 characters`
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Incorrect login information'
                    })
            }
        } else {
            next()

        }

    }
}